
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
      
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyMission project={project} />
      <CaseStudyOpportunity project={project} />
      <CaseStudyResearch project={project} />
      <CaseStudyDesignProcess project={project} />
      <CaseStudyResults project={project} />
      <CaseStudyReflection project={project} />
      
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
