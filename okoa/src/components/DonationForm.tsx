import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone } from "lucide-react";
import { Donation } from "@/types/donation";

interface DonationFormProps {
  onDonate: (donation: Donation) => void;
}

const MPESA_NUMBER = "+254713370833";
const WHATSAPP_LINK = `https://wa.me/254713370833?text=${encodeURIComponent(
  "Hello OKOA! I would like to make a donation."
)}`;

export function DonationForm({ onDonate }: DonationFormProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donation: Donation = {
      id: Date.now().toString(),
      name: name || "Anonymous",
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
      phone: phone || MPESA_NUMBER,
    };
    onDonate(donation);
    setName("");
    setAmount("");
    setPhone("");
    setCategory("General");
  };

  return (
    <Card className="shadow-md border-emerald-100">
      <CardHeader className="bg-emerald-700 text-white rounded-t-xl">
        <CardTitle className="font-serif text-2xl">Make a Donation</CardTitle>
        <CardDescription className="text-emerald-200">
          Send via M-Pesa to {MPESA_NUMBER}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 rounded-xl bg-emerald-50 p-4 text-center">
          <p className="text-sm text-emerald-700">M-Pesa Paybill/Till Number</p>
          <p className="font-mono text-2xl font-bold text-emerald-900">{MPESA_NUMBER}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input
              id="amount"
              type="number"
              min="1"
              placeholder="e.g. 500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Donation Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General Fund</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Food">Food & Nutrition</SelectItem>
                <SelectItem value="Shelter">Shelter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Your Phone Number (optional)</Label>
            <Input
              id="phone"
              placeholder="+254..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            <Phone className="mr-2 h-4 w-4" />
            Confirm Donation
          </Button>
        </form>

        <div className="mt-6 border-t border-emerald-100 pt-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat with us on WhatsApp
          </a>
        </div>
      </CardContent>
    </Card>
  );
}