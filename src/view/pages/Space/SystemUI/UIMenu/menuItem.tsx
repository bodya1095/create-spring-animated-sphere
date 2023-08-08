import { Link } from 'react-router-dom';
import { Hexagon } from '../../../../elements/hexagon';
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as s from './styles';

type Props = {
    itemData: {
        name: string,
        path: string,
    },
}

export const MenuItem = ({ itemData }: Props) => {
    const [ isHovered, setIsHovered ] = useState(false);

    const hoverSpring = useSpring({
        from:   isHovered ? s.menuItemTo : s.menuItemFrom,
        to:     isHovered ? s.menuItemTo : s.menuItemFrom,
        config: {
            duration: 200,

        },
        delay: 100,
        // duration: 1000,
    });
    // const [{ background }, api ] = useSpring(() =>  isHovered ? s.menuItemTo : s.menuItemFrom);

    const mouseEnterHexHandler = () => {
        // api.start(s.menuItemTo);
        setIsHovered(true);
    };

    const mouseLeaveHexHandler = () => {
        // api.start(s.menuItemFrom);
        setIsHovered(false);
    };

    console.log(isHovered);
    console.log(hoverSpring);

    return (
        // <Link to = { itemData.path }>
        <Link to = '/Space'>
            <Hexagon
                className = 'menuItemHex'
                // style = { background }
                style = { hoverSpring }
                onMouseEnter = { mouseEnterHexHandler }
                onMouseLeave = { mouseLeaveHexHandler }
            />
        </Link>
    );
};
