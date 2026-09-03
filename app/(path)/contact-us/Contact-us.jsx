"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
import Link from "next/link";
import ContactForm from "./Contact-form";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Contactus() {
    return (
        <div>
            <section className="contact-banner">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Contact Us</h1>

                            <p>
                                <Link href="/" style={{ color: "#fff" }}>
                                    Home
                                </Link>{" "}
                                / Contact Us
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className="form-page">
                    <Row>
                        <Col sm={12} className="text-center mb-5">
                            <h2>Get In Touch</h2>
                            <h3>Let's Discuss Your Projects</h3>
                        </Col>

                        <Col sm={12} md={6} lg={5}>
                            <img
                                src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735027756/arcmen/contact/contact-us-image.jpg"
                                alt="Contact Arcmen Interior"
                                className="img-fluid"
                                loading="lazy"
                            />
                        </Col>

                        <Col sm={12} md={6} lg={7}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="card-form">
                                <h2>Main Office</h2>

                                <div className="address">
                                    <div>
                                        <IoCall className="address-icon" />
                                    </div>

                                    <div className="address-text">
                                        <a
                                            href="https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View Arcmen Interior office location on Google Maps"
                                        >
                                            No.5, Ramakrishna Main Road,
                                            <br />
                                            Opp. to Villakku Kadai,
                                            Nethaji Nagar,
                                            <br />
                                            Porur, Chennai - 600116.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="card-form">
                                <h2>Make a Call</h2>

                                <div className="address">
                                    <div>
                                        <IoCall className="address-icon" />
                                    </div>

                                    <div className="address-text">
                                        <a
                                            href="tel:+919962998008"
                                            aria-label="Call Arcmen Interior"
                                        >
                                            +91 99629 98008
                                        </a>

                                        <br />

                                        <span>
                                            Mon - Sat: 10am - 08pm
                                        </span>

                                        <br />

                                        <span>
                                            Sunday: 10am - 05pm
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="card-form">
                                <h2>Send a Mail</h2>

                                <div className="address">
                                    <div>
                                        <CiMail className="address-icon" />
                                    </div>

                                    <div className="address-text">
                                        <a
                                            href="mailto:contact@arcmeninterior.com"
                                            aria-label="Send email to Arcmen Interior"
                                        >
                                            contact@arcmeninterior.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section>
                <Container fluid>
                    <Row>
                        <Col className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28747.655475667747!2d80.159877!3d13.03523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611e16a652e5%3A0x94847f84f304ecac!2sArcmen%20Interior%20Designer%20%26%20Architect%20Studio!5e1!3m2!1sen!2sin!4v1735042333481!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Arcmen Interior Designer and Architect Studio location"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Contactus;