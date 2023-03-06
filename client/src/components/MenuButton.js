
import React from "react";
import { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import $ from 'jquery';





class MenuButton extends Component {


    menuClick() {
        $("#mobilemenu").slideToggle();
    }
    renderButton() {

        return (
            <button id="menubutton" onClick={this.menuClick}><AiOutlineMenu
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


export default MenuButton;