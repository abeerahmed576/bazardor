import Hero from "@/components/homepage/Hero";
import ProductLibrary from "@/components/homepage/ProductLibrary";

export default function Home() {
  return (
    <main className="flex-1 bg-background-body py-8">
      <Hero />
      <ProductLibrary />
    </main>
  );
}
