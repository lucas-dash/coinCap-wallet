'use client';

import { useRouter } from 'next/navigation';
import { Icons } from './ui/Icons';
import { Button } from './ui/button';
import { logOut } from '@/firebase/auth';
import { useToast } from './ui/use-toast';

export default function LogOut() {
  const router = useRouter();

  const { toast } = useToast();

  return (
    <div>
      <Button
        variant={'ghost'}
        size={'sm'}
        className="rounded-full"
        onClick={async () => {
          await logOut();
          router.push('/');
          toast({
            title: 'You are log out from your account.',
          });
        }}
      >
        <Icons.logout className="mr-2" />
        Log Out
      </Button>
    </div>
  );
}
