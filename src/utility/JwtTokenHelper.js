import { SignJWT, jwtVerify } from 'jose';

export async function CreateToken(email, id) {
  const ISSUER = process.env.JWT_ISSUER;
  const TIME = process.env.JWT_EXPIRATION_TIME;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const Payload = { email: email, id: id };
  let token = await new SignJWT(Payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setExpirationTime(TIME)
    .sign(secret);
  return token;
}

// verify token
