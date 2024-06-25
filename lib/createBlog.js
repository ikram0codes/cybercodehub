const createBlog = async (
  title,
  description,
  image,
  category,
  url,
  keywords,
  metaDesc,
  toast
) => {
  if (
    title === "" ||
    description === "" ||
    image === "" ||
    url === "" ||
    metaDesc === ""
  ) {
    return toast.error("Please Fill All The Credentials!");
  }
  if (category.length === 0 || keywords.length === 0) {
    return toast.error("Please Fill All The Credentials!");
  }
  if (url.includes(" ")) {
    return toast.error("Url can not contain empty Spaces!");
  }
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image: image,
          category,
          url,
          keywords,
          metaDesc,
        }),
      }
    );
    let data = await res.json();
    if (!res.ok) {
      return toast.error(data.message);
    }
    return toast.success(data.message);
  } catch (error) {
    return toast.error(error.message);
  }
};
export default createBlog;
