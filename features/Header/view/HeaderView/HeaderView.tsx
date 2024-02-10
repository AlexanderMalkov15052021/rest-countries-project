import { useDispatch } from 'react-redux';
import styles from './HeaderView.module.scss';
import { toggleUITheme } from 'services/UIService';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Heart, Moon, Sun } from 'shared';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';
import Link from 'next/link';

export const HeaderView = () => {

    const theme = useSelector((state: RootState) => state.UIState.theme);

    const dispatch = useDispatch();

    const onChangeTheme = () => {
        dispatch(toggleUITheme());
    }

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.themeContainer}>
                <SwitchTransition>
                    <CSSTransition
                        key={theme === 'light' ? 'light' : 'dark'}
                        nodeRef={nodeRef}
                        addEndListener={(done: () => void) => {
                            nodeRef.current?.addEventListener("transitionend", done, false);
                        }}
                        classNames={{
                            enter: styles.enter,
                            enterActive: styles.enterActive,
                            exit: styles.exit,
                            exitActive: styles.exitActive,
                        }}
                    >
                        <div
                            ref={nodeRef}
                            onClick={onChangeTheme}
                            className={styles.themeWrapper}
                        >
                            {theme === 'light' ? <Sun /> : <Moon />}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className={styles.favouritesContainer}>
                <Link href={`/favourites`}>
                    <Heart fill={"#ff6699"} stroke={"#ff6699"} />
                </Link>
            </div>

        </div>
    )
}