"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SuccessClient() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    const refreshSession = async () => {
      try {
        const { data: session } = await authClient.getSession();
        if (session?.user) {
          // Force Better-Auth to re-sign the JWT cookie with latest DB data 
          // (which now has isPremium: true from the Stripe webhook)
          await authClient.updateUser({ name: session.user.name });
          console.log("JWT Session successfully refreshed with Premium status!");
          
          // Force a hard navigation so layouts re-read the new cookie
          window.location.href = "/home";
        }
      } catch (err) {
        console.error("Failed to refresh JWT", err);
      } finally {
        setIsRefreshing(false);
      }
    };
    refreshSession();
  }, []);

  if (isRefreshing) {
    return <p className="text-sm font-bold mt-4 animate-pulse text-[#1C1611]/70">Upgrading your account...</p>;
  }
  return null;
}
