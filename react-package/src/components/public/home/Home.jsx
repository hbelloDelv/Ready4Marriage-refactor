import React from 'react';
import Hero from '../hero-section/Hero'
import AdvantageSection from '../content-section/advantageSection/Wrapper';
import SecuritySection from '../content-section/securityPrioritySection/Wrapper';
import Footer from '../footer-section/footer/FooterWrapper';


function Home() {
    return (
        <div>
            <Hero />
            <AdvantageSection />
            <SecuritySection />
            <Footer />
        </div>
    )
}

export default Home
