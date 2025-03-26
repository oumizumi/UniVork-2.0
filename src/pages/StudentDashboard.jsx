import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import Navigation from '../layouts/Navigation.jsx';
import StudentDashboardFooter from '../layouts/StudentDashboardFooter.jsx'; 
import UpdateProfile from '../components/UpdateProfile.jsx';
import NavigationBarStudent from '../layouts/NavigationBarStudent.jsx'; 
import Motivation from '../components/Motivation.jsx'; 
import SearchFilter from '../components/SearchFilter.jsx'; 
import ListOfJobs from '../components/ListOfJobs.jsx'; 

const StudentDashboard = () => {
    const [isProfileUpdated, setIsProfileUpdated] = useState(false); 
    const [showInitialMessage, setShowInitialMessage] = useState(true); 
    const [showForm, setShowForm] = useState(false); 
    const [showSearchFilter, setShowSearchFilter] = useState(false); 
    const [showListOfJobs, setShowListOfJobs] = useState(false); 
    const [updateStatus, setUpdateStatus] = useState(null); 
    const [updateMessage, setUpdateMessage] = useState(''); 
    const [userName, setUserName] = useState({ firstName: '', middleName: '', lastName: '' });
    const [formData, setFormData] = useState({firstName: "", middleName: "", lastName: "", country: "", universityName: "",universityEmail: "", universityMajor: "", levelOfStudy: "", studyStatus: "", yearOfStudy: "", gpa: "", phoneNumber: "", homeAddress: ""});

useEffect(() => {
    const storedData = localStorage.getItem('studentDashboardState');
    if (storedData) {
        const {
            isProfileUpdated, updateStatus, updateMessage, userName, formData, showInitialMessage,  } = JSON.parse(storedData); 
            setIsProfileUpdated(isProfileUpdated);
            setUpdateStatus(updateStatus);
            setUpdateMessage(updateMessage);
            setUserName(userName);
            setFormData(formData);
            setShowInitialMessage(showInitialMessage); 
        }
    }, []);

    const saveToLocalStorage = (updatedState) => {
        localStorage.setItem('studentDashboardState', JSON.stringify(updatedState));
    };

    const handleProfileUpdate = () => {
        setShowForm(true); 
        setShowSearchFilter(false); 
        setShowListOfJobs(false); 
    };

const handleAdminResponse = (updatedData) => {

    setFormData(updatedData); 

    setShowForm(false);  /* remove dependency with updateprofile later */ 
    setShowSearchFilter(false); 

    const adminDecision = 'accepted'; 

    if (adminDecision === 'accepted') {
        setUpdateStatus('accepted');
        setUpdateMessage('Your application is approved. Now you can apply for available jobs');
        setIsProfileUpdated(true);
        setUserName({firstName: updatedData.firstName, middleName: updatedData.middleName, lastName: updatedData.lastName}); 
    } 
    else if (adminDecision === 'rejected') {
        setUpdateStatus('rejected');
        setUpdateMessage('Apply again once your application status is updated');
        setIsProfileUpdated(false);
    }

    const updatedState = {
        isProfileUpdated: adminDecision === 'accepted',
        updateStatus: adminDecision,
        updateMessage: adminDecision === 'accepted' 
            ? 'Your application is approved. Now you can apply for available jobs'
            : 'Apply again once your application status is updated',
        userName: {
            firstName: updatedData.firstName,
            middleName: updatedData.middleName,
            lastName: updatedData.lastName,
        },
        formData: updatedData,
    };

    saveToLocalStorage(updatedState);
};

const clearUpdateMessage = () => {
    setUpdateMessage(''); 
};

const handleInitialMessage = () => {
    setShowInitialMessage(false); 
}; 

const handleApplyForJobs = () => {
    setShowSearchFilter(true);
    setShowListOfJobs(true); 
    setShowForm(false); 
    setUpdateMessage(''); 
}; 

    return (
        <div className="student-dashboard"> 
            <Navigation isProfileUpdated={isProfileUpdated} onProfileUpdate={handleProfileUpdate} onClearMessage={clearUpdateMessage} userName={userName} onApplyForJobs={handleApplyForJobs}/>

            { showInitialMessage && <div className= "initialMessage"> Update your profile to unlock the features</div> }

            {updateMessage && <div className={`update-status ${updateStatus}`}>{updateMessage}</div>}  

            <div className="main-content"> {!showSearchFilter && isProfileUpdated &&  <Motivation />  } {showForm && (<UpdateProfile isProfileUpdated = {isProfileUpdated} formData={formData} clearInitialMessage = {handleInitialMessage} onAdminResponse={(data) => handleAdminResponse(data)} />)} 

                {showSearchFilter && <SearchFilter />} {showListOfJobs && <ListOfJobs />}
            </div>
            
            <NavigationBarStudent />

            <StudentDashboardFooter />
        </div>
    );
};

export default StudentDashboard;









