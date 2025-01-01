import { Metadata } from 'next';
import ForgotPasswordForm from '../_components/forgot-password-form';

export const metadata: Metadata = {
  title: 'Authentication | Forgot Password',
  description: 'Forgot Password page for authentication.'
};

export default function Page() {
  return <ForgotPasswordForm />;
}