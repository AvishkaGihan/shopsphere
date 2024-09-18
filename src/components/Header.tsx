import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold transition duration-200 hover:text-amber-300"
        >
          ShopSphere
        </Link>
        <nav>
          <Link href="/" className="relative group">
            <span className="transition duration-200 group-hover:text-amber-300">
              Home
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-amber-300 transform scale-x-0 transition-transform duration-200 origin-center group-hover:scale-x-100"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
