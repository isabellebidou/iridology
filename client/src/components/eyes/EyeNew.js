import React, {Component} from "react";
import EyeForm from "./EyeForm";
import EyesFormReview from "./EyesFormReview";
import { reduxForm } from "redux-form";
class EyeNew extends Component {

    state = {showEyeFormReview :false};

    renderContent() {
        if (this.state.showEyeFormReview) {
            return <EyesFormReview 
            onCancel = {() => this.setState({showEyeFormReview: false})}
            />;
        }
        return <EyeForm
        onEyeSubmit = { ()=> this.setState({showEyeFormReview: true})}
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
    form: 'eyeForm'
}) (EyeNew)