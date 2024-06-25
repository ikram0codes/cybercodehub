import { toast } from "react-hot-toast";

const emailSub = async (email) => {
  if (email === "") {
    return toast.error("Please Write Your Email!");
  }
  try {
    let res = await fetch(`http://localhost:3000/api/email?email=${email}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return toast.error(data.message);
    }

    return toast.success(data.message);
  } catch (error) {
    return console.log(error);
  }
};
export default emailSub;
