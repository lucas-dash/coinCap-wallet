import Navbar from '@/components/layouts/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className=" pt-14">
        <section className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Create your own crypto portfolio!
          </h1>
          <Button asChild variant={'secondary'}>
            <Link href={'/dashboard'}>Get Started</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
