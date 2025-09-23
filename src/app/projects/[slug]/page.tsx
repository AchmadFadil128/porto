'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="bg-gray-200 h-64 w-full mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-8"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Project Not Found</h1>
        <p className="text-blue-900 mb-8">The project you're looking for doesn't exist.</p>
        <button 
          onClick={() => router.push('/projects')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => router.push('/projects')}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        ← Back to Projects
      </button>
      
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{project.title}</h1>
      
      <div className="bg-gray-200 border-2 border-dashed w-full h-96 flex items-center justify-center text-gray-500 mb-8">
        Main Project Image
      </div>
      
      <div className="prose max-w-none text-blue-900 mb-8">
        <p>{project.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <a 
          href={project.live_demo_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Live Demo
        </a>
        <a 
          href={project.github_repo_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          GitHub Repository
        </a>
      </div>
      
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.screenshots.map((screenshot, index) => (
          <div key={index} className="bg-gray-200 border-2 border-dashed w-full h-64 flex items-center justify-center text-gray-500">
            Screenshot {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}