import LoadBall from '@/components/ui/LoadBall';

export default function AuthLoading() {
  return (
    <div className="fixed inset-0">
      <LoadBall />;
    </div>
  );
}
