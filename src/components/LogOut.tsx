import { Icons } from './Icons';
import { Button } from './ui/Button';

export default function LogOut() {
  return (
    <div>
      <Button variant={'ghost'} size={'sm'} className="rounded-full">
        <Icons.logout className="mr-2" />
        Log Out
      </Button>
    </div>
  );
}
