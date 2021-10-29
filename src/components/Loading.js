import HashLoader from 'react-spinners/HashLoader';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <HashLoader color="#f03a3a" />
        </div>
    );
}
