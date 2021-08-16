import Image from "next/image";
import styles from "../styles/works.module.scss";
import osori from "../public/images/osori.svg";
import toy from "../public/images/toy.png";
import baconbox from "../public/images/baconbox.png";
import collins from "../public/images/collins.png";
import ziphz from "../public/images/ziphz.png";

const Works = () => {
  return (
    <section className={styles.Works}>
      <div className={styles.pageName}>Works Experience</div>
      <div>
        <div className={styles.exp}>
          <h3 className={styles.companyName}>깃 컴퍼니</h3>
          <div className={styles.detail}>
            <div>2021.04 ~ 현재</div>
            <div>웹 개발 담당</div>
            <div>프론트엔드 개발자</div>
          </div>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            <Image src={baconbox} alt="baconbox" />
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
            <div className={styles.section}>
              <div className={styles.title}>Description</div>
              브랜드 커머스 깃 컴퍼니에서 운영 중인 반려견 용품 정기구독 브랜드
              베이컨 박스 웹 사이트 리뉴얼 개발 프로젝트에서 웹 개발을
              담당하였습니다.
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Tech Stack</div>
              React, TypeScript, MobX, Scss
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Details</div>
              <ul>
                <li>
                  모바일, 태블릿, 데스크탑 분기로 나뉘어지는 반응형 웹 마크업 및
                  스타일링을 구현하였습니다.
                </li>
                <li>
                  MobX 상태관리 라이브러리를 사용하여 비즈니스 로직을
                  작성하였습니다.
                </li>
                <li>
                  포스트맨을 활용하여 API 테스트를 진행하고 REST API 클라이언트
                  작업을 진행하였습니다.
                </li>
                <li>
                  성능 최적화를 위한 useMemo, useCallback hooks를 적절하게 사용
                  가능하며 이벤트 트리거에 따른 debounce, throttle 함수를
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
          </div>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            <Image src={collins} alt="collins" />
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
            <div className={styles.section}>
              <div className={styles.title}>Description</div>
              브랜트 커머스 깃 컴퍼니에서 운영 중인 퍼스널 케어 브랜드 콜린스 웹
              사이트의 프론트 영역 개발 및 유지 보수를 담당하였습니다
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Tech Stack</div>
              React, TypeScript, MobX, Scss
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Details</div>
              <ul>
                <li>
                  신규 콜렉션 제품에 따른 홈 섹션 및 상품 상세 페이지 마크업 및
                  스타일링 작업을 모바일, 데스크탑 분기로 작업하였습니다.
                </li>
                <li>
                  서비스 운영 중 발생하는 버그 및 디벨롭 작업을 위한 웹 개발을
                  진행하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.exp}>
          <h3 className={styles.companyName}>위티</h3>
          <div className={styles.detail}>
            <div>2021.02 ~ 2021.03</div>
            <div>웹 개발 담당</div>
            <div>프론트엔드 개발자 인턴</div>
          </div>
        </div>
        <div className={styles.aboutProject}>
          <div className={styles.projectSrc}>
            <Image src={ziphz} alt="ziphz" />
            <h5>Ziphz</h5>
          </div>
          <div className={styles.projectDetail}>
            <div className={styles.section}>
              <div className={styles.title}>Description</div>
              빅데이터 기반하여 부동산 매물을 소비자에게 연결해주는 집현전 자사
              서비스를 운영하는 위티에서 프론트엔드 개발자로써 한달 간 인턴쉽을
              경험하였습니다.
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Tech Stack</div>
              TypeScript, React Hooks, Styled-Components, Storybook, Next.js
            </div>
            <div className={styles.section}>
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
                  Asana, Gitlab, Notion, Slack, XD 툴을 이용하여 팀원과 협업하는
                  법을 배웠습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
