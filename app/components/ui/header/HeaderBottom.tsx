import Image from "next/image"
import Link from "next/link"

const HeaderBottom = () => {
  return (
    <>
    {/* // <!-- Ec Header Bottom  Start --> */}
    <div className="ec-header-bottom d-none d-lg-block">
        <div className="container position-relative">
            <div className="row">
                <div className="ec-flex">
                    {/* <!-- Ec Header Logo Start --> */}
                    <div className="align-self-center">
                        <div className="header-logo">
                            <Link href="index.html"><Image width={130} height={36} src="/assets/images/logo/logo.png" alt="Site Logo" /><Image fill
                                    className="dark-logo" src="/assets/images/logo/dark-logo.png" alt="Site Logo"
                                    style={{'display': 'none'}} /></Link>
                        </div>
                    </div>
                    {/* <!-- Ec Header Logo End --> */}

                    {/* <!-- Ec Header Search Start --> */}
                    <div className="align-self-center">
                        <div className="header-search">
                            <form className="ec-btn-group-form" action="#">
                                <input className="form-control ec-search-bar" placeholder="Search products..." type="text"/>
                                <button className="submit" type="submit"><Image width={14} height={14} src="/assets/images/icons/search.svg"
                                        className="svg_img header_svg" alt="" /></button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Ec Header Search End --> */}

                    {/* <!-- Ec Header Button Start --> */}
                    <div className="align-self-center">
                        <div className="ec-header-bottons">

                            {/* <!-- Header User Start --> */}
                            <div className="ec-header-user dropdown">
                                <button className="dropdown-toggle" data-bs-toggle="dropdown"><Image height={36} width={36}
                                        src="/assets/images/icons/user.svg" className="svg_img header_svg" alt="" /></button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><Link className="dropdown-item" href="register.html">Register</Link></li>
                                    <li><Link className="dropdown-item" href="checkout.html">Checkout</Link></li>
                                    <li><Link className="dropdown-item" href="login.html">Login</Link></li>
                                </ul>
                            </div>
                            {/* <!-- Header User End --> */}
                            {/* <!-- Header wishlist Start --> */}
                            <Link href="wishlist.html" className="ec-header-btn ec-header-wishlist">
                                <div className="header-icon"><Image height={36} width={36} src="/assets/images/icons/wishlist.svg"
                                        className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count">4</span>
                            </Link>
                            {/* <!-- Header wishlist End --> */}
                            {/* <!-- Header Cart Start --> */}
                            <Link href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                <div className="header-icon"><Image height={36} width={36} src="/assets/images/icons/cart.svg"
                                        className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count cart-count-lable">3</span>
                            </Link>
                            {/* <!-- Header Cart End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header responsive Bottom  Start --> */}
    <div className="ec-header-bottom d-lg-none">
        <div className="container position-relative">
            <div className="row ">

                {/* <!-- Ec Header Logo Start --> */}
                <div className="col">
                    <div className="header-logo">
                        <Link href="index.html"><Image height={40} width={40} src="/assets/images/logo/logo.png" alt="Site Logo" /><Image fill
                                className="dark-logo" src="/assets/images/logo/dark-logo.png" alt="Site Logo"
                                style={{'display':'none'}} /></Link>
                    </div>
                </div>
                {/* <!-- Ec Header Logo End --> */}
                {/* <!-- Ec Header Search Start --> */}
                <div className="col">
                    <div className="header-search">
                        <form className="ec-btn-group-form" action="#">
                            <input className="form-control ec-search-bar" placeholder="Search products..." type="text"/>
                            <button className="submit" type="submit"><Image height={40} width={40} src="/assets/images/icons/search.svg"
                                    className="svg_img header_svg" alt="icon" /></button>
                        </form>
                    </div>
                </div>
                {/* <!-- Ec Header Search End --> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderBottom