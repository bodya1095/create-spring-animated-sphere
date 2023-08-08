import React, { useCallback } from 'react';
import { animated, useSpring } from 'react-spring';
import { useImmer } from 'use-immer';

import { ModulesTogglerPanel } from './ModulesTogglerPanel';
import { Sphere } from './Sphere';
import * as s from './styles';
import { UIMenu } from './UIMenu';

type ModulesType = {
    sphere: {
        online: boolean,
        toggled: boolean,
        manualRotation: boolean,
    }
}

const AContainer = animated(s.Container);

const initialModulesState:ModulesType = {
    sphere: { online: false, toggled: false, manualRotation: false },
};

export const SystemUI = () => {
    const [ modules, setModules ] = useImmer({ ...initialModulesState });

    const SystemUISpring = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {
            duration: 1000,
        },
    });

    const OnOffSphere = useCallback(() => {
        setModules((draft) => {
            draft.sphere.online = !draft.sphere.online;
        });
    }, []);

    const ToggleSphere = useCallback(() => {
        setModules((draft) => {
            draft.sphere.toggled = !draft.sphere.toggled;
        });
    }, []);

    const ToggleMaunalRotation = useCallback(() => {
        setModules((draft) => {
            draft.sphere.manualRotation = !draft.sphere.manualRotation;
        });
    }, []);

    return (
        <AContainer style = { SystemUISpring } >
            <UIMenu />
            <ModulesTogglerPanel
                showSphere = { OnOffSphere }
                toggleRotation = { ToggleMaunalRotation }
                toggleSphere = { ToggleSphere }
            />
            <Sphere
                dive = { modules.sphere.toggled }
                manualRotation = { modules.sphere.manualRotation }
                show = { modules.sphere.online }
            />
        </AContainer>
    );
};
