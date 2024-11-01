import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/model";

interface UserObj {
  id: string;
  name: string;
  image: string;
  email: string;
}

interface UserType {
  _id: mongoose.Types.ObjectId;
  name: string;
  image: string;
  email: string;
}

const getUser = (): UserObj | null => {
  const user_session = cookies().get("session")?.value;
  if (!user_session) return null;
  const decodedCookie = decodeURIComponent(user_session);
  const user = JSON.parse(decodedCookie);
  return user;
}

const authenticate = async (): Promise<UserType | null> => {
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


export const GET = () => {
    try {
    const user = getUser();
    
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    
    return NextResponse.json({ user }, { status: 200 });
    
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export const POST = async (req: Request): Promise <NextResponse> => {
  try {
    const user = await authenticate();
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    const { username, image }: { username: string, image: string } = req.body.data;
    user.username = username;
    user.image = image;
    await user.save();

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}