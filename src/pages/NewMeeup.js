import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const saveMeetup = (data) => {
    fetch(
      `https://react-application-48e28-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{ 
          'Content-Type': 'applicaton/json'
        }
      }
    );
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onSaveMeetup={saveMeetup} />
    </section>
  );
};

export default NewMeetupPage;
