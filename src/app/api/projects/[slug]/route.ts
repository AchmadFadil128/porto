import { NextResponse } from 'next/server';
import { projects } from '@/data/projects';

export async function GET(request, { params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  return NextResponse.json(project);
}