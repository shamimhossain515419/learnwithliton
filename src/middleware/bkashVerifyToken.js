import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const BkashBerifytoekn = async (req, res, next) => {
  try {
    const { data } = await axios.post(
      process.env.bkash_grant_token_url,
      {
        app_key: process.env.bkash_api_key,
        app_secret: process.env.bkash_secret_key,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          username: process.env.bkash_username,
          password: process.env.bkash_password,
        },
      }
    );
    cookies().set("bkash_token", data.id_token);
    next();
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
