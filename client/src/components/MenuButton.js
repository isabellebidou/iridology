
import React from "react";
import { Component } from "react";
import $ from 'jquery';





class MenuButton extends Component {


    menuClick() {
        $("#mobilemenu").slideToggle();
    }
    renderButton() {

        return (
            <button id="menubutton" onClick={this.menuClick}>menu</button>
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