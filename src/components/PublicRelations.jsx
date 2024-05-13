import PublicLeft from './PublicLeft';
import PublicRight from './PublicRight';
import PRData from '../assets/api/PRData';
import './PublicRelations.scss';

const PublicReations = () => {
    return (
        <div className="con-box con3 box2">
            <div className="inner">
                <div className="left">
                    <PublicLeft />
                </div>
                <ul>
                    {PRData.map((item) => (
                        <PublicRight key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PublicReations;
