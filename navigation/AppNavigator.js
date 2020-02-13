import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllSessions from '../screens/AllSessions';
import AllSpeakers from '../screens/AllSpeakers';
import Feedback from '../screens/Feedback';
import FeedbackSelect from '../screens/FeedbackSelect';
import Home from '../screens/Home';
import Map from '../screens/Map';
// import Notifications from '../screens/Notifications';
import Schedule from '../screens/Schedule';
import SelectBreakout from '../screens/SelectBreakout';
import SessionInfo from '../screens/SessionInfo';
import SocialEvents from '../screens/SocialEvents';
import SpeakerInfo from '../screens/SpeakerInfo';
import { COLORS } from '../styles/styles';

export default createAppContainer(createStackNavigator({
    Home,
    AllSessions,
    AllSpeakers,
    Schedule,
    SelectBreakout,
    SessionInfo,
    SpeakerInfo,
    SocialEvents,
    Feedback,
    FeedbackSelect,
    Map,
    // Notifications,
}, {
    cardStyle: {
        backgroundColor: COLORS.white,
    },
}));
