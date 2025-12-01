import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Anson Chen | Shopify Developer</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/ansonchen-shopify" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shopify-wizards" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:ansonchen.wizard@hotmail.com" target="_blank" rel="noreferrer">
                        <Image src="/icons/phone.svg" width={24} height={24} alt="email-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}