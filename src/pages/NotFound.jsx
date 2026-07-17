import { Helmet } from "react-helmet-async";
import Button from "../components/shared/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white pt-20">
      <Helmet>
        <title>404 — Page Not Found | OTIC TECH</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="text-center px-4">
        <h1 className="font-display font-bold text-8xl md:text-9xl text-accent mb-4">404</h1>
        <p className="font-body text-lg text-slate-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button variant="primary" to="/" className="px-8 py-4 text-base">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
