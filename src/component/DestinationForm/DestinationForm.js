import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import { FormGroup, Grid } from '@material-ui/core';
import './DestinationForm.css'

const DestinationForm = ({ formStatus }) => {
    const [formField, setFormField] = useState({
        whereTo: '',
        destination: '',
        from: '',
        to: '',
        status: formStatus,
    })
    console.log(formField)
    const history = useHistory();
    const handleSubmit = (e) => {
        sessionStorage.setItem('userData', JSON.stringify(formField))
        if (formField.whereTo && formField.destination && formField.from && formField.to) {
            history.push(`/hotel/${formStatus}`)
        }
        e.preventDefault()
    }

    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'whereTo') {
            isFieldValid = e.target.value;
        }

        if (e.target.name === 'destination') {
            isFieldValid = e.target.value;
        }

        if (e.target.name === 'from') {
            console.log(e.target.value)
            isFieldValid = e.target.value;
        }

        if (e.target.name === 'to') {
            console.log(e.target.value)
            isFieldValid = e.target.value;
        }
        if (isFieldValid) {
            const form = { ...formField };
            form[e.target.name] = e.target.value;
            setFormField(form);
        }
    }
    return (
        <div className="d-flex justify-content-end">
            <Grid item xs={12} md={6} >
                <form className="booking-form" style={
                    {
                        padding: "7% 9% 7% 7%", margin: "auto", width: "340px"
                    }
                }
                    onSubmit={handleSubmit}>
                    <FormGroup className="form-group" >

                        <label htmlFor="origin">
                            Origin
                            </label>
                        <input id="origin" name="whereTo" onBlur={handleChange} type="text" required />

                        <label htmlFor="origin">
                            Destination
                            </label>
                        <input id="origin" name="destination" onBlur={handleChange}  type="text" required />

                        <div className="datepicker-section">
                            <div style={{ marginRight: "5px" }}>
                                <p>From</p>
                                <input type="date"  name="from" onBlur={handleChange} className="w-100" id="" />
                            </div>
                            <div>
                                <p>To</p>
                                <input type="date" name="to" onBlur={handleChange} className="w-100" id="" />
                            </div>
                        </div>
                        <input type="submit" value="Start Booking" />
                    </FormGroup>
                </form>
            </Grid>
        </div>
    );
};

export default DestinationForm;