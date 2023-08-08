import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-left: solid 4px #2d1d6e;
    position: fixed;
    top: 0;
    right: 0;
   
    &:hover {
        cursor: pointer;
    }

    a {
        font-size: 30px;
        color: #0c68f1;
        text-decoration: none;
        
        &:visited { 
            color: #0c68f1;
        }

        &:hover {
            text-shadow: 0px 2px 6px #abacbf;
        }
    }
`;

export const CloseNavSyle = {
    background:   'radial-gradient(circle, rgba(14,14,14,1) 15%, rgba(9,22,121,1) 17%, rgba(1,1,1,1) 69%)',
    height:       '150px',
    width:        '200px',
    borderRadius: '0% 0% 0% 100% / 0% 17% 77% 100%',
    cursor:       'pointer',
};

export const OpenStyles = {
    background:   'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(23,38,170,1) 100%, rgba(12,7,31,1) 100%)',
    height:       '400px',
    width:        '400px',
    borderRadius: '0% 0% 0% 28% / 67% 17% 77% 23%',
    cursor:       'default',
};

export const HiddenLinkStyles = {
    transform: 'rotate3d(1, 1, 1, 120deg) scale3d(0, 0, 0)',
};

export const LinkStyles = {
    transform: 'rotate3d(1, 1, 1, 0deg) scale3d(1, 1, 1)',
};
