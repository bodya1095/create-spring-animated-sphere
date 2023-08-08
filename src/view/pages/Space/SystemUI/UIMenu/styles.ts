import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    position: fixed;
    top: 20px;
    left: 0px;
    height: 135px;
    padding: 10px;
    width: 500px;

    border: solid 2px ${ (props) => props.theme.color.primary };
    border-radius: 10px;
    display: flex;
    
    .menuItemHex {
        /* background: radial-gradient(circle, rgba(14,14,14,1) 0%, rgba(9,22,121,1) 0%, rgba(1,1,1,1) 100%);; */
        border-radius: 10px; 

        &:after {
            /* background: rgb(14,14,14); */
            background: radial-gradient(circle, rgba(14,14,14,1) 0%, rgba(9,22,121,1) 0%, rgba(1,1,1,1) 100%);
        }

        /* &:hover {
            background: rgb(0,95,255);
            background: linear-gradient(0deg, rgba(0,95,255,1) 0%, rgba(5,20,105,0.711922268907563) 22%, rgba(23,38,170,0) 100%);
        } */
    }
`;


export const menuItemFrom = {
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.711922268907563) 22%, rgba(0,0,0,1) 100%)',
};

export const menuItemTo = {
    //  background: rgb(0,95,255);
    background: 'linear-gradient(0deg, rgba(0,95,255,1) 0%, rgba(5,20,105,0.711922268907563) 22%, rgba(23,38,170,0) 100%)',
};
