import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                <button>Shopify | Shopify Plus Engineer</button>
                    <h1 className="white">Crafting high-converting Shopify storefronts.</h1>
                    <h1 className="white">Themes, Hydrogen, and custom apps.</h1>
                    <p className="gray">I help merchants and teams turn product-led strategies into reliable, fast, and accessible storefronts on Shopify and Shopify Plus.</p>
                    <a className="green" href="mailto:shopify.wizard@hotmail.com">Start a Shopify project</a>
                </div>
                <Image src="/images/shopify-wizard.png" width={463} height={600} alt="Shopify Wizard portrait"  /> 
            </div>
        </header>
    )
}