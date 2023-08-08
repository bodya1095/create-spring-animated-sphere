import { useState, useEffect } from 'react';
import { ITEMS_COUNT } from '.';

export const useSphereItemAnimation = () => {
    const [ delays, setDelays ] = useState<number[]>([]);

    useEffect(() => {
        const delays: number[] = [];
        for (let i = 0; i < ITEMS_COUNT; i++) {
            delays.push(Math.floor(Math.random() * (2500 - 100)) + 100);
        }

        setDelays([ ...delays ]);
    }, []);

    return {
        delays,
    };
};
