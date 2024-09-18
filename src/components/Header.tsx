import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ShopSphere
        </Link>
        <nav>
          <Link
            href="/"
            className="hover:text-amber-300 transition duration-200"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
