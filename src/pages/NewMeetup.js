import {useNavigate} from 'react-router-dom';
import NewMeetupForms from './../components/Meetup/NewMeetupForms';

function NewMeetupPage() {
    const navigate = useNavigate();
    

    function addDataHandler(meetupData) {
        fetch('https://test-b9ef0-default-rtdb.firebaseio.com/meetups.json', { method:'POST',
        body: JSON.stringify(meetupData),
        headers: { 
            'Content-Type':'application/json'
        } }
        ).then(navigate('/',{replace: true}));
    }
    return ( <section> <h1> AddMeetup</h1>
    <NewMeetupForms  onAddMeetup={addDataHandler}/>
    </section>);
}
 
export default NewMeetupPage;