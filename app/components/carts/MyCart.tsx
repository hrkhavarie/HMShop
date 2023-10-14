import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyCart = () => {
  return (
    <>
            {/* <!-- ekka Cart Start --> */}
    <div className="ec-side-cart-overlay"></div>
    <div id="ec-side-cart" className="ec-side-cart">
        <div className="ec-cart-inner">
            <div className="ec-cart-top">
                <div className="ec-cart-title">
                    <span className="cart_title">My Cart</span>
                    <button className="ec-close">×</button>
                </div>
                <ul className="eccart-pro-items">
                    <li>
                        <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={78} height={86}
                                src="/assets/images/product-image/6_1.jpg" alt="product" /></Link>
                        <div className="ec-pro-content">
                            <Link href="product-left-sidebar.html" className="cart_pro_title">T-shirt For Women</Link>
                            <span className="cart-price"><span>$76.00</span> x 1</span>
                            <div className="qty-plus-minus">
                                <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <Link href="javascript:void(0)" className="remove">×</Link>
                        </div>
                    </li>
                    <li>
                        <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={78} height={86}
                                src="/assets/images/product-image/12_1.jpg" alt="product"/></Link>
                        <div className="ec-pro-content">
                            <Link href="product-left-sidebar.html" className="cart_pro_title">Women Leather Shoes</Link>
                            <span className="cart-price"><span>$64.00</span> x 1</span>
                            <div className="qty-plus-minus">
                                <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <Link href="javascript:void(0)" className="remove">×</Link>
                        </div>
                    </li>
                    <li>
                        <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={78} height={86}
                                src="/assets/images/product-image/3_1.jpg" alt="product" /></Link>
                        <div className="ec-pro-content">
                            <Link href="product-left-sidebar.html" className="cart_pro_title">Girls Nylon Purse</Link>
                            <span className="cart-price"><span>$59.00</span> x 1</span>
                            <div className="qty-plus-minus">
                                <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <Link href="javascript:void(0)" className="remove">×</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="ec-cart-bottom">
                <div className="cart-sub-total">
                    <table className="table cart-table">
                        <tbody>
                            <tr>
                                <td className="text-left">Sub-Total :</td>
                                <td className="text-right">$300.00</td>
                            </tr>
                            <tr>
                                <td className="text-left">VAT (20%) :</td>
                                <td className="text-right">$60.00</td>
                            </tr>
                            <tr>
                                <td className="text-left">Total :</td>
                                <td className="text-right primary-color">$360.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_btn">
                    <Link href="cart.html" className="btn btn-primary">View Cart</Link>
                    <Link href="checkout.html" className="btn btn-secondary">Checkout</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyCart