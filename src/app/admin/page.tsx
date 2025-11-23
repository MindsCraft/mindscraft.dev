'use client';

import { redirect } from 'next/navigation';

export default async function AdminPage() {
  // Redirect directly to dashboard since auth is removed
  redirect('/admin/dashboard');
  // Unreachable return for TypeScript compliance
  return null;
}
