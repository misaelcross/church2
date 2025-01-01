import { supabaseAuth } from './auth.config';

export const { signIn, signUp, signOut, getSession, getUser } = supabaseAuth;
export const auth = getSession;
