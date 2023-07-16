import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../src/Login.module.css'
import { Link } from 'react-router-dom'

export const Login = () => {

    const [otp, setOtp] = useState(new Array(4).fill(''))
    const handleChange = (e, index) => {
        if (isNaN(e.value))
            return false;
        setOtp([...otp.map((d, idx) => (idx === index) ? e.value : d)])

        if (e.nextinput) {
            e.nextinput.focus();
        }

    }
    const handleSubmit = () => {
        console.log('Submit');
    }
    console.log(otp);

    return (
        <div>
            <Container>
                <Row className={classes.row}>
                    <Col className={classes.col}>
                        <div className={classes.wrap}>
                            <h2>Welcome to the channel!!!</h2>
                            <p>Enter the OTP sent to you to verify your identity</p>
                            {
                                otp.map((data, index) => {
                                    return (
                                        <input
                                            className={classes.otpfield}
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            value={data}
                                            key={index}
                                            onChange={e => (handleChange(e.target, index))}
                                            onFocus={e => e.target.select()}
                                        />
                                    )
                                })
                            }
                            {/* <OtpInput></OtpInput> */}

                            <p>OTP Entered -{otp}</p>
                            <p>

                                <button className={`${classes.btn, 'btn-secondary'}`}>
                                    Clear
                                </button>
                                <Link to={'/home'}><button
                                    onClick={handleSubmit}
                                    className={`${classes.btn, 'btn-primary'}`}>
                                    Verify OTP
                                </button></Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
