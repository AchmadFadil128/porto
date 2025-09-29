'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Folder } from 'lucide-react';

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
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Skeleton */}
          <div className="max-w-3xl mb-16">
            <div className="h-12 bg-gray-200 rounded-2xl w-64 mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-xl w-full max-w-2xl animate-pulse"></div>
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="bg-gray-200 h-56 w-full animate-pulse"></div>
                <div className="p-8">
                  <div className="h-7 bg-gray-200 rounded-xl w-3/4 mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore my latest work and creative solutions. Each project represents a unique challenge and innovative approach.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-56">
                {project.image_url ? (
                  <>
                    <img
                      src={`http://localhost:3001${project.image_url}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder-image.svg';
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <Folder className="w-16 h-16 mb-2" />
                    <span className="text-sm">No Image</span>
                  </div>
                )}

                {/* Floating Arrow */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {project.short_description}
                </p>

                {/* Bottom Border Animation */}
                <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-3xl p-16 max-w-2xl mx-auto shadow-lg">
              <Folder className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Projects Yet
              </h3>
              <p className="text-gray-600 text-lg">
                Check back soon for exciting new projects!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}