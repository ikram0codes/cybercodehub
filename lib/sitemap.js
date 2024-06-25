const sitemapFunc = async () => {
  try {
    let res = await fetch(`http://localhost:3000/api/blog/sitemap`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    return data.blogs;
  } catch (error) {
    return console.log(error);
  }
};

export default sitemapFunc;
