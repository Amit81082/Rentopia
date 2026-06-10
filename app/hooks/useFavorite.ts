"use client";

import axios from "axios";
import { useMemo, useCallback } from "react";
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

  // ======================
  // hasFavorited
  // ======================

  const hasFavorited = useMemo(() => {
    const favoriteIds = currentUser?.favoriteIds || [];

    return favoriteIds.includes(listingId);
  }, [currentUser, listingId]);

  // ======================
  // toggleFavorite
  // ======================

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      // VALIDATION
      if (!currentUser) {
        loginModal.onOpen();
        return toast.error("Please login first");
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();

        router.refresh();

        toast.success(
          hasFavorited ? "Removed from favorites" : "Added to favorites",
        );
      } catch {
        toast.error("Something went wrong");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router],
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};
