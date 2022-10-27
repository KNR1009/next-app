import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Error = { error: { status: number; code: string } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | Error>
) {
  if (req.method === "GET") {
    const result = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
    res.status(200).json(result);
  }
  return res.status(500).json({ error: { status: 500, code: "BAD REQUEST" } });
}
