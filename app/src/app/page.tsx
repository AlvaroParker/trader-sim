import { getSession } from "@auth0/nextjs-auth0";
import Sidebar from "./components/Sidebar";

interface Session {
  user: {
    email: string;
    name: string;
    picture: string;
  }
}

export default async function Home() {
  const session = await getSession() as Session;
  const { user: { email, name, picture } } = session;

  return (
    <div className="flex flex-none md:flex-row flex-col h-screen">
      <div className="z-50 md:w-64">
        <Sidebar email={email} name={name} picture={picture} />
      </div>
      <div className="flex-grow px-8 pt-12 bg-gray-100">

        <a href="/api/auth/logout" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
