'use client';

import { ReactNode } from "react";
import styles from './ThemeProvider.module.scss';
import { RootState } from "store/store";
import { useSelector } from "react-redux";

type Props = {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const theme = useSelector((state: RootState) => state.UIState.theme);

    return (
        <main className={theme === 'light' ? styles.lightTheme : styles.darkTheme}>
            {children}
        </main>
    )
}