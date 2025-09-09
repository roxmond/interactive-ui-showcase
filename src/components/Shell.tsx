"use client";
import Link from "next/link";
import { ReactNode } from "react";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 p-4 bg-base-200 border-r">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            <Link href="/">Interactive UI Showcase</Link>
          </h2>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link href="/form">Form</Link>
            </li>
            <li>
              <Link href="/api-demo">API Call</Link>
            </li>
            <li>
              <Link href="/event">Event Listener</Link>
            </li>
            <li>
              <Link href="/list">List (Pagination)</Link>
            </li>
            <li>
              <Link href="/infinite">List (Infinite Scroll)</Link>
            </li>
            <li>
              <Link href="/skeleton">Skeleton Loader</Link>
            </li>
            <li>
              <Link href="/parent-child">Memo (Parent/Child)</Link>
            </li>
            <li>
              <Link href="/posts">Dynamic Route</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
