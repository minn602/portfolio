import styles from "../styles/Projects.module.scss";
import VisibilitySensor from "react-visibility-sensor";

const Projects = () => {
  return (
    <section className={styles.Projects}>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(isVisible) => {
          if (isVisible) {
            document.getElementById("pro1").classList.add("show");
          }
        }}
      >
        <div id="pro1" className={styles.pageName}>
          Personal Projects
        </div>
      </VisibilitySensor>

      <div className={styles.projectItem}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("pro2").classList.add("show");
            }
          }}
        >
          <div id="pro2" className={styles.projectName}>
            <div className={styles.numbering}>#01</div>
            <div>Bearbnb Team Project</div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("pro3").classList.add("show");
            }
          }}
        >
          <div id="pro3" className={styles.projectInfo}>
            <div>2021.01.25 - 2021.02.05</div>
            <div>프론트엔드 3명, 백엔드 3명</div>
          </div>
        </VisibilitySensor>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro4").classList.add("show");
                }
              }}
            >
              <div id="pro4" className={styles.desc}>
                <h3 className={styles.title}>description</h3>
                숙박 공유 서비스를 제공하는{" "}
                <a
                  href="https://www.airbnb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  에어비앤비
                </a>{" "}
                웹사이트 기능, 기획, 디자인을 참고하여 scratch 부터 직접 구현한
                팀 프로젝트 입니다.
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro5").classList.add("show");
                }
              }}
            >
              <ul id="pro5" className={styles.infoDetail}>
                <h3 className={styles.title}>details</h3>
                <li>React Hooks, Styled-components를 적용하여 레이아웃 구현</li>
                <li>RESTful API를 사용하여 백엔드 서버와 소통 진행</li>
                <li>스크롤 이벤트에 따라 반응하는 Nav bar 레이아웃 구현</li>
                <li>Modal 내에서의 infinite scroll 기능 구현</li>
                <li>Redux를 적용하여 검색 키워드 전역 상태관리</li>
                <li>
                  react-router-dom 객체에 상태 전달하는 기능 및 동적 라우팅 구현
                </li>
                <li>
                  Airbnb react-dates library를 사용하여 캘린더 스타일 커스텀
                  마이징
                </li>
                <li>Kakao API를 사용하여 소셜 로그인 및 회원가입 기능 구현</li>
                <li>
                  Google Map API를 이용하여 지도 레이아웃 구현 및 마커 적용
                </li>
              </ul>
            </VisibilitySensor>
          </div>
          <div className={styles.media}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro6").classList.add("show");
                }
              }}
            >
              <video id="pro6" autoPlay loop playsInline>
                <source src="/media/bearbnb.mp4" type="video/mp4" />
              </video>
            </VisibilitySensor>
            <a
              href="https://github.com/minn602/bearbnb"
              target="_blank"
              rel="noreferrer"
            >
              <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                  if (isVisible) {
                    document.getElementById("pro7").classList.add("show");
                  }
                }}
              >
                <div id="pro7" className={styles.github}>
                  깃허브 보러가기
                </div>
              </VisibilitySensor>
            </a>
            <a
              href="https://velog.io/@minn602/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-Airbnb-clone-project"
              target="_blank"
              rel="noreferrer"
            >
              <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                  if (isVisible) {
                    document.getElementById("pro8").classList.add("show");
                  }
                }}
              >
                <div id="pro8" className={styles.blog}>
                  후기 보러가기
                </div>
              </VisibilitySensor>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectItem}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("pro9").classList.add("show");
            }
          }}
        >
          <div id="pro9" className={styles.projectName}>
            <div className={styles.numbering}>#02</div>
            <div>Wepicker Team Project</div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("pro10").classList.add("show");
            }
          }}
        >
          <div id="pro10" className={styles.projectInfo}>
            <div>2021.01.11 - 2021.01.22</div>
            <div>프론트엔드 3명, 백엔드 1명</div>
          </div>
        </VisibilitySensor>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro11").classList.add("show");
                }
              }}
            >
              <div id="pro11" className={styles.desc}>
                <h3 className={styles.title}>description</h3>
                친환경 제품을 판매하는{" "}
                <a
                  href="https://thepicker.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  더 피커
                </a>{" "}
                웹사이트 기능, 기획, 디자인을 참고하여 scratch 부터 직접 구현한
                팀 프로젝트입니다.
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro12").classList.add("show");
                }
              }}
            >
              <ul id="pro12" className={styles.infoDetail}>
                <h3 className={styles.title}>details</h3>
                <li>
                  React Class components, Sass/Scss를 적용하여 레이아웃 구현
                </li>
                <li>query-string을 적용하여 상품 리스트 필터링 기능 구현</li>
                <li>
                  slick-slider library를 사용하여 슬라이드 커스텀 스타일 적용 및
                  구현
                </li>
                <li>메뉴 탭으로 보여지는 페이지 레이아웃 구현</li>
                <li>Pagination 기능 구현</li>
              </ul>
            </VisibilitySensor>
          </div>
          <div className={styles.media}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("pro13").classList.add("show");
                }
              }}
            >
              <video id="pro13" autoPlay loop playsInline>
                <source src="/media/wepicker.mp4" type="video/mp4" />
              </video>
            </VisibilitySensor>
            <a
              href="https://github.com/minn602/wepicker"
              target="_blank"
              rel="noreferrer"
            >
              <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                  if (isVisible) {
                    document.getElementById("pro14").classList.add("show");
                  }
                }}
              >
                <div id="pro14" className={styles.github}>
                  깃허브 보러가기
                </div>
              </VisibilitySensor>
            </a>
            <a
              href="https://velog.io/@minn602/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-The-Picker-Project"
              target="_blank"
              rel="noreferrer"
            >
              <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                  if (isVisible) {
                    document.getElementById("pro15").classList.add("show");
                  }
                }}
              >
                <div id="pro15" className={styles.blog}>
                  후기 보러가기
                </div>
              </VisibilitySensor>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
