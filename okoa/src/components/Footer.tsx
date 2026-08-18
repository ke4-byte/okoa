import { Heart, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-emerald-400" />
              <h3 className="font-serif text-xl font-bold">OKOA</h3>
            </div>
            <p className="mt-2 text-sm text-emerald-300">
              Empowering communities through sustainable giving and support.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-300">Contact Us</h4>
            <div className="mt-2 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +254 713 370 833
              </p>
              <a
                href="https://wa.me/254713370833"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-300">M-Pesa Details</h4>
            <div className="mt-2 rounded-lg bg-emerald-800/50 p-3 text-sm">
              <p>Send donations to:</p>
              <p className="mt-1 font-mono font-bold">+254 713 370 833</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-800 pt-4 text-center text-sm text-emerald-400">
          © {new Date().getFullYear()} OKOA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}