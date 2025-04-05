"use server"
import { headers } from 'next/headers';

export const getBaseUrl = async () => {
    const headersList = await headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    return `${protocol}://${host}`;
  };
  