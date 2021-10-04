import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import profileImg from "../public/images/profile.svg";
import github from "../public/icons/github.svg";
import blog from "../public/icons/blog.svg";
import linkedin from "../public/icons/linkedin.svg";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <section className={styles.About}>
      <section className={styles.info}>
        <div className={styles.content}>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("about1").classList.add("show");
              }
            }}
          >
            <h5 id="about1">Frontend Developer</h5>
          </VisibilitySensor>
          <hr />
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("about2").classList.add("show");
              }
            }}
          >
            <h3 id="about2">Hi! I&rsquo;m Minsun :)</h3>
          </VisibilitySensor>
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              if (isVisible) {
                document.getElementById("about3").classList.add("zoom");
              }
            }}
          >
            <div id="about3" className={styles.imgWrapper}>
              <Image
                loading="eager"
                src={profileImg}
                priority={true}
                alt="minsun profile image"
              />
            </div>
          </VisibilitySensor>
          <div className={styles.flowingTextWrapper}>
            <div className={styles.flowingText}>
              <div>OPEN TO WORK</div>
              <div>OPEN TO WORK</div>
              <div>OPEN TO WORK</div>
              <div>OPEN TO WORK</div>
              <div>OPEN TO WORK</div>
            </div>
          </div>
          <div className={styles.intro}>
            <div>
              생산적이고 지속가능한 삶을 추구하는 프론트엔드 개발자{" "}
              <span>정민선</span>입니다.
            </div>
            <div>
              늘 어떠한 경험에서든지 배울 점은 있다고 생각하기에 경험을 겪는
              과정은 매우 가치 있다고 생각합니다. 신입 개발자로써 아직 많은
              부분을 모르고 헤매지만 작은 부분이라도 새롭게 알게되는 부분이
              있으면 기록을 해두고 공부의 영역을 확장시키며 성장하기 위해
              노력합니다. 최대한 스스로 탐구하는 시간을 가지며 저의 성장
              포인트를 잃지 않고자 새로운 것을 알아가는 것을 좋아합니다.
            </div>
            <div>
              사용자의 경험을 최우선적으로 생각하고 개발에 임합니다. 전달된
              기획과 디자인만으로 수동적으로 개발을 진행하지 않고 더 나은 사용자
              경험을 제공하는 프로덕트를 위해 사용자의 경험이 나아지고 개선되는
              방법을 늘 고려하며 개발에 임하고 더 많고 좋은 아이디어를 얻기위해
              레퍼런스를 찾아보고 적극적으로 아이디어를 제시합니다.
            </div>
            <div>
              개발자로써 주변과의 능동적인 소통이 가능합니다. 코드만을 바라보는
              개발자가 아닌 비즈니스 모델까지 고려할 수 있는 개발자가 되기
              위해선 충분히 주변 분들과 많은 소통을 해야한다고 생각합니다. 바로
              코드를 작성하지 않고 충분한 소통을 통해 기획의도와 디자인을
              파악하여 개발을 진행하고 늘 앞으로의 확장성을 고려하여 현재에만
              국한된 코드를 작성하지 않도록 노력합니다.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about4").classList.add("show");
            }
          }}
        >
          <h3 id="about4">Works Experience</h3>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about5").classList.add("show");
            }
          }}
        >
          <Link href="/works">
            <div id="about5" className={styles.item}>
              <div className={styles.exp}>
                <h5>깃 컴퍼니</h5>
                <p>프론트엔드 개발자</p>
              </div>
              <p className={styles.period}>2021.04 ~ 현재</p>
            </div>
          </Link>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about6").classList.add("show");
            }
          }}
        >
          <Link href="/works">
            <div id="about6" className={styles.item}>
              <div className={styles.exp}>
                <h5>위티</h5>
                <p>프론트엔드 개발자 인턴</p>
              </div>
              <p className={styles.period}>2021.02 ~ 2021.03</p>
            </div>
          </Link>
        </VisibilitySensor>
      </section>
      <section className={styles.section}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about7").classList.add("show");
            }
          }}
        >
          <h3 id="about7">Projects</h3>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about8").classList.add("show");
            }
          }}
        >
          <Link href="/projects">
            <div id="about8" className={styles.item}>
              베어비앤비 팀 프로젝트
            </div>
          </Link>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about9").classList.add("show");
            }
          }}
        >
          <Link href="/projects">
            <div id="about9" className={styles.item}>
              위피커 팀 프로젝트
            </div>
          </Link>
        </VisibilitySensor>
        {/* <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about10").classList.add("show");
            }
          }}
        >
          <div id="about10" className={styles.item}>
            토이 프로젝트
          </div>
        </VisibilitySensor> */}
      </section>
      <section className={styles.section}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about11").classList.add("show");
            }
          }}
        >
          <h3 id="about11">Other Experience</h3>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about12").classList.add("show");
            }
          }}
        >
          <div id="about12" className={styles.item}>
            <div className={styles.exp}>
              <h5>한국방송통신대학교</h5>
              <p>컴퓨터과학과</p>
            </div>
            <p className={styles.period}>
              2020.09 ~ 재학 중 (2022.08 졸업예정)
            </p>
          </div>
        </VisibilitySensor>
      </section>
      <section className={styles.section}>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about13").classList.add("show");
            }
          }}
        >
          <h3 id="about13">Contact</h3>
        </VisibilitySensor>
        <div className={styles.mail}>
          <a href="mailto: minn602@gmail.com" target="_blank" rel="noreferrer">
            minn602@gmail.com
          </a>
        </div>
        <div className={styles.icons}>
          <a target="_blank" href="https://github.com/minn602" rel="noreferrer">
            <Image
              priority={true}
              loading="eager"
              src={github}
              width={40}
              height={40}
              alt="github"
            />
          </a>
          <a target="_blank" href="https://minn602.github.io/" rel="noreferrer">
            <Image
              priority={true}
              loading="eager"
              src={blog}
              width={40}
              height={40}
              alt="blog"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/minsun-jung-98775817a/"
            rel="noreferrer"
          >
            <Image
              priority={true}
              loading="eager"
              src={linkedin}
              width={40}
              height={40}
              alt="linkedin"
            />
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
