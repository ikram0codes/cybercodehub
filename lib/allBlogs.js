const allBlogs = async (page, category, sort) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/all?page=${page}&category=${category}&sort=${sort}`,
      {
        method: "GET",
        cors: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("An Error Occured, Please Refresh The Page.");
    }
    let data = await res.json();
    return data.blogs;
  } catch (error) {
    throw new Error("No Internet, Check Your Connection.");
  }
};

export default allBlogs;
