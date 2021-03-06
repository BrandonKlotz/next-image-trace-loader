import ImageTrace from "next-image-trace-loader"
import ringPlanet from '../public/planet-1.png'
import moonPlanet from '../public/planet-2.png'
import star from '../public/star-1.png'
import lightspeed from '../public/lightspeed-illustration.jpg'
import profile from '../public/profile.jpg'


export default function Home() {
  return (
    <div className="example">
      <ImageTrace src='/planet-1.png' trace={ringPlanet.trace} nextImageProps={{width: 800, height: 400}} />
      <ImageTrace src='/planet-2.png' trace={moonPlanet.trace} nextImageProps={{width: 200, height: 140}} />
      <ImageTrace src='/lightspeed-illustration.jpg' trace={lightspeed.trace} nextImageProps={{width: 425, height: 400}} />
      <ImageTrace src='/profile.jpg' trace={profile.trace} nextImageProps={{width: 400, height: 400, className: "rounded"}} />
      <ImageTrace src='/star-1.png' trace={star.trace} nextImageProps={{layout: 'fill', quality: 1}} />
    </div>
  )
}
