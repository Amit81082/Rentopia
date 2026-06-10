"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
        md:block
        cursor-pointer
        "
    >
      <Image src="/images/logo2.png" width={100} height={100} alt="Logo" className="w-24 h-auto" />
    </div>
  );
};

export default Logo;
