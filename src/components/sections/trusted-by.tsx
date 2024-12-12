import Image from "next/image";

export function TrustedBySection() {
  return (
    <div className="py-12 bg-white">
      <div className="flex justify-center opacity-60">
        <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&q=80" alt="Client 1" width={128} height={48} className="h-8 object-contain" />
        <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&q=80" alt="Client 2" width={128} height={48} className="h-8 object-contain" />
        <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&q=80" alt="Client 3" width={128} height={48} className="h-8 object-contain" />
        <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&q=80" alt="Client 4" width={128} height={48} className="h-8 object-contain" />
      </div>
    </div>
  );
}