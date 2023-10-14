import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from '../../products/ProductCard'

const TopColloctaion = () => {
  return (
    <>
      {/* <!-- Product tab Area Start --> */}
    <section className="section ec-product-tab section-space-p" id="collection">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">Our Top Collection</h2>
                        <h2 className="ec-title">Our Top Collection</h2>
                        <p className="sub-title">Browse The Collection of Top Products</p>
                    </div>
                </div>

                {/* <!-- Tab Start --> */}
                <div className="col-md-12 text-center">
                    <ul className="ec-pro-tab-nav nav justify-content-center">
                        <li className="nav-item"><Link className="nav-link active" data-bs-toggle="tab" href="#tab-pro-for-all">For
                                All</Link></li>
                        <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-men">For
                                Men</Link></li>
                        <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-women">For
                                Women</Link></li>
                        <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-child">For
                                Children</Link></li>
                    </ul>
                </div>
                {/* <!-- Tab End --> */}
            </div>
            <div className="row">
                <div className="col">
                    <div className="tab-content">
                        {/* <!-- 1st Product tab start --> */}
                        <div className="tab-pane fade show active" id="tab-pro-for-all">
                            <div className="row">
                                {/* <!-- Product Content --> */}
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                              

                                <div className="col-sm-12 shop-all-btn"><Link href="shop-left-sidebar-col-3.html">Shop All Collection</Link></div>
                            </div>
                        </div>
                        {/* <!-- ec 1st Product tab end --> */}
                        {/* <!-- ec 2nd Product tab start --> */}
                        <div className="tab-pane fade" id="tab-pro-for-men">
                            <div className="row">
                                 {/* <!-- Product Content -->                                 */} */}

                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                            </div>
                        </div>
                        {/* <!-- ec 2nd Product tab end --> */}
                        {/* <!-- ec 3rd Product tab start --> */}
                        <div className="tab-pane fade" id="tab-pro-for-women">
                            <div className="row">
                                 {/* <!-- Product Content -->                                 */} */}
                               
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                                <ProductCard/>
                               

                                <div className="col-sm-12 shop-all-btn"><Link href="shop-left-sidebar-col-3.html">Shop All Collection</Link></div>
                            </div>
                        </div>
                        {/* <!-- ec 3rd Product tab end --> */}
                        {/* <!-- ec 4th Product tab start --> */}
                        <div className="tab-pane fade" id="tab-pro-for-child">
                            <div className="row">
                                {/* <!-- Product Content -->                                 */}
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                                
                             
                              
                                
                                <div className="col-sm-12 shop-all-btn"><Link href="shop-left-sidebar-col-3.html">Shop All Collection</Link></div>
                            </div>
                        </div>
                        {/* <!-- ec 4th Product tab end --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TopColloctaion