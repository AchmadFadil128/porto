'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  image_url: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden animate-pulse">
              <div className="bg-gray-200 h-48 w-full"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`}
            className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition duration-300"
          >
            {project.image_url ? (
              <img 
                src={`http://localhost:3001${project.image_url}`} 
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder-image.svg'; // fallback image
                }}
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h2>
              <p className="text-blue-900">{project.short_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}