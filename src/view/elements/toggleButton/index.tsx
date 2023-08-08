import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import * as s from './styles';

const AToggledBtn = animated(s.ToggleBtn);
const Astick = animated.div;

type Props = {
    onChange?: (toggled: boolean) => void,
}

export const ToggleButton = ({ onChange }: Props) => {
    const [ state, setState ] = useState(false);

    const onToggle = () => {
        setState(!state);
        onChange && onChange(!state);
    };

    const buttonSpring = useSpring({
        from:   state ? s.OFF_BUTTON : s.ON_BUTTON,
        to:     state ? s.ON_BUTTON : s.OFF_BUTTON,
        config: {
            duration: 400,
        },
    });

    const stickSpring = useSpring({
        from:   state ? s.OFF_STICK : s.ON_STICK,
        to:     state ? s.ON_STICK : s.OFF_STICK,
        config: {

        },
    });

    return (
        <AToggledBtn
            style = { buttonSpring }
            onClick = { onToggle }>
            <Astick
                className = 'toggleBtnStick'
                style = { stickSpring }
            />
        </AToggledBtn>
    );
};
