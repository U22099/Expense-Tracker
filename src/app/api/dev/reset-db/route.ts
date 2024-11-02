import { User, type UserType } from "@/lib/model";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse>{
  try{
    const deleted = await User.deleteMany({});
    console.log(`${deleted?.deletedCount} User Deleted`);
    return NextResponse.json({message: "success"});
  } catch(err){
    console.log(err);
    return NextResponse.json({message: "error"});
  }
}