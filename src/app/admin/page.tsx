import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function AdminPage() {
  // Check if the user is authenticated
  const session = await getServerSession(authOptions);

  // If the user is authenticated, redirect to the dashboard
  // Otherwise, redirect to the login page
  if (session) {
    redirect('/admin/dashboard');
  } else {
    redirect('/admin/login');
  }

  // This return statement is unreachable but required for TypeScript
  return null;
}
