import { useEffect, useRef, useState } from 'react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import { ArrowLeft, ArrowUpRight, Award, Database, ExternalLink, FolderKanban, Github, GraduationCap, Linkedin, Mail, Users, X } from 'lucide-react';
import { certificates, contactLinks, projects, type Certificate, type Project } from './data/portfolio';
import NotFound from '@/pages/not-found';
import './pages/about-timeline.css';

const navigation = [
  { href: '/', name: 'Home', index: '01' },
  { href: '/about', name: 'About', index: '02' },
  { href: '/projects', name: 'Projects', index: '03' },
  { href: '/certificates', name: 'Certificates', index: '04' },
];

function Header() {
  return (
    <header className="topline">
      <Link href="/" className="brand-mark" aria-label="Meisya Cantika home" data-testid="link-brand-home">
        <span className="brand-emblem">MC</span>
        <span>
          <span className="brand-name">Meisya Cantika</span>
          <span className="brand-sub">Personal portfolio / 2026</span>
        </span>
      </Link>
      <div className="system-status" data-testid="status-system-online">
        <span className="status-dot" />
        <span>SYSTEM ONLINE</span>
        <span aria-hidden="true">·</span>
        <span>UTC+7</span>
      </div>
    </header>
  );
}

function Navigation() {
  const [location] = useLocation();
  return (
    <nav className="side-nav" aria-label="Main navigation">
      <p className="nav-caption">DIRECTORY</p>
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="nav-link"
          aria-current={(location === item.href || (item.href === '/projects' && location.startsWith('/projects/'))) ? 'page' : undefined}
          data-testid={`link-nav-${item.name.toLowerCase()}`}
        >
          <span className="nav-index">{item.index}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}

function Shell() {
  return (
    <div className="app-shell">
      <div className="page-frame">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/projects/:id" component={ProjectDetailPage} />
          <Route path="/certificates" component={CertificatesPage} />
          <Route component={NotFound} />
        </Switch>
        <footer className="footer-note">
          <span>MC / PORTFOLIO INTERFACE</span>
          <span>DESIGNED TO EXPLORE WHAT'S NEXT</span>
        </footer>
      </div>
      <Navigation />
    </div>
  );
}

function HomePage() {
  const phrases = [
    'An aspiring data analyst.',
    'Exploring data & uncovering insights.',
    'Interested in Data Science & Data Engineering.',
    'Building Full-Stack Web Applications.',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = media.matches;
    const syncMotion = () => { reducedMotion.current = media.matches; };
    media.addEventListener('change', syncMotion);
    if (media.matches) {
      setVisibleText(phrases[0]);
      return () => media.removeEventListener('change', syncMotion);
    }
    const current = phrases[phraseIndex];
    const delay = deleting ? 34 : visibleText === current ? 1500 : 64;
    const timer = window.setTimeout(() => {
      if (!deleting && visibleText === current) {
        setDeleting(true);
      } else if (deleting && visibleText.length === 0) {
        setDeleting(false);
        setPhraseIndex((value) => (value + 1) % phrases.length);
      } else {
        setVisibleText(current.slice(0, visibleText.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => {
      window.clearTimeout(timer);
      media.removeEventListener('change', syncMotion);
    };
  }, [deleting, phraseIndex, visibleText]);

  return (
    <main className="page-content" data-testid="page-home">
      <div className="eyebrow">A little about me <span className="mono">/ 01</span></div>
      <h1 className="hero-name">Meisya<br /><span>Cantika.</span></h1>
      <div className="typing-line" aria-live="off" data-testid="text-animated-introduction">
        <span className="mono" aria-hidden="true">&gt; </span>
        <span>{visibleText}</span><span className="typing-cursor" aria-hidden="true" />
      </div>
      <p className="hero-copy">
        An aspiring data analyst passionate about exploring data, uncovering insights, and solving real-world problems. Currently focused on Data Analytics, with growing interests in Data Science, Data Engineering, and Full-Stack Web Development.
      </p>
      <div className="hero-actions" aria-label="Social and contact links">
        {contactLinks.map((contact) => {
          const Icon = contact.kind === 'linkedin' ? Linkedin : contact.kind === 'github' ? Github : Mail;
          const external = contact.kind !== 'email';
          return (
            <a
              key={contact.id}
              href={contact.href}
              className="social-circle-link"
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={contact.label}
              title={contact.label}
              data-testid={`link-hero-${contact.id}`}
            >
              <Icon size={19} aria-hidden="true" />
            </a>
          );
        })}
      </div>
      <div className="hero-meta">
        <div className="meta-item"><strong>01 / FOCUS</strong>DATA ANALYTICS · SCIENCE</div>
        <div className="meta-item"><strong>02 / CURRENTLY</strong>DATA ENGINEERING &amp; PIPELINES</div>
        <div className="meta-item"><strong>03 / LOCATION</strong>INDONESIA · UTC+7</div>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-content timeline-page" data-testid="page-about">
      <PageHeading
        index="02"
        title="About me."
        intro="My academic background, data analytics projects, technical interests, and ongoing learning journey across data and full-stack development."
        count=" "
      />
      <section className="timeline-section" aria-label="Education, academic projects, and current learning">
        <div className="timeline-heading">
          <span className="timeline-heading-label">MILESTONES</span>
          <span className="timeline-heading-range">CURRENT STUDIES</span>
        </div>
        <ol className="timeline-list">
          <li className="timeline-entry timeline-entry--education">
            <span className="timeline-node" aria-hidden="true"><GraduationCap /></span>
            <article className="timeline-card">
              <div className="timeline-card-kicker"><span>01</span><span>EDUCATION</span></div>
              <h2 className="timeline-card-title">
                <a
                  className="timeline-university"
                  href="https://undiksha.ac.id/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ganesha University of Education (opens in a new tab)"
                >
                  Ganesha University of Education <ArrowUpRight aria-hidden="true" />
                </a>
              </h2>
              <div className="timeline-meta">
                <span>3rd year</span>
                <span className="timeline-meta-divider" aria-hidden="true" />
                <span>Informatics Engineering</span>
              </div>
            </article>
          </li>
          <li className="timeline-entry timeline-entry--projects">
            <span className="timeline-node" aria-hidden="true"><FolderKanban /></span>
            <Link
              className="timeline-card timeline-card--link"
              href="/projects"
              aria-label="View academic projects"
              data-testid="link-academic-projects"
            >
              <div className="timeline-card-kicker"><span>02</span><span>ACADEMIC PROJECTS</span></div>
              <div className="timeline-link-heading">
                <h2 className="timeline-card-title">Academic Projects</h2>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <p className="timeline-description">
                Throughout my studies, I've worked on academic projects involving data analysis, machine learning, database management, and web application development.
              </p>
              <span className="timeline-link-note">EXPLORE PROJECTS</span>
            </Link>
          </li>
          <li className="timeline-entry timeline-entry--learning">
            <span className="timeline-node" aria-hidden="true"><Database /></span>
            <a
              className="timeline-card timeline-card--link"
              href="https://www.linkedin.com/in/meisyacantika"
              target="_blank"
              rel="noreferrer"
              aria-label=" "
              data-testid="link-current-learning"
            >
              <div className="timeline-card-kicker"><span>03</span><span>CURRENT LEARNING</span></div>
              <div className="timeline-link-heading">
                <h2 className="timeline-card-title">Data Analytics &amp; Visualization</h2>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <p className="timeline-description">
                Exploring data analysis and interactive dashboard development using Python, Tableau, and Power BI to uncover meaningful insights.
              </p>
              <span className="timeline-link-note">VIEW LEARNING JOURNEY</span>
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
}

function PageHeading({ index, title, intro, count }: { index: string; title: string; intro: string; count: string }) {
  return (
    <>
      <div className="eyebrow">Portfolio archive <span className="mono">/ {index}</span></div>
      <div className="page-heading">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-intro">{intro}</p>
        </div>
        <span className="section-count">{count}</span>
      </div>
    </>
  );
}

function getAssetUrl(path?: string | null) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

function ProjectPreview({ project }: { project: Project }) {
  const imageUrl = getAssetUrl(project.imageUrl);

  return (
    <div className={`preview-art ${project.preview}`} aria-label={`${project.label} visual preview`} role="img">
      <div className="preview-window">
        <div className="preview-top"><i /><i /><i /><span className="preview-label">{project.label} / PREVIEW</span></div>
        {imageUrl ? (
          <div className="preview-image-container">
            <img src={imageUrl} alt={`${project.name} preview`} className="preview-image" loading="lazy" />
          </div>
        ) : (
          <>
            {project.preview === 'analytics' && <div className="chart-bars">{[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => <span key={bar} />)}</div>}
            {project.preview === 'engineering' && (
              <div className="pipeline-layout">
                <div className="pipeline-node node-source"><span className="node-icon" /><b>INGEST</b></div>
                <div className="pipeline-connector"><span className="pulse-dot" /></div>
                <div className="pipeline-node node-transform"><span className="node-icon" /><b>ETL</b></div>
                <div className="pipeline-connector"><span className="pulse-dot" /></div>
                <div className="pipeline-node node-dest"><span className="node-icon" /><b>WAREHOUSE</b></div>
              </div>
            )}
            {project.preview === 'research' && <><div className="preview-orbit"><span className="orbit-core" /></div><div className="preview-code">signal / response<br />pattern detected</div></>}
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const visibleTech = project.technologies.slice(0, 3);
  return (
    <Link href={`/projects/${project.id}`} className="project-card" aria-label={`Open ${project.name} project details`} data-testid={`link-project-${project.id}`}>
      <ProjectPreview project={project} />
      <div className="card-body">
        <div className="card-title-row"><h2 className="card-title">{project.name}</h2></div>
        <p className="card-description">{project.description}</p>
        <div className="tag-row" aria-label="Technologies">
          {visibleTech.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
          {project.technologies.length > 3 && <span className="tech-tag more">+{project.technologies.length - 3}</span>}
        </div>
      </div>
      <span className="project-card-open">OPEN PROJECT <ArrowUpRight aria-hidden="true" /></span>
    </Link>
  );
}

function TeamModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('.team-modal');
        const focusable = dialog?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="team-modal" role="dialog" aria-modal="true" aria-labelledby="team-dialog-title" data-testid={`dialog-team-${project.id}`}>
        <div className="modal-head">
          <div>
            <span className="team-modal-kicker">COLLABORATORS / CONTRIBUTORS</span>
            <h2 id="team-dialog-title">Project Team</h2>
            <p>{project.name} · Project Contributors</p>
          </div>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close project team popup" data-testid="button-close-team"><X /></button>
        </div>
        <ul className="team-member-list">
          {project.team?.map((member, index) => (
            <li className="team-member" key={member.name} data-testid={`member-team-${project.id}-${index + 1}`}>
              <span className="team-member-index mono">{String(index + 1).padStart(2, '0')}</span>
              <span className="team-member-name">{member.name}</span>
              <a href={member.linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn profile (opens in a new tab)`} data-testid={`link-team-member-${project.id}-${index + 1}`}>
                <Linkedin size={12} aria-hidden="true" />
                <span>LinkedIn</span>
                <ExternalLink size={10} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === id);
  const [teamOpen, setTeamOpen] = useState(false);

  if (!project) return <NotFound />;

  return (
    <main className="page-content project-detail-page" data-testid={`page-project-detail-${project.id}`}>
      <Link href="/projects" className="detail-back-link" data-testid="link-back-projects">
        <ArrowLeft aria-hidden="true" /> Back to projects
      </Link>
      <div className="eyebrow">Project record <span className="mono">/ 03</span></div>
      <div className="project-detail-layout">
        <aside className="project-detail-visual">
          <ProjectPreview project={project} />
          {project.githubUrl ? (
            <a className="github-action" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository on GitHub in a new tab`} data-testid={`link-github-${project.id}`}>
              <Github aria-hidden="true" /> View on GitHub <ExternalLink aria-hidden="true" />
            </a>
          ) : null}
        </aside>
        <div className="project-detail-copy">
          <div className="detail-meta-line"><span>PROJECT OVERVIEW</span><span>{project.label}</span></div>
          <h1 className="page-title detail-title" data-testid={`text-project-title-${project.id}`}>{project.name}</h1>
          <p className="detail-description" data-testid={`text-project-description-${project.id}`}>{project.description}</p>
          <div className="detail-tech-section">
            <h2 className="detail-section-label">TECHNOLOGIES</h2>
            <div className="tag-row" aria-label={`${project.name} technologies`} data-testid={`list-project-technologies-${project.id}`}>
              {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
            </div>
          </div>
          {project.team && (
            <div className="detail-team-row">
              <div>
                <h2 className="detail-section-label">COLLABORATION</h2>
                <p>Worked with a team · {project.team.length} contributors</p>
              </div>
              <button className="team-open-button" onClick={() => setTeamOpen(true)} aria-haspopup="dialog" aria-label={`View team members for ${project.name}`} data-testid={`button-view-team-${project.id}`}>
                <Users aria-hidden="true" /> View team <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          )}
          <div className="detail-story">
            {project.detail.map((section, index) => (
              <section className="detail-story-section" key={section.heading} data-testid={`section-project-detail-${project.id}-${index + 1}`}>
                <span className="detail-story-index mono">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      {teamOpen && project.team && <TeamModal project={project} onClose={() => setTeamOpen(false)} />}
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="page-content" data-testid="page-projects">
      <PageHeading index="03" title="Selected work." intro="A curated collection of academic and personal projects spanning web development, data analytics, machine learning, and innovative technology solutions." count={`${String(projects.length).padStart(2, '0')} / PROJECTS`} />
      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </section>
    </main>
  );
}

function CertificatesPage() {
  return (
    <main className="page-content" data-testid="page-certificates">
      <PageHeading index="04" title="Credentials." intro="A growing record of learning, practice, and curiosity. Click any entry to view verified credential links." count={`${String(certificates.length).padStart(2, '0')} / CREDENTIALS`} />
      <section className="certificate-list" aria-label="Certificates">
        {certificates.map((certificate) => {
          const certUrl = certificate.credentialUrl || certificate.fileUrl || '#';
          const isExternal = certUrl !== '#';
          return (
            <a
              className="certificate-row"
              key={certificate.id}
              href={certUrl}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              aria-label={`Open ${certificate.title} certificate link${isExternal ? ' (opens in a new tab)' : ''}`}
              data-testid={`link-certificate-${certificate.id}`}
            >
              <div className="certificate-icon"><Award aria-hidden="true" /></div>
              <div>
                <div className="certificate-title">{certificate.title}</div>
                <div className="certificate-provider">{certificate.provider}</div>
              </div>
              <span className="certificate-year">{certificate.year}</span>
              <span className="certificate-open" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          );
        })}
      </section>
    </main>
  );
}

function App() {
  const openedAsFile = typeof window !== 'undefined' && window.location.protocol === 'file:';

  return (
    <WouterRouter
      base={import.meta.env.BASE_URL.replace(/\/$/, '')}
      hook={openedAsFile ? useHashLocation : undefined}
    >
      <Shell />
    </WouterRouter>
  );
}

export default App;
