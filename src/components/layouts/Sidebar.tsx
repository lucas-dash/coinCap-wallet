import { Icons } from '../ui/Icons';
import NavLink from '../ui/NavLink';
import LogOut from '../LogOut';

const sidebarLinks = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icons.dashboard className="mr-2" />,
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <Icons.portfolio className="mr-2" />,
  },
  {
    title: 'Watchlist',
    path: '/watchlist',
    icon: <Icons.watchlist className="mr-2" />,
  },
  {
    title: 'Markets',
    path: '/markets',
    icon: <Icons.trendingUp className="mr-2" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icons.profile className="mr-2" />,
  },
] as const;

export default function Sidebar() {
  return (
    <aside className="bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm hidden md:flex flex-col justify-between py-5 px-2 min-w-[200px] h-[calc(100vh-48px)] sticky top-[48px] z-40">
      <nav className="flex flex-col items-start gap-7 mx-auto w-full pt-2">
        {sidebarLinks.map(({ title, path, icon }) => {
          return <NavLink key={path} href={path} name={title} icon={icon} />;
        })}
      </nav>
      <LogOut />
    </aside>
  );
}
