"use client";

import { useEffect } from "react";
import { MdErrorOutline } from "react-icons/md";

import Button from "./components/Button";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="
        h-[70vh]
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
    >
      <MdErrorOutline size={80} />

      <h1
        className="
          text-2xl
          font-bold
        "
      >
        Something went wrong
      </h1>

      <p
        className="
          text-neutral-500
          text-center
        "
      >
        {error.message}
      </p>

      <div className="w-40">
        <Button label="Try Again" onClick={reset} />
      </div>
    </div>
  );
};

export default Error;
