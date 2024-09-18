import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-64 mb-4 overflow-hidden group">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <h2 className="text-lg font-bold mt-2 truncate">{product.title}</h2>
      <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      <Link
        href={`/products/${product.id}`}
        className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded mt-3 inline-block hover:bg-indigo-700 transition duration-200 transform hover:scale-105"
      >
        View Details
      </Link>
    </div>
  );
}
