const PublicRight = ({ item }) => {
    const { id, imgurl, title } = item;
    return (
        <li>
            <a href="#">
                <div>
                    <img src={imgurl} alt={title} />
                </div>
                <strong>{title}</strong>
            </a>
        </li>
    );
};

export default PublicRight;
