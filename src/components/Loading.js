import HashLoader from 'react-spinners/HashLoader';
import style from './Loading.module.css';

export default function Loading() {
    return (
        <div className={style.loading}>
            <HashLoader size="70px" color="#f03a3a" />
        </div>
    );
}
