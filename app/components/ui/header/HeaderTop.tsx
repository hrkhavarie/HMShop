import Image from 'next/image'
import Link from 'next/link'
// import './../../../styles/scss/layout/_header.scss'

const HeaderTop = () => {
  return (
  
         <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    {/* <!-- Header Top social Start --> */}
                    <div className="col text-left header-top-left d-none d-lg-block">
                        <div className="header-top-social">
                            <span className="social-text text-upper">Follow us on:</span>
                            <ul className="mb-0">
                                <li className="list-inline-item"><Link className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Header Top social End --> */}
                    {/* <!-- Header Top Message Start --> */}
                    <div className="col text-center header-top-center">
                        <div className="header-top-message text-upper">
                            <span>Free Shipping</span>This Week Order Over - $75
                        </div>
                    </div>
                    {/* <!-- Header Top Message End --> */}
                    {/* <!-- Header Top Language Currency --> */}
                    <div className="col header-top-right d-none d-lg-block">
                        <div className="header-top-lan-curr d-flex justify-content-end">
                            {/* <!-- Currency Start --> */}
                            <div className="header-top-curr dropdown">
                                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i
                                        className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                <ul className="dropdown-menu">
                                    <li className="active"><Link className="dropdown-item" href="#">USD $</Link></li>
                                    <li><Link className="dropdown-item" href="#">EUR €</Link></li>
                                </ul>
                            </div>
                            {/* <!-- Currency End --> */}
                            {/* <!-- Language Start --> */}
                            <div className="header-top-lan dropdown">
                                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Language <i
                                        className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                <ul className="dropdown-menu">
                                    <li className="active"><Link className="dropdown-item" href="#">English</Link></li>
                                    <li><Link className="dropdown-item" href="#">Italiano</Link></li>
                                </ul>
                            </div>
                            {/* <!-- Language End --> */}

                        </div>
                    </div>
                    {/* <!-- Header Top Language Currency --> */}
                    {/* <!-- Header Top responsive Action --> */}
                    <div className="col d-lg-none ">
                        <div className="ec-header-bottons">
                            {/* <!-- Header User Start --> */}
                            <div className="ec-header-user dropdown">
                                <button className="dropdown-toggle" data-bs-toggle="dropdown"><Image fill
                                        src="assets/images/icons/user.svg" className="svg_img header_svg" alt="" /></button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><Link className="dropdown-item" href="register.html">Register</Link></li>
                                    <li><Link className="dropdown-item" href="checkout.html">Checkout</Link></li>
                                    <li><Link className="dropdown-item" href="login.html">Login</Link></li>
                                </ul>
                            </div>
                            {/* <!-- Header User End --> */}
                            {/* <!-- Header Cart Start --> */}
                            <Link href="wishlist.html" className="ec-header-btn ec-header-wishlist">
                                <div className="header-icon"><Image fill src="assets/images/icons/wishlist.svg"
                                        className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count">4</span>
                            </Link>
                            {/* <!-- Header Cart End --> */}
                            {/* <!-- Header Cart Start --> */}
                            <Link href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                <div className="header-icon"><Image fill src="assets/images/icons/cart.svg"
                                        className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count cart-count-lable">3</span>
                            </Link>
                            {/* <!-- Header Cart End --> */}
                            <Link href="javascript:void(0)" className="ec-header-btn ec-sidebar-toggle">
                                <Image fill src="assets/images/icons/category-icon.svg" className="svg_img header_svg" alt="icon" />
                            </Link>
                            {/* <!-- Header menu Start --> */}
                            <Link href="#ec-mobile-menu" className="ec-header-btn ec-side-toggle d-lg-none">
                                <Image fill src="assets/images/icons/menu.svg" className="svg_img header_svg" alt="icon" />
                            </Link>
                            {/* <!-- Header menu End --> */}
                        </div>
                    </div>
                    {/* <!-- Header Top responsive Action --> */}
                </div>
            </div>
        </div>
  )
}

export default HeaderTop