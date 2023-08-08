import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SystemControler } from './SystemControler';

import { Container } from './styles';

export const Space = () => {
    return (
        <Container>
            <NavBar />
            <SystemControler />
        </Container>
    );
};
