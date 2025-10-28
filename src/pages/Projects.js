import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Retrosplenial cortical ensemble regulates social distance in mice',
      abstract: `Animals regulate the physical space maintained between themselves and conspecifics, referred to as their social distance, to facilitate adaptive social interaction. Dysregulation of this behavior is linked to psychiatric disorders such as schizophrenia and autism spectrum disorder, yet the neural circuit mechanisms underlying social distance regulation remain poorly understood. This study aims to identify and characterize cortical circuits that control social distance by utilizing a mouse model. Social distance and associated behaviors was quantified using the deep learning-based tool Social LEAP Estimates Animal Poses (SLEAP). Using mesoscopic whole-cortex calcium imaging, we identified the medial retrosplenial cortical area (mRSA) as a region selectively activated by an approaching visual stimulus. Fiber photometry further revealed that mRSA neuronal activity dynamically tracks social distance changes during free social interactions. Chemogenetic activation and inhibition of mRSA neurons bi-directionally modulated social distance—activation increased social distance, whereas inhibition reduced it—demonstrating a causal role for this region in regulating proximity behavior. Through the Fast Light and Calcium-Regulated Expression (FLiCRE) system, we tagged mRSA ensembles activated during close social encounters and showed that selective reactivation of these ensembles increased social distance, indicating their sufficiency in driving avoidance behavior. Furthermore, projection mapping revealed that mRSA neurons send outputs to subcortical structures implicated in defensive and social responses. These findings identify the mRSA as a cortical hub mediating sensory-motor transformations essential for social distance regulation. This work establishes a mechanistic foundation for dissecting the brain-wide circuitry of social space representation and provides translational insights into disorders characterized by impaired social boundary regulation.`,
      authors: [
        { name: 'Sean Takahashi', institutions: [0, 1] },
        { name: 'Nanami Kawamura', institutions: [0] },
        { name: 'Kohei Yoshitake', institutions: [0] },
        { name: 'Brianna Roschbach', institutions: [0] },
        { name: 'Camille Casino', institutions: [0] },
        { name: 'Justin Riceberg', institutions: [0] },
        { name: 'Ayako Kawatake-Kuno', institutions: [0] },
        { name: 'Tadaaki Nishioka', institutions: [0] },
        { name: 'Hirofumi Morishita', institutions: [0] },
      ],
      institutions: [
        { name: 'Department of Psychiatry, Icahn School of Medicine at Mount Sinai, New York, New York, NY, USA', url: 'https://icahn.mssm.edu/' },
        { name: 'Stuyvesant High School', url: 'https://stuy.enschool.org' }
      ]
    }
  ];

return (
    <div className="projects-container">
      <h1 className="page-title">Projects</h1>

      <div className="projects-list">
        {projects.map((p, pi) => (
          <article key={pi} className="project-item" aria-labelledby={`proj-${pi}-title`}>
            <h1 className="project-title" id={`proj-${pi}-title`}>{p.title}</h1>

            {/* Authors line with superscript numbers that link to institution URLs */}
            <div className="project-authors" aria-label="Authors">
              {p.authors.map((a, ai) => (
                <span key={ai} className="author">
                  <span className="author-name">{a.name}</span>
                  {a.institutions.map((instIndex, idx) => {
                    const inst = p.institutions[instIndex];
                    const supKey = `p${pi}-a${ai}-s${idx}`;
                    return (
                      <sup key={supKey} className="author-sup">
                        <a
                          href={inst.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${a.name} — institution ${inst.name}`}
                          className="author-sup-link"
                        >
                          {instIndex + 1}
                        </a>
                      </sup>
                    );
                  })}
                  {/* comma/separator if not last author */}
                  {ai < p.authors.length - 1 && <span className="author-sep">, </span>}
                </span>
              ))}
            </div>

            {/* Institutions block (separated visually from abstract) */}
            {p.institutions && p.institutions.length > 0 && (
              <div className="project-institutions" aria-label="Institutions">
                <ol className="institution-list">
                  {p.institutions.map((inst, ii) => (
                    <li key={ii} className="institution-item">
                      <span className="institution-index">{ii + 1}.</span>
                      <a href={inst.url} target="_blank" rel="noopener noreferrer" className="institution-link">
                        {inst.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <h2 className="abstract-heading">Abstract</h2>
            <p className="project-abstract">{p.abstract}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;