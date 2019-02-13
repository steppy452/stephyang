import Data from '../../components/Data'

import BackHome from '../../components/BackHome'
import Intro from '../../components/Intro'
import Gallery from '../../components/Gallery'
import GalleryItem from '../../components/GalleryItem'

export default () => {

  const data = Data
  const gallery = Gallery

  return (
    <div className="sub-layout">
      <div className="content-wrapper">
        <div className="sub-layout-content">
        <BackHome></BackHome>
          <h1>Offduty</h1>
          <p>
            When I'm off work, I love to keep busy learning new life skills and enjoying time with my little pup, Toffee. You'll often find me at Austin Bouldering Project pushing myself on new and challenging routes. Otherwise, I enjoying working with my hands and have recently picked up woodworking as a hobby. My recent "I should do that" moment is building a tiny home in the near future, or maybe a workshop in my backyard.
          </p>
          <p>
            In the mean time, I'm trying to furnish the rest of my house without having to buy more pre-fabricated pieces. If you can't find me in Austin, I'm probably off traveling the world, finding as many places as I can to scuba dive :)
          </p>

          <div className="photo-gallery">
            {
              gallery.map( (item, idx) => {
                return <GalleryItem key={idx} item={ item }></GalleryItem>
              })
            }
          </div>
        </div>
      </div>

      <Intro data={ data } className="sub-layout-intro" />
    </div>
  )
}
