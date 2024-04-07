import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className="container p-4 bg-red-300 h-full">
        <Button className="bg-yellow-600" variant="outline">
          helllo
        </Button>
      </div>
    </MainLayout>
  );
}
