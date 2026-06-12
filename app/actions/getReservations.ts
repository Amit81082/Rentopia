// app/actions/getReservations.ts

import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    // Reservations for a listing
    if (listingId) {
      query.listingId = listingId;
    }

    // Reservations made by a user
    if (userId) {
      query.userId = userId;
    }

    // Reservations on listings owned by author
    if (authorId) {
      query.listing = {
        userId: authorId,
      };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,

      include: {
        listing: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return reservations;
  } catch (error) {
    console.log(error);

    return [];
  }
}
