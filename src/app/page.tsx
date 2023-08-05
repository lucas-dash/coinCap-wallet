import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex justify-center">
        <section>
          <h1 className="text-3xl font-bold">
            Create your own crypto portfolio!
          </h1>
        </section>
      </main>
    </div>
  );
}
