import { animated, SpringValue } from 'react-spring';
import styled from 'styled-components';
import React from 'react';

const Hex = styled.div`
    width: 150px;
    height: calc(150px * 0.866);
    clip-path: polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    width: 150px;
    height: 130px;
    background-color: #2d1d6e;
    transform-origin: center center 180px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backface-visibility: visible;
    font-size: 20px;
    font-weight: bold;
    -webkit-transform-style: preserve-3d;
    opacity: 0.8;

    &:after {
        content: '';
        background: radial-gradient(circle, rgba(14,14,14,1) 10%, rgba(204,204,204,1) 59%, rgba(1,1,1,1) 96%);
        position: absolute;
        top: 8px;
        left: 8px;
        height: calc(100% - 16px);
        width: calc(100% - 16px);
        clip-path: polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }

    &.pent {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        width: calc(150px * 1.05);
        height: 150px;
    }

    &:hover { 
            /* background-color: #ff0505; */
            background-color: #00e1ff;
    }

`;

const AHex = animated(Hex);

type HexPropsType = {
    [x: string]: SpringValue<string>
} |
{
    [x: string]: SpringValue<string | number>
} |
SpringValue<string>;

type Props = {
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    className?: string | undefined,
    style?: HexPropsType,
}

export const Hexagon = ({ className, style, onMouseEnter, onMouseLeave }: Props) => {
    console.log('hexStyle', style);

    return (
        <AHex
            className = { className }
            style = { style }
            onMouseEnter = { onMouseEnter }
            onMouseLeave = { onMouseLeave }
        />
    );
};
