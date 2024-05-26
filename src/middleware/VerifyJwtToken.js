import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function VerifyToken(req) {
  try {
    // Get the Authorization header and extract the token
    const tokenAdmin = await req?.headers?.get("Authorization")?.split(" ")[1];
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (tokenAdmin) {
      // Verify the token from the Authorization header
      const decoded = await jwtVerify(tokenAdmin, secret);
      return decoded.payload;
    } else {
      console.log("first");
      // If no Authorization header, check cookies for the token
      const cookieStore = cookies();
      const tokenCookie = cookieStore.get("token");
      console.log(tokenCookie);

      if (!tokenCookie) {
        throw new Error("No token provided");
      }

      const { value: token } = tokenCookie;

      // Verify the token from the cookie
      const decoded = await jwtVerify(token, secret);
      console.log(decoded);
      return decoded?.["payload"];
    }
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return error?.message; // or throw an error, depending on your error handling strategy
  }
}
