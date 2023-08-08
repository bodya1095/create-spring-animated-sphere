import styled from 'styled-components';

export const ToggleBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: 5px solid;
    border-color: ${(p) => p.theme.color.extra};
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;

    .toggleBtnStick {
        width: 5px;
        height: 19px;
        /* margin-left: 2px; */
        border-radius: 6px;
        background-color: ${(p) => p.theme.color.extra};
    }
`;

export const OFF_BUTTON = {
    borderColor: '##0b0054',
    boxShadow:   '0px 0px 0px #1af100',
};

export const ON_BUTTON = {
    borderColor: '#00f9ef',
    boxShadow:   '0px 0px 10px #1af100',
};

export const ON_STICK = {
    boxShadow:       '0px 0px 10px #2ff10c',
    backgroundColor: ' #15ff00',
};

export const OFF_STICK = {
    backgroundColor: '#6a0303',
    boxShadow:       '0px 0px 0px #2ff10c',
};

