import Navbar from '@/components/Navbar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background/70 dark:bg-background-dark/70 min-h-screen grid sm:grid-cols-2">
        <section className="order-2">Image</section>
        {children}
      </main>
    </>
  );
}
