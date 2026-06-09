import React, { useState } from 'react';
import { ArrowUpRight, Github, PlayCircle, Sparkles } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioRepo';

type FeaturedDemoProps = {
  project: PortfolioProject;
};

const FeaturedDemo: React.FC<FeaturedDemoProps> = ({ project }) => {
  const initialSrc = project.videoUrl || project.videoFallbackUrl;
  const [videoSrc, setVideoSrc] = useState<string | undefined>(initialSrc);
  const [videoFailed, setVideoFailed] = useState(false);

  const handleVideoError = () => {
    if (videoSrc !== project.videoFallbackUrl && project.videoFallbackUrl) {
      setVideoSrc(project.videoFallbackUrl);
    } else {
      setVideoFailed(true);
    }
  };

  return (
    <div className="mb-12 overflow-hidden rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-secondary-50 shadow-sm">
      <div className="grid lg:grid-cols-2">
        {/* Video / demo side */}
        <div className="relative bg-secondary-900 flex items-center justify-center min-h-[260px]">
          {!videoFailed && videoSrc ? (
            <video
              key={videoSrc}
              className="w-full h-full object-cover"
              controls
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.posterUrl}
              onError={handleVideoError}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          ) : (
            // Fallback: thumbnail + Watch Demo button when the video cannot be embedded
            <div
              className="w-full h-full min-h-[260px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
              style={project.posterUrl ? { backgroundImage: `url(${project.posterUrl})` } : undefined}
            >
              <a
                href={project.videoFallbackUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/95 text-secondary-900 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors shadow-lg"
              >
                <PlayCircle size={22} className="text-primary-600" />
                Watch demo
              </a>
              <p className="text-secondary-300 text-xs mt-3">Opens the tracked output video on GitHub</p>
            </div>
          )}
        </div>

        {/* Details side */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
              <Sparkles size={13} />
              Featured · Computer Vision
            </span>
          </div>

          <h3 className="text-2xl font-bold text-secondary-900 mb-3">{project.title}</h3>
          <p className="text-sm text-secondary-600 leading-relaxed mb-5">{project.description}</p>

          {project.applications && project.applications.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary-500 mb-2">
                Real-world applications
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.applications.map((app) => (
                  <span
                    key={app}
                    className="text-xs font-medium text-secondary-700 bg-white border border-secondary-200 px-2.5 py-1 rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-500 mb-2">Tech stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-secondary-600 bg-secondary-50 border border-secondary-200 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <Github className="mr-2" size={18} />
              View code & README
            </a>
            {project.videoFallbackUrl && (
              <a
                href={project.videoFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-secondary-300 text-secondary-800 hover:border-primary-600 hover:text-primary-600 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Watch demo
                <ArrowUpRight className="ml-1" size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDemo;
