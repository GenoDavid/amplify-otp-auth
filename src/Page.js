import React, { useState } from 'react'
import classes from '../src/Page.module.css'
import { Col, Image, Row } from 'react-bootstrap'
import img from './assets/car.jpg'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdLocationOn } from 'react-icons/md'
import { AiFillClockCircle } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'
import { button, jobs } from './Data'

const Page = () => {
    const [data, setData] = useState(jobs)
    const [active, setActive] = useState(null)
    const handlechange = (e, index) => {
        console.log(e, "hai");
        setActive(index)
        if (e !== 'View all') {
            const data = jobs.filter((value) => value.value == e)
            setData(data)
        }
        else {
            setData(jobs)
        }
    }

    return (
        <div className={classes.container}>
            <Row className={classes.wrap}>
                <Col lg='12'><LiaBarsSolid className={classes.barbtn} /></Col>
                <Col lg='4'>
                    <Image fluid src={img} alt='image' />
                </Col>
                <Col lg='8' >
                    <h1 className={classes.content}>Be part of our mission</h1>
                    <p className={classes.para}>We're looking for passionate people to join us on our mission. We value flat hierarchies,clear communication,and full ownership and responsibility.</p>
                </Col>
            </Row>
            <div className={classes.list}>

                {
                    button.map((value, index) => {
                        return (
                            <>
                                <p onClick={() => handlechange(value.value, index)} className={index == active ? classes.active : classes.lists}>{value.value}</p>
                            </>
                        )
                    })
                }
            </div>

            <Row>
                {
                    data.map((value, index) => {
                        return (
                            <>
                                <Col lg='8'>
                                    <div className={classes.total}>
                                        <h1>{value.name}</h1>
                                        <p>{value.para}</p>
                                    </div>
                                    <div className={classes.line}>
                                        <button className={classes.btn}><span><MdLocationOn className={classes.icon} /></span>{value.worktime}</button>
                                        <button className={classes.btn}><span><AiFillClockCircle className={classes.icon} /></span>{value.worktime}</button>
                                    </div>
                                </Col>
                                <Col lg='4'>
                                    <p className={classes.apply}>Apply <FiArrowUpRight /></p>
                                </Col>
                                <hr className={classes.hr} />
                            </>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Page