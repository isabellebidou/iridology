import React from "react";

import ReadingList from './readings/ReadingList';
import UserData from './UserData';

import EyeList from './eyes/EyeList';

import Buttons from './Buttons';
import StarReview from './StarReview';
//import Landing from './Landing';





const Dashboard = () => {
    return (
        <div className="page">
            <StarReview />
            <Buttons />
            <ReadingList />
            <UserData />
            <EyeList />




        </div>
    )

}

export default Dashboard;