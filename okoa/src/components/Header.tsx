import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-emerald-700 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 shadow-md">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold tracking-tight">OKOA</h1>
              <p className="text-sm text-emerald-200">Transforming Lives Through Generosity</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-lg bg-emerald-600/50 px-4 py-2 text-sm font-medium">
              M-Pesa: +254 713 370 833
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}