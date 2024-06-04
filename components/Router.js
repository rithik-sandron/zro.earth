"use client";

import Link from "next/link";

export default function Router({ children, url, className = "" }) {
  return (
    <Link className={className} href={`${url}`}>
      {children}
    </Link>
  );
}
