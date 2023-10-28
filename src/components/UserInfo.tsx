'use client';

import { useAuthContext } from '@/hooks/useAuth';
import { Button } from './ui/button';
import { User } from 'firebase/auth';
import { deleteUserAccount } from '@/firebase/auth';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { Icons } from './ui/Icons';

export default function UserInfo() {
  const user = useAuthContext();
  const router = useRouter();
  const { toast } = useToast();

  async function deleteAccount(user: User) {
    const { error } = await deleteUserAccount(user);

    if (!error) {
      router.push('/');
      toast({
        title: 'Your account was deleted.',
      });
    } else {
      console.log(error);
      toast({
        title: 'Something went wrong!',
        variant: 'destructive',
      });
    }
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="w-full flex justify-center">
        <div className="h-32 w-32 border border-slate-900 dark:border-slate-200 rounded-full flex items-center justify-center">
          <Icons.profile className="h-12 w-12" />
        </div>
      </div>

      <article className="bg-foreground dark:bg-foreground-dark rounded-xl px-2 py-3 shadow-[0_2px_10px_-3px] shadow-shadow/60 dark:shadow-shadow/60 flex flex-col gap-3 2xl:max-w-6xl 2xl:mx-auto 2xl:w-[660px]">
        {/* <section>
          <h6 className="font-semibold text-lg pb-1 pl-1.5">App</h6>

          <ul className="flex flex-col bg-zinc-200 dark:bg-background-dark rounded-lg">
            <li className="flex items-center justify-between border-b border-foreground p-2">
              <p className="font-medium">Launch Screen</p>
              <p className="text-typography-detail dark:text-typography-detail-dark">
                Markets
              </p>
            </li>
          </ul>
        </section> */}

        <section>
          <h6 className="font-semibold text-lg pb-1 pl-1.5">
            Security & Privacy
          </h6>

          <ul className="flex flex-col bg-zinc-200 dark:bg-background-dark rounded-lg">
            <li className="flex items-center justify-between gap-1 flex-wrap p-2 border-b border-foreground">
              <p className="font-medium">E-mail address:</p>
              <p className="text-typography-detail dark:text-typography-detail-dark">
                {user?.email}
              </p>
            </li>

            <li className="flex items-center justify-between p-2 border-b border-foreground">
              <p className="font-medium">Verified</p>
              <p className="text-typography-detail dark:text-typography-detail-dark">
                {user?.emailVerified ? 'Yes' : 'No'}
              </p>
            </li>

            <li className="flex items-center justify-between p-2 border-b border-foreground">
              <p className="font-medium">Change password</p>
              <Button
                variant={'secondary'}
                size={'sm'}
                className="rounded-xl min-w-[80px] "
              >
                Change
              </Button>
            </li>

            <li className="flex items-center justify-between p-2">
              <p className="font-medium">Delete account</p>

              {/* todo: modal to confirm delete account */}
              <Button
                variant={'destructive'}
                size={'sm'}
                className="rounded-xl min-w-[80px]"
                onClick={() => deleteAccount(user!)}
              >
                Delete
              </Button>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
