import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
// import { makeStyles } from 'tss-react/mui';

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 2px #000;
    position: relative;
    /* box-shadow: 2px 2px 2px #fff; */
    box-shadow: none;
    cursor: pointer;

    .powerStick {
        width: 4px;
        height: 40px;
        border-radius: 4px;
        background-color: #0099ff;
        position: absolute;
        left: calc( 50% - 2px);
        top: 20px;
    }

    .powerCircle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 4px #0099ff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        position: absolute;
        left: calc( 48% - 25px);
        top: 33px;
        
    }

`;
const AnimatedCircle = animated(Circle);

type Props = {
    onClick:  (event: React.MouseEvent) => void,
}
export const PowerButton = ({ onClick }: Props) => {
    const [ clicked, setClicked ] = useState(false);
    const { backgroundColor, borderColor, boxShadow } = useSpring({
        from: {
            borderColor:     '#0e0e6d',
            backgroundColor: '#0e0e6d',
            boxShadow:       '0 0 1px #2f2fb4',
        },
        to: [
            {
                borderColor:     '#2f2fb4',
                boxShadow:       '0 0 20px #2f2fb4',
                backgroundColor: '#2f2fb4',

            },
            {
                borderColor:     '#0e0e6d',
                boxShadow:       '0 0 1px #2f2fb4',
                backgroundColor: '#0e0e6d',
            },
        ],
        loop:   true,
        config: {
            duration: 3000,
        },
    });


    const handleClick = (event: React.MouseEvent) => {
        setClicked(true);
        onClick(event);
    };

    return (
        <AnimatedCircle
            style = {{ borderColor, boxShadow }}
            onClick = { handleClick } >
            <animated.div
                className = 'powerStick'
                style = { !clicked ? { backgroundColor } : {} }>
            </animated.div>
            <animated.div
                className = 'powerCircle'
                style = { !clicked ? { borderColor } : {} }>
            </animated.div>
        </AnimatedCircle>
    );
};
