"use client";
import { useRouter } from "next/navigation";

export const RefreshButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-sky-500 rounded-md text-white active:bg-sky-700 px-3 py-2"
      onClick={() => router.refresh()}
    >
      REFRESH
    </button>
  );
};
