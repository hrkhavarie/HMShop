import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeatureItemCard from './featureItemCard'

const FeatureItems = () => {
  return (
   <>
    {/* <!--  Feature Section Start --> */}
                <div className="ec-fre-section col-lg-6 col-md-6 col-sm-6 margin-b-30" data-animation="slideInRight">
                    <div className="col-md-12 text-left">
                        <div className="section-title">
                            <h2 className="ec-bg-title">Feature Items</h2>
                            <h2 className="ec-title">Feature Items</h2>
                        </div>
                    </div>

                    <div className="ec-fre-products">
                        
                          <FeatureItemCard />
                    </div>
                </div>
   </>
  )
}

export default FeatureItems