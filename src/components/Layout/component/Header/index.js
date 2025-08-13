import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </div>

                <form className={cx('search')}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck={false} />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button type="submit" className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

                <div className={cx('actions')}>
                    <button className={cx('upload-btn')}>Upload</button>
                    <button className={cx('login-btn')}>Login</button>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
