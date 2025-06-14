'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Header from './header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAdminSection = pathname.startsWith('/admin');

  useEffect(() => {
    // Add or remove admin-main class based on whether we're in the admin section
    const mainElement = document.getElementById('main-content');
    if (mainElement) {
      if (isAdminSection) {
        mainElement.classList.add('admin-main');
      } else {
        mainElement.classList.remove('admin-main');
      }
    }
  }, [isAdminSection, pathname]);

  if (isAdminSection) {
    return null;
  }

  return <Header />;
}
