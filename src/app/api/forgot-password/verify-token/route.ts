import { prisma } from "@/utils/prismaDB";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { token } = body;

  if (!token) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      passwordResetToken: token,
      passwordResetTokenExp: {
        gte: new Date(),
      },
    },
  });

  if (!user) {
    return new NextResponse("Invalid Token or Token Expired", { status: 400 });
  }

  return NextResponse.json(user);
};
