import React, {Component} from 'react';
import '../styles/fragments/toolbar_style.scss';
import {NavLink} from "react-router-dom";
import PwaLogo from '../images/pwalogo.svg';

class ToolbarComponent extends Component {
    render() {
        return (
            <div className={"ToolbarComponentContainer"}>
                <div className={"Content"}>
                    <div className={"Logo"}>
                        <h5 className={"Logo"}>Yazan Tarifi</h5>
                    </div>
                    <div className={"Links"}>
                        <NavLink className={"ToolbarLink"} to={"/"}>Home</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/projects"}>Projects</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/about"}>About</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/services"}>Services</NavLink>
                        <div className={"PwaButton"} onClick={(e) => this.onPwaButtonClicked(e)}>
                            <img alt={"Pwa Logo"} src={PwaLogo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onPwaButtonClicked(e) {
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            // Update UI to notify the user they can add to home screen
            deferredPrompt = e;
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
            });
        });
    }
}

export default ToolbarComponent;
