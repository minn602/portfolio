import Image from "next/image";
import styles from "../styles/About.module.scss";
import profileImg from "../public/images/profile.png";
import github from "../public/icons/github.svg";
import blog from "../public/icons/blog.svg";
import linkedin from "../public/icons/linkedin.svg";

const About = () => {
  return (
    <section className={styles.About}>
      <section className={styles.info}>
        <div className={styles.content}>
          <h5>Frontend Developer</h5>
          <h3>Hi! I&rsquo;m Minsun :)</h3>
          <div className={styles.imgWrapper}>
            <Image src={profileImg} alt="minsun profile image" />
          </div>
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
            <div></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Works Experience</h3>
        <div className={styles.item}>
          <div className={styles.exp}>
            <h5>깃 컴퍼니</h5>
            <p>프론트엔드 개발자</p>
          </div>
          <p className={styles.period}>2021.04 ~ 현재</p>
        </div>
        <div className={styles.item}>
          <div className={styles.exp}>
            <h5>위티</h5>
            <p>프론트엔드 개발자 인턴</p>
          </div>
          <p className={styles.period}>2021.02 ~ 2021.03</p>
        </div>
      </section>
      <section className={styles.section}>
        <h3>Projects</h3>
        <div className={styles.item}>베어비앤비 팀 프로젝트</div>
        <div className={styles.item}>위피커 팀 프로젝트</div>
        <div className={styles.item}>토이 프로젝트</div>
      </section>
      <section className={styles.section}>
        <h3>Other Experience</h3>
        <div className={styles.item}>
          <div className={styles.exp}>
            <h5>한국방송통신대학교</h5>
            <p>컴퓨터과학과</p>
          </div>
          <p className={styles.period}>2020.09 ~ 재학 중 (2022.08 졸업예정)</p>
        </div>
      </section>
      <section className={styles.section}>
        <h3>Contact</h3>
        <div className={styles.mail}>
          <a href="mailto: minn602@gmail.com" target="_blank" rel="noreferrer">
            minn602@gmail.com
          </a>
        </div>
        <div className={styles.icons}>
          <a target="_blank" href="https://github.com/minn602" rel="noreferrer">
            <Image src={github} width={40} height={40} alt="github" />
          </a>
          <a target="_blank" href="https://minn602.github.io/" rel="noreferrer">
            <Image src={blog} width={40} height={40} alt="blog" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/minsun-jung-98775817a/"
            rel="noreferrer"
          >
            <Image src={linkedin} width={40} height={40} alt="linkedin" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
