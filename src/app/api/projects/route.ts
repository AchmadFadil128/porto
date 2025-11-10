import { NextResponse } from 'next/server';
import { getApiUrl } from '@/config/api';

export async function GET() {
  try {
    const response = await fetch(`${getApiUrl()}/api/projects`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    }
    
    const projects = await response.json();
    // Format image URLs to be absolute
    const formattedProjects = projects.map((project: any) => ({
      ...project,
      image_url: project.image_url ? `${getApiUrl()}${project.image_url}` : null
    }));
    
    return NextResponse.json(formattedProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}