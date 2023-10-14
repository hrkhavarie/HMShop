import Image from 'next/image'
import Slider from './components/ui/slider/Slider'
import TopColloctaion from './components/ui/colloction/TopColloctaion'
import FeatureItems from './components/products/FeatureItems'
import LimitedTimeOffer from './components/products/LimitedTimeOffer'

export default function Home() {
  return (
    <>
    <Slider/>
    <TopColloctaion/>

    {/* <!--  Feature & Special Section Start --> */}
    <section className="section ec-fre-spe-section section-space-p" id="offers">
        <div className="container">
            <div className="row">
              <FeatureItems/>
              <LimitedTimeOffer/>
              </div>
              </div>
              </section>

    </>
  )
}
