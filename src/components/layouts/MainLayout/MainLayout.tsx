import { memo } from 'react';
import type { MainLayoutProps } from './types';
import s from './MainLayout.module.css';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={s.wrap}>
            <header className={s.header}>Header</header>
            <main className={s.main}>{children}</main>
            <footer className={s.footer}>Footer</footer>
        </div>
    );
};

export default memo(MainLayout);
