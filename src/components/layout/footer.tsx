"use client";

import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedInIcon, YoutubeIcon } from '@/components/ui/icons';

type FooterLink = {
  title: string;
  href: string;
  external?: boolean;
};

const products: FooterLink[] = [
  { title: 'Web Development', href: '/services/web-development' },
  { title: 'UI/UX Design', href: '/services/design' },
  { title: 'Mobile Apps', href: '/services/mobile' },
  { title: 'AI Solutions', href: '/services/ai' },
];

const services: FooterLink[] = [
  { title: 'Custom Software', href: '/services/custom-software' },
  { title: 'E-commerce', href: '/services/ecommerce' },
  { title: 'SaaS Development', href: '/services/saas' },
  { title: 'API Development', href: '/services/api' },
];

const company: FooterLink[] = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Work', href: '/work' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

const resources: FooterLink[] = [
  { title: 'Documentation', href: '/docs', external: true },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Guides', href: '/guides' },
  { title: 'FAQ', href: '/faq' },
];

const linkGroups = [
  { title: 'Services', links: services },
  { title: 'Company', links: company },
  { title: 'Resources', links: resources },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderLinks = (title: string, links: FooterLink[]) => (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                Mindscraft<span className="text-blue-600">.dev</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              UX-focused web development agency helping startups and product teams launch faster with AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span>
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {linkGroups.map((group, index) => (
            <div key={index}>
              {renderLinks(group.title, group.links)}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Mindscraft.dev. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-700">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
