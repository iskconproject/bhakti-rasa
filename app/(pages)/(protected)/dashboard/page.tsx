"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <main className="w-full h-[500px] flex justify-center items-center flex-col">
      <h1 className="text-4xl">Welcome to Bhakti Rasa</h1>

      <Button onClick={() => router.push("/order")} className="mt-8">
        Place a Prasadam Order
      </Button>
    </main>
  );
};

export default Dashboard;
