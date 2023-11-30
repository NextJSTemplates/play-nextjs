import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { getXataClient } from "@/utils/xata.codegen.server";

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password } = body;

  const xata = getXataClient();

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await xata.db.nextauth_users.filter({ email }).getFirst();

  if (exist) {
    return new NextResponse("Email already exist", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await xata.db.nextauth_users.create({
    email,
    password: hashedPassword,
    name,
  });

  return NextResponse.json(user);
}
