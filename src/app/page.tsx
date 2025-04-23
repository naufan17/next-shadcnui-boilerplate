import { Navbar } from "@/components/navbar";
import { Heroes } from "@/components/heroes";
import { Features } from "@/components/features";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";
import { Banner } from "@/components/banner";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Heroes />
      <Features />
      <FrequentlyAskedQuestions />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
}
