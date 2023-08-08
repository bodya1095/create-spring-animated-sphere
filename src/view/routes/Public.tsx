// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Main } from '../pages';
import { Space } from '../pages/Space';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Main /> }
                path = '/'
            />
            <Route
                element = { <Space /> }
                path = '/Space'
            />
            <Route
                element = { <Space /> }
                path = '/ImageEditor'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
