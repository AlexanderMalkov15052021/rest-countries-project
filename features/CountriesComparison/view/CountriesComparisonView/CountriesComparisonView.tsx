import Link from 'next/link';
import styles from './CountriesComparisonView.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Image from 'next/image';
import { useRef } from 'react';

export const CountriesComparisonView = () => {

    const negativeResults = useRef<string[]>([]);

    const countries = useSelector((state: RootState) => state.countryState.countryComparison);

    const setNegativeResults = (name: string) => {
        negativeResults.current.push(name);
        return '';
    }

    return (
        <>
            <div>
                <nav className={styles.navBar}>
                    <Link href={'/'}>Вернуться к выбору страны</Link>
                </nav>
            </div>
            <div className={styles.mainContainer}>

                {
                    countries.length > 1
                        ? <div className={styles.mainWrapper}>
                            <div className={styles.flagsContainer}>
                                <div className={styles.flag}>
                                    <Image
                                        src={
                                            countries[0].flags.png
                                                ? countries[0].flags.png
                                                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                        }

                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                        placeholder="blur"

                                        width={500}
                                        height={500}

                                        style={{ maxWidth: '300px', width: '35vw', height: 'auto' }}

                                        priority
                                        alt={countries[0].flags.alt ? countries[0].flags.alt : `${countries[0].name.official} flag`}
                                    />
                                </div>

                                <div className={styles.vs}>VS</div>

                                <div className={styles.flag}>
                                    <Image
                                        src={
                                            countries[1].flags.png
                                                ? countries[1].flags.png
                                                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                        }

                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvft/PQAHpAL2BDDAqQAAAABJRU5ErkJggg=="
                                        placeholder="blur"

                                        width={500}
                                        height={500}

                                        style={{ maxWidth: '300px', width: '35vw', height: 'auto' }}

                                        priority
                                        alt={countries[1].flags.alt ? countries[1].flags.alt : `${countries[1].name.official} flag`}
                                    />
                                </div>

                            </div>

                            <table>
                                <caption>
                                    Сравнение показателей стран
                                </caption>
                                <thead>
                                    <tr>
                                        <th scope={styles.col}>Параметры</th>
                                        <th scope={styles.col}>{countries[0].name.common}</th>
                                        <th scope={styles.col}>{countries[1].name.common}</th>
                                        <th scope={styles.col}>Лидер</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className={styles.params} scope={styles.row}>Площадь</th>
                                        <td>{countries[0].area}</td>
                                        <td>{countries[1].area}</td>
                                        <td>
                                            {
                                                countries[0].area > countries[1].area
                                                    ? countries[0].name.common
                                                    : setNegativeResults(countries[1].name.common)
                                            }
                                            {
                                                countries[0].area < countries[1].area
                                                    ? countries[1].name.common
                                                    : setNegativeResults(countries[0].name.common)
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.params} scope={styles.row}>Население</th>
                                        <td>{countries[0].population}</td>
                                        <td>{countries[1].population}</td>
                                        <td>
                                            {
                                                countries[0].population > countries[1].population
                                                    ? countries[0].name.common
                                                    : setNegativeResults(countries[1].name.common)
                                            }
                                            {
                                                countries[0].population < countries[1].population
                                                    ? countries[1].name.common
                                                    : setNegativeResults(countries[0].name.common)
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.params} scope={styles.row}>Количество временных зон</th>
                                        <td>{countries[0].timezones.length}</td>
                                        <td>{countries[1].timezones.length}</td>
                                        <td>
                                            {
                                                countries[0].timezones.length > countries[1].timezones.length
                                                    ? countries[0].name.common
                                                    : setNegativeResults(countries[1].name.common)
                                            }
                                            {
                                                countries[0].timezones.length < countries[1].timezones.length
                                                    ? countries[1].name.common
                                                    : setNegativeResults(countries[0].name.common)
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.params} scope={styles.row}>Количество языков</th>
                                        <td>{Object.keys(countries[0].languages).length}</td>
                                        <td>{Object.keys(countries[1].languages).length}</td>
                                        <td>
                                            {
                                                Object.keys(countries[0].languages).length > Object.keys(countries[1].languages).length
                                                    ? countries[0].name.common
                                                    : setNegativeResults(countries[1].name.common)
                                            }
                                            {
                                                Object.keys(countries[0].languages).length < Object.keys(countries[1].languages).length
                                                    ? countries[1].name.common
                                                    : setNegativeResults(countries[0].name.common)
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.params} scope={styles.row}>Используемые валюты</th>
                                        <td>{Object.keys(countries[0].currencies).length}</td>
                                        <td>{Object.keys(countries[1].currencies).length}</td>
                                        <td>
                                            {
                                                Object.keys(countries[0].currencies).length > Object.keys(countries[1].currencies).length
                                                    ? countries[0].name.common
                                                    : setNegativeResults(countries[1].name.common)
                                            }
                                            {
                                                Object.keys(countries[0].currencies).length < Object.keys(countries[1].currencies).length
                                                    ? countries[1].name.common
                                                    : setNegativeResults(countries[0].name.common)
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th scope={styles.row} colSpan={3}>Лидер по показателям:</th>
                                        <td>
                                            {
                                                negativeResults.current.filter(name => name === countries[0].name.common).length
                                                    < negativeResults.current.filter(name => name === countries[1].name.common).length
                                                    ? countries[1].name.common
                                                    : ''
                                            }
                                            {
                                                negativeResults.current.filter(name => name === countries[0].name.common).length
                                                    > negativeResults.current.filter(name => name === countries[1].name.common).length
                                                    ? countries[0].name.common
                                                    : ''
                                            }
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>


                        </div>
                        : <div className={styles.countriesLength}>
                            Выберите две страны для сравнения
                            <Link href={'/'}> на странице выбора стран </Link>.
                            Сейчас выбрано стран: {countries.length}</div>
                }

            </div>
        </>
    )
}