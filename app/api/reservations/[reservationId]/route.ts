// app/api/reservations/[reservationId]/route.ts

import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<IParams> },
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { reservationId } = await params;

    if (!reservationId) {
      return NextResponse.json(
        {
          error: "Reservation Id is required",
        },
        { status: 400 },
      );
    }


    const deletedReservation = await prisma.reservation.deleteMany({
      where: {
        id: reservationId,

        OR: [
          {
            userId: currentUser.id,
          },
          {
            listing: {
              userId: currentUser.id,
            },
          },
        ],
      },
    });

    return NextResponse.json(deletedReservation);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
