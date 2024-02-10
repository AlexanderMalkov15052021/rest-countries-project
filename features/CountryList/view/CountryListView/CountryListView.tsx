import { RequestParams } from 'shared/types/RequestParams';
import { getCountryData } from '../../store/countryListStore';
import styles from './CountryListView.module.scss';
import { ClosedEye, Country, Heart, OpenEye, Preloader } from 'shared';

import { setCountryName, toggleCountryFavourite } from 'services/CountryState';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useDispatch } from 'react-redux';
import { toggleUITheme } from 'services/UIService';
import Link from 'next/link';


export const CountryListView = () => {

    const countryState = useSelector((state: RootState) => state.countryState);

    const dispatch = useDispatch();

    const reqParams: RequestParams = {
        urlParams: countryState.name === '' ? '/all' : `/name/${countryState.name}`
    }

    const { data: countrys, error, isLoading } = getCountryData(reqParams, countryState.selectedSorting);

    const countryNameChangeHandler = (evt: FormEvent<HTMLInputElement>) => {
        dispatch(setCountryName(evt.currentTarget.value));
    }

    const onClickHerta = (country: Country) => () => {
        dispatch(toggleCountryFavourite(country));
    }

    return (
        <div className={styles.main}>
            <div className={styles.titleWrapper}>
                <h1>Поиск страны</h1>
            </div>

            <div className={styles.serchBar}>
                <input placeholder={'Введите название страны'} onChange={countryNameChangeHandler} value={countryState.name} />
            </div>

            {error && countryState.name ? <div className={styles.iputError}><span>Некорректное название страны!</span></div> : ''}

            {error ? <div className={styles.errorMessage}><span>Ощибка загрузки данных!</span></div> : ''}

            {isLoading
                ? <Preloader size={.3} />
                : <div className={styles.countries}>
                    <div className={styles.countriesWrapper}>
                        {countrys?.map(obj => <div key={obj.name.common} className={styles.countriesContainer}>
                            <div className={styles.countryWrapper}>
                                <div className={styles.actionsWrapper}>
                                    <div className={styles.favouritesContainer} onClick={onClickHerta(obj)}>
                                        <Heart
                                            fill={
                                                countryState.countries.some(country => country.name.official === obj.name.official)
                                                    ? '#ff6699'
                                                    : 'none'
                                            }
                                            stroke={"#ff6699"}
                                            size={.7}
                                        />
                                    </div>
                                    <div>
                                        {
                                            countryState.countriesViewed.some(country => country.name.official === obj.name.official)
                                                ? <OpenEye />
                                                : <ClosedEye />
                                        }
                                    </div>
                                </div>
                                <div className={styles.linkWrapper}>
                                    <Link href={`/country/${obj.cioc ? obj.cioc : obj.ccn3}`}>{obj.name.common}</Link>
                                </div>
                                <div className={styles.areaWrapper}>
                                    <span>Площадь: {obj.area}</span>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            }

        </div>
    );
}