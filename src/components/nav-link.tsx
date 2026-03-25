import { Link, LinkProps } from '@tanstack/react-router';
import { forwardRef } from 'react';
import { cn } from '~/lib/utils';

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  // Note: TanStack doesn't use "pending" for CSS classes in the same way,
  // but you can still access it via the render function if needed.
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, inactiveClassName, ...props }, ref) => {
    return (
      <Link
        {...props}
        ref={ref}
        className={({ isActive }: any) =>
          cn(className, isActive ? activeClassName : inactiveClassName)
        }
      />
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
