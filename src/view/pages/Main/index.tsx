// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { NavBar } from '../../components/NavBar';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <NavBar />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
