import React, { useState } from 'react';
import { animated, easings, useSpring } from 'react-spring';
import ShowHideSvg from '../../../../../assets/icons/circle-chevron-down-lef.svg';
import { ToggleButton } from '../../../../elements/toggleButton';
import * as s from './styles';


const ADataList = animated(s.DataList);
const ALi = animated(s.Li);
const AShowHideBtn = animated(s.ShowHideBtn);

const DATA_LIST_DURATION = 1000;
const DATA_LIST_BTN_DELAY = 500;

type Props = {
    toggleSphere: () => void;
    showSphere: () => void;
    toggleRotation: () => void;
}

export const ModulesTogglerPanel = ({ toggleSphere, showSphere, toggleRotation }: Props) => {
    const [ showDataList, setShowDataList ] = useState<boolean>(true);
    const [ blocked, setBlocked ] = useState(true);

    const dataListSpring = useSpring({
        to:     showDataList ? s.DATA_LIST_TO_SHOW : s.DATA_LIST_TO_HIDE,
        from:   showDataList ? s.DATA_LIST_FROM_SHOW : s.DATA_LIST_FROM_HIDE,
        cancel: blocked,
        config: {
            duration: DATA_LIST_DURATION,
            easing:   easings.easeInOutCubic,
        },
        onRest: () => { setBlocked(true); },
    });

    const showDataListButtonSpring = useSpring({
        from: {
            bottom: showDataList ? -30 : 0,
        },
        to: {
            bottom: showDataList ? 0 : -30,
        },
        cancel: blocked,
        delay:  DATA_LIST_BTN_DELAY,
    });
    const hideDataListButtonSpring = useSpring({
        from: {
            top: showDataList ? 0 : -30,
        },
        to: {
            top: showDataList ? -30 : 0,
        },
        cancel: blocked,
        delay:  DATA_LIST_BTN_DELAY,
    });

    const showPanel = () => {
        setBlocked(false);
        setShowDataList(true);
    };
    const hidePanel = () => {
        setBlocked(false);
        setShowDataList(false);
    };

    return (
        <ADataList style = { dataListSpring }>
            <AShowHideBtn
                style = { showDataListButtonSpring }
                onClick = { showPanel }>
                <img
                    alt = 'Toggle'
                    src = { ShowHideSvg }
                    style = {{
                        width:     40,
                        height:    40,
                        marginTop: -5,
                        transform: 'rotate3d(0, 0, 1, 90deg)',
                    }}
                />
            </AShowHideBtn>
            <AShowHideBtn
                className = 'hide'
                style = { hideDataListButtonSpring }
                onClick = { hidePanel }>
                <img
                    alt = 'Toggle'
                    src = { ShowHideSvg }
                    style = {{
                        width:     40,
                        height:    40,
                        marginTop: -5,
                    }}
                />
            </AShowHideBtn>
            <div className = 'dataListContentWrapper' >
                <ALi>Show Sphere<ToggleButton onChange = { showSphere } /></ALi>
                <ALi>Toggle Sphere<ToggleButton   onChange = { toggleSphere } /></ALi>
                <ALi>Manual Rotation Sphere<ToggleButton   onChange = { toggleRotation } /></ALi>
            </div>
        </ ADataList>
    );
};
