import { Inter } from "@next/font/google";
import Navbar from "./navbar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <main className="bg-zinc-900 h-screen w-screen">
      <Navbar />
      <main className="container mt-4 sm:mt-16">{children}</main>
    </main>
  );
}
