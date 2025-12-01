'use client';

import React from 'react';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection';
import { FiArrowRight, FiUsers, FiTarget, FiAward, FiHeart } from 'react-icons/fi';
import Link from 'next/link';
import { Variants } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Passionate about creating amazing user experiences and leading our team to success.'
  },
  {
    name: 'Jane Smith',
    role: 'Lead Designer',
    bio: 'Design enthusiast with a keen eye for detail and a passion for beautiful interfaces.'
  },
  {
    name: 'Mike Johnson',
    role: 'Senior Developer',
    bio: 'Full-stack developer with expertise in modern web technologies and AI integration.'
  },
  {
    name: 'Sarah Williams',
    role: 'UX Researcher',
    bio: 'Dedicated to understanding user needs and translating them into intuitive designs.'
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, pushing the boundaries of what\'s possible.',
    icon: <FiAward className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to create cutting-edge solutions for our clients.',
    icon: <FiTarget className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong relationships with our clients.',
    icon: <FiUsers className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Passion',
    description: 'We love what we do, and it shows in the quality of our work and dedication to our clients.',
    icon: <FiHeart className="w-6 h-6 text-blue-600" />
  },
];

export default function AboutContent() {
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="About Mindscraft"
        description="We're a team of passionate designers, developers, and AI experts helping startups transform their ideas into reality."
        variant="solid"
        align="center"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
        cta={{
          text: 'Join Our Team',
          href: '/contact',
          variant: 'secondary'
        }}
      />

      {/* Mission Section */}
      <AnimatedSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Mindscraft, we're on a mission to empower startups and product teams with cutting-edge web development and UX design solutions. We combine our expertise in AI with user-centered design principles to create digital products that not only look great but also deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to help our clients launch faster, scale efficiently, and achieve their business objectives through innovative technology solutions.
              </p>
            </AnimatedDiv>
            <AnimatedDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-xl aspect-video"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <AnimatedDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedDiv
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <AnimatedDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Meet the people behind Mindscraft</p>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedDiv
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <AnimatedDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 text-blue-100">Let's create something amazing together</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
              <FiArrowRight className="ml-2" />
            </Link>
          </AnimatedDiv>
        </div>
      </AnimatedSection>
    </div>
  );
}
