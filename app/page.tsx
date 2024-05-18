import Image from "next/image";
import Calculator from "@/app/components/calcuator/calcuator"
import Header from "@/app/components/header/header"
import Footer from "@/app/components/footer/footer"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex flex-1 justify-center items-center bg-gray-100">
      <Calculator />
    </main>
    <Footer />
  </div>
  );
}
