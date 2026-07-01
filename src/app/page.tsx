import { fetchProducts } from "@/lib/checkout";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const products = await fetchProducts();
  return <HomeClient products={products} />;
}
