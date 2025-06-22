// src/app/admin/layout.tsx
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { AdminLayout } from '@/components/admin/AdminLayout';

export const metadata: Metadata = {
  title: 'Admin - Mindscraft',
  description: 'Admin section for Mindscraft website',
};

export default async function RootAdminLayout({ children }: { children: React.ReactNode }) {
  // The authentication check is now handled by the middleware
  // and the (protected) layout for protected routes
  return <AdminLayout>{children}</AdminLayout>;
}
