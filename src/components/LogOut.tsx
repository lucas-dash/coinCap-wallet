'use client';

import { useRouter } from 'next/navigation';
import { Icons } from './Icons';
import { Button } from './ui/Button';
import { logOut } from '@/firebase/auth';

export default function LogOut() {
  const router = useRouter();

  return (
    <div>
      <Button
        variant={'ghost'}
        size={'sm'}
        className="rounded-full"
        onClick={async () => {
          await logOut();
          router.push('/');
        }}
      >
        <Icons.logout className="mr-2" />
        Log Out
      </Button>
    </div>
  );
}
