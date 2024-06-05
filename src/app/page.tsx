"use client"
import { initializeScrollAnimations } from './animation.js';
import Head from 'next/head';
import React, { useState , useEffect} from 'react';
import styles from './page.module.scss';
import Image from 'next/image'; 

const works = [
  {
    image: '/public/images/Cheifoon_mill.jpg', // 画像のパスを適切に変更してください
    title: '作品 1',
    description: '作品 1 の説明'
  },
  {
    image: '/public/images/Cheifoon_slim.jpg', // 画像のパスを適切に変更してください
    title: '作品 2',
    description: '作品 2 の説明'
  },
  {
    image: '/public/images/planly.jpg', // 画像のパスを適切に変更してください
    title: '作品 3',
    description: '作品 3 の説明'
  }
];


const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5秒ごとに次の画像に移動
    return () => clearInterval(interval); // コンポーネントがアンマウントされるときにタイマーをクリア
  }, []);

  useEffect(() => {
    initializeScrollAnimations(); // フェードインアニメーションの初期化
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio site" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kranky&display=swap"
          rel="stylesheet"
        />
        <script async src="myapp/app/script.js"></script>
      </Head>

      <header className={styles.header}>
      　<p className={styles.logo}><a href="#!">LOGO</a></p>
      　<ul>
      　　<li><a href="#!">Home</a></li>
      　　<li><a href="#!">Profile</a></li>
      　　<li><a href="#!">Works</a></li>
      　</ul>
      </header>

      <main className={styles.mainDiv}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>
            Welcome to my Portfolio
          </h2>
        </div>
        <div className={styles.box1}>
          <h2 className={styles.Name_Hama}>Hama</h2>
          <h2 className={styles.Name_Keigo}>Keigo</h2>
        </div>
        <div className={`${styles.box2} box2`}>
          <h2 className={styles.profile}>Profile</h2>
          <p>ECCコンピュータ専門学校 26卒 IoT部所属</p>
          <p>志望職種・Web バックエンドエンジニア</p>
        </div>
        <div className={styles.box3}>
        <h2 className={styles.box3_title}>Skil</h2>
          <table className={styles.skill_table}>
            <thead>
              <tr>
                <th>スキル</th>
                <th>経験年数</th>
                <th>自己評価</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>3年</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>3年</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>Next.js</td>
                <td>1年</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>Java Script</td>
                <td>2年</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>2年</td>
                <td>★★★★★</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>2年</td>
                <td>★★★★★</td>
              </tr>
              <tr>
                <td>Aruduino</td>
                <td>2年</td>
                <td>★★★★★</td>
              </tr>
              <tr>
                <td>firebase</td>
                <td>1年</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td>1年</td>
                <td>★★☆☆☆</td>
              </tr>
              <tr>
                <td>java</td>
                <td>1年</td>
                <td>★★☆☆☆</td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>半年</td>
                <td>★☆☆☆☆</td>
              </tr>
              <tr>
                <td>flutter</td>
                <td>3カ月</td>
                <td>★☆☆☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${styles.box4} box4`}>
          <span >
            <h2 className={styles.works}>WORKS</h2>
          </span>
        </div>
        <div className={styles.worksSection}>
          <div className={styles.carousel}>
            <div
              className={styles.carouselInner}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {works.map((work, index) => (
                <div key={index} className={styles.carouselItem}>
                  <div className={styles.image}>  
                    <Image src={work.image} alt={work.title} width={500} height={300} />
                  </div>  
                  <div className={styles.legend}>
                    <h3></h3>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.carouselButtons}>
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={currentIndex === index ? styles.activeButton : styles.inactiveButton}
              >
                &bull;
              </button>
            ))}
            </div>
          </div>
        </div>
        <div className={styles.box5}>
          <h2 className={styles.actual}>活動記録</h2>
          <table className={styles.actual_table}>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023年</td>
                <td>6月</td>
                <td>TechSeeker</td>
                <td>出場</td>
                <td>初代Cheifoon</td>
              </tr>
              <tr>
                <td></td>
                <td>11月</td>
                <td>ヒーローズリーグ</td>
                <td>問題児賞　受賞</td>
                <td>Cheifoon 美少女.ver</td>
              </tr>
              <tr>
                <td>2024年</td>
                <td>3月</td>
                <td>Hack U Osaka</td>
                <td>Happy Hacking賞　受賞</td>
                <td>プランリー</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>+E展</td>
                <td>メカニカル賞　受賞</td>
                <td>CRDS</td>
              </tr>
              <tr>
                <td></td>
                <td>4月</td>
                <td>Track job</td>
                <td>優秀賞　受賞</td>
                <td>Cheifoon slim & MILL</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>最優秀テック賞　受賞</td>
                <td>CRDS</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>M5stack Japan Tour 2024 Osaka</td>
                <td>展示</td>
                <td>Cheifoon slim & MILL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;
