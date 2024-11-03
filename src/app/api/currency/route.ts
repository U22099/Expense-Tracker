import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose, { HydratedDocument } from "mongoose";
import { connectToDb } from "@/lib/utils";
import { User, type UserType } from "@/lib/model";
import { type UserObj } from "@/store";

const getUser = (): UserObj | null => {
  const user_session = cookies().get("session")?.value;
  if (!user_session) return null;
  const decodedCookie = decodeURIComponent(user_session);
  const user = JSON.parse(decodedCookie);
  return user;
}

const authenticate = async (): Promise <UserType & HydratedDocument <UserType> | null> => {
  const user = getUser();
  if (!user) {
    console.log(" No session ");
    return null;
  };
  await connectToDb();
  const _id = new mongoose.Types.ObjectId(user.id);
  const userObj = await User.findOne({ _id });
  return userObj;
}

export const GET = async (): Promise <NextResponse> => {
  try {
    const user = await authenticate();
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    return NextResponse.json({ data: user.currency }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export const POST = async (req: Request): Promise <NextResponse> => {
  try {
    const user = await authenticate();

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const { data }: { data: string } = await req.json();

    if (!data) return NextResponse.json({ message: "Empty Data" }, { status: 404 });

    user.currency = data;
    await User.updateOne({ _id: user._id }, { $set: { currency: user.currency } });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}