import React from "react";
import SelectedUserReadingList from './readings/SelectedReadingList';
import SelectedUserUserData from './SelectedUserData';
import SelectedEyeList from './eyes/SelectedEyeList';


class SelectedUserDashboard extends React.Component{



   render() {
    return(
        <div className="page">
            <SelectedUserReadingList />
            <SelectedUserUserData />
            <SelectedEyeList />
        </div>
    )

   }

}

export default SelectedUserDashboard;


