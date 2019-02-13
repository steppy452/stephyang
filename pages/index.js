import Link from 'next/link'

import Data from '../components/Data'
import Intro from '../components/Intro'

import '../styles/styles.sass'

export default () => {

  const data = Data

  return (
    <div className="layout">
      <div className="profile personal bounce-right">
        <Link prefetch href="/personal">
          <img src="/static/me-personal.png" className="profile-photo" />
        </Link>
        {/* <img src="/static/personal-underlay.png" className="personal-underlay" />
        <img src="/static/abp.svg" className="personal-bg fade-in" /> */}
      </div>

      <div className="profile professional bounce-left">
        <Link prefetch href="/professional">
          <img src="/static/me-professional.png" className="profile-photo" />
        </Link>
        <img src="/static/professional-underlay.png" className="profesional-underlay" />
      </div>

      <Intro data={ data } />
    </div>
  )
}
