import Image from "next/image";
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
                src={profileImg}
                priority={true}
                alt="minsun profile image"
              />
            </div>
          </VisibilitySensor>
          <div className={styles.intro}>
            <div>
              생산적이고 지속가능한 삶을 추구하는 프론트엔드 개발자
              <span>정민선</span>입니다.
            </div>
            <div>
              개발자로써 <span>무</span>에서 <span>유</span>로 구현되는 과정에서
              새로운 부분에 대해 알게 되고 그러면서 점점 배움의 영역을 넓히며
              스스로 성장한다는 기분을 느낄 때 가장 보람을 느낍니다.
            </div>
            <div>
              항상 유저의 경험을 중요시하며 주석이 필요없는 코드를 작성하기 위해
              고심합니다.
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
          <div id="about5" className={styles.item}>
            <div className={styles.exp}>
              <h5>깃 컴퍼니</h5>
              <p>프론트엔드 개발자</p>
            </div>
            <p className={styles.period}>2021.04 ~ 현재</p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about6").classList.add("show");
            }
          }}
        >
          <div id="about6" className={styles.item}>
            <div className={styles.exp}>
              <h5>위티</h5>
              <p>프론트엔드 개발자 인턴</p>
            </div>
            <p className={styles.period}>2021.02 ~ 2021.03</p>
          </div>
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
          <div id="about8" className={styles.item}>
            베어비앤비 팀 프로젝트
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) {
              document.getElementById("about9").classList.add("show");
            }
          }}
        >
          <div id="about9" className={styles.item}>
            위피커 팀 프로젝트
          </div>
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
              src={github}
              width={40}
              height={40}
              alt="github"
            />
          </a>
          <a target="_blank" href="https://minn602.github.io/" rel="noreferrer">
            <Image
              priority={true}
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
