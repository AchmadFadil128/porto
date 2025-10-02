'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Folder } from 'lucide-react';

export default function ProjectDetailPage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    };
    
    unwrapParams();
  }, [params]);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      
      try {
        const response = await fetch(`/api/projects/${slug}`);
        const data = await response.json();
        if (data.error) {
          router.push('/404');
        } else {
          setProject(data);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        router.push('/404');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="animate-pulse space-y-8">
            {/* Back button skeleton */}
            <div className="h-10 bg-gray-200 dark:bg-dark-bg rounded-xl w-48"></div>
            
            {/* Title skeleton */}
            <div className="h-12 bg-gray-200 dark:bg-dark-bg rounded-2xl w-2/3"></div>
            
            {/* Image skeleton */}
            <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl overflow-hidden">
              <div className="bg-gray-200 dark:bg-dark-bg h-96 w-full"></div>
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-dark-bg rounded-lg w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-dark-bg rounded-lg w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-dark-bg rounded-lg w-4/6"></div>
            </div>
            
            {/* Buttons skeleton */}
            <div className="flex gap-4">
              <div className="h-12 bg-gray-200 dark:bg-dark-bg rounded-xl w-32"></div>
              <div className="h-12 bg-gray-200 dark:bg-dark-bg rounded-xl w-40"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-40 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-16">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Folder className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">Project Not Found</h1>
              <p className="text-gray-600 dark:text-dark-text-secondary text-lg mb-8">The project you're looking for doesn't exist.</p>
              <button 
                onClick={() => router.push('/projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 dark:bg-dark-bg-secondary rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/projects')}
          className="group mb-8 flex items-center gap-2 px-5 py-3 backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 text-gray-700 dark:text-dark-text-secondary font-medium rounded-xl hover:bg-blue-50 dark:hover:bg-dark-bg/80 hover:text-blue-600 hover:border-blue-200/50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </button>
        
        {/* Project Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text-primary mb-8">
          {project.title}
        </h1>
        
        {/* Main Image */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl overflow-hidden shadow-lg mb-12">
          {project.image_url ? (
            <img 
              src={`http://localhost:3001${project.image_url}`} 
              alt={project.title}
              className="w-full h-[32rem] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/placeholder-image.svg';
              }}
            />
          ) : (
            <div className="w-full h-[32rem] flex flex-col items-center justify-center text-gray-400 dark:text-dark-text-secondary bg-gray-50 dark:bg-dark-bg">
              <Folder className="w-20 h-20 mb-4" />
              <span className="text-lg">No Main Image</span>
            </div>
          )}
        </div>
        
        {/* Description */}
        <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-6">About This Project</h2>
          <p className="text-gray-600 dark:text-dark-text-secondary text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a 
            href={project.live_demo_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Live Demo
          </a>
          <a 
            href={project.github_repo_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            GitHub Repository
          </a>
        </div>
        
        {/* Screenshots Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary mb-8">Screenshots</h2>
          
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="group backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <img 
                    src={`http://localhost:3001${screenshot}`} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/placeholder-screenshot.svg';
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="backdrop-blur-md bg-white/70 dark:bg-dark-bg-secondary/70 border border-gray-200/50 dark:border-dark-bg/50 rounded-3xl shadow-lg p-16 text-center">
              <Folder className="w-16 h-16 text-gray-300 dark:text-dark-text-secondary mx-auto mb-4" />
              <p className="text-gray-600 dark:text-dark-text-secondary text-lg">No screenshots available for this project.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}