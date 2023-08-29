import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2>Admin Page - welcome back {session?.user.username}</h2>;
  }
  // console.log(session)
  return <div>please login to see this page</div>;
};

export default page;
