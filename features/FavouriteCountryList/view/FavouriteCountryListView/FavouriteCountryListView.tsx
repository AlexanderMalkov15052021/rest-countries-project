import Link from 'next/link';
import styles from './FavouriteCountryListView.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Country, Heart } from 'shared';
import { useDispatch } from 'react-redux';
import { toggleCountryFavourite } from 'services/CountryState';

export const FavouriteCountryListView = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state: RootState) => state.countryState.countries);

    const onClickHerta = (country: Country) => () => {
        dispatch(toggleCountryFavourite(country));
    }

    return (
        <>
            <div>
                <nav className={styles.navBar}>
                    <Link href={'/'}>Вернуться к выбору страны</Link>
                </nav>
            </div>
            <div className={styles.titleWrapper}>
                <h1>Избранные страны</h1>
            </div>
            <div className={styles.mainContainer}>


                <div className={styles.countries}>
                    <div className={styles.countriesWrapper}>
                        {countries?.map((obj: Country) => <div key={obj.name.common} className={styles.countriesContainer}>
                            <div className={styles.countryWrapper}>
                                <div className={styles.favouritesWrapper}>
                                    <div className={styles.favouritesContainer} onClick={onClickHerta(obj)}>
                                        <Heart
                                            fill={countries.some(country => country.name.official === obj.name.official)
                                                ? '#ff6699'
                                                : 'none'
                                            }
                                            stroke={"#ff6699"}
                                            size={.7}
                                        />
                                    </div>
                                </div>
                                <div className={styles.linkWrapper}>
                                    <Link href={`/country/${obj.cioc ? obj.cioc : obj.ccn3}`}>{obj.name.common}</Link>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>


            </div>
        </>
    )
}