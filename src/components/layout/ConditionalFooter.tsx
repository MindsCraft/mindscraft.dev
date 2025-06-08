'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isAdminSection = pathname.startsWith('/admin');

  // Don't show footer on admin pages
  if (isAdminSection) {
    return null;
  }

  return <Footer />;
}
