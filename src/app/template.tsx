import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[fade-in_0.5s_ease-out_both]">
      {children}
    </div>
  );
}