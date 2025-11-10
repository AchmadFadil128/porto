import { NextResponse } from 'next/server';
import { getApiUrl } from '@/config/api';

export async function GET() {
  try {
    const response = await fetch(`${getApiUrl()}/api/projects`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    }
    
    const projects = await response.json();
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}