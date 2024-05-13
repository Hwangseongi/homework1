import AboutItem from "./AboutItem";

const AboutContent = ({ AboutData }) => {
  return (
    <div className="inner">
      <div className="left">
        <h2>
          ABOUT <span>KYUNGDONG</span>
        </h2>
        <p>
          서민연료인 연탄에서 신재생 에너지까지 에너지를 통한 따뜻한 삶의 공간
          창조 바로 경동이 함께합니다.
        </p>
        <p className="more">
          <a href="#">
            <span>
              Learn More<i className="xi-angle-right-min"></i>
            </span>
          </a>
        </p>
      </div>
      <ul>
        {AboutData.map((item) => (
          <AboutItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default AboutContent;