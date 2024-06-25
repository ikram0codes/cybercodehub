import dbConnect from "@/lib/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const handler = async () => {
  try {
    await dbConnect();
    let blogs = await Blog.find({}, { url: 1, _id: 0, createdAt: 1 });
    return NextResponse.json({ blogs: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
export { handler as GET };
