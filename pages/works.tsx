import Image from "next/image";
import styles from "../styles/works.module.scss";
import osori from "../public/images/osori.svg";
import toy from "../public/images/toy.png";
import baconbox from "../public/images/baconbox.png";
import collins from "../public/images/collins.png";
import ziphz from "../public/images/ziphz.png";
import VisibilitySensor from "react-visibility-sensor";

const Works = () => {
  return (
    <section className={styles.Works}>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(isVisible) => {
          if (isVisible) {
            document.getElementById("work1").classList.add("show");
          }
        }}
      >
        <div id="work1" className={styles.pageName}>
          Works Experience
        </div>
      </VisibilitySensor>
      <div>
        <div className={styles.exp}>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("work2").classList.add("show");
              }
            }}
          >
            <div id="work2" className={styles.companyName}>
              <div className={styles.numbering}>#01</div>
              <div>깃 컴퍼니</div>
            </div>
          </VisibilitySensor>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("work3").classList.add("show");
              }
            }}
          >
            <div id="work3" className={styles.detail}>
              <div>2021.04 ~ 현재</div>
              <div>웹 개발 담당</div>
              <div>프론트엔드 개발자</div>
            </div>
          </VisibilitySensor>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            {/* <Image src={baconbox} alt="baconbox" /> */}
            <video autoPlay loop>
              <source src="/media/baconbox.mp4" type="video/mp4" />
            </video>
            <h5>BACONBOX</h5>

            {/* <Image
            src={toy}
            alt="baconbox toy"
            className={styles.toy}
            width={100}
            height={100}
          /> */}
          </div>
          <div className={styles.projectDetail}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work4").classList.add("show");
                }
              }}
            >
              <div id="work4" className={styles.section}>
                <div className={styles.title}>Description</div>
                브랜드 커머스 깃 컴퍼니에서 운영 중인 반려견 용품 정기구독
                브랜드{" "}
                <a
                  href="https://www.baconbox.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  베이컨 박스
                </a>{" "}
                웹 사이트를 기존 레거시에서 전체 리액트로 리뉴얼하는 프로젝트 및
                이후 유지보수를 담당하였습니다.
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work5").classList.add("show");
                }
              }}
            >
              <div id="work5" className={styles.section}>
                <div className={styles.title}>Tech Stack</div>
                React
                <br />
                TypeScript
                <br />
                MobX
                <br />
                Scss
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work6").classList.add("show");
                }
              }}
            >
              <div id="work6" className={styles.section}>
                <div className={styles.title}>Details</div>
                <ul>
                  <li>
                    모바일, 태블릿, 데스크탑 분기로 나뉘어지는 반응형 웹 마크업
                    및 스타일링을 구현하였습니다.
                  </li>
                  <li>
                    MobX 상태관리 라이브러리를 사용하여 비즈니스 로직을
                    작성하였습니다.
                  </li>
                  <li>
                    포스트맨을 활용하여 API 테스트를 진행하고 REST API
                    클라이언트 작업을 진행하였습니다.
                  </li>
                  <li>
                    성능 최적화를 위한 useMemo, useCallback hooks를 적절하게
                    사용 가능하며 이벤트 트리거에 따른 debounce, throttle 함수를
                    사용하였습니다.
                  </li>
                  <li>유저의 세션 관리를 위한 쿠키를 설정하였습니다.</li>
                  <li>
                    원하는 기능을 구현하기 위해 적절한 라이브러리를 사용하였으며
                    유지보수를 위해 도큐먼트를 깊게 읽어보고 탐구하는 법을
                    배웠습니다.
                  </li>
                </ul>
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            {/* <Image src={collins} alt="collins" /> */}
            <video autoPlay loop>
              <source src="/media/collins.mp4" type="video/mp4" />
            </video>
            <h5>Collins</h5>
            {/* <Image
            src={toy}
            alt="baconbox toy"
            className={styles.toy}
            width={100}
            height={100}
          /> */}
          </div>
          <div className={styles.projectDetail}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work7").classList.add("show");
                }
              }}
            >
              <div id="work7" className={styles.section}>
                <div className={styles.title}>Description</div>
                브랜트 커머스 깃 컴퍼니에서 운영 중인 퍼스널 케어 브랜드{" "}
                <a
                  href="https://collinslife.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  콜린스
                </a>{" "}
                웹 사이트의 프론트 영역 개발 및 유지 보수를 담당하였습니다
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work8").classList.add("show");
                }
              }}
            >
              <div id="work8" className={styles.section}>
                <div className={styles.title}>Tech Stack</div>
                React
                <br />
                TypeScript
                <br />
                MobX
                <br />
                Scss
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work9").classList.add("show");
                }
              }}
            >
              <div id="work9" className={styles.section}>
                <div className={styles.title}>Details</div>
                <ul>
                  <li>
                    신규 콜렉션 제품에 따른 홈 섹션 및 상품 상세 페이지 마크업
                    및 스타일링 작업을 모바일, 데스크탑 분기로 작업하였습니다.
                  </li>
                  <li>
                    서비스 운영 중 발생하는 버그 및 디벨롭 작업을 위한 웹 개발을
                    진행하였습니다.
                  </li>
                </ul>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.exp}>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("work10").classList.add("show");
              }
            }}
          >
            <div id="work10" className={styles.companyName}>
              <div className={styles.numbering}>#02</div>
              <div>위티</div>
            </div>
          </VisibilitySensor>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("work11").classList.add("show");
              }
            }}
          >
            <div id="work11" className={styles.detail}>
              <div>2021.02 ~ 2021.03</div>
              <div>웹 개발 담당</div>
              <div>프론트엔드 개발자 인턴</div>
            </div>
          </VisibilitySensor>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            <Image src={ziphz} alt="ziphz" />
            <h5>Ziphz</h5>
          </div>
          <div className={styles.projectDetail}>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work12").classList.add("show");
                }
              }}
            >
              <div id="work12" className={styles.section}>
                <div className={styles.title}>Description</div>
                빅데이터 기반하여 부동산 매물을 소비자에게 연결해주는 집현전
                자사 서비스를 운영하는 위티에서 프론트엔드 개발자로써 한달 간
                인턴쉽을 경험하였습니다.
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work13").classList.add("show");
                }
              }}
            >
              <div id="work13" className={styles.section}>
                <div className={styles.title}>Tech Stack</div>
                TypeScript
                <br />
                React Hooks
                <br />
                Styled-Components
                <br />
                Storybook
                <br />
                Next.js
              </div>
            </VisibilitySensor>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(isVisible) => {
                if (isVisible) {
                  document.getElementById("work14").classList.add("show");
                }
              }}
            >
              <div id="work14" className={styles.section}>
                <div className={styles.title}>Details</div>
                <ul>
                  <li>
                    자체 서비스인 집현전 1.0 버젼의 UI를 Atomic design pattern을
                    적용하여 타입스크립트+리액트 리뉴얼 프로젝트 중 웹 개발을
                    담당하였습니다.
                  </li>
                  <li>
                    카카오 맵 API를 사용하여 지도를 띄우고 데이터에 맞게 마커를
                    표시하는 기능을 구현하였습니다.
                  </li>
                  <li>
                    Asana, Gitlab, Notion, Slack, XD 툴을 이용하여 팀원과
                    협업하는 법을 배웠습니다.
                  </li>
                </ul>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
