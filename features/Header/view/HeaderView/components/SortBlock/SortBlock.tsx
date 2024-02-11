import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './SortBlock.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setSelectedSorting } from 'services/CountryState';
import { ArrowDownSquar, ArrowUpSquar, CrossSquare } from 'shared';
import { useRef } from 'react';

export const SortBlock = () => {

    const dispatch = useDispatch();

    const nodeRef = useRef<HTMLDivElement>(null);

    const sorting = useSelector((state: RootState) => state.countryState.selectedSorting);

    const onChangeSort = () => {
        switch (sorting) {
            case 'increase':
                dispatch(setSelectedSorting('decrease'));
                break;
            case 'decrease':
                dispatch(setSelectedSorting('default'));
                break;
            default:
                dispatch(setSelectedSorting('increase'));
        }
    }

    const getSortIcon = () => {
        switch (sorting) {
            case 'increase':
                return <ArrowUpSquar />
            case 'decrease':
                return <ArrowDownSquar />
            default:
                return <CrossSquare />
        }
    }

    return (
        <div className={styles.mainContainer}>

            <SwitchTransition>
                <CSSTransition
                    key={sorting}
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
                    <div className={styles.sortWrapper} ref={nodeRef} onClick={onChangeSort}>
                        {
                            getSortIcon()
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </div>
    )
}