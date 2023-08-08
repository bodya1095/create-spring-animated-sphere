import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { Hexagon } from '../../../../elements/hexagon';
import { MenuItem } from './menuItem';
import * as s from './styles';

const menuItems = [
    {
        name: 'Sphere',
        path: '/Sphere',
    }, {
        name: 'Image Editor',
        path: '/ImageEditor',
    },
];

type Props = {
}

export const UIMenu = ({  }: Props) => {
    return (
        <s.Container>
            {
                menuItems.map((itemData) => {
                    return (
                        <MenuItem
                            itemData = { itemData }
                            key = { itemData.name }
                        />
                    );
                })
            }
        </ s.Container>
    );
};
