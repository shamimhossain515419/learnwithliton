import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';
export async function VerifyToken(req, res) {
  const cookieStore = cookies();
  // get token
  const { value: token } = cookieStore.get('token');
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded['payload'];
}
