"use client";

import { useEffect } from "react";

export default function SuccessClient() {
  useEffect(() => {
    // Revalidate the Better Auth JWT session in the background
    // This allows the user to see their "Premium" status immediately
    // upon returning to the dashboard without needing to re-login.
    fetch("/api/auth/refresh")
      .then(res => res.json())
      .then(data => {
        if (data.revalidated) {
          console.log("Session successfully refreshed!");
        }
      })
      .catch(err => console.error("Failed to refresh session", err));
  }, []);

  return null;
}
