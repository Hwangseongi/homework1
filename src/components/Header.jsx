import './Header.scss';
import './Nav.scss';
import './TopMenu.scss';

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <a href="index.html">
                        <img src="http://www.kyungdong.co.kr/ko/front/image/common/logo_pc.png" alt="" />
                    </a>
                </h1>

                <nav className="nav">
                    <ul className="gnb">
                        <li>
                            <a href="content/sub1/sub1-1.html">회사소개</a>
                        </li>
                        <li>
                            <a href="content/sub2/sub2-1.html">사업분야</a>
                        </li>
                        <li>
                            <a href="content/sub3/sub3-1.html">기술혁신</a>
                        </li>
                        <li>
                            <a href="content/sub4/sub4-1.html">홍보센터</a>
                        </li>
                    </ul>
                </nav>

                <div className="util">
                    <ul className="lang">
                        <li className="on">
                            <a href="#">KOR</a>
                        </li>
                        <li>
                            <a href="#">ENG</a>
                        </li>
                    </ul>
                    <p className="all-menu">
                        <i className="xi-bars"></i>
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
