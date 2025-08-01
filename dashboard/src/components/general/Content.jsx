import useUser from "@/hooks/useUser";

export default function Content() {
  const { user, isLoggedIn } = useUser();

  return (
    <main className="border p-2 w-full">
      <h2 className="text-2xl">Homepage</h2>
      {isLoggedIn && <div className="text-blue-500">Welcome {user.name}</div>}
    </main>
  );
}
