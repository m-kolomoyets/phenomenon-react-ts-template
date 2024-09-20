import { memo } from 'react';
import { Component as PhenomenonMarkIcon } from '@/icons/phenomenon-mark.svg?svgUse';
import s from './Home.module.css';

const Home: React.FC = () => {
    return (
        <main className={s.wrap}>
            <PhenomenonMarkIcon className={s.icon} />
        </main>
    );
};

export default memo(Home);
