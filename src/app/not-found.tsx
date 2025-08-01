import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Typewriting.ai',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Logo variant="icon" size="xl" className="opacity-50" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2382fc] hover:bg-blue-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 