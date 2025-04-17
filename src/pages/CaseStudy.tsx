
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyOverview from '@/components/case-study/CaseStudyOverview';
import CaseStudyMission from '@/components/case-study/CaseStudyMission';
import CaseStudyOpportunity from '@/components/case-study/CaseStudyOpportunity';
import CaseStudyResearch from '@/components/case-study/CaseStudyResearch';
import CaseStudyDesignProcess from '@/components/case-study/CaseStudyDesignProcess';
import CaseStudyResults from '@/components/case-study/CaseStudyResults';
import CaseStudyReflection from '@/components/case-study/CaseStudyReflection';
import CaseStudyNextProject from '@/components/case-study/CaseStudyNextProject';
import CaseStudyNotFound from '@/components/case-study/CaseStudyNotFound';
import CaseStudyUIDesign from '@/components/case-study/CaseStudyUIDesign';
import CaseStudyUIScreenshots from '@/components/case-study/CaseStudyUIScreenshots';
import CaseStudyValueProps from '@/components/case-study/CaseStudyValueProps';
import CaseStudyInterviewFindings from '@/components/case-study/CaseStudyInterviewFindings';
import CaseStudyUserInsights from '@/components/case-study/CaseStudyUserInsights';
import CaseStudyInformationArchitecture from '@/components/case-study/CaseStudyInformationArchitecture';
import { projectsData } from '@/data/projectsData';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;
  
  if (!project) {
    return <CaseStudyNotFound />;
  }
  
  const nextProjectSlug = project.nextProject;
  const nextProject = nextProjectSlug ? projectsData[nextProjectSlug] : null;

  return (
    <>
      <NavBar />
      
      {/* Always display main sections */}
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      
      {/* Project Mission/Goals */}
      <CaseStudyMission project={project} />
      
      {/* Opportunity */}
      <CaseStudyOpportunity project={project} />
      
      {/* Value Props / Opportunities & Challenges */}
      <CaseStudyValueProps project={project} />
      
      {/* Research Findings */}
      <CaseStudyResearch project={project} />
      
      {/* Interview Findings */}
      <CaseStudyInterviewFindings project={project} />
      
      {/* User Insights */}
      <CaseStudyUserInsights project={project} />
      
      {/* Information Architecture - new section */}
      <CaseStudyInformationArchitecture project={project} />
      
      {/* Design Process */}
      <CaseStudyDesignProcess project={project} />
      
      {/* UI Design */}
      <CaseStudyUIDesign project={project} />
      
      {/* UI Screenshots */}
      <CaseStudyUIScreenshots project={project} />
      
      {/* Results */}
      <CaseStudyResults project={project} />
      
      {/* Reflection / Key Learnings */}
      <CaseStudyReflection project={project} />
      
      {/* Next Project */}
      {nextProject && (
        <CaseStudyNextProject 
          nextProjectSlug={nextProjectSlug} 
          nextProject={nextProject} 
        />
      )}
      
      <Footer />
    </>
  );
};

export default CaseStudy;
