export interface Donation {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  phone: string;
}

export const initialDonations: Donation[] = [
  {
    id: "1",
    name: "John Mwangi",
    amount: 5000,
    category: "Education",
    date: "2024-01-15T10:30:00Z",
    phone: "+254712345678",
  },
  {
    id: "2",
    name: "Sarah Wanjiku",
    amount: 2500,
    category: "Healthcare",
    date: "2024-01-14T14:20:00Z",
    phone: "+254798765432",
  },
  {
    id: "3",
    name: "David Otieno",
    amount: 10000,
    category: "General",
    date: "2024-01-13T09:15:00Z",
    phone: "+254723456789",
  },
  {
    id: "4",
    name: "Mary Achieng",
    amount: 3000,
    category: "Food",
    date: "2024-01-12T16:45:00Z",
    phone: "+254734567890",
  },
  {
    id: "5",
    name: "Peter Kipchoge",
    amount: 7500,
    category: "Shelter",
    date: "2024-01-11T11:00:00Z",
    phone: "+254745678901",
  },
];