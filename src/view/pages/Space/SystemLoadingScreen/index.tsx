import React, { useEffect, useState } from 'react';
import { useSpring, animated, useTransition, easings } from 'react-spring';
import * as s from './styles';

const ALoadingScreen = animated(s.LoadingScreen);
const ACellsContainer = animated.div;
const ACell = animated.div;
const ALoadingMessage = animated.span;
const CELLS_COUNT = 5;

// TIMINGS
const ANGLES_DELAY = 3500;
const ANGLE_DURATION = 600;
const DELAY_BETWEEN_CELLS = 500;
const CELL_DURATION = 1000;

const CONTAINER_DELAY = ANGLES_DELAY + ANGLE_DURATION + 100;
const MESSAGE_DURATION = 1000;

const INITIAL_MESSAGE = 'System Initialization...';

const angleClassNames = [ 'bottomRight', 'bottomLeft', 'topRight', 'topLeft' ];

type Props = {
    onLoaded: () => void,
}

export const SystemLoadingScreen = ({ onLoaded }: Props) => {
    const [ loadingCells, setLoadingCells ] = useState<number[]>([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ initialMessages, setInitialMessages ] = useState([ INITIAL_MESSAGE ]);

    const angleStyles = useSpring({
        from:   s.ANGLE_FROM,
        to:     s.ANGLE_TO,
        delay:  ANGLES_DELAY,
        config: {
            duration: ANGLE_DURATION,
        },
    });

    const angleInitialStyles = useSpring({
        from:   { opacity: 0 },
        to:     { opacity: 1 },
        config: {
            duration: 300,
        },
    });

    const containerStyles = useSpring({
        from: {
            width:   '25%',
            height:  '15%',
            opacity: 1,
        },
        to: [
            {
                width:   '99%',
                height:  '98%',
                opacity: 1,
            },
            {
                opacity: 0,
            },
        ],
        delay:  CONTAINER_DELAY,
        config: {
            easing: s.ANGLE_EASING,
        },
        onResolve: () => { onLoaded(); },
    });

    const messageTransition = useTransition(initialMessages, {
        from:   { opacity: 0 },
        enter:  { opacity: 1 },
        leave:  { opacity: 0 },
        config: {
            duration: MESSAGE_DURATION,
            easing:   easings.easeInCubic,
        },
    });

    const transitions = useTransition(loadingCells, {
        from:     { opacity: 0 },
        enter:    { opacity: 1 },
        leave:    { opacity: 0 },
        delay:    200,
        duration: CELL_DURATION,
    });

    const finishLoading = () => {
        setLoaded(true);
        setLoadingCells([]);
        setInitialMessages([]);
    };

    useEffect(() => {
        if (loadingCells.length < CELLS_COUNT && !loaded) {
            setTimeout(() => {
                setLoadingCells([ ...loadingCells, loadingCells.length ]);
            }, DELAY_BETWEEN_CELLS);
        } else {
            setTimeout(() => {
                finishLoading();
            }, DELAY_BETWEEN_CELLS);
        }
    }, [ loadingCells, loaded ]);


    return (
        <ALoadingScreen>

            <ACellsContainer
                className = 'LoadingCellsContainer'
                style = { containerStyles }>
                {
                    angleClassNames.map((c) => (
                        <animated.div
                            className = { `screenAngle ${c}` }
                            style = {{ ...angleStyles, ...angleInitialStyles }}
                        />
                    ))
                }
                {transitions(({ opacity }) => {
                    return (
                        <ACell
                            className = 'LoadingCell'
                            style = {{ opacity }}
                        />
                    );
                })}
            </ACellsContainer>
            {
                messageTransition((style, item) =>(
                    <ALoadingMessage
                        className = 'loadingMessage'
                        style = { style } >{item}
                    </ALoadingMessage>
                ))
            }
        </ALoadingScreen>
    );
};
