const singleBlog = async (url, cache) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${url}`,
      {
        method: "GET",
        cache: cache || "default",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    if (!res.ok) {
      throw new Error("Blog Not Found.");
    }
    return data.blog;
  } catch (error) {
    throw new Error("Blog Not Found.");
  }
};

export default singleBlog;
