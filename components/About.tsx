import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Shopify & Shopify Plus Development"
                        icon="/icons/design.svg"
                        description="I build and optimize Shopify and Shopify Plus stores — custom themes, performance optimization, and conversion-focused design."
                        projects={74} />
                    <AboutCard
                        title="Headless & Hydrogen"
                        icon="/icons/code.svg"
                        description="Implementing headless storefronts with Hydrogen, Storefront API and React for fast, flexible shopping experiences."
                        projects={12} />
                    <AboutCard
                        title="Integrations & Apps"
                        icon="/icons/phone.svg"
                        description="Custom apps, API integrations, subscriptions, and fulfillment workflows to automate and scale operations."
                        projects={9} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Shopify Wizard</h1>
                    <h3 className="white">Real design means creating a storefront that works—smooth, clear, intuitive, and built to convert.</h3>
                    <p className="gray">E-commerce has always fascinated me—how design, behavior, and technology come together to create a seamless shopping experience. That curiosity led me to become a Shopify developer, and it&#39;s been my focus ever since. I specialize in building and improving Shopify & Shopify Plus stores with a mindset that blends engineering discipline, UX thinking, and business awareness. Over the years, I&#39;ve partnered with brands across the US, Europe, and Asia, helping them redesign stores, optimize conversions, and transform complex operations into clean, scalable solutions. I take pride in being the kind of developer who digs deeper—understanding not just <b>what</b> needs to be built, but <b>why</b>. My work is driven by persistence, calm problem-solving, and a desire to craft user experiences that actually make sense. Every project is a chance to innovate, refine, and push the boundary of what a Shopify store can do.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <a href="https://lolahealth.com/" target="_blank">
                    <Image src="/images/partners/lola-health.svg" height={45} width={180} alt="lola-health" />
                </a>
                <a href="https://www.ultramarketinggroup.com/" target="_blank">
                    <Image src="/images/partners/ultra-marketing.svg" height={60} width={180} alt="ultra-marketing" />
                </a>
                <a href="https://www.mojoactive.com/" target="_blank">
                    <Image src="/images/partners/mojo-active.svg" height={45} width={180} alt="mojo-active" />
                </a>
                <a href="https://rocketcare.nl/" target="_blank">
                    <Image src="/images/partners/rocket-care.png" height={40} width={220} alt="rocket-care" />
                </a>
                <a href="https://sltconsulting.co/" target="_blank">
                    <Image src="/images/partners/SLTC.webp" height={40} width={120} alt="sltc" />
                 </a>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}