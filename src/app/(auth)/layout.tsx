export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h2>Hello navbar</h2>
      </nav>
      {children}
    </>
  );
}
