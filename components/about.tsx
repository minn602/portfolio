import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import profileImg from "../public/images/profile.svg";
import github from "../public/icons/github.svg";
import blog from "../public/icons/blog.svg";
import linkedin from "../public/icons/linkedin.svg";
import osori from "../public/images/osori.svg";
import toy from "../public/images/toy.png";
import arrow from "../public/icons/default-arrow.png";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

const About = () => {
  const mainSectionRef = useRef(null);
  const mainTextRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      mainTextRef.current.classList.add(styles.isReady);
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: mainSectionRef.current,
        // smooth: true,
      });
    });

    // return () => scroll.destroy();
  }, []);

  return (
    <section data-scroll ref={mainSectionRef} className={styles.About}>
      <div ref={mainTextRef} data-scroll className={styles.textWrapper}>
        <div data-scroll>
          Hi, I&apos;m{" "}
          <span
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            M
          </span>
          <span
            data-scroll
            data-scroll-speed="5"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            i
          </span>
          <span
            data-scroll
            data-scroll-speed="4"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            n
          </span>
          <span
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            s
          </span>
          <span
            data-scroll
            data-scroll-speed="5"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            u
          </span>
          <span
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
            data-scroll-delay="0.05"
          >
            n
          </span>
          .
        </div>
        <div data-scroll data-scroll-speed="3" data-scroll-position="top">
          <span>Front-end</span> Developer
        </div>
        <div data-scroll data-scroll-speed="3" data-scroll-position="top">
          Based in
        </div>
        <div data-scroll data-scroll-speed="3" data-scroll-position="top">
          South Korea
        </div>
        <div
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
          className={styles.scrollMark}
        >
          scroll
          <div>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div data-scroll className={styles.divider} />
      <div className={styles.intro}>
        <div>
          <div data-scroll className={styles.introLine}>
            생산적이고 지속가능한 삶을 추구하는 프론트엔드 개발자 정민선입니다.
          </div>
          <div data-scroll className={styles.introLine}>
            늘 어떠한 경험에서든지 배울 점은 있다고 생각하기에 경험을 겪는
            과정은 매우 가치 있다고 생각합니다. 신입 개발자로써 아직 많은 부분을
            모르고 헤매지만 작은 부분이라도 새롭게 알게되는 부분이 있으면 기록을
            해두고 공부의 영역을 확장시키며 성장하기 위해 노력합니다. 최대한
            스스로 탐구하는 시간을 가지며 저의 성장 포인트를 잃지 않고자 새로운
            것을 알아가는 것을 좋아합니다.
          </div>
          <div data-scroll className={styles.introLine}>
            사용자의 경험을 최우선적으로 생각하고 개발에 임합니다. 전달된 기획과
            디자인만으로 수동적으로 개발을 진행하지 않고 더 나은 사용자 경험을
            제공하는 프로덕트를 위해 사용자의 경험이 나아지고 개선되는 방법을 늘
            고려하며 개발에 임하고 더 많고 좋은 아이디어를 얻기위해 레퍼런스를
            찾아보고 적극적으로 아이디어를 제시합니다.
          </div>
          <div data-scroll className={styles.introLine}>
            개발자로써 주변과의 능동적인 소통이 가능합니다. 코드만을 바라보는
            개발자가 아닌 비즈니스 모델까지 고려할 수 있는 개발자가 되기 위해선
            충분히 주변 분들과 많은 소통을 해야한다고 생각합니다. 바로 코드를
            작성하지 않고 충분한 소통을 통해 기획의도와 디자인을 파악하여 개발을
            진행하고 늘 앞으로의 확장성을 고려하여 현재에만 국한된 코드를
            작성하지 않도록 노력합니다.
          </div>
        </div>
        <div className={styles.profileImg}>
          <Image src={profileImg} alt="profile image" />
        </div>
      </div>
      <div data-scroll className={styles.divider} />
      <div className={styles.works}>
        <div className={styles.title}>Works experience</div>
        <div className={styles.details}>
          <div className={styles.item}>
            <div className={styles.company}>
              <div>
                <span>01</span>깃 컴퍼니
              </div>
              <div className={styles.occu}>프론트엔드 개발자</div>
              <div className={styles.occu}>2021.04 - 현재</div>
            </div>
            <div className={styles.projectList}>
              <div className={styles.projectItem}>
                <div className={styles.projectName}>
                  01. 베이컨박스 자사몰 개편 프로젝트
                  <div className={styles.baconImg}>
                    <Image src={toy} alt="bacon" />
                  </div>
                </div>
                <div className={styles.projectStacks}>
                  React, TypeScript, Scss, MobX
                </div>
                <div className={styles.projectDesc}>
                  기존 워드프레스로 운영되던 자사몰 사이트는 한정된 공간 내에서
                  디자인 개선이 가능하고 사이트 전체적으로 속도가 느려 이를
                  개선하여 사용자에게 좋은 구매 경험을 제공하기 위해 웹 사이트
                  전체적으로 리뉴얼 프로젝트가 진행되었습니다. 리액트를 사용하여
                  전체 웹 사이트의 UI 구현 및 커머스 기능 구현을 담당하였습니다.
                </div>
                <div className={styles.projectDetail}>
                  <div>
                    스타일 라이브러리를 사용하지 않고 모바일, 태블릿, 데스크탑
                    분기로 나뉘어지는 반응형 웹 마크업 및 스타일링을
                    구현하였습니다.
                  </div>
                  <div>
                    MobX 상태관리 라이브러리를 사용하여 비즈니스 로직을
                    작성하였습니다.
                  </div>
                  <div>
                    검색 최적화를 위한 메타 태그 적용을 위해 AWS Lambda@Edge
                    기능을 사용하여 대응하였습니다.
                  </div>
                  <div>
                    성능 최적화를 위한 useMemo, useCallback hooks를 적절하게
                    사용 가능하며 이벤트 트리거에 따른 debounce, throttle 함수를
                    사용하였습니다.
                  </div>
                  <div>
                    포스트맨을 활용하여 API 테스트를 진행하고 REST API
                    클라이언트 작업을 진행하였습니다.
                  </div>

                  <div>
                    원하는 기능을 구현하기 위해 적절한 라이브러리를 사용하였으며
                    유지보수를 위해 도큐먼트를 깊게 읽어보고 탐구하는 법을
                    배웠습니다.
                  </div>
                </div>
              </div>
              <div className={`${styles.projectItem} ${styles.collins}`}>
                <div className={styles.collinsImg}>
                  <Image src={osori} alt="collins" />
                </div>
                <div className={styles.projectName}>
                  02. 콜린스 UI 개발 및 유지보수
                </div>
                <div className={styles.projectDesc}>
                  콜린스 브랜드는 새롭게 출시되는 제품의 컨셉과 무드에 맞게 웹
                  사이트의 디자인 개선이 이루어져 홈 섹션 UI 개발과 상세 페이지
                  개발을 담당하였습니다.
                </div>
                <div className={styles.projectDetail}>
                  <div>
                    스타일 라이브러리를 사용하지 않고 모바일, 태블릿, 데스크탑
                    분기로 나뉘어지는 반응형 웹 마크업 및 스타일링을
                    구현하였습니다.
                  </div>
                  <div>
                    사용자에게 인터랙션한 사용 경험을 제공하기 위해 패럴랙스
                    디자인을 적용하였고 이를 구현하기 위해 gsap 라이브러리를
                    사용하여 UI 개발 및 애니메이션 적용을 하였습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.company}>
              <div>
                <span>02</span>위티
              </div>
              <div className={styles.occu}>프론트엔드 개발자 인턴</div>
              <div className={styles.occu}>2021.02 - 2021.03</div>
            </div>
            <div className={styles.projectList}>
              <div className={styles.projectItem}>
                <div className={styles.projectName}>01. 집현전 웹 개발</div>
                <div className={styles.projectStacks}>
                  React, TypeScript, Styled-Components, Storybook, Next.js
                </div>
                <div className={styles.projectDesc}>
                  빅데이터 기반하여 부동산 매물을 소비자에게 연결해주는 집현전
                  자사 서비스를 운영하는 위티에서 프론트엔드 개발자로써 한달 간
                  인턴쉽을 경험하였습니다.
                </div>
                <div className={styles.projectDetail}>
                  <div>
                    자체 서비스인 집현전 1.0 버젼의 UI를 Atomic design pattern을
                    적용하여 타입스크립트+리액트 리뉴얼 프로젝트 중 웹 개발을
                    담당하였습니다.
                  </div>
                  <div>
                    카카오 맵 API를 사용하여 지도를 띄우고 데이터에 맞게 마커를
                    표시하는 기능을 구현하였습니다.
                  </div>
                  <div>
                    검색 최적화를 위한 메타 태그 적용을 위해 AWS Lambda@Edge
                    기능을 사용하여 대응하였습니다.
                  </div>
                  <div>
                    Asana, Gitlab, Notion, Slack, XD 툴을 이용하여 팀원과
                    협업하는 법을 배웠습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll className={styles.divider} />
      <div className={styles.projects}>
        <div className={styles.title}>projects</div>
        <div className={styles.details}>
          <div className={styles.item}>
            <div className={styles.projectTitle}>
              <span>01</span>베어비앤비 프로젝트
            </div>
            <div className={styles.infos}>
              <div>2021.01.25 - 2021.02.05</div>
              <div>프론트엔드 3명, 백엔드 3명</div>
            </div>
            <video controls>
              <source src="/media/bearbnb.mp4" type="video/mp4" />
            </video>
            <div className={styles.desc}>
              숙박 공유 서비스를 제공하는 에어비앤비 웹사이트 기능, 기획,
              디자인을 참고하여 scratch 부터 직접 구현한 팀 프로젝트 입니다.
            </div>
            <div className={styles.details}>
              <div>React Hooks, Styled-components를 적용하여 레이아웃 구현</div>
              <div>RESTful API를 사용하여 백엔드 서버와 소통 진행</div>
              <div>
                스크롤 이벤트에 따라 반응하는 Nav bar 레이아웃 구현 Modal
                내에서의 infinite scroll 기능 구현
              </div>
              <div>Redux를 적용하여 검색 키워드 전역</div>
              <div>
                상태관리 react-router-dom 객체에 상태 전달하는 기능 및 동적
                라우팅 구현
              </div>
              <div>
                Airbnb react-dates library를 사용하여 캘린더 스타일 커스텀
                마이징
              </div>
              <div>
                Kakao API를 사용하여 소셜 로그인 및 회원가입 기능 구현 Google
                Map API를 이용하여 지도 레이아웃 구현 및 마커 적용
              </div>
            </div>
            <div className={styles.btns}>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/minn602/bearbnb"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://velog.io/@minn602/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-Airbnb-clone-project"
                  rel="noreferrer"
                >
                  BLOG
                </a>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.projectTitle}>
              <span>02</span>위피커 프로젝트
            </div>
            <div className={styles.infos}>
              <div>2021.01.11 - 2021.01.22</div>
              <div>프론트엔드 3명, 백엔드 1명</div>
            </div>
            <video controls>
              <source src="/media/wepicker.mp4" type="video/mp4" />
            </video>
            <div className={styles.desc}>
              친환경 제품을 판매하는 더 피커 웹사이트 기능, 기획, 디자인을
              참고하여 scratch 부터 직접 구현한 팀 프로젝트입니다.
            </div>
            <div className={styles.details}>
              <div>
                React Class components, Sass/Scss를 적용하여 레이아웃 구현
              </div>
              <div>query-string을 적용하여 상품 리스트 필터링 기능 구현</div>
              <div>
                slick-slider library를 사용하여 슬라이드 커스텀 스타일 적용 및
                구현
              </div>
              <div>Pagination 기능 구현</div>
            </div>
            <div className={styles.btns}>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/minn602/wepicker"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://velog.io/@minn602/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0-The-Picker-Project"
                  rel="noreferrer"
                >
                  BLOG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll className={styles.divider} />
      <div className={styles.other}>
        <div className={styles.title}>other experience</div>
        <div className={styles.details}>
          <div className={styles.item}>
            <div>
              한국방송통신 대학교
              <div className={styles.sub}>컴퓨터과학과</div>
            </div>
            <div>
              <div className={styles.sub}>
                2020.09 ~ 재학 중 (2022.08 졸업예정)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>
          get <span>in touch</span>..
        </div>
        <div className={styles.email}>
          <a target="_blank" href="mailto: minn602@gmail.com" rel="noreferrer">
            minn602@gmail.com
          </a>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <a
              target="_blank"
              href="https://github.com/minn602"
              rel="noreferrer"
            >
              <Image src={github} alt="github" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              target="_blank"
              href="https://minn602.github.io/"
              rel="noreferrer"
            >
              <Image src={blog} alt="blog" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/minsun-jung-98775817a/"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
