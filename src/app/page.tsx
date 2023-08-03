import { ModeToggle } from '@/components/ModeToggle';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <nav className="flex justify-end container">
        <ModeToggle />
      </nav>
      <section className="flex justify-center">
        <h1 className="text-3xl font-bold">
          Create your own crypto portfolio!
        </h1>
      </section>
    </main>
  );
}
