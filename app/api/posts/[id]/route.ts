import { getPost } from '../../../lib/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest
) {
  console.log("This is a test", request.nextUrl)
  debugger;
  const id = request.nextUrl.href.split("/").pop();
  
  if (!id) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  try {
    const post = await getPost(id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
} 