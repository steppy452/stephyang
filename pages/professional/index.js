import Link from 'next/link'

import Data from '../../components/Data'
import Resume from '../../components/Resume'

import BackHome from '../../components/BackHome'
import Intro from '../../components/Intro'
import WorkExperience from '../../components/WorkExperience'
import Education from '../../components/Education'

export default () => {

  const data = Data
  const resume = Resume

  return (
    <div className="sub-layout">
      <div className="content-wrapper">
        <div className="sub-layout-content">
          <BackHome></BackHome>
          <h1>Resume</h1>
          <p className="resume-profile">
            I'm a designer-developer who strives to build beautiful, intuitive, quality software that users <span className="emphasis">want</span> to use everyday currently based in Austin, TX.
          </p>

          <h2>Work Experience</h2>
          {
            resume.work.map( (item, idx) => {
              return <WorkExperience key={idx} work={ item } />
            })
          }

          <h2>Skills</h2>
          <p>{ resume.skills }</p>

          <h2>Dabbles In</h2>
          <p>{ resume.dabbles }</p>

          <h2>Education</h2>
          <Education edu={ resume.education }></Education>
        </div>
      </div>

      <Intro data={data} className="sub-layout-intro" />
    </div>
  )
}
