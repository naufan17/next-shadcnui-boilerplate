import { NavMenu } from "@/components/nav-menu";

export default function Home() {
  return (
    <div className="flex w-full bg-transparent border-b border-slate-200 sticky top-0 z-50 justify-end py-3 px-6 md:py-5 md:px-10">
      <NavMenu />
    </div>
  );
}
