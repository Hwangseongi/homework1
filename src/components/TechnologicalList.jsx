import TechnologicalItem from './TechnologicalItem';
import TechnologicalData from './TechnologicalItem';

const TechnologicalList = ({ TechnologicalData }) => {
    return (
        <ul>
            {TechnologicalData.map((item) => (
                <TechnologicalItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default TechnologicalList;
