import React, { useState } from 'react';
import './Params.css'
import { Link, useHistory, useParams } from 'react-router-dom';
import Hoteldata from './Hoteldata';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Form, Row } from 'react-bootstrap';
import { Container, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Params = (props) => {
    const [formField, setFormField] = useState({
        whereTo: '',
        destination: '',
    })
    const classes = useStyles();
    const history = useHistory();
    const handleSubmit = (e) => {
        if (formField.whereTo && formField.destination) {
            history.push(`/hotel/${dist}`)
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
        if (isFieldValid) {
            const form = { ...formField };
            form[e.target.name] = e.target.value;
            setFormField(form);
        }
    }
    const { dist } = useParams();
    console.log(dist)
    const detailsHotel = Hoteldata.find(x => x.district === dist)
    const { name, description } = detailsHotel;
    const [booking, setBooking] = props.booking;
    const booked = () => {
        const newBooking = { ...booking };
        newBooking.isBooking = false;
        setBooking(newBooking)
    }
    return (
        
            <Container className="params">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h1 style={{ color: 'white', fontSize: '65px' }}>{name}</h1>
                        <p style={{ color: 'white' }}>{description}</p>

                        {
                            booking.isBooking &&
                            <Link to={`/about/${dist}`} style={{ textAlign: 'center', textDecoration: 'none' }}>
                                <Button variant="contained" onClick={booked} color="secondary">
                                    Booking
                            </Button>
                            </Link>
                        }
                    </Col>

                    <Col>
                        {
                            booking.isBooking ? 
                            <div style={{ width: '500px', textAlign: 'justify' }}></div> : <Form>
                                <Form.Group>
                                    <Form.Label style={{ color: 'white' }}>Origin</Form.Label>
                                    <Form.Control type="text" onBlur={handleChange} name="whereTo" placeholder="Dhaka" required />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label style={{ color: 'white' }}>Destination</Form.Label>
                                    <Form.Control type="text" onBlur={handleChange} name="destination" placeholder="Cox's Bazar" required />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <form onSubmit={handleSubmit} className={classes.container} noValidate>
                                            <TextField
                                                className="form-group tex-danger"
                                                id="datetime-local"
                                                label="From"
                                                type="datetime-local"
                                                defaultValue="2020-09-24T10:30"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                                            />
                                            <TextField
                                                id="datetime-local"
                                                label="To"
                                                type="datetime-local"
                                                defaultValue="2020-09-24T10:30"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                                            />
                                            <input type="submit" value="Start Booking" style={{ borderRadius: '5px' }} />
                                        </form>
                                    </Col>
                                </Row>
                            </Form>
                        }
                    </Col>
                </Row>
            </Container>
    );
};

export default Params;