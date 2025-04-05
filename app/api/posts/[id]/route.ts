import { getPost } from '../../../lib/posts';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPost(params.id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
} 