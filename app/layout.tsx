import { getSession } from '../auth';
import Providers from '../components/layout/providers';
import { Toaster } from '../components/ui/sonner';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gestão de Igrejas',
  description: 'Sistema de gestão para igrejas com Next.js e Shadcn'
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabaseSession = await getSession();
  const session = supabaseSession ? {
    user: {
      ...supabaseSession.user,
      name: supabaseSession.user.user_metadata?.full_name,
      email: supabaseSession.user.email,
      image: supabaseSession.user.user_metadata?.avatar_url
    },
    expires: new Date((supabaseSession.expires_at || Date.now() / 1000 + 3600) * 1000).toISOString()
  } : null;

  return (
    <html
      lang="en"
      className={`${lato.className}`}
      suppressHydrationWarning={true}
    >
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
