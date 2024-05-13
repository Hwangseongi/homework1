import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import TabBar from './TabBar';
import Visual from './Visual';

const index = () => {
    return (
        <div id="wrap">
            <Header />
            <Visual />
            <Main />
            <Footer />
            <TabBar />
        </div>
    );
};

export default index;
