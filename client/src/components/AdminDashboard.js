import React from "react";

import UserList from './users/UserList';
import PendingReadingList from './readings/PendingReadingList';


//import Landing from './Landing';




const Dashboard = () => {
    return(
        <div className="dashboard">
            <UserList />
            <PendingReadingList />

            

        </div>
    )

}

export default Dashboard;