import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
    <div className="ec-product-inner">
        <div className="ec-pro-image-outer">
            <div className="ec-pro-image">
                <Link href="product-left-sidebar.html" className="image">
                    <Image width={288} height={320} className="main-image"
                        src="/assets/images/product-image/8_1.jpg" alt="Product" />
                    <Image width={288} height={320} className="hover-image"
                        src="/assets/images/product-image/8_2.jpg" alt="Product" />
                </Link>
                <span className="percentage">20%</span>
                <span className="flags">
                    <span className="new">New</span>
                </span>
                <Link href="/" className="quickview" data-link-action="quickview"
                    title="Quick view" data-bs-toggle="modal"
                    data-bs-target="#ec_quickview_modal"><Image width={288} height={320}
                        src="/assets/images/icons/quickview.svg" className="svg_img pro_svg"
                        alt="" /></Link>
                <div className="ec-pro-actions">
                    <Link href="compare.html" className="ec-btn-group compare"
                        title="Compare"><Image width={288} height={320} src="/assets/images/icons/compare.svg"
                            className="svg_img pro_svg" alt="" /></Link>
                    <button title="Add To Cart" className="add-to-cart"><Image width={288} height={320}
                            src="/assets/images/icons/cart.svg" className="svg_img pro_svg"
                            alt="" /> Add To Cart</button>
                    <Link href="/" className="ec-btn-group wishlist" title="Wishlist"><Image width={288} height={320}
                            src="/assets/images/icons/wishlist.svg"
                            className="svg_img pro_svg" alt="" /></Link>
                </div>
            </div>
        </div>
        <div className="ec-pro-content">
            <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Digital Smart Watches</Link></h5>
            <div className="ec-pro-rating">
                <i className="ecicon eci-star fill"></i>
                <i className="ecicon eci-star fill"></i>
                <i className="ecicon eci-star fill"></i>
                <i className="ecicon eci-star fill"></i>
                <i className="ecicon eci-star"></i>
            </div>
            <span className="ec-price">
                <span className="old-price">$100.00</span>
                <span className="new-price">$80.00</span>
            </span>
            <div className="ec-pro-option">
                <div className="ec-pro-color">
                    <span className="ec-pro-opt-label">Color</span>
                    <ul className="ec-opt-swatch ec-change-img">
                        <li className="active"><Link href="/" className="ec-opt-clr-img"
                                data-src="/assets/images/product-image/8_2.jpg"
                                data-src-hover="/assets/images/product-image/8_2.jpg"
                                data-tooltip="Gray"><span
                                    style={{"backgroundColor":"#e9dddd"}}></span></Link></li>
                        <li><Link href="/" className="ec-opt-clr-img"
                                data-src="/assets/images/product-image/8_3.jpg"
                                data-src-hover="/assets/images/product-image/8_3.jpg"
                                data-tooltip="Orange"><span
                                    style={{"backgroundColor":"#ffd5cb"}}></span></Link></li>
                        <li><Link href="/" className="ec-opt-clr-img"
                                data-src="/assets/images/product-image/8_4.jpg"
                                data-src-hover="/assets/images/product-image/8_4.jpg"
                                data-tooltip="Green"><span
                                    style={{"backgroundColor":"#92e4fd"}}></span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductCard