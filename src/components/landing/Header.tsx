import { Music } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-4 px-4 md:px-6 z-10">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">Musicalize</span>
        </Link>
      </div>
    </header>
  );
}
