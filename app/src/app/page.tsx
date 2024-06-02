import { getSession } from "@auth0/nextjs-auth0";
import Sidebar from "./components/Sidebar";
import { Session } from "@/common";


export default async function Home() {
  const session = await getSession() as Session;
  const { user: { email, name, picture } } = session;

  return (
    <div className="flex flex-none md:flex-row flex-col h-screen">
      <Sidebar email={email} name={name!} picture={picture!} default_path="/" />
      <div className="flex-grow px-8 pt-12 text-gray-100">

        <a href="/api/auth/logout" className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded">
          Click here to logout!
        </a>
        <h1>
          Hello world, this is a protected route.
          How did you get here? 🤔 Is your name {name && name}?!?! 🤯
        </h1>
      </div>
    </div>
  );
}
