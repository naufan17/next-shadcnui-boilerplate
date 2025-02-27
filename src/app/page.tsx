import { NavMenu } from "@/components/nav-menu";

export default function Home() {
  return (
    <div className="flex w-full bg-transparent border-b border-slate-200 sticky top-0 z-50 justify-end py-2 px-4 md:py-3 md:px-6">
      <NavMenu />
    </div>
  );
}
