import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const response = await fetch(`http://localhost:3001/api/projects/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      throw new Error(`Failed to fetch project: ${response.status} ${response.statusText}`);
    }
    
    const project = await response.json();
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}