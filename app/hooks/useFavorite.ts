"use client";

import axios from "axios";
import { useMemo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { User } from "@prisma/client";

import { useLoginModal } from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: User | null;
}

export const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  // console.log("listingId: ", listingId);
  const router = useRouter();
  const loginModal = useLoginModal();

  // hasFavorited

  const hasFavorited = useMemo(() => {
    const favoriteIds = currentUser?.favoriteIds || [];

    return favoriteIds.includes(listingId);
  }, [currentUser, listingId]);

  const [isFavorite, setIsFavorite] = useState(hasFavorited);

  useEffect(() => {
    setIsFavorite(hasFavorited);
  }, [hasFavorited]);

  // toggleFavorite

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      // VALIDATION
      if (!currentUser) {
        loginModal.onOpen();
        return toast.error("Please login first");
      }

      const nextValue = !isFavorite;

      // Instant UI update
      setIsFavorite(nextValue);

      try {
        if (nextValue) {
          await axios.post(`/api/favorites/${listingId}`);
          toast.success("Added to favorites");
        } else {
          await axios.delete(`/api/favorites/${listingId}`);
          toast.success("Removed from favorites");
        }

        router.refresh();
      } catch {
        setIsFavorite(!nextValue);
        toast.error("Something went wrong");
      }
    },
    [currentUser, isFavorite, listingId, loginModal, router],
  );

  return {
    hasFavorited: isFavorite,
    toggleFavorite,
  };
};
