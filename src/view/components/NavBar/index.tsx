import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import * as s from './styles';

const AContainer = animated(s.Container);
const ALink = animated(Link);

export const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const barStyle = useSpring({
        from: s.CloseNavSyle,
        to:   isOpen ? s.OpenStyles
            : s.CloseNavSyle,
        config: {
            duration: 1000,
        },
    });

    const linkStyle = useSpring({
        from:   s.HiddenLinkStyles,
        to:     isOpen ? s.LinkStyles : s.HiddenLinkStyles,
        config: {
            duration: 1000,
        },
    });

    return (
        <AContainer
            style = { barStyle }
            onClick = { () => { setIsOpen(!isOpen); } } >
            <ALink
                style = { linkStyle }
                to = '/'>Home
            </ALink>
            <ALink
                style = { linkStyle }
                to = '/Space'>Space
            </ALink>
        </AContainer>
    );
};
