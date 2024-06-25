import Blog from "@/models/blog";
import { NextResponse } from "next/server";

//Single Blog
export const GET = async (req, { params }) => {
  try {
    let { url } = params;
    let blog = await Blog.findOne({ url: url });
    if (!blog) {
      return NextResponse.json({ message: "No Blog Found!" }, { status: 404 });
    }
    blog.views = blog.views + 1;
    await blog.save();
    return NextResponse.json({ blog: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

//Delete Blog
export const DELETE = async (req, { params }) => {
  try {
    let { url } = params;
    let blog = await Blog.findOne({ url: url });
    if (user.role !== "admin") {
      return NextResponse.json(
        {
          message: `User role ${user.role} is not allowed to do this action`,
        },
        { status: 400 }
      );
    }

    if (!blog) {
      return NextResponse.json({ message: "Blog Not Found!" }, { status: 404 });
    }

    await Blog.deleteOne({ url });
    return NextResponse.json(
      { message: "Blog Deleted Successfully!" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
//Like Blog
export const PUT = async (req, { params }) => {
  try {
    let url = params.url;
    let blog = await Blog.findOne({ url });

    blog.likes = blog.likes + 1;
    await blog.save();
    return NextResponse.json({ message: "Like +1" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
