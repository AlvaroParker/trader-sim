import { Session } from "@/common";
import { getSession } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";
import ChartsComponent from "./ChartsComponent";

export default async function Browse() {
  const session = await getSession() as Session;
  const { user: { email, name, picture } } = session;

  return (
    <div className="flex flex-none md:flex-row flex-col h-screen">
      <Sidebar email={email} name={name!} picture={picture!} default_path="/browse" />
      <div
        className="flex flex-col w-full h-full p-4 text-white items-center"
      >
        <ChartsComponent />
      </div>
    </div>
  )
}
