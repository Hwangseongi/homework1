import './Business.scss';

const BusinessItem = ({ item }) => {
    const { id, imgurl, kor, eng, desc } = item;

    return (
        <li>
            <a href="#">
                <div>
                    <img src={imgurl} alt="" />
                </div>
                <h3>
                    {kor}
                    <span>{eng}</span>
                </h3>
                <p>{desc}</p>
            </a>
        </li>
    );
};

export default BusinessItem;
