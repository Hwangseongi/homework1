import About from './About';
import Business from './Business';
import PublicRelations from './PublicRelations';
import Technological from './Technological';
import './Main.scss';

const Main = () => {
    return (
        <>
            <main id="container" className="main">
                <section id="content">
                    <Business />
                    <Technological />
                    <PublicRelations />
                    <About />
                </section>
            </main>
        </>
    );
};

export default Main;
