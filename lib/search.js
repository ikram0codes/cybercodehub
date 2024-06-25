const search = async (title) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/search?title=${title}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("An Error Occurred, Please Refresh The Page");
    }

    const data = await res.json();
    console.log(data.blogs);
    return data.blogs;
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    throw new Error("An Error Occurred, Please Refresh The Page.");
  }
};

export default search;
