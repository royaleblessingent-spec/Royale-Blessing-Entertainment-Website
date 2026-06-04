import { useLocation } from "wouter";
import type { ReactNode } from "react";

interface LinkProps {
  href?: string;
  to?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Link({ href, to, children, onClick: userOnClick, ...props }: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [location, setLocation] = useLocation();
  const target = href || to || "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (userOnClick) userOnClick(e);
    if (!e.defaultPrevented) {
      e.preventDefault();
      window.scrollTo(0, 0);
      setLocation(target);
    }
  };

  return (
    <a href={target} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
