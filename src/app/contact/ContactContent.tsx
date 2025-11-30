'use client';

import { useState, useEffect } from 'react';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';
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
  'New Web Application',
  'UI/UX Design',
  'Website Maintenance',
  'General Inquiry'
];

const BUDGET_RANGES = [
  'Select a range',
  '$5k - $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k+'
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
      'New Web Application',
      'Mobile App Development',
      'UI/UX Design',
      'Cloud & DevOps Consulting'
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
    <div className="min-h-screen bg-white">
      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex flex-col pr-0 lg:pr-12 pt-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                Let’s Talk
              </h1>
              <p className="text-xl text-gray-600 mb-16 max-w-md leading-relaxed">
                We’d love to learn more about you and what we can design and build together.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
                <div>
                  <h3 className="text-gray-500 mb-3 text-lg">Become a Client</h3>
                  <a
                    href="mailto:hello@mindscraft.dev"
                    className="text-2xl font-medium text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1 inline-block"
                  >
                    hello@mindscraft.dev
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-500 mb-3 text-lg">Join Us</h3>
                  <a
                    href="#"
                    className="text-2xl font-medium text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1 inline-block"
                  >
                    See Open Positions
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Locations</h2>
                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                  We’re remote-first but gather in physical spaces when in-person collaboration is essential for impact.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-50 p-6 md:p-10 relative">
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-green-100 to-green-200 mb-6"
                  >
                    <FiCheck className="h-12 w-12 text-green-600" />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Your message has been sent successfully. We'll review your inquiry and get back to you within 24-48 hours.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 px-6 py-3"
                      >
                        Back to Top
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <FormProvider {...methods}>
                  <Form onSubmit={methods.handleSubmit(onSubmit)} className="">
                    {/* Form Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-back mb-2">Tell us about your project</h3>
                      <p className="text-sm text-gray-600">Share your vision and we'll get back to you within 24 hours.</p>
                    </div>

                    {/* Honeypot Field */}
                    <div className="hidden">
                      <Label htmlFor="website">Leave this field empty</Label>
                      <Input id="website" {...register('website')} />
                      {errors.website && (
                        <p className="mt-1 text-sm text-red-400">{errors.website.message}</p>
                      )}
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 gap-6">
                      {/* Name / Company Name */}
                      <div className="md:col-span-2">
                        <FormField name="nameOrCompany">
                          <Label htmlFor="nameOrCompany" required className="text-gray-700 font-semibold mb-2 block">
                            Name / Company Name
                          </Label>
                          <Input
                            id="nameOrCompany"
                            placeholder="John Doe or Acme Inc."
                            className={`h-12 transition-all duration-200 ${errors.nameOrCompany ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
                            {...register('nameOrCompany')}
                            required
                            minLength={2}
                            aria-invalid={errors.nameOrCompany ? 'true' : 'false'}
                            aria-describedby={errors.nameOrCompany ? 'nameOrCompany-error' : undefined}
                          />
                        </FormField>
                      </div>

                      {/* Email */}
                      <div className="md:col-span-2">
                        <FormField name="email">
                          <Label htmlFor="email" required className="text-gray-700 font-semibold mb-2 block">
                            Work Email
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder="you@company.com"
                            className={`h-12 transition-all duration-200 ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
                            {...register('email')}
                            required
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                        </FormField>
                      </div>

                      {/* Service Dropdown */}
                      <div className="md:col-span-2">
                        <FormField name="service">
                          <Label htmlFor="service" required className="text-gray-700 font-semibold mb-2 block">
                            Service of Interest
                          </Label>
                          <Select
                            id="service"
                            className={`h-12 transition-all duration-200 ${errors.service ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
                            {...register('service')}
                            required
                            aria-invalid={errors.service ? 'true' : 'false'}
                            aria-describedby={errors.service ? 'service-error' : undefined}
                          >
                            <SelectOption value="">Select a service</SelectOption>
                            {SERVICES.map((service) => (
                              <SelectOption key={service} value={service}>
                                {service}
                              </SelectOption>
                            ))}
                          </Select>
                        </FormField>
                      </div>

                      {/* Conditional Budget Dropdown */}
                      {isBudgetVisible && (
                        <div className="md:col-span-2">
                          <div>
                            <Label htmlFor="budget" className="text-gray-700 font-semibold mb-2 block">
                              Project Budget
                            </Label>
                            <Select
                              id="budget"
                              className="h-12"
                              {...register('budget')}
                            >
                              {BUDGET_RANGES.map((range) => (
                                <SelectOption key={range} value={range}>
                                  {range}
                                </SelectOption>
                              ))}
                            </Select>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mt-6">
                      <FormField name="message">
                        <Label htmlFor="message" required className="text-gray-700 font-semibold mb-2 block">
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="Describe your project, goals, and any key features you have in mind..."
                          className={`resize-none transition-all duration-200 ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
                          {...register('message')}
                          required
                          minLength={10}
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        <p className="mt-2 text-xs text-gray-500">
                          Provide details about your project requirements, timeline, and any specific technologies you're interested in.
                        </p>
                      </FormField>
                    </div>

                    {/* File Upload */}
                    <div className="mt-6 bg-white p-4 border border-gray-100">
                      <Label className="text-gray-700 font-semibold mb-2 block">
                        Attach a file (PDF, DOCX up to 5MB)
                      </Label>
                      <div className="mt-1">
                        <FileInput
                          id="attachment"
                          acceptedFileTypes=".pdf,.doc,.docx"
                          selectedFile={selectedFile}
                          buttonLabel="Choose File"
                          onFileChange={(file) => {
                            handleFileChange(file);
                          }}
                          onRemoveFile={removeFile}
                          error={fileError}
                          {...register('attachment')}
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Optional: Attach a project brief, RFP, or any relevant documents
                        </p>
                      </div>
                    </div>

                    {/* Form Errors */}
                    {errors.root && (
                      <div className="mt-6 rounded-lg bg-red-50 pt-2 border border-red-100">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                            <FiAlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">
                              {errors.root.message}
                            </h3>
                            <p className="mt-1 text-xs text-red-700">
                              Please try again or contact us directly via email if the problem persists.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-8">
                      <div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                              backgroundColor: '#101828',
                              boxShadow: `
                                0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
                                0px 6px 12px 0px rgba(255, 255, 255, 0.08) inset,
                                0px 1px 3px 0px rgba(0, 0, 0, 0.3),
                                0px 4px 8px 0px rgba(0, 0, 0, 0.15)
                              `,
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = `
                                  0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset,
                                  0px 8px 16px 0px rgba(255, 255, 255, 0.10) inset,
                                  0px 2px 4px 0px rgba(0, 0, 0, 0.3),
                                  0px 8px 16px 0px rgba(0, 0, 0, 0.2)
                                `;
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `
                                  0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
                                  0px 6px 12px 0px rgba(255, 255, 255, 0.08) inset,
                                  0px 1px 3px 0px rgba(0, 0, 0, 0.3),
                                  0px 4px 8px 0px rgba(0, 0, 0, 0.15)
                                `;
                              }
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              'Send Inquiry'
                            )}
                          </button>
                        </motion.div>
                      </div>
                      <p className="text-center text-xs text-gray-500 mt-4">
                        By submitting this form, you agree to our <a href="#" className="text-gray-900 underline hover:text-gray-700">Privacy Policy</a>
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
