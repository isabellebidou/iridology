import React, {Component} from "react";
import UserDataForm from "./UserDataForm";
import UserDataFormReview from "./UserDataFormReview";
import { reduxForm } from "redux-form";
class UserDataNew extends Component {

    state = {showUserDataReview :false};

    renderContent() {
        if (this.state.showUserDataReview) {
            return <UserDataFormReview 
            onCancel = {() => this.setState({showUserDataReview: false})}
            />;
        }
        return <UserDataForm
        onUserDataSubmit = { ()=> this.setState({showUserDataReview: true})}
        />;
    }
 render (){
    return(
        <div>
        {this.renderContent()}
        </div>
    )

 }
}
export default reduxForm({
    form: 'userDataForm'
}) (UserDataNew)