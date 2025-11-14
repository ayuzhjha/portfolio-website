import Image from 'next/image';
import styles from '../styles/About.module.css'; // Import the CSS module 
import brain from '../public/1757829188646.png';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>A little about me</h2>
        </div>

        <div className={`row`}>
          <div className={`col-lg-3 ${styles.imageContainer}`} data-aos="fade-right">
            <Image 
              src={brain}
              alt="About Me" 
              width={500} 
              height={500}
              className={styles.myImg} 
            />
          </div>
          <div className={`col-lg-9 pt-4 pt-lg-0 ${styles.content}`} data-aos="fade-left">
            <h3>Full-Stack Developer &amp; AI/ML Enthusiast.</h3>
            <div className={`row`}>
              <div className={`col-lg-6`}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Name:</strong> 
                    <span>Ayush Jha</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Nationality:</strong> 
                    <span>India 🇮🇳</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>College Degree:</strong> 
                    <span>B.Tech Computer Science and Engineering</span>
                  </li>
                </ul>
              </div>
              <div className={`col-lg-6`}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>University:</strong> 
                    <span>XIM University, Bhubaneswar</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Graduation Year:</strong> 
                    <span>2028</span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-chevron-right`}></i> 
                    <strong className={styles.strong}>Availability:</strong> 
                    <span>Available for Internships</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.paragraph}>
              <strong className={styles.strong}>Note:</strong> Seeking internship roles in software engineering, AI, or backend development where I can contribute to real product development and scalable systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'AboutMe' },
  };
}

