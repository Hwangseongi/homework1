import TechnologicalList from './TechnologicalList';
import './Technological.scss';
import TechnologicalData from '../assets/api/TechnologicalData';

const Technological = () => {
    return (
        <div className="con-box con2 box1">
            <div className="inner">
                <h2>TECHNOLOGICAL INNOVATION</h2>
                <TechnologicalList TechnologicalData={TechnologicalData} />
            </div>
        </div>
    );
};

export default Technological;
