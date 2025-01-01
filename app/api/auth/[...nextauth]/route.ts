import { NextResponse } from 'next/server';
import { supabaseAuth } from '../../../../auth.config';

export async function GET() {
  const session = await supabaseAuth.getSession();
  return NextResponse.json(session);
}

export async function POST(request: Request) {
  const { email, password, action } = await request.json();
  try {
    let session;
    if (action === 'signIn') {
      session = await supabaseAuth.signIn(email, password);
    } else if (action === 'signUp') {
      session = await supabaseAuth.signUp(email, password);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
