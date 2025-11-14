import styles from '../styles/ContactPage.module.css';


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>B.Tech Computer Science and Engineering</h4>
          <div>XIM University, Bhubaneswar</div>
          <div><strong>Year:</strong> 2024 - 2028</div>
        </div>

      </div>

      <div className={styles['work-section']}>
        <h3 className={styles.heading}>Professional Experience</h3>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Software/AI Intern</h4>
          <div>[Company Name]</div>
          <div>• Worked on backend modules + API design</div>
          <div>• Contributed to ML preprocessing pipelines and testing</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
