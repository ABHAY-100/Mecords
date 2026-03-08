"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Archive, FileText, ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-zinc-300/20 backdrop-blur-md">
      <div className="flex h-16 items-center px-5 pt-1 max-md:h-14 max-sm:px-4 max-[400px]:justify-center">
        <div className="flex">
          <Link
            href="/"
            className="flex items-center space-x-2 font-clashgrotesk"
          >
            <span className="font-medium text-[30px] font-clashgrotesk max-md:text-[27px] max-sm:mr-2">
              {"< Mecords />"}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-[6px] font-clashgrotesk"
                >
                  <span className="pt-[3px] text-[15px] max-[400px]:hidden">
                    Tools
                  </span>
                  <ChevronDown className="h-3 w-3 opacity-50 pt-0.5 ml-0.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="font-clashgrotesk border-zinc-200 bg-white">
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.dropbox.com/scl/fo/qquvekt18178myxhrtmdz/AF5QbQ2G4Il7SVuc8GYx-cs?rlkey=bx9dl3nyf7kisnxgj87aqv1xr&st=pe7jd8aq&dl=0"
                    target="_blank"
                    rel="noreferrer"
                    className="flex cursor-pointer items-center gap-2 font-medium"
                  >
                    <Archive className="h-3 w-3" />
                    Archive
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.itspdftools.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex cursor-pointer items-center gap-2 font-medium"
                  >
                    <FileText className="h-3 w-3" />
                    PDF Tools
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="https://github.com/ABHAY-100/mecords"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-[6px] font-clashgrotesk"
              >
                <Github className="h-3 w-3 min-[400px]" />
                <span className="pt-[3px] text-[15px] max-[400px]:hidden">
                  GitHub
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
