import { words } from '@/data/words';
import { NextResponse } from 'next/server';

export const GET = async ()  => {
  return NextResponse.json({ words: words });
}
