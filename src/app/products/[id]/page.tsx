import Image from "next/image";
import { getProduct } from "../../../lib/api";

export const revalidate = 3600; // Revalidate every hour

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 relative h-96 mb-4 md:mb-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
