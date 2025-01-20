import React, { FC } from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
import { arrowDownLottie, sheepLottie } from "./constants";

const strings = ["聊聊技术。", "吹吹水。", "打打游戏。", "唱唱歌。"];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const sheepLottieRef = useLottie(sheepLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是海怪，</p>

          <div className={styles.workParagraph}>
            <p>
              目前在<span className={styles.zijie}> 字节</span>
            </p>
            <p className={styles.tiao}>跳</p>
            <p className={styles.dong}>动</p>
            <p>，</p>
            <p>主</p>
            <p>要</p>
            <p>使</p>
            <p>用</p>
            <p>
              <span className={styles.react}> React.js </span>。
            </p>
          </div>

          <p>喜欢设计 💅，</p>
          <p>
            偶尔
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={sheepLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
