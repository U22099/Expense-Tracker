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
  if (!user_session) return;
  const decodedCookie = decodeURIComponent(user_session);
  const user = JSON.parse(decodedCookie);
  return user;
}

const authenticate = async (): Promise<UserType | null> => {
  const user = getUser();
  if (!user) {
    console.log(" No session ");
    return;
  };
  await connectToDb();
  const _id = mongoose.Types.ObjectId(user.id);
  const userObj = await User.findOne({ _id });
  return userObj;
}

export const GET = async (): Promise<NextResponse> => {
  try{
    const user: UserType = await authenticate();
    if(!user) return NextResponse.json({ message: "User not found"}, {status: 404});
    return NextResponse.json({ data: user.expenses.data }, {status: 200});
  } catch(e) {
    console.log(e);
    return NextResponse.json({message: "Error"}, {status: 500});
  }
}

export const POST = async (req: Request): Promise<NextResponse> => {
  try{
    const user: UserType = await authenticate();
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    const data = req.body.data;
    user.expenses.data = data;
    await user.save();
    
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}