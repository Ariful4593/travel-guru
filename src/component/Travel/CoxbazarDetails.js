import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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
const CoxbazarDetails = () => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        console.log("Clicked Me")
        e.preventDefault()
    }

    const history = useHistory();

    const handleBooking = () =>{
        history.push('/login')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Cox's Bazar</h1>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                </Col>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" name="whereTo" placeholder="Where To" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" name="destination" placeholder="Destination" required />
                        </Form.Group>
                        <Row>
                            <Col>
                                <form onSubmit={handleSubmit} className={classes.container} noValidate>
                                    <TextField
                                        id="datetime-local"
                                        label="From"
                                        type="datetime-local"
                                        defaultValue="2020-09-24T10:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
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
                                    />
                                </form>
                                <Button variant="contained" onClick={handleBooking} color="primary">
                                    Start Booking
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CoxbazarDetails;