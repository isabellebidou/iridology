import React, {Component} from "react";
import ReadingForm from "./ReadingForm";
import ReadingFormReview from "./ReadingFormReview";
import { reduxForm } from "redux-form";
class ReadingNew extends Component {

    state = {showFormReview :false};

    renderContent() {
        if (this.state.showFormReview) {
            return <ReadingFormReview 
            onCancel = {() => this.setState({showFormReview: false})}
            />;
        }
        return <ReadingForm
        onReadingSubmit = { ()=> this.setState({showFormReview: true})}
        />;
    }
 render (){
    return(
        <div className="readingnew">
        {this.renderContent()}
        </div>
    )

 }
}
export default reduxForm({
    form: 'readingForm'
}) (ReadingNew)