import { easings } from 'react-spring';
import styled from 'styled-components';

export const LoadingScreen = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .screenAngle {
        position: absolute;
        border: solid 1px #0084ff;
        width: 150px;
        height: 100px;
        box-sizing: border-box;

        &.topLeft {
            border-bottom: none;
            border-right: none;
            top: 0;
            left: 0;
        }

        &.topRight {
            border-bottom: none;
            border-left: none;
            top: 0;
            right: 0;
        }

        &.bottomLeft {
            border-top: none;
            border-right: none;
            bottom: 0;
            left: 0;
        }

        &.bottomRight {
            border-top: none;
            border-left: none;
            bottom: 0;
            right: 0;
        }
    }

    .LoadingCellsContainer {
        position: absolute;
        width: 300px;
        height: 100px;
        display: flex;
        align-items: center;
    }

    .LoadingCell {
        width: 50px;
        height: 80px; 
        background: #0084ff;
        margin-left: ${ window.innerWidth * (25 / 100) * (6.7 / 100)}px;
        border-radius: 10px;
    }

    .loadingMessage {
        font-size: 14px;
        color: #0084ff;
        font-family: monospace;
        margin-top: 170px;
    }
`;

export const ANGLE_FROM = {
    width: '300px',
};

export const ANGLE_TO = {
    width: '100px',
};

export const ANGLE_EASING = easings.easeInCirc;
