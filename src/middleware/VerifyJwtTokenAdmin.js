import { jwtVerify } from 'jose';

export const dynamic = 'force-dynamic';
export async function VerifyJwtTokenAdmin(req, res) {
  const authHeader = await req.headers.authorization;
   console.log("tokne")
   return authHeader
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded['payload'];
}
