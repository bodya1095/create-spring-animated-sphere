import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 200px;
    right: 300px;

    .SphereSpot {
        position: relative;
        border-radius: 49% 47% 0% 0% / 100% 100% 0% 0%;
        width: 100px;
        height: 44px;
        background: red;
        background: linear-gradient(0deg, rgba(0,0,0,1) 52%, rgba(23,38,170,1) 100%, rgba(12,7,31,1) 100%);
        margin-left: calc( 50% - 50px);

        .SphereSpotLight {
            background: rgb(0,95,255);
            background: linear-gradient(0deg, rgba(0,95,255,1) 0%, rgba(5,20,105,0.711922268907563) 22%, rgba(23,38,170,0) 100%);
            width: 100px;
            height: 170px;
            clip-path: polygon(35% 100%, 57% 100%, 100% 0, 0 0);
            position: absolute ;
            top: -170px;
            transform-origin: bottom center;
            
            &.light1 {
                transform: rotate(-20deg);
                filter: blur(150px);
                left: 0;
            }

            &.light2 {
                transform: rotate(20deg);
                filter: blur(150px);
            }

            &.light3 {
                transform: rotate(0deg);
                filter: blur(150px);
            }
        }
    }
`;

export const Sphere = styled.div`
    margin-bottom: 140px;
    width: 400px;
    height: 400px;
    transform-origin: center center 180px;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -webkit-transform-style: preserve-3d;

    &.manualRotaionActive {
        &:hover {
            cursor: grab;
            &.true {
                cursor: grabbing;
            }
        }
    }

    .sphereItem {
        top: 125px;
        left: 125px;
        position: absolute;
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

        &:hover { 
            background-color: #00e1ff;
        }
        
        &:after {
            background: radial-gradient(circle,rgb(255 255 255) 0%,rgb(255 255 255) 0%,rgb(15 0 255 / 22%) 100%)
        }
    }
    
    .i1, .l1:after {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    .i2 {
        transform: rotateX(23deg) rotateY(326deg) rotateZ(7deg);
    }
    .i3 {
        transform: rotateX(23deg) rotateY(34deg) rotateZ(53deg);
    }
    .i4 {
        transform: rotateX(66deg) rotateY(21deg) rotateZ(92deg);
    }
    .i5 {
        transform: rotateX(67deg) rotateY(340deg) rotateZ(91deg);
    }
    .i6 {
        transform: rotateX(320deg) rotateY(0deg) rotateZ(0deg);
    }
    .i7 {
        transform: rotateX(297deg) rotateY(34deg) rotateZ(7deg);
    }
    .i8 {
        transform: rotateX(341deg) rotateY(67deg) rotateZ(88deg);
    }
    .i9 {
        transform: rotateX(-29deg) rotateY(109deg) rotateZ(33deg);
    }
    .i10 {
        transform: rotateX(297deg) rotateY(326deg) rotateZ(53deg);
    }
    .i11 {
        transform: rotateX(109deg) rotateY(36deg) rotateZ(190deg);
    }
    .i12 {
        transform: rotateX(160deg) rotateY(246deg) rotateZ(90deg);
    }
    .i13 {
        transform: rotateX(134deg) rotateY(3deg) rotateZ(122deg);
    }
    .i14 {
        transform: rotateX(112deg) rotateY(327deg) rotateZ(175deg);
    }
    .i15 {
        transform: rotateX(73deg) rotateY(201deg) rotateZ(93deg);
    }
    .i16 {
        transform: rotateX(19deg) rotateY(141deg) rotateZ(351deg);
    }
    .i17 {
        transform: rotateX(175deg) rotateY(364deg) rotateZ(122deg);
    }
    .i18 {
        transform: rotateX(334deg) rotateY(251deg) rotateZ(205deg);
    }
    .i19 {
        transform: rotateX(69deg) rotateY(157deg) rotateZ(89deg);
    }
    .i20 {
        transform: rotateX(202deg) rotateY(326deg) rotateZ(67deg);
    }
`;


export const spotLightFrom = {
    opacity: 0,
};

export const spotLightTo = {
    opacity: 1,
};

export const spotFrom = {
    opacity: 0,
};

export const spotTo = {
    opacity: 1,
};
