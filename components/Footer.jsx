"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style/footer.css";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
    const path = usePathname();

    const blockedPaths = [
        "/interior-designers-chennai",
        "/home-interior-designers-in-chennai",
    ];

    if (blockedPaths.includes(path)) {
        return null;
    }

    return (
        <footer>
            <section className="ar-man">
                <Container className="arc-man-footer">
                    <Row className="footer-main justify-content-between mb-5">
                        <Col sm={12} md={6} lg={4}>
                            <h5>About</h5>
                            <p>
                                From the humble beginnings of a small interior decor
                                contractor in 1995, Arcmen has accelerated into the
                                2013 to become the largest independently owned
                                Architects, interior designer and execution team
                                in Chennai.
                            </p>
                            <div className="d-flex gap-3 mb-3">
                                <div>
                                    <a
                                        href="https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Arcmen Interior location on Google Maps"
                                    >
                                        <FaLocationDot
                                            style={{
                                                color: "blue",
                                                width: "25px",
                                                height: "25px",
                                            }}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.facebook.com/arcmeninteriordesign/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Arcmen Interior on Facebook"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189618/arcmen/Icons/facebook.png"
                                            loading="lazy"
                                            alt="Arcmen Interior Facebook"
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.instagram.com/arcmeninteriordesigner/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Arcmen Interior on Instagram"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189754/arcmen/Icons/instagram.png"
                                            loading="lazy"
                                            alt="Arcmen Interior Instagram"
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>

                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h5>Quick Links</h5>

                            <ul className="list-unstyled footer-links">
                                <li>
                                    <Link href="/architect-interior-in-chennai">
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/interior-design-projects">
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/aboutus">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact-us">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <h5>Contact Us</h5>
                            <div>
                                <div>
                                    <p className="mb-2">
                                        <strong>Call us: </strong>

                                        <a href="tel:+919962998008">
                                            +91 99629 98008
                                        </a>

                                        {" / "}

                                        <a href="tel:+919962998003">
                                            03
                                        </a>

                                        {" / "}

                                        <a href="tel:+919962998001">
                                            01
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2">
                                        <strong>Email: </strong>

                                        <a href="mailto:contact@arcmeninterior.com">
                                            contact@arcmeninterior.com
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        <strong>Address: </strong>

                                        <a
                                            href="https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View Arcmen Interior address on Google Maps"
                                        >
                                            No.5, Ramakrishna Main Road,
                                            Opp. to Villakku Kadai,
                                            Nethaji Nagar, Porur,
                                            Chennai – 600116.
                                        </a>
                                    </p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row className="footer-legal">
                        <Col className="text-center">

                            <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">

                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>

                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>

                                <Link href="/sitemap.xml">
                                    Sitemap
                                </Link>

                            </div>

                        </Col>
                    </Row>
                </Container>
                <Container fluid className="footer-copy mt-5">
                    <Row>
                        <Col className="text-center pb-3 pt-3">

                            <p className="mb-1">
                                Copyright © {new Date().getFullYear()}{" "}
                                Arcmen Kitchens and Interiors.
                                All Rights Reserved.
                            </p>

                        </Col>
                    </Row>
                </Container>

            </section>
        </footer>
    );
};

export default Footer;