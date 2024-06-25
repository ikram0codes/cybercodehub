import dbConnect from "@/lib/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    let POST_PER_PAGE = 6;
    let category = searchParams.get("category") || "";
    let page = searchParams.get("page") || "";
    let pPage = page === "" ? 0 : page - 1;
    let sort = searchParams.get("sort") || "-createdAt";

    if (category === "All") {
      category = "";
      POST_PER_PAGE = 0;
    }
    let blogs = await Blog.find({
      category: {
        $regex: category,
        $options: "i",
      },
    })
      .skip(POST_PER_PAGE * pPage)
      .limit(POST_PER_PAGE)
      .sort(sort);
    const response = NextResponse.json({ blogs: blogs });
    response.headers.set(
      "Cache-Control",
      "public, max-age=604800, stale-while-revalidate=4000"
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export { handler as GET };
