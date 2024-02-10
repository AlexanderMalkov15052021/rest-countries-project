import { getCurrentCountryData } from '../../store/currentCountryStore';
import styles from './CurrentCountryView.module.scss';

import Link from "next/link";
import { CountryCode, RequestParams } from 'shared/types/RequestParams';
import { FC, } from 'react';

import Image from 'next/image'
import { Preloader } from 'shared';

export const CurrentCountryView: FC<CountryCode> = ({ code }: CountryCode) => {

    const reqOdj: RequestParams = {
        urlParams: `/alpha/${code}`,
    }

    const { data, error, isLoading } = getCurrentCountryData(reqOdj);

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
                        <h1>{country.name.official}</h1>
                        <div className={styles.flagContainer}>
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
                        <div>
                            <h2>{country.capital.map(capital => <p key={capital}>{capital}</p>)}</h2>
                        </div>
                        <div>
                            <p className={styles.population}>Population: {country.population}</p>
                        </div>
                        <div className={styles.coatOfArms}>
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
                    </div>
                })}
            </div>
        </>
    );
}
