import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeatureItemCard = () => {
  return (
    <div className="ec-fs-product">
        <div className="ec-fs-pro-inner">
            <div className="ec-fs-pro-image-outer col-lg-6 col-md-6 col-sm-6">
                                    <div className="ec-fs-pro-image">
                                        <Link href="product-left-sidebar.html" className="image"><Image width={290} height={322} className="main-image"
                                                src="/assets/images/product-image/1_1.jpg" alt="Product" /></Link>
                                        <Link href="#" className="quickview" data-link-action="quickview" title="Quick view"
                                            data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><Image width={290} height={322}
                                                src="/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                alt="" /></Link>
                                    </div>
             </div>
            <div className="ec-fs-pro-content col-lg-6 col-md-6 col-sm-6">
                                    <h5 className="ec-fs-pro-title"><Link href="product-left-sidebar.html">Baby Toy Teddybear</Link>
                                    </h5>
                                    <div className="ec-fs-pro-rating">
                                        <span className="ec-fs-rating-icon">
                                            <i className="ecicon eci-star fill"></i>
                                            <i className="ecicon eci-star fill"></i>
                                            <i className="ecicon eci-star fill"></i>
                                            <i className="ecicon eci-star fill"></i>
                                            <i className="ecicon eci-star"></i>
                                        </span>
                                        <span className="ec-fs-rating-text">4 Review</span>
                                    </div>
                                    <div className="ec-fs-price">
                                        <span className="old-price">$549.00</span>
                                        <span className="new-price">$480.00</span>
                                    </div>

                                    <div className="countdowntimer"><span id="ec-fs-count-1"></span></div>
                                    <div className="ec-fs-pro-desc">Lorem Ipsum is simply dummy text the printing and
                                        typesetting.
                                    </div>
                                    <div className="ec-fs-pro-book">Total Booking: <span>25</span></div>
                                    <div className="ec-fs-pro-btn">
                                        <Link href="#" className="btn btn-lg btn-secondary">Remind Me</Link>
                                        <Link href="#" className="btn btn-lg btn-primary">Book Now</Link>
                                    </div>
            </div>
        </div>
                        </div>
  )
}

export default FeatureItemCard