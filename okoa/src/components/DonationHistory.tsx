import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Donation } from "@/types/donation";

interface DonationHistoryProps {
  donations: Donation[];
}

const categoryColors: Record<string, string> = {
  General: "bg-emerald-100 text-emerald-800",
  Education: "bg-blue-100 text-blue-800",
  Healthcare: "bg-red-100 text-red-800",
  Food: "bg-amber-100 text-amber-800",
  Shelter: "bg-purple-100 text-purple-800",
};

export function DonationHistory({ donations }: DonationHistoryProps) {
  return (
    <Card className="shadow-md border-emerald-100">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-emerald-900">
          Recent Donations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {donations.length === 0 ? (
          <div className="rounded-xl bg-amber-50 p-8 text-center">
            <p className="text-amber-800">No donations yet. Be the first to give!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {donations.slice(0, 8).map((donation) => (
              <div
                key={donation.id}
                className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white p-4 shadow-sm"
              >
                <div>
                  <p className="font-medium text-emerald-900">{donation.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(donation.date).toLocaleDateString("en-KE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={categoryColors[donation.category] || categoryColors.General}>
                    {donation.category}
                  </Badge>
                  <span className="font-bold text-emerald-700">
                    KES {donation.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}