import { ArrowDownRight } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <main className="page-content">
      <div className="eyebrow">Portfolio archive <span className="mono">/ 404</span></div>
      <h1 className="page-title" style={{ marginTop: 20 }}>Page not found.</h1>
      <p className="page-intro">This page is unavailable. Return to Home to continue browsing.</p>
      <Link href="/" className="action-link" style={{ marginTop: 26 }}>
        Back to Home <ArrowDownRight size={15} />
      </Link>
    </main>
  );
}
