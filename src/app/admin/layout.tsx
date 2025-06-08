// src/app/admin/layout.tsx
import type { Metadata } from 'next';
// Authentication has been temporarily removed as per README-admin.md
// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';
// import { authOptions } from '@/lib/auth';
import { AdminLayout } from '@/components/admin/AdminLayout';

export const metadata: Metadata = {
  title: 'Admin - Mindscraft',
  description: 'Admin section for Mindscraft website',
};

export default async function RootAdminLayout({ children }: { children: React.ReactNode }) {
  // Authentication has been temporarily removed as per README-admin.md
  // No session check or redirect to login page

  return <AdminLayout>{children}</AdminLayout>;
}
