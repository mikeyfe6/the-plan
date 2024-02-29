import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => (
    <header className={headerStyles.header}>
        <StaticImage
            src="../images/logo.jpeg"
            alt="Logo"
            width={100}
            height={100}
        />
        <ul>
            <li>home</li>
            <li>videos</li>
            <li>contact</li>
        </ul>
    </header>
)

export default Header;