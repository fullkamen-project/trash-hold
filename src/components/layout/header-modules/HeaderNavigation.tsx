import { NavLink } from '@/components/ui/NavLink';

interface MenuItem {
  label: string;
  path: string;
}

interface HeaderNavigationProps {
  menuItems: MenuItem[];
}

export function HeaderNavigation({ menuItems }: HeaderNavigationProps) {
  return (
    <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
      {menuItems.map((item) => (
        <NavLink key={item.path} href={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}