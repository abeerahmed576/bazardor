import Hero from "@/components/homepage/Hero";
import ProductLibrary from "@/components/ProductLibrary";

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-background-body py-8">
      <Hero />
      <ProductLibrary />
    </div>
  );
}
