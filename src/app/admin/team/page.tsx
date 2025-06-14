'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

// Dynamically import icons with SSR disabled
const PlusCircle = dynamic(
  () => import('lucide-react').then((mod) => mod.PlusCircle),
  { ssr: false, loading: () => <span className="inline-block h-4 w-4"></span> }
);

const Edit = dynamic(
  () => import('lucide-react').then((mod) => mod.Edit2),
  { ssr: false, loading: () => <span className="inline-block h-4 w-4"></span> }
);

const Mail = dynamic(
  () => import('lucide-react').then((mod) => mod.Mail),
  { ssr: false, loading: () => <span className="inline-block h-4 w-4"></span> }
);

const Globe = dynamic(
  () => import('lucide-react').then((mod) => mod.Globe2),
  { ssr: false, loading: () => <span className="inline-block h-4 w-4"></span> }
);
import Link from 'next/link';
import { DeleteButton } from '@/components/admin/DeleteButton';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  website: string | null;
  social: {
    twitter: string;
    linkedin: string;
  };
}

// Since there's no Team model in the schema yet, we'll use dummy data
const dummyTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'john@example.com',
    website: 'https://example.com',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'jane@example.com',
    website: 'https://example.com',
    social: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith'
    }
  },
  {
    id: '3',
    name: 'Robert Johnson',
    role: 'Lead Developer',
    bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'robert@example.com',
    website: null,
    social: {
      twitter: 'https://twitter.com/robertjohnson',
      linkedin: 'https://linkedin.com/in/robertjohnson'
    }
  }
];

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    setIsClient(true);
    setTeamMembers(dummyTeamMembers);
  }, []);

  if (!isClient) {
    // Return a loading state during SSR
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Team</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the team members on your website.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            href="/admin/team/new"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add team member
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="flex justify-center pt-6">
              <img
                src={member.image}
                alt={member.name}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle>{member.name}</CardTitle>
              <p className="text-sm text-gray-500">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{member.bio}</p>

              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                  <a href={`mailto:${member.email}`} className="text-sm text-blue-600 hover:text-blue-800">
                    {member.email}
                  </a>
                </div>

                {member.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-400 mr-2" />
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end space-x-2">
                <Link
                  href={`/admin/team/${member.id}`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit {member.name}</span>
                </Link>
                <DeleteButton
                  title={member.name}
                  itemId={member.id}
                  resourceType="team"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Note: This is a placeholder page. To fully implement team management, you'll need to add a Team model to your database schema.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
