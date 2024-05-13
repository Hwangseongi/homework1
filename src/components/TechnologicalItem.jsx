const TechnologicalItem = ({ item }) => {
    const { id, imgurl, kor, eng, desc } = item;
    return (
        <li>
            <div>
                <a href="#">
                    <img src={imgurl} alt={kor} />
                    <h3>
                        {kor}
                        <span>{eng}</span>
                    </h3>
                    <b>
                        <i className="xi-arrow-down"></i>
                    </b>
                </a>
            </div>
            <p>{desc}</p>
            <p className="more">
                <a href="#">
                    <span>View more</span>
                </a>
            </p>
        </li>
    );
};

export default TechnologicalItem;
