import Head from "next/head";
import { findAllMeetups } from "../util/connection"; // not part of the client-side bundle

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Browse React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const meetups = await findAllMeetups();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
