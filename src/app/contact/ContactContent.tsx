'use client';

import { useState, useEffect } from 'react';
import { FiCheck, FiAlertCircle, FiSend, FiFastForward, FiUsers, FiClock } from 'react-icons/fi';
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
  'WordPress & CMS Web Development',
  'UX Design & Conversion Optimisation',
  'Full-Stack Web Development',
  'Performance Engineering',
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
      'AI Product Development',
      'SaaS MVP Development',
      'WordPress & CMS Web Development',
      'UX Design & Conversion Optimisation',
      'Full-Stack Web Development'
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
    <div className="contact-page">
      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Content */}
            <div className="contact-left">
              <h2 className="contact-title">
                Let&rsquo;s Talk
              </h2>
              <p className="contact-subtitle">
                We&rsquo;d love to learn more about you and what we can design and build together.
              </p>

              <div className="contact-links">
                <div>
                  <p className="contact-link-label">Become a Client</p>
                  <a href="mailto:hello@mindscraft.dev" className="contact-link-value">
                    hello@mindscraft.dev
                  </a>
                </div>
                <div>
                  <p className="contact-link-label">Join Us</p>
                  <a href="/about" className="contact-link-value">
                    See Our Culture
                  </a>
                </div>
              </div>

              {/* Trust Signals replacing Location */}
              <div className="contact-trust">
                <h3>Why founders choose us</h3>
                <div className="contact-trust-list">
                  <div className="contact-trust-item">
                    <div className="contact-trust-icon">
                      <FiFastForward />
                    </div>
                    <div>
                      <h4>Shipping Velocity</h4>
                      <p>We optimize for time-to-market. Average MVP launch is under 6 weeks.</p>
                    </div>
                  </div>
                  <div className="contact-trust-item">
                    <div className="contact-trust-icon">
                      <FiUsers />
                    </div>
                    <div>
                      <h4>Senior Talent Only</h4>
                      <p>No juniors learning on your dime. You work directly with veterans.</p>
                    </div>
                  </div>
                  <div className="contact-trust-item">
                    <div className="contact-trust-icon is-green">
                      <FiClock />
                    </div>
                    <div>
                      <h4>24-Hour Response</h4>
                      <p>All inquiries are reviewed and answered by a partner within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-form-shell">
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="contact-success"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    className="contact-success-icon"
                  >
                    <FiCheck />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h2>Thank You!</h2>
                    <p>
                      Your message has been sent successfully. We&rsquo;ll review your inquiry and get back to you within 24-48 hours.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        variant="secondary"
                      >
                        Back to Top
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <FormProvider {...methods}>
                  <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    {/* Form Header */}
                    <div className="contact-form-header">
                      <h3>Tell us about your project</h3>
                      <p>Share your vision and we&rsquo;ll get back to you within 24 hours.</p>
                    </div>

                    {/* Honeypot Field */}
                    <div className="contact-honeypot">
                      <Label htmlFor="website">Leave this field empty</Label>
                      <Input id="website" {...register('website')} />
                      {errors.website && (
                        <p className="form-error">{errors.website.message}</p>
                      )}
                    </div>

                    {/* Form Fields */}
                    <div className="contact-fieldset">
                      {/* Name / Company Name */}
                      <FormField name="nameOrCompany">
                        <Label htmlFor="nameOrCompany" required>
                          Name / Company Name
                        </Label>
                        <Input
                          id="nameOrCompany"
                          placeholder="John Doe or Acme Inc."
                          className={errors.nameOrCompany ? 'is-error' : 'is-valid'}
                          {...register('nameOrCompany')}
                          required
                          minLength={2}
                          aria-invalid={errors.nameOrCompany ? 'true' : 'false'}
                          aria-describedby={errors.nameOrCompany ? 'nameOrCompany-error' : undefined}
                        />
                        {errors.nameOrCompany && (
                          <p id="nameOrCompany-error" className="form-field-error">
                            {errors.nameOrCompany.message}
                          </p>
                        )}
                      </FormField>

                      {/* Email */}
                      <FormField name="email">
                        <Label htmlFor="email" required>
                          Work Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="you@company.com"
                          className={errors.email ? 'is-error' : 'is-valid'}
                          {...register('email')}
                          required
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="form-field-error">
                            {errors.email.message}
                          </p>
                        )}
                      </FormField>

                      {/* Service Dropdown */}
                      <FormField name="service">
                        <Label htmlFor="service" required>
                          Service of Interest
                        </Label>
                        <Select
                          id="service"
                          className={errors.service ? 'is-error' : 'is-valid'}
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
                        {errors.service && (
                          <p id="service-error" className="form-field-error">
                            {errors.service.message}
                          </p>
                        )}
                      </FormField>

                      {/* Conditional Budget Dropdown */}
                      {isBudgetVisible && (
                        <div>
                          <Label htmlFor="budget">
                            Project Budget
                          </Label>
                          <Select id="budget" {...register('budget')}>
                            {BUDGET_RANGES.map((range) => (
                              <SelectOption key={range} value={range}>
                                {range}
                              </SelectOption>
                            ))}
                          </Select>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <FormField name="message">
                      <Label htmlFor="message" required>
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Describe your project, goals, and any key features you have in mind..."
                        className={errors.message ? 'is-error' : 'is-valid'}
                        {...register('message')}
                        required
                        minLength={10}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="form-field-error">
                          {errors.message.message}
                        </p>
                      )}
                      <p className="form-field-help">
                        Provide details about your project requirements, timeline, and any specific technologies you&rsquo;re interested in.
                      </p>
                    </FormField>

                    {/* File Upload */}
                    <div className="contact-file-card">
                      <Label>Attach a file (PDF, DOCX up to 5MB)</Label>
                      <div>
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
                        <p className="form-field-help">
                          Optional: Attach a project brief, RFP, or any relevant documents
                        </p>
                      </div>
                    </div>

                    {/* Form Errors */}
                    {errors.root && (
                      <div className="contact-error-banner">
                        <div className="error-icon">
                          <FiAlertCircle aria-hidden="true" />
                        </div>
                        <div className="error-text">
                          <h4>{errors.root.message}</h4>
                          <p>Please try again or contact us directly via email if the problem persists.</p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="contact-submit">
                      <Button
                        type="submit"
                        variant="primary"
                        size="xl"
                        fullWidth
                        disabled={isSubmitting}
                        icon={
                          isSubmitting ? (
                            <svg className="contact-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <FiSend />
                          )
                        }
                      >
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </Button>
                      <p>
                        By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a>
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
