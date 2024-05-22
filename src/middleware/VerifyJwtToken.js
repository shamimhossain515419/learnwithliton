import { jwtVerify } from "jose";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
export async function VerifyToken(req) {
  const tokenAdmin = req.headers.get("Authorization")?.split(" ")[1];
  if (tokenAdmin) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(tokenAdmin, secret);
    return decoded["payload"];
  } else {
    const cookieStore = cookies();
    const { value: token } = cookieStore.get("access_token");
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token, secret);
    return decoded["payload"];
  }
}
