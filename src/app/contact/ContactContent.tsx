'use client';

import { useState, useEffect } from 'react';
import { FiCheck, FiAlertCircle, FiSend, FiUsers, FiClock, FiShield, FiFastForward } from 'react-icons/fi';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectOption } from '@/components/ui/select';
import { Form, FormField } from '@/components/ui/form';
import { FileInput } from '@/components/ui/file-input';
import { motion } from 'framer-motion';

// Form validation schema - conditionally use FileList for client-side only
const formSchema = z.object({
  nameOrCompany: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your project'),
  attachment: typeof FileList !== 'undefined'
    ? z.instanceof(FileList).optional()
    : z.any().optional(), // Fallback for server-side rendering
  // Honeypot field
  website: z.string().max(0, 'This field should be empty')
});

type FormData = z.infer<typeof formSchema>;

const SERVICES = [
  'AI Product Development',
  'SaaS MVP Development',
  'UX Design & Conversion Optimisation',
  'Full-Stack Web Development',
  'Performance Engineering',
  'Headless E-commerce & CMS',
  'General Inquiry'
];

const BUDGET_RANGES = [
  'Select a range',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+'
];

const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function ContactContent() {
  const [isBudgetVisible, setIsBudgetVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOrCompany: '',
      email: '',
      service: '',
      budget: '',
      message: '',
      website: '' // Honeypot field
    }
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    clearErrors,
    setValue
  } = methods;

  const selectedService = watch('service');

  // Show budget field for project-related services
  useEffect(() => {
    const isProjectService = [
      'AI Product Development',
      'SaaS MVP Development',
      'UX Design & Conversion Optimisation',
      'Full-Stack Web Development',
      'Headless E-commerce & CMS'
    ].includes(selectedService);

    setIsBudgetVisible(isProjectService);
    if (!isProjectService) {
      // Reset budget when service changes to non-project type
      setValue('budget', '');
    }
  }, [selectedService, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();

      // Append all form data
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'attachment' && value && value[0]) {
          formData.append(key, value[0]);
        } else if (value !== undefined && value !== null && key !== 'website') {
          formData.append(key, String(value));
        }
      });

      // Call the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameOrCompany: data.nameOrCompany,
          email: data.email,
          service: data.service,
          budget: data.budget,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      // On success
      reset();
      setSelectedFile(null);

    } catch (error) {
      console.error('Form submission error:', error);
      setError('root', {
        type: 'manual',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again or email us directly at hello@mindscraft.dev'
      });
    }
  };

  const handleFileChange = (file: File | null) => {
    setFileError('');

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Validate file type
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setFileError('Please upload a PDF or DOCX file');
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    const fileInput = document.getElementById('attachment') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0ee]">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* ── Left Content ── */}
            <div className="flex flex-col xl:pr-12 justify-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#101828]/50 mb-4 block">
                Start a conversation
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#101828] mb-6 leading-[1.05] tracking-tight">
                Let's build <br />
                <span className="text-[#101828]/40">something real.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#101828]/70 mb-16 max-w-xl leading-relaxed">
                Whether you're validating an AI concept or scaling a SaaS product, we assemble the right talent to get it shipped.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                <div>
                  <p className="font-bold text-[#101828]/50 mb-2 text-sm uppercase tracking-wider">Direct Inquiry</p>
                  <a
                    href="mailto:hello@mindscraft.dev"
                    className="text-2xl font-bold text-[#101828] border-b-[3px] border-[#101828]/20 hover:border-[#101828] transition-colors inline-block pb-1"
                  >
                    hello@mindscraft.dev
                  </a>
                </div>
                <div>
                  <p className="font-bold text-[#101828]/50 mb-2 text-sm uppercase tracking-wider">Join the Team</p>
                  <a
                    href="/about"
                    className="text-2xl font-bold text-[#101828] border-b-[3px] border-[#101828]/20 hover:border-[#101828] transition-colors inline-block pb-1"
                  >
                    See Our Culture
                  </a>
                </div>
              </div>

              {/* Trust Signals replacing Location */}
              <div className="bg-white p-8 rounded-3xl border border-black/[0.04] shadow-sm">
                <h3 className="text-xl font-bold text-[#101828] mb-6">Why founders choose us</h3>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#101828]/5 p-2 rounded-full mt-1">
                      <FiFastForward className="w-5 h-5 text-[#101828]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#101828]">Shipping Velocity</p>
                      <p className="text-sm text-[#101828]/60 mt-1">We optimize for time-to-market. Average MVP launch is under 6 weeks.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#101828]/5 p-2 rounded-full mt-1">
                      <FiUsers className="w-5 h-5 text-[#101828]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#101828]">Senior Talent Only</p>
                      <p className="text-sm text-[#101828]/60 mt-1">No juniors learning on your dime. You work directly with veterans.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-green-500/10 p-2 rounded-full mt-1">
                      <FiClock className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="font-bold text-[#101828]">24-Hour Response</p>
                      <p className="text-sm text-[#101828]/60 mt-1">All inquiries are reviewed and answered by a partner within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Form (Premium Navy Card) ── */}
            <div className="bg-[#101828] rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
              {/* Aurora Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(243,244,192,0.12)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/4 pointer-events-none rounded-full blur-[60px]" />

              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center py-20 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-[#F3F4C0]/10 mb-8"
                  >
                    <FiCheck className="h-10 w-10 text-[#F3F4C0]" />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">Message Received.</h2>
                    <p className="text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. A partner will review your inquiry and get back to you within 24 hours.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-[#F3F4C0] hover:bg-[#e4e5b3] text-[#101828] font-bold transition-all duration-300 px-8 py-4 rounded-full h-14"
                      >
                        Back to Top
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <FormProvider {...methods}>
                  <Form onSubmit={methods.handleSubmit(onSubmit)} className="relative z-10">
                    <div className="mb-10 text-white">
                      <h3 className="text-3xl font-extrabold mb-3">Project Details</h3>
                      <p className="text-white/60 text-sm">Tell us about what you want to achieve.</p>
                    </div>

                    <div className="hidden">
                      <Label htmlFor="website">Leave this field empty</Label>
                      <Input id="website" {...register('website')} />
                    </div>

                    <div className="space-y-6">

                      <div className="md:col-span-2">
                        <FormField name="nameOrCompany">
                          <Label htmlFor="nameOrCompany" required className="text-white font-bold mb-2 block">
                            Name / Company
                          </Label>
                          <Input
                            id="nameOrCompany"
                            placeholder="Acme Inc."
                            className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-[#F3F4C0] focus:ring-[#F3F4C0] transition-colors ${errors.nameOrCompany ? 'border-red-400' : ''}`}
                            {...register('nameOrCompany')}
                            required
                            minLength={2}
                          />
                        </FormField>
                      </div>

                      <div className="md:col-span-2">
                        <FormField name="email">
                          <Label htmlFor="email" required className="text-white font-bold mb-2 block">
                            Work Email
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder="you@company.com"
                            className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-[#F3F4C0] focus:ring-[#F3F4C0] transition-colors ${errors.email ? 'border-red-400' : ''}`}
                            {...register('email')}
                            required
                          />
                        </FormField>
                      </div>

                      <div className="md:col-span-2">
                        <FormField name="service">
                          <Label htmlFor="service" required className="text-white font-bold mb-2 block">
                            Service Needed
                          </Label>
                          <Select
                            id="service"
                            className={`h-14 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#F3F4C0] focus:ring-[#F3F4C0] [&>option]:text-black transition-colors ${errors.service ? 'border-red-400' : ''}`}
                            {...register('service')}
                            required
                          >
                            <SelectOption value="">Select a core service...</SelectOption>
                            {SERVICES.map((service) => (
                              <SelectOption key={service} value={service}>
                                {service}
                              </SelectOption>
                            ))}
                          </Select>
                        </FormField>
                      </div>

                      {isBudgetVisible && (
                        <div className="md:col-span-2">
                          <Label htmlFor="budget" className="text-white font-bold mb-2 block">
                            Project Budget
                          </Label>
                          <Select
                            id="budget"
                            className="h-14 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#F3F4C0] focus:ring-[#F3F4C0] [&>option]:text-black transition-colors"
                            {...register('budget')}
                          >
                            {BUDGET_RANGES.map((range) => (
                              <SelectOption key={range} value={range}>
                                {range}
                              </SelectOption>
                            ))}
                          </Select>
                        </div>
                      )}

                      <div className="md:col-span-2">
                        <FormField name="message">
                          <Label htmlFor="message" required className="text-white font-bold mb-2 block">
                            Project Brief
                          </Label>
                          <Textarea
                            id="message"
                            rows={5}
                            placeholder="What are the core features? What is the timeline? What is the end goal?"
                            className={`resize-none bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl p-4 focus:border-[#F3F4C0] focus:ring-[#F3F4C0] transition-colors ${errors.message ? 'border-red-400' : ''}`}
                            {...register('message')}
                            required
                            minLength={10}
                          />
                        </FormField>
                      </div>

                    </div>

                    {errors.root && (
                      <div className="mt-6 rounded-xl bg-red-500/10 p-4 border border-red-500/20">
                        <div className="flex items-center gap-3 text-red-400">
                          <FiAlertCircle className="h-5 w-5 shrink-0" />
                          <p className="text-sm font-medium">{errors.root.message}</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-10">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#F3F4C0] hover:bg-[#e4e5b3] text-[#101828] font-bold rounded-full h-14 text-lg transition-transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-[#101828]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Submit Inquiry'
                        )}
                      </Button>
                      <p className="text-center text-xs text-white/40 mt-6">
                        By submitting, you agree to our <a href="/privacy-policy" className="underline hover:text-white/80 transition-colors">Privacy Policy</a>. No spam, ever.
                      </p>
                    </div>
                  </Form>
                </FormProvider>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
