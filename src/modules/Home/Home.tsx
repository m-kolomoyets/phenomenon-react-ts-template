import { memo } from 'react';
import clsx from 'clsx';
import { CURRENT_YEAR } from './constants';
import Counter from './components/Counter';
import { Component as PhenomenonMarkIcon } from '@/icons/phenomenon-mark.svg?svgUse';
import s from './Home.module.css';

const Home: React.FC = () => {
    return (
        <main className={clsx(s.wrap, 'full-height')}>
            <div className={s.inner}>
                <header className={s.header}>
                    <PhenomenonMarkIcon className={s.icon} />
                    <h1 className={s.title}>
                        <strong className={s.company}>Phenomenon</strong> <br /> <span className={s.vite}>Vite</span> +{' '}
                        <span className={s.react}>React</span> +<span className={s.typescript}>Typescript</span> +{' '}
                        <span className={s['tanstack-router']}>Tanstack Router</span>
                    </h1>
                </header>
                <section className={s.content}>
                    <Counter />
                    <p className={s.description}>
                        Start editing <code>src/modules/Home/Home.tsx</code> to start a project
                    </p>
                </section>
            </div>
            <footer className={s.footer}>&copy;&nbsp;{CURRENT_YEAR}, Phenomenon.studio</footer>
        </main>
    );
};

export default memo(Home);
