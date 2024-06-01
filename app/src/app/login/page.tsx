import LoginForm from "./loginForm";

/*
server actions: they can be called from the client
api actions: they can be called from the client
authentication is done using server actions (check nextjs docs)
*/

export default async function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
