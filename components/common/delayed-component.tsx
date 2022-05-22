import React, { useState, useEffect } from 'react';
import ActiveLoader from './active-loader';

type Props = {
    children: React.ReactNode;
    waitBeforeShow?: number;
};

const Delayed = ({ children, waitBeforeShow = 50 }: Props) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);

        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? <>{children}</> : <ActiveLoader />;
};

export default Delayed;