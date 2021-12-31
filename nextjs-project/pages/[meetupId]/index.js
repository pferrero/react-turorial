import Head from "next/head";
import { findAllMeetupsIds, findOneMeetup } from "../../util/connection";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails({ meetupData }) {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta
          name="description"
          content={`Meetup ${meetupData.title} at ${meetupData.address}`}
        />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const ids = await findAllMeetupsIds();
  return {
    fallback: false,
    paths: ids.map((id) => ({ params: { meetupId: id._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetupData = await findOneMeetup(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        address: meetupData.address,
        image: meetupData.image,
        description: meetupData.description,
      },
    },
  };
}

export default MeetupDetails;
