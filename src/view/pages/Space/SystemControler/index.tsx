import React, { useState } from 'react';
import styled from 'styled-components';
import { PowerButton } from '../PowerButton';
import { SystemLoadingScreen } from '../SystemLoadingScreen';
import { SystemUI } from '../SystemUI';

export const Div = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

enum SystemStatuses {
    StandBy = 'StandBy',
    Loading = 'Loading',
    Online = 'Online',
}

export const SystemControler = () => {
    const [ systemStatus, setSystemStatus ] = useState<SystemStatuses>(SystemStatuses.StandBy);
    // const [ loading, setLoading ] = useState(false);

    const loadSystem = () => {
        setTimeout(() => {
            setSystemStatus(SystemStatuses.Loading);
        }, 1000);
    };

    const onLoadingFinished = () => {
        setSystemStatus(SystemStatuses.Online);
    };

    return (
        <Div>
            {/* { systemStatus === SystemStatuses.StandBy && <PowerButton onClick = { () => { loadSystem(); } }/> }
            { systemStatus === SystemStatuses.Loading && <SystemLoadingScreen onLoaded = { onLoadingFinished }/> }
            { systemStatus === SystemStatuses.Online && <SystemUI /> } */}
            {/* <SystemLoadingScreen onLoaded = { onLoadingFinished }/> */}
            <SystemUI />
        </Div>
    );
};
