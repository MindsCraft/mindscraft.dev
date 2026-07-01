import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: '404 - Page Not Found | MindsCraft',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-card">
        <div className="nf-logo-wrap">
          <Logo variant="icon" size="xl" />
        </div>
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        <p className="nf-text">The page you are looking for does not exist.</p>
        <Link href="/" className="nf-button">
          Go back home
        </Link>
      </div>
    </div>
  );
}