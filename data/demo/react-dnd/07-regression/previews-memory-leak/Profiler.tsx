import React, { FC, useEffect, useState } from 'react';
import { useDragDropManager } from 'react-dnd';

export const Profiler: FC = () => {
    const dragDropManager = useDragDropManager();
    const backend = dragDropManager?.getBackend();
    const [key, setKey] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setKey(Math.random());
        }, 100);
        return () => clearTimeout(timeout);
    });

    const profile = backend?.profile() || {};
    const profileElements = Object.keys(profile).map((f) => (
        <li key={f}>
            {f}: {profile[f]}
        </li>
    ));

    return (
        <div key={key}>
            <ul>{profileElements}</ul>
        </div>
    );
};
