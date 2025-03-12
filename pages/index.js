import { useEffect, useState } from 'react'
import css from '../styles/home.module.css'

function Main() {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle the menu visibility when clicking the menu icon
  const handleMenuClick = () => {
    setMenuVisible((prev) => !prev);
  };

  // Effect sound when hovering the projectDiv
  const handleHoverSound = () => {
    const sound = new Audio('swing.mp3');
    sound.play();
  };

  useEffect(() => {
    const projectDivs = document.querySelectorAll(`.${css.projectDiv}`);
    projectDivs.forEach((projectDiv) => {
      projectDiv.addEventListener('mouseover', handleHoverSound);
    });

    return () => {
      projectDivs.forEach((projectDiv) => {
        projectDiv.removeEventListener('mouseover', handleHoverSound);
      });
    };
  }, []);

  return (
    <div>
      <nav className={css.nav}>
        <img 
          src='images/menu.png' 
          className={css.menu} 
          onClick={handleMenuClick}
        />
        <ul 
          className={`${css.ul} ${menuVisible ? css.show : ''}`}
          onClick={handleMenuClick}
        >
          <li className={css.li}><a href='#home'>Home</a></li>
          <li className={css.li}><a href='#experience'>Experience</a></li>
          <li className={css.li}><a href='#project'>Project</a></li>
          <li className={css.li}><a href='#certification'>Certification</a></li>
        </ul>
      </nav>

      <main className={css.main}>
        <div id='home' className={css.chapter}>
          <div className={css.frame}>
            <img src='images/me.jpg' className={css.photo}/>
            <p className={css.photoName}>Audrey</p>
          </div>
          <div>
            <p className={css.chapterTitle}>Jesslyn Audrey
              <span className={css.iconContainer}>
                <img src='images/girl.png' className={css.girl}/>
              </span>
            </p>
            <p className={css.aboutMe}>Final year student majoring in Computer Science who is passionate about learning new things, data management, striving for achievements and looking for challenges both in life, career and academics. I am happy to learn mathematics and other related subjects which require logic for problem solving. I am excited to seek new opportunities and challenges to develop myself and gain valuable experiences.</p>
          </div>
        </div>

        <div id='experience' className={css.chapter} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className={css.chapterTitle} style={{ justifyContent: 'center' }}>Education & Experience</p>
          <div className={css.experienceContent}>
            <div className={css.experienceWrap} style={{ position: 'relative' }}>
              <img src='images/graduation.png' className={css.graduation}/>
              <p className={css.subChapter}>Education</p>

              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>Bina Nusantara University</p>
                  <p className={css.experienceRole}>Computer Science</p>
                </div>
                <p className={css.experienceDuration}>2021 - 2025</p>
              </div>

              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>National Taipei University of Technology</p>
                  <p className={css.experienceRole}>Exchange</p>
                </div>
                <p className={css.experienceDuration}>2024 - 2024</p>
              </div>

              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>Santa Angela</p>
                  <p className={css.experienceRole}>High School</p>
                </div>
                <p className={css.experienceDuration}>2018 - 2021</p>
              </div>

            </div>
            <div className={css.experienceWrap}>
              <p className={css.subChapter}>
                Experience
                <span className={css.iconContainer}>
                  <img src='images/workcase.png' />
                </span>
              </p>
              
              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>PT Hartono Istana Teknologi (Polytron)</p>
                  <p className={css.experienceRole}>Systems Analyst Intern</p>
                </div>
                <p className={css.experienceDuration}>Mar 2024 - Mar 2025</p>
              </div>

              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>Bimbel B-Smart</p>
                  <p className={css.experienceRole}>Tutor</p>
                </div>
                <p className={css.experienceDuration}>Nov 2024 - Present</p>
              </div>

              <div className={css.experienceDetail}>
                <div>
                  <p className={css.experiencePlace}>Binus Student Learning Community</p>
                  <p className={css.experienceRole}>Scholarship Mentor</p>
                </div>
                <p className={css.experienceDuration}>Feb 2023 - Jul 2023</p>
              </div>

            </div>
          </div>
        </div>

        <div id='project' className={`${css.chapter} ${css.project}`}>
          <p className={css.chapterTitle}>Project</p>
          <a className={`${css.projectDiv} ${css.porto}`} href='https://www.canva.com/design/DAGe9itJ_IE/res2uypBtcg4P21L0T3dTA/edit?utm_content=DAGe9itJ_IE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
            <img src='images/porto.png' className={css.projectImg}/>
            <div className={css.projectDetail}>
              <p className={css.experiencePlace}>Restaurant Project</p>
              <p className={css.experienceRole} style={{ marginBottom: '15px' }}>Data Analytics</p>
              <p className={css.experienceDuration}>Personal project analyzing restaurant dishes and traffic using Kaggle, SQL, Python, and Power BI.</p>
            </div>
          </a>
          
          <a className={`${css.projectDiv} ${css.data}`} href='https://drive.google.com/drive/folders/1qeGkJa_WTP0t-3TjONNdCTX4xidTD-Eb?usp=sharing'>
            <img src='images/data.png' className={css.projectImg}/>
            <div className={css.projectDetail}>
              <p className={css.experiencePlace}>Data Project</p>
              <p className={css.experienceRole} style={{ marginBottom: '15px' }}>Data Processing and Cleaning</p>
              <p className={css.experienceDuration}>Enhanced VBA program with a macro button to simplify the data cleaning and processing process using Microsoft Excel.</p>
            </div>
          </a>
          
          <a className={`${css.projectDiv} ${css.surattugas}`} href='https://ess.polytron.co.id/login?continue=surattugas.polytron.co.id'>
            <img src='images/surattugas.png' className={css.projectImg}/>
            <div className={css.projectDetail}>
              <p className={css.experiencePlace}>Surat Tugas</p>
              <p className={css.experienceRole} style={{ marginBottom: '15px' }}>Web Application Developer</p>
              <p className={css.experienceDuration}>Creating website application for internal to create assignment letter. The project was completed using Node.js, Express, HTML, CSS, JavaScript, EJS, and MySQL.</p>
            </div>
          </a>

          <a className={`${css.projectDiv} ${css.photoprogram}`} href='https://github.com/jesslynaudrey/employee-id-photo-cropper'>
            <img src='images/photoprogram.png' className={css.projectImg}/>
            <div className={css.projectDetail}>
              <p className={css.experiencePlace}>Photo Cropping</p>
              <p className={css.experienceRole} style={{ marginBottom: '15px' }}>image Processing and Web Developer</p>
              <p className={css.experienceDuration}>A simple JavaScript web application to assist the internal HR team in efficiently creating ID cards by cropping employee photos using OpenCV and Haar Cascades. This tool automates the photo editing process and ensures consistent sizes for employee ID’s card.</p>
            </div>
          </a>

          <a className={`${css.projectDiv} ${css.clinic}`} style={{ marginBottom: '0px' }} href='https://www.canva.com/design/DAGUWWMXpXU/K6esXMCz2rAQMLjlI5tGqQ/edit?utm_content=DAGUWWMXpXU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
            <img src='images/clinic.png' className={css.projectImg}/>
            <div className={css.projectDetail}>
              <p className={css.experiencePlace}>Clinic Application</p>
              <p className={css.experienceRole} style={{ marginBottom: '15px' }}>UI/UX Developer</p>
              <p className={css.experienceDuration}>Developing a mobile application for clinic reservations that also manages clinic operations. The app provides staff including doctors, cashiers, and pharmacists with access to appointment history and a centralized database.</p>
            </div>
          </a>
        </div>

        <div id='certification' className={`${css.chapter} ${css.certifWrap}`}>
          <p className={css.chapterTitle} style={{ justifyContent: 'center' }}>Certification & Publication</p>
          <div className={css.certifGrid}>
            <a href='https://drive.google.com/file/d/129x-ttntp7yOIKx-98Xng1rB7TUVOkeq/view' className={css.certifDiv}>
              <img className={css.certif} src='images/revou.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
            <a href='https://www.hackerrank.com/certificates/iframe/845c9d00688a' className={css.certifDiv}>
              <img className={css.certif} src='images/sql.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
            <a href='https://www.hackerrank.com/certificates/iframe/5f9b14c54571' className={css.certifDiv}>
              <img className={css.certif} src='images/problemsolving.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
          </div>
          <div className={css.certifGrid} style={{ marginTop: '30px' }}>
            <a href='https://drive.google.com/file/d/1xn2mNcYczdPwAfFCaEtOaO_nDLQZL1-W/view' className={css.certifDiv}>
              <img className={css.certif} src='images/bootcamp.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
            <a href='https://ieeexplore.ieee.org/document/10335233' className={css.certifDiv}>
              <img className={css.certif} src='images/heartattackpaper.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
            <a href='https://ieeexplore.ieee.org/document/10335240' className={css.certifDiv}>
              <img className={css.certif} src='images/yolopaper.png'></img>
              <p className={css.certifDetail}>Click to View</p>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
          <a href='https://www.linkedin.com/in/jesslyn-audrey/'><img src='images/linkedinlogo.png' style={{ width: '40px', height: '40px', cursor: 'pointer' }}/></a>
          <a href='https://github.com/jesslynaudrey'><img src='images/githublogo.png' style={{ width: '40px', height: '40px', cursor: 'pointer' }}/></a>
          <a href='https://public.tableau.com/app/profile/jesslyn.audrey/vizzes'><img src='images/tableau.png' style={{ width: '40px', height: '40px', cursor: 'pointer' }}/></a>
        </div>
        <p style={{ display: 'flex', justifyContent: 'center', fontSize: '15px', fontWeight: '800', marginBottom: '20px' }}>Jesslyn Audrey 2025</p>
      </main>
    </div>
  )
}

export default Main
