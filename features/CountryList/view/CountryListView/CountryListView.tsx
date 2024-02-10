import { RequestParams } from 'shared/types/RequestParams';
import { getCountryData } from '../../store/countryListStore';
import styles from './CountryListView.module.scss';
import { Preloader } from 'shared';

import { setCountryName } from 'services/CountryState';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useDispatch } from 'react-redux';
import { toggleUITheme } from 'services/UIService';
import Link from 'next/link';


export const CountryListView = () => {

    const countryName = useSelector((state: RootState) => state.countryState.name);

    const dispatch = useDispatch();

    const reqParams: RequestParams = {
        urlParams: countryName === '' ? '/all' : `/name/${countryName}`
    }

    const { data: countrys, error, isLoading } = getCountryData(reqParams);

    const countryNameChangeHandler = (evt: FormEvent<HTMLInputElement>) => {
        dispatch(setCountryName(evt.currentTarget.value));
    }

    return (
        <div className={styles.main}>
            <div className={styles.titleWrapper}>
                <h1>Поиск страны</h1>
            </div>

            <div className={styles.serchBar}>
                <input placeholder={'Введите название страны'} onChange={countryNameChangeHandler} value={countryName} />
            </div>

            {error ? <div className={styles.errorMessage}><span>Ощибка загрузки данных!</span></div> : ''}

            {isLoading
                ? <Preloader size={.3} />
                : <div className={styles.countries}>
                    {countrys?.map(obj => <div key={obj.name.common} className={styles.countriesContainer}>
                        <div className={styles.countryWrapper}>
                            <Link href={`/country/${obj.cioc ? obj.cioc : obj.ccn3}`}>{obj.name.common}</Link>
                        </div>
                    </div>)}
                </div>
            }

        </div>
    );
}