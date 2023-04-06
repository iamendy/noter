import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../../prisma/lib";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ msg: "you must be signed in" });
  }

  //get the user
  const authUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const result = await prisma.note.create({
    data: {
      content: req.body.title,
      userId: authUser.id,
    },
  });

  return res.status(200).json({ msg: "success" });
}
