import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './Coolbutton';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="password" type="password" placeholder="e.g. ALexsmith231" />
                <div>
                    <CoolButton classes = 'is-info is-rounded' name="Submit"/>
                </div>
            </div>
        );
    }
}

export default Signup;