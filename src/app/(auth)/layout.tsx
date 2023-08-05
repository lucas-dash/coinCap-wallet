import Navbar from '@/components/Navbar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background dark:bg-background-dark min-h-[calc(100vh-48px)] grid sm:grid-cols-2">
        <section className="order-2">Image</section>
        {children}
      </main>
    </>
  );
}
