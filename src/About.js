import React from 'react';
import profile from './static/profile.jpg';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';

const imgStyle = {};
function About(props) {
    return (
        <div id={props.id}>
            <Container>
                <h1 className='text-center'>About Me</h1>
                <Row>
                    <Col xs={12} md={5}>
                        <Image
                            src={profile}
                            style={imgStyle}
                            width='100%'
                            alt='Pic of Ben'
                            roundedCircle
                        />
                    </Col>
                    <Col xs={12} md={7}>
                        <p>
                            I'm a recent grad software engineer based out of New York. At this
                            moment in time I am finishing up an intensive bootcamp. <br></br>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
