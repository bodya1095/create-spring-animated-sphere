import styled from 'styled-components';

export const DataList = styled.div`
    position: fixed;
    width: 300px;
    height: 400px;
    border: solid 2px ${(p) => p.theme.color.primary};
    bottom: 10px;
    left: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${(p) => p.theme.color.primary};
    transform-origin: center;
    z-index: 1;
    color: ${(p) => p.theme.color.primary};


    .dataListContentWrapper {
        border-radius: 10px;
        position: absolute;
        width: 100%;
        height: 100%;
        /* max-width: 100%
        max-height: 100%; */
        box-sizing: border-box;
        background-color: #000;
        z-index: 1;
        padding: 20px;
    }
`;

export const ShowHideBtn = styled.div`
    width: 70px;
    height: 30px;
    border-top: solid 2px ${(p) => p.theme.color.primary};
    position: absolute;
    cursor: pointer;
    left: calc(50% - 25px);
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -30px;
    transform: rotate(180deg);
    z-index: 0;

    &.hide {
        transform: none;
        top: -30px;
    }

    &:before {
        height: 43px;
        width: 10px;
        content: '';
        border-right: solid 2px ${(p) => p.theme.color.primary};
        right: -19px;
        top: -5px;
        position: absolute;
        transform: rotate(-50deg) ;
    }

    &:after {
        content: '';
        height: 43px;
        width: 10px;
        border-left: solid 2px ${(p) => p.theme.color.primary};
        position: absolute;
        left: -19px;
        top: -5px;
        transform: rotate(50deg);
    }
`;

export const Li = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: monospace;
    font-size: 16px;
    margin-right: 40px;
`;

export const DATA_LIST_FROM_SHOW = {
    transform: 'rotate3d(0,0,1, -90deg)',
    left:      -360,
};

export const DATA_LIST_TO_SHOW = [
    { transform: 'rotate3d(0,0,1, -90deg)', left: 300 },
    { transform: 'rotate3d(0,0,1, 0deg)', left: 10 },
];

export const DATA_LIST_FROM_HIDE = { transform: 'rotate3d(0,0,1, 0deg)', left: 10 };
export const DATA_LIST_TO_HIDE = [
    { transform: 'rotate3d(0,0,1, -90deg)', left: 300 },
    {
        transform: 'rotate3d(0,0,1, -90deg)',
        left:      -360,
    },
];
