import { getCurrentCountryData } from '../../store/currentCountryStore';
import styles from './CurrentCountryView.module.scss';

import Link from "next/link";
import { CountryCode, RequestParams } from 'shared/types/RequestParams';
import { FC, useEffect, } from 'react';

import Image from 'next/image'
import { Preloader } from 'shared';
import { useDispatch } from 'react-redux';
import { setViewedCountry } from 'services/CountryState';

export const CurrentCountryView: FC<CountryCode> = ({ code }: CountryCode) => {

    const reqOdj: RequestParams = {
        urlParams: `/alpha/${code}`,
    }

    const dispatch = useDispatch();

    const { data, error, isLoading } = getCurrentCountryData(reqOdj);

    useEffect(() => {
        data?.length && dispatch(setViewedCountry(data[0]));
        data?.length && console.log(data[0].name.official);
    }, [data]);

    return (
        <>
            <div>
                <nav className={styles.navBar}>
                    <Link href={'/'}>Вернуться к выбору страны</Link>
                </nav>
            </div>
            <div className={styles.mainContainer}>
                {error ? <div className={styles.errorMessage}>Ощибка загрузки данных!</div> : ''}
                {isLoading ? <Preloader size={.3} /> : data?.map(country => {
                    return <div key={country.cioc ? country.cioc : country.ccn3}>
                        <h1 className={styles.countryName}>{country.name.official}</h1>
                        <div className={styles.mainWrapper}>
                            <div className={styles.flagContainer}>
                                <h2>Флаг страны</h2>
                                <Image
                                    src={
                                        country.flags.png
                                            ? country.flags.png
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                    }

                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                    placeholder="blur"

                                    width={500}
                                    height={500}

                                    style={{ width: '300px', height: 'auto' }}

                                    priority
                                    alt={country.flags.alt ? country.flags.alt : `${country.name.official} flag`}
                                />
                            </div>
                            <div className={styles.capitalWrapper}>
                                <h2>Столица</h2>
                                <div>{country.capital.map(capital => <p className={styles.capital} key={capital}>{capital}</p>)}</div>
                            </div>
                            <div className={styles.populationWrapper}>
                                <h2>Население</h2>
                                <p className={styles.population}>{country.population}</p>
                            </div>
                            <div className={styles.coatOfArms}>
                                <h2>Герб государства</h2>
                                <Image
                                    src={
                                        country.coatOfArms.png
                                            ? country.coatOfArms.png
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                    }

                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                    placeholder="blur"

                                    width={500}
                                    height={500}

                                    style={{ width: '300px', height: 'auto' }}

                                    priority
                                    alt={'Coat of arms'}
                                />
                            </div>
                            <div className={styles.languagesWrapper}>
                                <h2>Языки</h2>
                                {
                                    Object.values(country.languages).map((lang, index) => {
                                        return <p key={index} className={styles.languages}>{lang}</p>
                                    })
                                }
                            </div>
                            <div className={styles.currenciesWrapper}>
                                <h2>Валюта</h2>
                                {
                                    Object.keys(country.currencies).map((cur, index) => {
                                        return <p key={index} className={styles.currencies}>{cur}</p>
                                    })
                                }
                            </div>
                            <div className={styles.timezonesWrapper}>
                                <h2>Временные зоны</h2>
                                {
                                    country.timezones.map((zone, index) => {
                                        return <p key={index} className={styles.timezones}>{zone}</p>
                                    })
                                }
                            </div>
                            <div className={styles.mapsWrapper}>
                                <h2>Расположение на карте</h2>
                                <iframe src={`https://maps.google.com/maps?q=${country.latlng[0]}, ${country.latlng[1]}&z=4&output=embed`} width="360" height="360" ></iframe>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}
