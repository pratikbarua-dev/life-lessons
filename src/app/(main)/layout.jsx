import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MouseGlow from "@/components/MouseGlow";

export const metadata = {
  title: "Digital Life Lessons | Preserve Your Wisdom",
  description:
    "Your experiences are the blueprints for the next generation. Document, reflect, and share the lessons that truly matter.",
};

export default function MainLayout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-neutral-950 text-white"
      data-theme="dark"
    >
      <SmoothScrollProvider>
        <MouseGlow />
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </SmoothScrollProvider>
    </div>
  );
}
