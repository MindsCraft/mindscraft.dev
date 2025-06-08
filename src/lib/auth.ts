// lib/auth.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorize called with:', credentials);
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          return null;
        }
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          console.log('User query result:', user);
          if (!user) {
            console.log('No user found with email:', credentials.email);
            return null;
          }
          const isPasswordValid = await compare(credentials.password, user.password);
          console.log('Password valid:', isPasswordValid);
          if (!isPasswordValid) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }
          console.log('User authenticated:', user.email);
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error('Authentication error:', error instanceof Error ? error.message : 'Unknown error', error instanceof Error ? error.stack : '');
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log('JWT Callback - Adding user data to token:', user.email);
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        console.log('Session Callback - Adding token data to session');
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: { signIn: '/admin/login', error: '/admin/login' },
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60, updateAge: 24 * 60 * 60 },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
