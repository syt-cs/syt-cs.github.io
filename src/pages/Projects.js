import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Retrosplenial cortical ensemble regulates social distance in mice',
      abstract: `Animals regulate the physical space maintained between themselves and conspecifics, referred to as their social distance, to facilitate adaptive social interaction. Dysregulation of this behavior is linked to psychiatric disorders such as schizophrenia and autism spectrum disorder, yet the neural circuit mechanisms underlying social distance regulation remain poorly understood. This study aims to identify and characterize cortical circuits that control social distance by utilizing a mouse model. Social distance and associated behaviors was quantified using the deep learning-based tool Social LEAP Estimates Animal Poses (SLEAP). Using mesoscopic whole-cortex calcium imaging, we identified the medial retrosplenial cortical area (mRSA) as a region selectively activated by an approaching visual stimulus. Fiber photometry further revealed that mRSA neuronal activity dynamically tracks social distance changes during free social interactions. Chemogenetic activation and inhibition of mRSA neurons bi-directionally modulated social distance—activation increased social distance, whereas inhibition reduced it—demonstrating a causal role for this region in regulating proximity behavior. Through the Fast Light and Calcium-Regulated Expression (FLiCRE) system, we tagged mRSA ensembles activated during close social encounters and showed that selective reactivation of these ensembles increased social distance, indicating their sufficiency in driving avoidance behavior. Furthermore, projection mapping revealed that mRSA neurons send outputs to subcortical structures implicated in defensive and social responses. These findings identify the mRSA as a cortical hub mediating sensory-motor transformations essential for social distance regulation. This work establishes a mechanistic foundation for dissecting the brain-wide circuitry of social space representation and provides translational insights into disorders characterized by impaired social boundary regulation.`
    }
  ];
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((p, i) => (
          <article key={i} className="project-item">
            <h2 className="project-title">{p.title}</h2>
            <p className="project-abstract">{p.abstract}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
