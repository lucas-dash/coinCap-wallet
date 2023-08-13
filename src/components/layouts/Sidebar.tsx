import { Icons } from '../Icons';
import NavLink from '../NavLink';
import LogOut from '../LogOut';

export default function Sidebar() {
  return (
    <aside className="bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm hidden md:flex flex-col justify-between py-5 px-2 min-w-[200px] h-[calc(100vh-48px)] sticky top-[48px] z-40">
      <nav className="flex flex-col items-start gap-7 mx-auto w-full pt-2">
        <NavLink
          href="/dashboard"
          name="Dashboard"
          icon={<Icons.dashboard className="mr-2" />}
        />
        <NavLink
          href="/portfolio"
          name="Portfolio"
          icon={<Icons.portfolio className="mr-2" />}
        />
        <NavLink
          href="/watchlist"
          name="Watchlist"
          icon={<Icons.watchlist className="mr-2" />}
        />
        <NavLink
          href="/markets"
          name="Markets"
          icon={<Icons.trendingUp className="mr-2" />}
        />
        <NavLink
          href="/profile"
          name="Profile"
          icon={<Icons.profile className="mr-2" />}
        />
      </nav>
      <LogOut />
    </aside>
  );
}
