import Hero from "@/components/homepage/Hero";
import ProductLibrary from "@/components/homepage/ProductLibrary";

export default function Home() {
  return (
    <main className="min-h-[80vh] bg-background-body py-8">
      <Hero />
      <ProductLibrary />
    </main>
  );
}
