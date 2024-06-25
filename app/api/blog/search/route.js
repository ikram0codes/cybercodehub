import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import dbConnect from "@/lib/database";

const handler = async (req) => {
  try {
    await dbConnect(); // Connect to MongoDB database

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const title = searchParams.get("title");

    // Use MongoDB aggregation pipeline for optimized search
    const agg = [
      {
        $search: {
          autocomplete: {
            query: title,
            path: "title",
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          title: 1,
          image: 1,
          url: 1,
          category: 1,
          description: 1,
          createdAt: 1,
        },
      },
    ];

    const blogs = await Blog.aggregate(agg);

    const response = NextResponse.json({ blogs: blogs });

    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export { handler as GET };
