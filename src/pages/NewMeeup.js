import { useNavigate } from 'react-router-dom';
import { config } from '../utils/config';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const saveMeetup = (data) => {
    fetch(`${config.databaseUrl}/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'applicaton/json',
        },
      }
    )
      .then((data) => {
        // success
        navigate('/');
      })
      .catch((error) => {
        // do something with error
      })
      .finally(() => {
        // dataIsLoading = false;
      });
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onSaveMeetup={saveMeetup} />
    </section>
  );
};

export default NewMeetupPage;
