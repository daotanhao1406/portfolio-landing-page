"use client";

export function ServiceHeader() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-500/10 rounded flex items-center justify-center">
          <span className="text-orange-500 text-sm">★</span>
        </div>
        <span className="text-orange-500 font-medium">SERVICES</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold">My Capabilities</h2>
    </div>
  );
}