import { MongoClient, ObjectId } from "mongodb";

const password = "";
const collectionName = "meetups";

function percentEncode(string) {
  let encoded = "";
  string.split("").forEach(function (char) {
    encoded += "%" + char.charCodeAt(0).toString(16).toUpperCase();
  });
  return encoded;
}

function getConnection() {
  return MongoClient.connect("");
}

export async function insertMeetup(meetupData) {
  const conn = await getConnection();
  const db = conn.db();
  const meetupsCollection = db.collection(collectionName);
  return meetupsCollection.insertOne(meetupData).then((value) => {
    conn.close();
    return value;
  });
}

export async function findAllMeetups() {
  const conn = await getConnection();
  const db = conn.db();
  return db
    .collection(collectionName)
    .find()
    .toArray()
    .then((value) => {
      conn.close();
      return value;
    });
}

export async function findAllMeetupsIds() {
  const conn = await getConnection();
  const db = conn.db();
  return db
    .collection(collectionName)
    .find({}, { _id: 1, title: 0, address: 0, description: 0 })
    .toArray()
    .then((value) => {
      conn.close();
      return value;
    });
}

export async function findOneMeetup(id) {
  const conn = await getConnection();
  const db = conn.db();
  return db
    .collection(collectionName)
    .findOne({ _id: ObjectId(id) }, { _id: 0 })
    .then((value) => {
      conn.close();
      return value;
    });
}
