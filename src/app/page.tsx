import { getProducts } from "../lib/api";
import ProductGrid from "../components/ProductGrid";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
