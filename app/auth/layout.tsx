import { ReactNode } from 'react';
import Providers from '../../components/layout/providers';
import { auth } from '../../auth';
import authConfig from '../../auth.config';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  
  return (
    <Providers session={session || null}>
      <div className="min-h-screen">
        {children}
      </div>
    </Providers>
  );
}
