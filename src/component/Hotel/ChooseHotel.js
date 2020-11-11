import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ChooseHotel.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ChooseHotel = (props) => {
    const { title, price, img, type, wifi, cancel, nightPrice } = props.detailsRoom;
    return (
        <div style={{ marginBottom: '20px', padding: '10px' }}>
            <Row>
                <Col sm={6} md={6} xl={6}>
                    <img style={{ width: '100%', height: '100%' }} src={img} alt="" />

                </Col>
                <Col sm={6} md={6} xl={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                {title}
                            </Typography>
                            <Typography color="textSecondary">
                                {type}
                            </Typography>
                            <Typography color="textSecondary">
                                {wifi}
                            </Typography>
                            <Typography color="textSecondary">
                                {cancel}
                            </Typography>
                                <pre style={{height: '40px'}}>4.9(20)  <span style={{ fontWeight: 800 }}>${price}/<span style={{ color: '#7863634a' }}>night ${nightPrice} total</span> </span></pre>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ChooseHotel;