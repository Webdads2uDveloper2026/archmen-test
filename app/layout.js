import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/responsive.scss';
import './globals.css';
import Script from 'next/script';
import { DM_Sans, Montserrat } from 'next/font/google';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arcmeninterior.com';

const LOGO_URL =
    'https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.png';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Best Interior Designers in Chennai | Arcmen Interior',
    description:
        'With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams',
    keywords: [
        'Interior designers in Chennai',
        'Best interior designers in Chennai',
        'Home interior designers in Chennai',
        'Interior decorators in Chennai',
        'Modular kitchen designers in Chennai',
        'Architectural design Chennai'
    ],
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        siteName: 'Arcmen Interior',
        title: 'Best Interior Designers in Chennai | Arcmen Interior',
        description:
            'Arcmen Interior offers residential interior design, modular kitchens, architectural services, and complete home interior solutions in Chennai.',
        images: [
            {
                url: LOGO_URL,
                width: 1200,
                height: 630,
                alt: 'Arcmen Interior - Interior Designers in Chennai'
            }
        ],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Interior Designers in Chennai | Arcmen Interior',
        description:
            'Arcmen Interior offers residential interior design, modular kitchens, architectural services, and complete home interior solutions in Chennai.',
        images: [LOGO_URL]
    }
};

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'Arial']
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap'
});

const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'Arcmen Interior',
            url: `${SITE_URL}/`,

            logo: {
                '@type': 'ImageObject',
                '@id': `${SITE_URL}/#logo`,
                url: LOGO_URL,
                width: 200,
                height: 60
            },

            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91 99629 98008',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Tamil']
            },

            sameAs: [
                'https://www.facebook.com/arcmeninteriordesign/',
                'https://www.instagram.com/arcmeninteriordesigner/'
            ]
        },

        {
            '@type': 'HomeAndConstructionBusiness',
            '@id': `${SITE_URL}/#business`,
            name: 'Arcmen Interior',
            legalName: 'Arcmen Interior',

            description:
                'Arcmen Interior is an interior design company in Chennai specializing in residential interiors, modular kitchens, architectural design, and customized interior solutions.',

            url: `${SITE_URL}/`,

            logo: {
                '@type': 'ImageObject',
                '@id': `${SITE_URL}/#logo`,
                url: LOGO_URL,
                width: 200,
                height: 60
            },

            image: {
                '@type': 'ImageObject',
                url: LOGO_URL,
                width: 200,
                height: 60
            },

            telephone: '+91 99629 98008',
            email: 'contact@arcmeninterior.com',
            priceRange: '₹₹',

            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: 4.8,
                bestRating: 5,
                worstRating: 1,
                reviewCount: 764
            },

            address: {
                '@type': 'PostalAddress',
                streetAddress:
                    'No.5, Ramakrishna Main Road, Opp. to Villakku Kadai, Nethaji Nagar, Porur',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                postalCode: '600116',
                addressCountry: 'IN'
            },

            geo: {
                '@type': 'GeoCoordinates',
                latitude: 13.0349887,
                longitude: 80.160062
            },

            hasMap:
                'https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6',

            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                    ],
                    opens: '10:00',
                    closes: '20:00'
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: 'Sunday',
                    opens: '10:00',
                    closes: '18:00'
                }
            ],

            areaServed: [
                {
                    '@type': 'City',
                    name: 'Chennai'
                },
                {
                    '@type': 'State',
                    name: 'Tamil Nadu'
                }
            ],

            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    telephone: '+91 99629 98008',
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Tamil'],
                    areaServed: 'IN'
                }
            ]
        },

        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: 'Arcmen Interior',

            publisher: {
                '@id': `${SITE_URL}/#organization`
            }
        },

        {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: 'Interior Designers in Chennai | Arcmen Interior',

            description:
                'Arcmen Interior provides residential interior design, modular kitchen, architectural design, and customized interior solutions in Chennai.',

            isPartOf: {
                '@id': `${SITE_URL}/#website`
            },

            about: {
                '@id': `${SITE_URL}/#organization`
            },

            primaryImageOfPage: {
                '@id': `${SITE_URL}/#primaryimage`
            }
        },

        {
            '@type': 'ImageObject',
            '@id': `${SITE_URL}/#primaryimage`,
            url: LOGO_URL,
            width: 1200,
            height: 630,
            caption:
                'Best Interior Designers in Chennai - Arcmen Interior'
        },

        {
            '@type': 'BreadcrumbList',
            '@id': `${SITE_URL}/#breadcrumb`,

            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${SITE_URL}/`
                }
            ]
        }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <head>

                {/* =====================================================
                    GOOGLE TAG MANAGER
                    Load GTM as early as possible in <head>
                ====================================================== */}

                <Script
                    id="google-tag-manager"
                    strategy="beforeInteractive"
                >
                    {`
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[];
                            w[l].push({
                                'gtm.start': new Date().getTime(),
                                event:'gtm.js'
                            });

                            var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),
                                dl=l!='dataLayer'?'&l='+l:'';

                            j.async=true;
                            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                            f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-KM4FGMCH');
                    `}
                </Script>


                {/* =====================================================
                    GOOGLE ADS / GTAG
                ====================================================== */}

                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-16699501737"
                />

                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];

                        function gtag(){
                            dataLayer.push(arguments);
                        }

                        gtag('js', new Date());

                        gtag('config', 'AW-16699501737');
                    `}
                </Script>


                {/* =====================================================
                    MICROSOFT CLARITY
                ====================================================== */}

                <Script
                    id="gtm-script"
                    strategy="beforeInteractive"
                >
                    {`
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
            });

            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';

            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KM4FGMCH');
    `}
                </Script>


                {/* =====================================================
                    STRUCTURED DATA / SCHEMA
                ====================================================== */}

                <Script
                    id="arcmen-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />


                {/* =====================================================
                    GOOGLE SITE VERIFICATION
                ====================================================== */}

                <meta
                    name="google-site-verification"
                    content="JNxaaZpUMDIWvSP3qNB1T_wuxEMT-WELXOffj85pho4"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />


                {/* =====================================================
                    FAVICON
                ====================================================== */}

                <link
                    rel="icon"
                    href="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293696/arcmen/fav-icon.jpg"
                    type="image/x-icon"
                    sizes="any"
                />


                {/* =====================================================
                    FACEBOOK PIXEL
                ====================================================== */}

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {
                                if(f.fbq)return;

                                n=f.fbq=function(){
                                    n.callMethod ?
                                    n.callMethod.apply(n,arguments) :
                                    n.queue.push(arguments)
                                };

                                if(!f._fbq)f._fbq=n;

                                n.push=n;
                                n.loaded=!0;
                                n.version='2.0';
                                n.queue=[];

                                t=b.createElement(e);
                                t.async=!0;
                                t.src=v;

                                s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s);

                            }(
                                window,
                                document,
                                'script',
                                'https://connect.facebook.net/en_US/fbevents.js'
                            );

                            fbq('init', '1002700818509764');
                            fbq('track', 'PageView');
                        `
                    }}
                />


                {/* Facebook Pixel noscript */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1002700818509764&ev=PageView&noscript=1"
                    />
                </noscript>

            </head>


            {/* =========================================================
                BODY
                GTM NOSCRIPT MUST BE IMMEDIATELY AFTER OPENING <body>
            ========================================================== */}

            <body
                className={`${dmSans.className} ${montserrat.className}`}
            >

                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KM4FGMCH"
                        height="0"
                        width="0"
                        style={{
                            display: 'none',
                            visibility: 'hidden'
                        }}
                    />
                </noscript>

                {/* End Google Tag Manager (noscript) */}


                <div>
                    {children}
                </div>

            </body>

        </html>
    );
}