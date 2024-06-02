import { Session } from "@/common";
import { getSession } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";

export default async function Browse() {
  const session = await getSession() as Session;
  const { user: { email, name, picture } } = session;

  return (
    <div className="flex flex-none md:flex-row flex-col h-screen">
      <Sidebar email={email} name={name!} picture={picture!} default_path="/browse" />
      <div className="flex-grow px-8 pt-12 bg-gray-100">
        Browser stocks!!!
      </div>
    </div>
  )
}
