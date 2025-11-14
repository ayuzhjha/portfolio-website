import Image from 'next/image';
import styles from '../styles/About.module.css';
import brain from '../public/1757829188646.png';
import { useEffect, useState } from 'react';

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [typedText, setTypedText] = useState('');
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Text to be typed in the terminal
  const terminalText = `> Hello, I'm Ayush Jha
> A third-year B.Tech CS student passionate about full-stack development & AI/ML
> Let me tell you about my journey...`;
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Terminal typing effect
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(terminalText.substring(0, i));
      i++;
      if (i > terminalText.length) clearInterval(typing);
    }, 40);
    
    // Animate skills progressively
    const skillsTimeout = setTimeout(() => {
      const skillIds = ['js', 'react', 'aws', 'node', 'golang', 'css', 'db', 'git'];
      let delay = 0;
      
      skillIds.forEach((id, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, id]);
        }, delay);
        delay += 200;
      });
    }, 1000);
    
    return () => {
      clearInterval(typing);
      clearTimeout(skillsTimeout);
    };
  }, []);

  return (
    <div className={`${styles.about} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <h1 className={styles.mainTitle}>About <span className={styles.highlight}>Me</span></h1>
          <div className={styles.underline}></div>
        </div>
        
        {/* VS Code-like Tabs */}
        <div className={styles.tabsContainer}>
          <div 
            className={`${styles.tab} ${activeTab === 'profile' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span className={styles.tabIcon}></span> Profile
          </div>
          <div 
            className={`${styles.tab} ${activeTab === 'skills' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span className={styles.tabIcon}></span> Skills
          </div>
          <div 
            className={`${styles.tab} ${activeTab === 'terminal' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <span className={styles.tabIcon}></span> Terminal
          </div>
        </div>
        
        {/* Profile Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'profile' ? styles.activeContent : ''}`}>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={brain}
                  alt="About Me"
                  width={200}
                  height={200}
                  priority
                  className={styles.myImage}
                />                <div className={styles.imageGlow}></div>
              </div>
              {/* <div className={styles.status}>
                <span className={styles.statusDot}></span> Available
              </div> */}
              <div className={styles.personalInfoCard}>
                <h3 className={styles.cardTitle}>Personal Info</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-person`}></i>
                    <span><strong className={styles.strong}>Name: </strong>
                      <span className={styles.value}>Ayush Jha</span></span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-flag`}></i>
                    <span><strong className={styles.strong}>Nationality: </strong>
                      <span className={styles.value}>Indian</span></span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-building`}></i>
                    <span><strong className={styles.strong}>College: </strong>
                      <span className={styles.value}>XIM University, Bhubaneswar</span></span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-calendar`}></i>
                    <span><strong className={styles.strong}>Graduation: </strong>
                      <span className={styles.value}>2028</span></span>
                  </li>
                  <li className={styles.listItem}>
                    <i className={`${styles.icon} bi bi-briefcase`}></i>
                    <span><strong className={styles.strong}>Availability: </strong>
                      <span className={styles.value}>Available for Internships</span></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={styles.bioContainer}>
              <div className={styles.bioCard}>
                <h3 className={styles.cardTitle}>Full-Stack Developer | AI/ML Enthusiast</h3>
                <div className={styles.paragraph}>
                  Third-year B.Tech Computer Science student skilled in full-stack development, AI/ML, automation, and system design. Seeking internship roles in software engineering, AI, or backend development where I can contribute to real product development and scalable systems.
                  <br></br>
I'm passionate about building innovative solutions that solve real-world problems. From full-stack applications to AI-powered tools, I enjoy working on projects that combine technical excellence with practical impact.                </div>
                
                <div className={styles.tagContainer}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>Java</span>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>Node.js</span>
                  <span className={styles.tag}>Express</span>
                  <span className={styles.tag}>Django</span>
                  <span className={styles.tag}>MySQL</span>
                  <span className={styles.tag}>MongoDB</span>
                  <span className={styles.tag}>NumPy</span>
                  <span className={styles.tag}>Pandas</span>
                  <span className={styles.tag}>Scikit-learn</span>
                  <span className={styles.tag}>AI/ML</span>
                  <span className={styles.tag}>RAG</span>
                  <span className={styles.tag}>Git</span>

                </div>
                
                <div className={styles.buttonContainer}>
                  <a href="/ayush.pdf" className={styles.button}>
                    <span className={styles.buttonIcon}></span>
                    Resume
                  </a>
                  <a href="mailto:your.email@example.com" className={styles.button}>
                    <span className={styles.buttonIcon}></span>
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'skills' ? styles.activeContent : ''}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.underline}></div>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/js-icon.svg" className={styles.skillIcon} alt="javascript" />
                <span className={styles.skillName}>JavaScript</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://skillicons.dev/icons?i=css" className={styles.skillIcon} alt="css3" />
                <span className={styles.skillName}>CSS</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/python-icon.svg" className={styles.skillIcon} alt="python" />
                <span className={styles.skillName}>Python</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://skillicons.dev/icons?i=html" className={styles.skillIcon} alt="html5" />
                <span className={styles.skillName}>HTML</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/github-icon.svg" className={styles.skillIcon} alt="github" />
                <span className={styles.skillName}>GitHub</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://skillicons.dev/icons?i=mongodb" className={styles.skillIcon} alt="mongodb" />
                <span className={styles.skillName}>MongoDB</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" className={styles.skillIcon} alt="sqlite" />
                <span className={styles.skillName}>SQLite</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/mysql-icon.svg" className={styles.skillIcon} alt="mysql" />
                <span className={styles.skillName}>MySQL</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/cpp-icon.svg" className={styles.skillIcon} alt="cpp" />
                <span className={styles.skillName}>C++</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/redux-icon.svg" className={styles.skillIcon} alt="redux" />
                <span className={styles.skillName}>Redux</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/django-icon.svg" className={styles.skillIcon} alt="django" />
                <span className={styles.skillName}>Django</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className={styles.skillIcon} alt="c" />
                <span className={styles.skillName}>C</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/ts-icon.svg" className={styles.skillIcon} alt="typescript" />
                <span className={styles.skillName}>TypeScript</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/react-icon.svg" className={styles.skillIcon} alt="react" />
                <span className={styles.skillName}>React</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className={styles.skillIcon} alt="figma" />
                <span className={styles.skillName}>Figma</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://cdn.simpleicons.org/jupyter/F37626" className={styles.skillIcon} alt="jupyter" />
                <span className={styles.skillName}>Jupyter</span>
              </div>
              
              <div className={styles.skill}>
                <img src="https://imgs.search.brave.com/TGmEQZBLfzt8COMRcH7TFt8IM2pcfKJ3fXdocfgae7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNjEzMi82MTMy/MjIwLnBuZw" className={styles.skillIcon} alt="scala" />
                <span className={styles.skillName}>Scala</span>
              </div>

              {/* New Skills */}
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/restapi-icon.svg" className={styles.skillIcon} alt="rest api" />
                <span className={styles.skillName}>REST API</span>
              </div>

              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/jest-icon.svg" className={styles.skillIcon} alt="jest" />
                <span className={styles.skillName}>Jest</span>
              </div>

              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/aws-icon.svg" className={styles.skillIcon} alt="aws" />
                <span className={styles.skillName}>AWS</span>
              </div>

              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/java-icon.svg" className={styles.skillIcon} alt="java" />
                <span className={styles.skillName}>Java</span>
              </div>
              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/prettier-icon.svg" className={styles.skillIcon} alt="prettier" />
                <span className={styles.skillName}>Prettier</span>
              </div>

              <div className={styles.skill}>
                <img src="https://techstack-generator.vercel.app/graphql-icon.svg" className={styles.skillIcon} alt="graphql" />
                <span className={styles.skillName}>GraphQL</span>
              </div>

              <div className={styles.skill}>
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bash-Dark.svg" className={styles.skillIcon} alt="bash" />
                <span className={styles.skillName}>Bash</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Flutter-Dark.svg" className={styles.skillIcon} alt="flutter" />
                <span className={styles.skillName}>Flutter</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/GoLang.svg" className={styles.skillIcon} alt="golang" />
                <span className={styles.skillName}>Go</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Kafka.svg" className={styles.skillIcon} alt="kafka" />
                <span className={styles.skillName}>Kafka</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Linux-Dark.svg" className={styles.skillIcon} alt="linux" />
                <span className={styles.skillName}>Linux</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/NextJS-Dark.svg" className={styles.skillIcon} alt="nextjs" />
                <span className={styles.skillName}>Next.js</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg" className={styles.skillIcon} alt="postgresql" />
                <span className={styles.skillName}>PostgreSQL</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Rust.svg" className={styles.skillIcon} alt="rust" />
                <span className={styles.skillName}>Rust</span>
              </div>

              <div className={styles.skill}>
                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Supabase-Dark.svg" className={styles.skillIcon} alt="supabase" />
                <span className={styles.skillName}>Supabase</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Terminal Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'terminal' ? styles.activeContent : ''}`}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalControls}>
                <span className={styles.terminalControl} style={{ backgroundColor: '#ff5f56' }}></span>
                <span className={styles.terminalControl} style={{ backgroundColor: '#ffbd2e' }}></span>
                <span className={styles.terminalControl} style={{ backgroundColor: '#27c93f' }}></span>
              </div>
              <div className={styles.terminalTitle}>ayush-portfolio ~ about-me</div>
            </div>
            <div className={styles.terminalBody}>
              {typedText.split('\n').map((line, i) => (
                <div key={i} className={styles.terminalLine}>
                  {line}
                </div>
              ))}
              <div className={styles.terminalCursor}></div>
            </div>
            <div className={styles.terminalActions}>
              <a href="/projects" className={styles.terminalButton}>
                View Projects
              </a>
              <a href="https://github.com/ayuzhjha" target="_blank" rel="noopener noreferrer" className={styles.terminalButton}>
                Check GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
