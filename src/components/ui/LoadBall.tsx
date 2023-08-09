export default function LoadBall() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="rounded-full w-20 h-20 bg-foreground-dark/80 relative animate-spin duration-1500">
        {/* <div className="w-3 h-3 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
        <div className="w-3 h-3 rounded-full bg-primary absolute top-3 left-1/2  -translate-x-1/2"></div>
        <div className="w-3 h-3 rounded-full bg-primary absolute bottom-3 left-1/2 -translate-x-1/2"></div>
        <div className="w-3 h-3 rounded-full bg-primary absolute top-1/2 left-3 -translate-y-1/2 "></div>
        <div className="w-3 h-3 rounded-full bg-primary absolute top-1/2 right-3 -translate-y-1/2 "></div>
      </div>
    </div>
  );
}
