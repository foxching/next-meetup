import { MongoClient } from "mongodb";
//api/meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://rechie:iloveRuthy123@cluster0.1jtk1.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollections = db.collection("meetups");
    const result = await meetupCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: "Data inserted" });
  }
}

export default handler;
