import React from "react";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";

class Coupon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
    }
    copyText = () => {
        // Get the text from the span element
        const copyText = document.querySelector(".coupon");

        // Copy the text to the clipboard
        navigator.clipboard.writeText(copyText.textContent);

        // Set the copied state to true
        this.setState({ copied: true });
    };

    render() {
        const { copied } = this.state;
        return (
            
                <span className="coupon" onClick={this.copyText}>
                    {this.props.text}
                    {copied ? (
                        <AiFillCopy style={{ color: "#7f5f87" }} />
                    ) : (
                        <AiOutlineCopy style={{ color: "#7f5f87" }} />
                    )}
                </span>
            
        );
    }
}
export default Coupon;
