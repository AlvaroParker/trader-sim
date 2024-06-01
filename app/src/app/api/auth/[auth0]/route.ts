import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      scope: "openid profile email offline_access", // or AUTH0_SCOPE
    }
  })
});
