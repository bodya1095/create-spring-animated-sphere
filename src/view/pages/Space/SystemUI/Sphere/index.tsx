import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { animated, AnimationResult, easings, SpringValue, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useImmer } from 'use-immer';
import { SpringStatesType } from '../../types';
import { SphereItem, SPHERE_ITEM_DURATION } from './SphereItem';
import * as s from './styles';
import { useSphereItemAnimation } from './useSphereItemAnimation';

const ASphere = animated(s.Sphere);
const ASpotLight = animated.div;
const ASpot = animated.div;

export const SPOT_LIGHTS_COUNT = 3;
export const ITEMS_COUNT = 20;

const SPOT_DURATION = 1000;
const SPOT_LIGHT_ON_DELAY = SPOT_DURATION;
const SPOT_LIGHT_ON_DURATION = 1000;
const SPOT_OUT_DELAY = SPHERE_ITEM_DURATION + SPOT_LIGHT_ON_DURATION;
const SPHERE_SPIN_DURATION = 60000;

const SPHERE_SIZE = 400;

type Props = {
    show: boolean,
    dive: boolean,
    manualRotation: boolean,
}

export const Sphere = ({ dive, show, manualRotation }: Props) => {
    const [ dragged, setDragged ] = useState(false);
    const [ springResult, setSpringResult ] = useState<string>('rotateY(360deg) rotateX(0deg)');
    const [ spotSpringStates, setSpotSpringStates ] = useImmer<SpringStatesType>({
        from: s.spotFrom,
        to:   s.spotFrom,
    });
    const [ spotLightStates, setSpotLightStates ] = useImmer<SpringStatesType>({
        from: s.spotLightFrom,
        to:   s.spotLightFrom,
    });

    useEffect(() => {
        setSpotSpringStates((draft) => {
            draft.from = draft.to;
            draft.to = show ? s.spotTo : s.spotFrom;
        });
        setSpotLightStates((draft) => {
            draft.from = draft.to;
            draft.to = show ? s.spotLightTo : s.spotLightFrom;
        });
    }, [ show ]);

    const [ manualRotationStyles, manualRotateAPI ] = useSpring(() => {
        console.log('manual roate spring SPRING RESULT', springResult);

        return {
            transform: springResult,
        };
    }, [ springResult ]);

    const resultHandler = debounce((result: AnimationResult<SpringValue<any>>) => {
        if (result.value?.transform) {
            const transformValueCopy = result.value?.transform;
            manualRotateAPI.start({
                transform: transformValueCopy,
            });
            setSpringResult(transformValueCopy);
        }
    }, 100);

    const sphereSpinSpring = useSpring({
        from: {
            transform: 'rotateY(0deg) rotateX(0deg)',
        },
        to:     [{  transform: 'rotateY(360deg) rotateX(0deg)' }],
        loop:   true,
        pause:  !show,
        cancel: manualRotation,
        config: {
            easing:   easings.easeInOutBack,
            duration: SPHERE_SPIN_DURATION,
        },
        onChange: resultHandler,
    });


    const bind = useDrag((state) => {
        if (state.axis === 'x') {

        }
        const transform = `rotateX(${0}) rotateY(${0})`;
        // setSpringResult();
        // manualRotateAPI.set({ transform });
        console.log(state);
    });

    const { delays } = useSphereItemAnimation();

    const spotSpring = useSpring({
        from:   spotSpringStates.from,
        to:     spotSpringStates.to,
        delay:  show ? 0 : SPOT_OUT_DELAY,
        config: {
            duration: SPOT_DURATION,
        },
    });

    const spotLightsSpring = useSpring({
        from:   spotLightStates.from,
        to:     spotLightStates.to,
        delay:  show ? SPOT_LIGHT_ON_DELAY : 0,
        config: {
            duration: SPOT_LIGHT_ON_DURATION,
        },
    });

    // const onMouseDrag = () => {
    //     manualRotation && setDragged(true);
    // };

    // const onMouseDrog = () => {
    //     manualRotation && setDragged(false);
    // };

    // const mouseMoveHandler = (event: MouseEvent) => {
    //     if (dragged) {
    //         console.log({ x: event.movementX, y: event.movementY });
    //     }
    // };

    console.log('transform in comp', manualRotationStyles.transform);

    return (
        <s.Container>
            <ASphere
                className = { `${ manualRotation ? 'manualRotaionActive' : '' } ${ dragged }` }
                // style = { manualRotation ? manualRotationStyles.transform : sphereSpinSpring }
                style = { manualRotation ? { transform: springResult } : sphereSpinSpring }
                { ...bind() }>
                {  delays.map((d, i) => (
                    <SphereItem
                        delay = { d }
                        dive = { dive }
                        id = { i + 1 }
                        key = { d }
                        visible = { show }
                    />
                ))}
            </ASphere>
            <ASpot
                className = 'SphereSpot'
                style = { spotSpring } >
                <ASpotLight
                    className = 'SphereSpotLight light1'
                    style = { spotLightsSpring }
                />
                <ASpotLight
                    className = 'SphereSpotLight light2'
                    style = { spotLightsSpring }
                />
                <ASpotLight
                    className = 'SphereSpotLight light3'
                    style = { spotLightsSpring }
                />
            </ASpot>
        </s.Container>
    );
};
