import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';

// In TanStack Router, this is often used as the 'notFoundComponent'
// in your createRouter config.
export const NotFound = () => {
  // Access the current location from the router state
  const { location } = useRouterState();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="card-elevated max-w-md w-full p-12 text-center">
        {/* Using your custom Forest/Gold theme tokens */}
        <h1 className="text-gradient-gold mb-2 text-7xl font-bold lg:text-8xl">404</h1>

        <h2 className="text-foreground mb-4 text-2xl font-semibold">Lost in the Forest?</h2>

        <p className="text-muted-foreground mb-8 text-balance">
          The page you are looking for doesn't exist or has been moved within the Tribe's archives.
        </p>

        <Link to="/" className="btn-primary-hero w-full">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
