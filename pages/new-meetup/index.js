import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp() {
  const router = useRouter();
  const onAddMeetupHandler = async (meetupdata) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Create Meetup</title>
        <meta
          name="description"
          content="Create new meetup and make some opportunity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetUp;
