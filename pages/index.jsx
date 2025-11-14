import Link from 'next/link';
// import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/logo.png";
import Image from 'next/image';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faGolang, faNode, faRust } from '@fortawesome/free-brands-svg-icons';


export default function HomePage() {
  const handleDownloadClick = (event) => {
    event.preventDefault(); // Prevent default routing behavior
    const link = document.createElement('a');
    link.href = '/ayush.pdf'; // The path to your resume in the public folder
    link.download = 'ayush.pdf'; // The name of the downloaded file
    link.click();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I CREATE</h1>
          <h1>AURA!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={`${styles.name} ${styling.stalinistOne}`}>Ayush Jha</h1>
            <h6 className={styles.bio}>Full-Stack Developer | AI/ML Enthusiast
              <span className={styles.react}> Wannabe</span></h6>

            {/* Skill Icons Section */}
            
            <div className={styling.skillsContainer}>
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} size="3x" className={`${styling.icon} ${styling.reactIcon}`} />
                <div className={styling.skillText}>React</div>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faGolang} size="3x" className={`${styling.icon} ${styling.wordpressIcon}`} />
                <div className={styling.skillText}>Golang</div>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJs} size="3x" className={`${styling.icon} ${styling.jsIcon}`} />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faRust} size="3x" className={`${styling.icon} ${styling.rustIcon}`} />
                <div className={styling.skillText}>Rust</div>
              </div>

              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faNode} size="3x" className={`${styling.icon} ${styling.nodeIcon}`} />
                <div className={styling.skillText}>Node.js</div>
              </div>
            </div>
            


           <div className={styling.forMobile}>
              <Link href="/projects">
              <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/">
                <button onClick={handleDownloadClick} className={`${styles.outlined} ${styling.contactBtn}`}>Resume</button>
              </Link>
           </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
        {/* Logo image - positioned below other elements, vertically centered, in right third */}
        <div className={styling.imageWrapper}>
          <Image src={logo} alt="Ayush Jha Logo" className={styling.myImg} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
