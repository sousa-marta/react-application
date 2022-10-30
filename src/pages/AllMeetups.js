import { useState, useEffect } from 'react';

import MeetupsList from '../components/meetups/MeetupsList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-application-48e28-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json(); //it's also a promise
      })
      .then((data) => {
        const meetupsArray = [];

        for (const key in data) {
          meetupsArray.push({ ...data[key] });
        }

        setLoadedMeetups(meetupsArray);
      })
      .catch((error) => {
        console.error('error', error);
        // do something with error
      })
      .finally(() => {
        setIsLoading(false);
        // dataIsLoading = false;
      });
  }, []);

  return !isLoading ? (
    <section>
      <h1>All Meetups</h1>
      <MeetupsList meetups={loadedMeetups} />
    </section>
  ) : (
    <div>Loading</div>
  );
};

export default AllMeetupsPage;
