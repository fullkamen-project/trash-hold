import Link from 'next/link';
import Image from 'next/image';

export function PlatformLogo() {
  return (
    <div className="flex-shrink-0 animate-[fade-in_0.5s_ease-out]">
      <Link href="/" className="block transition-transform hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
        <Image 
          src="/images/cta-logo.svg" 
          alt="ЦТА Лого" 
          width={160} 
          height={56} 
          priority
        />
      </Link>
    </div>
  );
}