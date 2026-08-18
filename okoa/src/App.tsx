import { useState } from "react";
import { DonationForm } from "@/components/DonationForm";
import { DonationStats } from "@/components/DonationStats";
import { DonationHistory } from "@/components/DonationHistory";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Donation, initialDonations } from "@/types/donation";

export default function App() {
  const [donations, setDonations] = useState<Donation[]>(initialDonations);

  const addDonation = (donation: Donation) => {
    setDonations((prev) => [donation, ...prev]);
  };

  return (
    <div className="min-h-screen bg-amber-50/50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <DonationStats donations={donations} />
            <DonationHistory donations={donations} />
          </div>
          <div className="space-y-8">
            <DonationForm onDonate={addDonation} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}