import BusinessItem from './BusinessItem';
import './Business.scss';

const BusinessList = ({ data }) => {
    return (
        <ul className="list">
            {/* BusinessItem - li */}

            {data.map((item) => (
                <BusinessItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default BusinessList;
