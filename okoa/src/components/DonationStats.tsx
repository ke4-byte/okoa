import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Donation } from "@/types/donation";

interface DonationStatsProps {
  donations: Donation[];
}

export function DonationStats({ donations }: DonationStatsProps) {
  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  const categories = donations.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + d.amount;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(categories).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#059669", "#f59e0b", "#3b82f6", "#ef4444", "#8b5cf6"];

  return (
    <Card className="shadow-md border-emerald-100">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-emerald-900">
          Donation Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `KES ${Number(value).toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Total Raised</p>
              <p className="font-serif text-3xl font-bold text-emerald-900">
                KES {total.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="text-sm text-amber-700">Total Donations</p>
              <p className="font-serif text-3xl font-bold text-amber-900">
                {donations.length}
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-sm text-blue-700">Average Donation</p>
              <p className="font-serif text-3xl font-bold text-blue-900">
                KES {donations.length > 0 ? Math.round(total / donations.length).toLocaleString() : 0}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}