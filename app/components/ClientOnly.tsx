"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  // 👉 ADDED: Track whether component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  // 👉 ADDED: Set mounted state after first client render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 👉 ADDED: Prevent rendering on server
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
