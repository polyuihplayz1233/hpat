"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { links } from "@/config";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [hideBanner, setHideBanner] = useState(true);

  return (
    <>
      <Banner hide={hideBanner} setHide={setHideBanner} />
      <header
        className={cn(
          "h-20 w-full border-b-2 border-slate-200 px-4",
          !hideBanner ? "mt-20 sm:mt-16 lg:mt-10" : "mt-0"
        )}
      >
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          {/* Add your static navigation or logo here */}
          <div>
            <Link href="/">
              <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
            </Link>
          </div>
          <div>
            {/* Mock login button or user info */}
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
