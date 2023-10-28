import { ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
         height="100vh"
         projectID="57f06a28-4b8d-4f94-b4c5-658c1c56f97f"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    );
}

export default App;