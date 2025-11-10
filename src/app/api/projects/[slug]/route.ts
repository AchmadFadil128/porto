import { NextResponse } from 'next/server';
import { getApiUrl } from '@/config/api';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const response = await fetch(`${getApiUrl()}/api/projects/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      throw new Error(`Failed to fetch project: ${response.status} ${response.statusText}`);
    }
    
    let project = await response.json();
    
    // Format image URLs to be absolute
    project = {
      ...project,
      image_url: project.image_url ? `${getApiUrl()}${project.image_url}` : null,
      screenshots: project.screenshots ? project.screenshots.map((screenshot: string) => `${getApiUrl()}${screenshot}`) : []
    };
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}