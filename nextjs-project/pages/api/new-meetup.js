// POST /api/new-meetup
import { insertMeetup } from "../../util/connection";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const result = await insertMeetup(data);
    res.status(201).json({ message: "Meetup inserted successfully." });
  }
}

export default handler;
