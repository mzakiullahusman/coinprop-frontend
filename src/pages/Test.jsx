import React from "react";

export default function Background() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[rgba(2,6,33,1)] to-[rgba(2,6,33,1)] overflow-hidden">
      {/* Top-right blurry circle */}
      <div
        className="absolute top-0 right-0 w-3/5 h-40 bg-[rgba(35,97,145,1)] opacity-50 blur-3xl"
        style={{
          clipPath:
            "polygon(100% 0, 90% 20%, 80% 40%, 70% 60%, 50% 80%, 0 100%, 100% 100%)",
        }}
      ></div>

      {/* Bottom-left blurry circle */}
      <div className="absolute bottom-0 left-0 w-1/4 h-60 bg-[rgba(35,97,145,1)] opacity-50 blur-3xl"></div>

      {/* Bottom-right blurry circle */}
      <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-[rgba(35,97,145,1)] opacity-50 blur-3xl"></div>
    </div>
  );
}
