"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

/**
 * AppLoadingGate — Wraps children with the LoadingScreen overlay.
 * Shows the loading animation on initial mount, then reveals children
 * once the page has fully loaded (window.onload) and minimum duration is met.
 */
export default function AppLoadingGate({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Check if the document has already finished loading
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Once the exit animation finishes, unmount the overlay entirely
  const handleComplete = () => {
    setShowOverlay(false);
  };

  return (
    <>
      {showOverlay && (
        <LoadingScreen
          isLoading={isLoading}
          onComplete={handleComplete}
        />
      )}
      {/* Always render children so the page loads in background */}
      <div
        style={{
          visibility: showOverlay ? "hidden" : "visible",
          opacity: showOverlay ? 0 : 1,
          transition: "opacity 0.2s ease-in",
        }}
      >
        {children}
      </div>
    </>
  );
}
