'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

import Offcanvasmobile from './Mobile-nav';
import { quickServiceRequestFormAPI } from '@/api/ArcmenFormAPI';

import '../style/homestyle.scss';
import '../style/Header.css';

const ACTIVE_TAB_COLOR = '#4dbc15';
const PHONE_NUMBERS = ['+91 99629 98008', '03', '01'];
const SOCIAL_LINKS = [
    {
        href: 'https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6',
        icon: <FaLocationDot />,
        alt: 'location'
    },
    {
        href: 'https://www.facebook.com/arcmeninteriordesign/',
        src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735189618/arcmen/Icons/facebook.png',
        alt: 'facebook'
    },
    {
        href: 'https://www.instagram.com/arcmeninteriordesigner/',
        src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735189754/arcmen/Icons/instagram.png',
        alt: 'instagram'
    }
];

const NAVIGATION_MENU = [
    { label: 'Home', href: '/', activeTab: 'Home' },
    { label: 'About Us', href: '/aboutus', activeTab: 'About Us' },
    { label: 'Interior Design', href: '/residential-interior-designers-in-chennai', activeTab: 'Interior Design' },
    { label: 'Architectural Services', href: '/architect-interior-in-chennai', activeTab: 'Architectural Services' },
    { label: 'Modular Kitchen', href: '/modular-kitchen-chennai', activeTab: 'Modular Kitchen' },
    {
        label: 'Projects',
        activeTab: 'Gallery',
        dropdown: [
            { label: 'Interior Design Projects', href: '/interior-design-projects' },
            { label: 'Architectural Projects', href: '/architectural-projects' }
        ]
    },
    {
        label: 'More',
        activeTab: 'More',
        dropdown: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Wood Factory', href: '/wood-factory/' },
            { label: 'FAQs', href: '/faqs/' },
            { label: 'Career', href: '/career/' },
            { label: 'Refer And Earn', href: '/refer-and-earn/' }
        ]
    },
    { label: 'Contact Us', href: '/contact-us/', activeTab: 'Contact Us' }
];

const SERVICE_OPTIONS = [
    'Interior Design',
    'Architectural Services',
    'Modular Kitchen',
    'Turnkey Construction',
    'Renovation'
];

const PATH_TO_TAB = {
    '/': 'Home',
    '/aboutus': 'About Us',
    '/residential-interior-designers-in-chennai': 'Interior Design',
    '/architect-interior-in-chennai': 'Architectural Services',
    '/contact-us': 'Contact Us'
};

const getActiveTab = (path) => {
    if (path in PATH_TO_TAB) return PATH_TO_TAB[path];
    if (path.startsWith('/modular-kitchen-chennai')) return 'Modular Kitchen';
    if (path.startsWith('/interior-design-projects') || path.startsWith('/architectural-projects')) return 'Gallery';
    if (path.startsWith('/blog') || path.startsWith('/wood-factory') || path.startsWith('/faqs') || path.startsWith('/career') || path.startsWith('/refer-and-earn')) return 'More';
    return '';
};

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const validate = (recaptchaToken) => {
        const tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email address is invalid';
        }
        if (!formData.mobile.trim()) {
            tempErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            tempErrors.mobile = 'Mobile number must be exactly 10 digits';
        }
        if (!formData.location.trim()) tempErrors.location = 'Location is required';
        if (!formData.serviceName) tempErrors.serviceName = 'Service name is required';
        if (!recaptchaToken) tempErrors.recaptcha = 'Please complete the reCAPTCHA';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const reset = () => setFormData(initialState);

    return { formData, errors, handleChange, validate, reset, setErrors };
};

const NavMenuItem = ({ item, activeTab }) => {
    const isActive = item.activeTab === activeTab;
    const linkStyle = { color: isActive ? ACTIVE_TAB_COLOR : 'black' };

    if (!item.dropdown) {
        return (
            <li>
                <Link href={item.href} style={linkStyle}>
                    {item.label}
                </Link>
            </li>
        );
    }

    return (
        <li className="dropdown">
            <Link href="#" style={linkStyle}>
                {item.label} <IoIosArrowDown />
            </Link>
            <div className="dropdown-content">
                {item.dropdown.map(sub => (
                    <Link key={sub.href} href={sub.href}>
                        {sub.label}
                    </Link>
                ))}
            </div>
        </li>
    );
};

export default function Header() {
    const path = usePathname();
    const activeTab = getActiveTab(path);
    const [showModal, setShowModal] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);
    const initialFormState = { name: '', email: '', mobile: '', location: '', serviceName: '' };
    const { formData, errors, handleChange, validate, reset } = useForm(initialFormState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate(recaptcha)) return;

        try {
            await quickServiceRequestFormAPI(formData);
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                timer: 3000,
                text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
            });
            setShowModal(false);
            reset();
            setRecaptcha(null);
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error('API Error:', error);
            Swal.fire({ title: 'Error', icon: 'error', text: 'Failed to submit form. Please try again.' });
        }
    };

    return (
        <>
            <section className="mb-5">
                <div className="fixed-navbar">
                    <section className="header-body d-none d-lg-block">
                        <Container>
                            <Row>
                                <Col className="align-self-center">
                                    <Link href={`tel:${PHONE_NUMBERS[0]}`}>{PHONE_NUMBERS.join(' / ')}</Link>
                                </Col>
                                <Col>
                                    <ul className="social d-flex align-self-center justify-content-end list-unstyled">
                                        {SOCIAL_LINKS.map((link, idx) => (
                                            <li key={idx}>
                                                <Link href={link.href} target="_blank" rel="noopener">
                                                    {link.icon || <img src={link.src} loading="lazy" alt={link.alt} className="img-fluid" style={{ width: '25px' }} />}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section>
                        <Container>
                            <Row className="d-none d-lg-block">
                                <Col>
                                    <div className="navbar p-0">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                                            </Link>
                                        </div>
                                        <ul className="menu">
                                            {NAVIGATION_MENU.map((item, idx) => (
                                                <NavMenuItem key={idx} item={item} activeTab={activeTab} />
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-block d-lg-none">
                                <Offcanvasmobile />
                            </Row>
                        </Container>
                    </section>
                </div>
            </section>

            <div className="sidebar-content-div hd-btn">
                <div className="icon-sty">
                    <a href="https://wa.me/9962998008" className="sidebar-icon" target="_blank" rel="noopener">
                        <svg width="33.163" height="33.158" viewBox="0 0 33.163 33.158" style={{ marginTop: '15px', marginLeft: '6px' }}>
                            <ellipse cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(4 4.579)" fill="#fff" />
                            <path d="M52.588,36A16.579,16.579,0,0,0,39.163,62.3l-2.072,6.159,6.379-2.039A16.579,16.579,0,1,0,52.588,36ZM61.4,59.447l-1.766,1.766c-1.857,1.857-6.781-.187-11.145-4.559s-6.321-9.284-4.555-11.12L45.7,43.767a1.853,1.853,0,0,1,2.508,0l2.6,2.595a1.728,1.728,0,0,1-.651,2.876,1.687,1.687,0,0,0-1.115,2.048,8.019,8.019,0,0,0,4.833,4.829A1.77,1.77,0,0,0,55.9,54.987a1.733,1.733,0,0,1,2.9-.651l2.6,2.6a1.853,1.853,0,0,1,0,2.508Z" transform="translate(-36.015 -36)" fill="#07d97e" />
                        </svg>
                    </a>
                    <span className="mail-icon-div d-none d-lg-block">
                        <a href="mailto:contact@arcmeninterior.com" className="sidebar-icon emil-bx">
                            <svg width="19.882" height="14.891" viewBox="0 0 19.882 14.891" style={{ marginTop: '0px', marginLeft: '6px' }}>
                                <path d="M11.6,176.927a2.99,2.99,0,0,1-3.323,0L.132,171.5Q.065,171.451,0,171.4v8.9a1.83,1.83,0,0,0,1.83,1.83H18.052a1.83,1.83,0,0,0,1.83-1.83v-8.9c-.043.032-.087.064-.133.094Z" transform="translate(0 -167.242)" fill="#75a313" />
                                <path d="M.779,67.551l8.147,5.432a1.826,1.826,0,0,0,2.031,0L19.1,67.551a1.744,1.744,0,0,0,.779-1.455,1.832,1.832,0,0,0-1.83-1.83H1.83A1.832,1.832,0,0,0,0,66.1a1.744,1.744,0,0,0,.779,1.454Z" transform="translate(0 -64.266)" fill="#75a313" />
                            </svg>
                        </a>
                    </span>
                    <span className="mail-icon-div d-block d-lg-none">
                        <a href="tel:+919962998008" className="sidebar-icon emil-bx">
                            <IoCall style={{ marginLeft: '5px', fill: '#75a313', fontSize: '20px' }} />
                        </a>
                    </span>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                    Book Now
                </button>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Modal
                                show={showModal}
                                size="lg"
                                onHide={() => setShowModal(false)}
                                animation={false}
                                className="popup-shw"
                                centered
                            >
                                <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="pe-0 pb-0 pl-md-1">
                                    <div className="popup-fminter d-flex flex-column flex-md-row">
                                        <div className="form-inter newpopup">
                                            <p>Fill out all required fields below and we will get back to you as soon as possible.</p>
                                            <form onSubmit={handleSubmit} className="con-form-page">
                                                <Row>
                                                    {[
                                                        { name: 'name', type: 'text', placeholder: 'Name *' },
                                                        { name: 'email', type: 'email', placeholder: 'Email *' },
                                                        { name: 'mobile', type: 'tel', placeholder: 'Mobile *' },
                                                        { name: 'location', type: 'text', placeholder: 'Location *' }
                                                    ].map(field => (
                                                        <Col xs={12} key={field.name}>
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type={field.type}
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    value={formData[field.name]}
                                                                    onChange={handleChange}
                                                                    placeholder={field.placeholder}
                                                                    className="w-100 p-2 fs_12"
                                                                    isInvalid={!!errors[field.name]}
                                                                />
                                                                {errors[field.name] && <span className="text-danger">{errors[field.name]}</span>}
                                                            </div>
                                                        </Col>
                                                    ))}

                                                    <Col xs={12}>
                                                        <div className="mb-4">
                                                            <Form.Select
                                                                id="serviceName"
                                                                name="serviceName"
                                                                value={formData.serviceName}
                                                                onChange={handleChange}
                                                                className="w-100 p-2 fs_12"
                                                                isInvalid={!!errors.serviceName}
                                                            >
                                                                <option value="">Services</option>
                                                                {SERVICE_OPTIONS.map(service => (
                                                                    <option key={service} value={service}>
                                                                        {service}
                                                                    </option>
                                                                ))}
                                                            </Form.Select>
                                                            {errors.serviceName && <span className="text-danger">{errors.serviceName}</span>}
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-2">
                                                            <div className="mb-4">
                                                                <ReCAPTCHA
                                                                    ref={recaptchaRef}
                                                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                                    onChange={value => setRecaptcha(value)}
                                                                />
                                                                {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
                                                            </div>
                                                            <button type="submit" className="sumbit-btn">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                        <div className="popup-img1 d-none d-md-block" style={{ borderRadius: '0px 10px 10px 0px' }}>
                                            <img
                                                src="https://assets.webdads2u.com/images/1777263532305-adbanner.jpeg"
                                                style={{ borderRadius: '0px 10px 10px 0px' }}
                                                alt="Offer"
                                            />
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}