import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Double-check authentication for protected routes
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  // Get the current path
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || headersList.get('x-url') || '';

  // If trying to access the dashboard within the (protected) folder, redirect to the main dashboard
  // This helps avoid routing conflicts between /admin/(protected)/dashboard and /admin/dashboard
  if (pathname.includes('/admin/(protected)/dashboard')) {
    console.log('Redirecting from protected dashboard to main dashboard');
    redirect('/admin/dashboard');
  }

  return <>{children}</>;
}
