import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style['header']}>
            <nav className={style['nav']}>
                <Link to="/" className={style['nav-item']}>HOME</Link>
                <Link to="/auth" className={style['nav-item']}>AUTH</Link>
            </nav>
        </header>
    );
};

export default Header;