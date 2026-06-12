// app/api/listings/[listingId]/route.ts

import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
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

    const { listingId } = await params;

    if (!listingId) {
      return NextResponse.json(
        {
          error: "Listing Id is required",
        },
        { status: 400 },
      );
    }

  const deletedListing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  if (  deletedListing.count === 0) {
    return NextResponse.json(
      {
        error: "Listing not found",
      },
      {
        status: 404,
      },
    );
  }

    return NextResponse.json(deletedListing);
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
