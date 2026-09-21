import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Workflow, Compass, FileText, Database, Bot, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectLevel } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [selectedLevel, setSelectedLevel] = useState<ProjectLevel>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedLevel === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.levelKey === selectedLevel);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'n8n-automation':
        return <Workflow className="w-5 h-5 text-blue-600" />;
      case 'busan-travel-recommender':
        return <Compass className="w-5 h-5 text-sky-600" />;
      case 'text-data-analysis':
        return <FileText className="w-5 h-5 text-indigo-600" />;
      case 'bufs-rag-system':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'llm-structure-service':
        return <Bot className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECTS & EXPERIENCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            체계적인 실습으로 검증된 AI 프로젝트 포트폴리오
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            AI 부트캠프 초급부터 고급까지 단계별로 축적한 자동화, 데이터 분석, RAG, LLM 실무 성과입니다.
          </p>

          {/* Filter Level Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLevel === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              전체 보기 ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLevel === 'beginner'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              AI 부트캠프 초급 (2)
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLevel === 'intermediate'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              AI 부트캠프 중급 (2)
            </button>
            <button
              onClick={() => setSelectedLevel('advanced')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLevel === 'advanced'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              AI 부트캠프 고급 (1)
            </button>
          </div>
        </div>

        {/* Project Cards Grid (Inspired by FlowSuite Feature Cards & Advantages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-blue-300 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/50 flex items-center justify-center shadow-xs transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100/80">
                    부트캠프 {project.bootcampLevel}
                  </span>
                </div>

                {/* Title & Category */}
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600">
                <span>상세 아키텍처 및 성과 확인</span>
                <div className="w-6 h-6 rounded-full bg-white group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};
