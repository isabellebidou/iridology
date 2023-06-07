
import React from "react";
import { Component } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import $ from 'jquery';



//https://upmostly.com/tutorials/react-onhover-event-handling-with-examples

class DropButton extends Component {


    mouseEnter() {
        console.log('mouseEnter')
        $("#dropmenu").slideToggle();
    }
    renderButton() {

        return (
            <button id="dropbutton" onMouseEnter ={this.mouseEnter}><AiOutlineMenuFold
            style={{ color: "#7f5f87" }}
            key={'AiOutlineMenu'}
        /></button>
        )

    }



    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        );
    }







}


export default DropButton;