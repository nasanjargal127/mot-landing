import Image from "next/image";
import Link from "next/link";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className=" fixed w-screen h-screen z-50 bg-darkSecondary flex flex-col justify-center items-center">
      <Image src={"/images/logo/motfxLogoLight.png"} alt="Logo" width={150} height={130} className="mb-8" />
      <div className="flex bg-darkSecondary">
        <p className="text-primary text-5xl font-extrabold">404 </p>{" "}
        <p className="text-5xl font-extrabold ">-PAGE IS NOT FOUND</p>
      </div>
      <Link href="/" className="mt-4 text-primary">
        Click here to go back
      </Link>
    </div>
  );
};
export default page;
