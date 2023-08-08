import React, { useState, useEffect } from 'react';
import { easings, useSpring } from 'react-spring';
import { useImmer } from 'use-immer';
import { Hexagon } from '../../../../elements/hexagon';
import { SpringStatesType } from '../../types';

const SPHERE_ITEM_INITIAL_FROM = {
    transformOrigin: 'center center 1000px',
    opacity:         0,
};

const SPHERE_ITEM_INITIAL_TO = {
    transformOrigin: 'center center 180px',
    opacity:         1.5,
};

const  SPHERE_ITEM_DIVE_OUT = {
    transformOrigin: 'center center 250px',
    opacity:         1.5,
};

const  SPHERE_ITEM_DIVE_IN = {
    opacity:         1.5,
    transformOrigin: 'center center 160px',
};

export const SPHERE_ITEM_DURATION = 2000;

type Props = {
    delay: number;
    id: number;
    dive: boolean;
    visible: boolean;
}

export const SphereItem = ({ delay, id, dive, visible }: Props) => {
    const [ isIN, setIsIN ] = useState<boolean>(false);

    const [ itemSpring, setItemSpring ] = useImmer<SpringStatesType>({
        from: SPHERE_ITEM_INITIAL_FROM, to: SPHERE_ITEM_INITIAL_FROM });

    const sphereItemSpring = useSpring({
        from:   itemSpring.from,
        to:     itemSpring.to,
        delay:  delay,
        config: {
            duration: SPHERE_ITEM_DURATION,
            easing:   easings.easeOutQuint,
        },
    });

    useEffect(() => {
        !dive && setIsIN(Math.floor(Math.random() * 3) < 1);
    }, [ dive ]);

    useEffect(() => {
        setItemSpring((draft) => {
            if (visible) {
                draft.from = SPHERE_ITEM_INITIAL_FROM;
                draft.to = SPHERE_ITEM_INITIAL_TO;
                if (dive) {
                    draft.from = draft.to;
                    draft.to = isIN ? SPHERE_ITEM_DIVE_IN : SPHERE_ITEM_DIVE_OUT;
                }
            } else {
                draft.to = SPHERE_ITEM_INITIAL_FROM;
            }
        });
    }, [ dive, isIN, visible ]);

    return (
        <Hexagon
            className = { `sphereItem hex i${ id }` }
            style = {{ ...sphereItemSpring }}
        />
    );
};
