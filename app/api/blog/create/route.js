import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, image, category, url, keywords, metaDesc } =
      body;
    if (
      title === "" ||
      description === "" ||
      category === "" ||
      url === "" ||
      image === "" ||
      metaDesc === ""
    ) {
      return NextResponse.json(
        { message: "Please Fill All The Credentials!" },
        { status: 400 }
      );
    }
    if (category.length > 3) {
      return NextResponse.json(
        { message: "Categories Should Not Be more than 3" },
        { status: 400 }
      );
    }

    let blog = await Blog.findOne({ url: url });
    if (blog) {
      return NextResponse.json(
        { message: "Please use a different Url!" },
        { status: 400 }
      );
    }
    let titleMatch = await Blog.findOne({ title: title });
    if (titleMatch) {
      return NextResponse.json(
        { message: "Please use a different Title!" },
        { status: 400 }
      );
    }
    blog = await Blog.create({
      title,
      keywords,
      description,
      category,
      url,
      metaDesc,
      image,
    });
    const response = NextResponse.json(
      { message: "Blog Published Successfully!", blog: blog },
      { status: 201 }
    );
    response.headers.set("Cache-Control", "no-store");
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
