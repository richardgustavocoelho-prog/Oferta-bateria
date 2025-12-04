"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { Music, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-10 md:py-12 border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="mb-4">
          <Music className="h-8 w-8 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground tracking-wider">Musicalize</h3>
        
        <div className="flex items-center gap-4 my-5 text-sm text-muted-foreground">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <span className="text-border">·</span>
          <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
            Termos de Uso
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Instagram className="h-4 w-4" />
          <a href="https://www.instagram.com/musicalize_ofc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            @musicalize_ofc
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground/70">
          © {year || new Date().getFullYear()} Musicalize. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
