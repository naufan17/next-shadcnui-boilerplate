import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";
import { Testimonials } from "@/components/testimonials";
import { Heroes } from "@/components/heroes";
import { Product } from "@/components/product";
import { Jumbotron } from "@/components/jumbotron";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Heroes />
      <Product />
      <FrequentlyAskedQuestions />
      <Jumbotron />
      <Testimonials />
      <Footer />
    </div>
  );
}
