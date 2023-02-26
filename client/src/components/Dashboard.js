import React from "react";

import ReadingList from './readings/ReadingList';
import UserData from './UserData';

import EyeList from './eyes/EyeList';

import Buttons from './Buttons';
import Instructions from './Instructions';
import StarReview from './StarReview';
//import Landing from './Landing';




const Dashboard = () => {
    return(
        <div className="dashboard">
            <Instructions />
            <StarReview />
            <Buttons />
            <ReadingList />
            <UserData />
            <EyeList />
            
            
            

        </div>
    )

}

export default Dashboard;