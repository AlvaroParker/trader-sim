// Enable "email" attribute on auth0 dashboard
// Dashboard -> Authentication -> Social -> Windows Livel -> Attributes -> Check "Email"
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // Microsoft
            connection: 'windowslive',
            scope: "openid profile email offline_access", // or AUTH0_SCOPE
        },
    })
});
