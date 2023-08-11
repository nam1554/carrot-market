import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(`it works! global middleware!`);
  console.log(req.nextUrl.pathname);
  if (req.nextUrl.pathname.startsWith("/products")) {
    console.log(`this is products ONLY middleware!`);
  }
}
