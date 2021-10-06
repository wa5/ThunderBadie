import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cardss from '../../components/cardss/Cardss'
import Carouselss from '../../components/carouselss/Carouselss'
// import Navbar2 from '../../components/navbar/Navbar2'
// import Navbarss from '../../components/navbar/Navbarss.jsx'
import {Navbar2,Navbarss} from '../../components/navbar'

function Home() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbarss/>
                       
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Carouselss />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Cardss />
                    </Col>
                    <Col>
                        <Cardss />
                    </Col>
                    <Col>
                        <Cardss />
                    </Col>
                    <Col>
                        <Cardss />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Home
