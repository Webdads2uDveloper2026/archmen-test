export const metadata = {
    title: 'Best Interior Designers in Chennai | Arcmen Interior',
    description: 'With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/' }
};

import Header from '@/components/Header';
import Flipbox from '../components/home/Flipbox';
import Herosection from '../components/home/Herosection';
import '../style/homestyle.scss';
import Footer from '@/components/Footer';
import WhyChooseArcmen from '@/components/home/WhyChooseArcmen';

export default function Home() {
    return (
        <div>
            <Header />
            <Herosection />
            <Flipbox />
            <Footer />
        </div>
    );
}
