import UserInfo from '@/components/UserInfo';

export default function Profile() {
  return (
    <section className="h-full bg-foreground/70 dark:bg-foreground-dark/80 rounded-xl p-1.5 sm:p-4">
      <h3 className="text-xl font-medium p-2 pb-3 text-center md:text-left">
        Your Profile
      </h3>
      <UserInfo />
    </section>
  );
}
