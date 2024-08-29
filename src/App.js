import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import SelectionBox from './components/SelectionBox';
import UserProfile from './components/userProfile';

function App() {
    const [selectedForm, setSelectedForm] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const renderContent = () => {
        if (isLoggedIn) {
            return <UserProfile />;
        } else if (selectedForm === 'login') {
            return <LoginForm onLoginSuccess={handleLoginSuccess} />;
        } else if (selectedForm === 'signup') {
            return <SignupForm onSignupSuccess={() => setSelectedForm('login')} />;
        } else {
            return <SelectionBox onSelect={setSelectedForm} />;
        }
    };

    return (
        <div className="App flex">
            <Sidebar />
            <div className="flex-grow flex justify-center items-center h-screen bg-gray-100 md:w-2/3 w-full">
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
