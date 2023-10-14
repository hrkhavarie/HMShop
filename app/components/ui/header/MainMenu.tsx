import Image from 'next/image'
import Link from 'next/link'

const MainMenu = () => {
  return (
    <>
           {/* <!-- EC Main Menu Start --> */}
        <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="ec-main-menu">
                            <Link href="javascript:void(0)" className="ec-header-btn ec-sidebar-toggle">
                                <Image width={36} height={36} src="/assets/images/icons/category-icon.svg" className="svg_img header_svg" alt="icon" />
                            </Link>
                            <ul>
                                <li><Link href="index.html">Home</Link></li>
                                <li className="dropdown position-static"><Link href="javascript:void(0)">Categories</Link>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="menu_title"><Link href="javascript:void(0)">Classic
                                                        Variation</Link></li>
                                                <li><Link href="shop-left-sidebar-col-3.html">Left sidebar 3 column</Link>
                                                </li>
                                                <li><Link href="shop-left-sidebar-col-4.html">Left sidebar 4 column</Link>
                                                </li>
                                                <li><Link href="shop-right-sidebar-col-3.html">Right sidebar 3 column</Link>
                                                </li>
                                                <li><Link href="shop-right-sidebar-col-4.html">Right sidebar 4 column</Link>
                                                </li>
                                                <li><Link href="shop-full-width.html">Full width 4 column</Link></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><Link href="javascript:void(0)">Classic
                                                        Variation</Link></li>
                                                <li><Link href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                        column</Link></li>
                                                <li><Link href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                        column</Link></li>
                                                <li><Link href="shop-banner-right-sidebar-col-3.html">Banner right sidebar
                                                        3 column</Link></li>
                                                <li><Link href="shop-banner-right-sidebar-col-4.html">Banner right sidebar
                                                        4 column</Link></li>
                                                <li><Link href="shop-banner-full-width.html">Banner Full width 4 column</Link>
                                                </li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><Link href="javascript:void(0)">Columns
                                                        Variation</Link></li>
                                                <li><Link href="shop-full-width-col-3.html">3 Columns full width</Link></li>
                                                <li><Link href="shop-full-width-col-4.html">4 Columns full width</Link></li>
                                                <li><Link href="shop-full-width-col-5.html">5 Columns full width</Link></li>
                                                <li><Link href="shop-full-width-col-6.html">6 Columns full width</Link></li>
                                                <li><Link href="shop-banner-full-width-col-3.html">Banner 3 Columns</Link>
                                                </li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><Link href="javascript:void(0)">List Variation</Link>
                                                </li>
                                                <li><Link href="shop-list-left-sidebar.html">Shop left sidebar</Link></li>
                                                <li><Link href="shop-list-right-sidebar.html">Shop right sidebar</Link></li>
                                                <li><Link href="shop-list-banner-left-sidebar.html">Banner left sidebar</Link>
                                                </li>
                                                <li><Link href="shop-list-banner-right-sidebar.html">Banner right
                                                        sidebar</Link></li>
                                                <li><Link href="shop-list-full-col-2.html">Full width 2 columns</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="ec-main-banner w-100">
                                                <li><Link className="p-0" href="shop-left-sidebar-col-3.html"><Image width={36} height={36}
                                                            className="img-responsive" src="/assets/images/menu-banner/1.jpg"
                                                            alt="" /></Link></li>
                                                <li><Link className="p-0" href="shop-left-sidebar-col-4.html"><Image width={36} height={36}
                                                            className="img-responsive" src="/assets/images/menu-banner/2.jpg"
                                                            alt="" /></Link></li>
                                                <li><Link className="p-0" href="shop-right-sidebar-col-3.html"><Image width={36} height={36}
                                                            className="img-responsive" src="/assets/images/menu-banner/3.jpg"
                                                            alt="" /></Link></li>
                                                <li><Link className="p-0" href="shop-right-sidebar-col-4.html"><Image width={36} height={36}
                                                            className="img-responsive" src="/assets/images/menu-banner/4.jpg"
                                                            alt="" /></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><Link href="javascript:void(0)">Products</Link>
                                    <ul className="sub-menu">
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Product page
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="product-left-sidebar.html">Product left sidebar</Link></li>
                                                <li><Link href="product-right-sidebar.html">Product right sidebar</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Product 360
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="product-360-left-sidebar.html">360 left sidebar</Link></li>
                                                <li><Link href="product-360-right-sidebar.html">360 right sidebar</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Product video
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="product-video-left-sidebar.html">Video left sidebar</Link>
                                                </li>
                                                <li><Link href="product-video-right-sidebar.html">Video right sidebar</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Product
                                                gallery
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="product-gallery-left-sidebar.html">Gallery left sidebar</Link>
                                                </li>
                                                <li><Link href="product-gallery-right-sidebar.html">Gallery right
                                                        sidebar</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="product-full-width.html">Product full width</Link></li>
                                        <li><Link href="product-360-full-width.html">360 full width</Link></li>
                                        <li><Link href="product-video-full-width.html">Video full width</Link></li>
                                        <li><Link href="product-gallery-full-width.html">Gallery full width</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><Link href="javascript:void(0)">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="about-us.html">About Us</Link></li>
                                        <li><Link href="contact-us.html">Contact Us</Link></li>
                                        <li><Link href="cart.html">Cart</Link></li>
                                        <li><Link href="checkout.html">Checkout</Link></li>
                                        <li><Link href="compare.html">Compare</Link></li>
                                        <li><Link href="faq.html">FAQ</Link></li>
                                        <li><Link href="login.html">Login</Link></li>
                                        <li><Link href="register.html">Register</Link></li>
                                        <li><Link href="track-order.html">Track Order</Link></li>
                                        <li><Link href="terms-condition.html">Terms Condition</Link></li>
                                        <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><span className="main-label-note-new" data-toggle="tooltip"
                                        title="NEW"></span><Link href="javascript:void(0)">Others</Link>
                                    <ul className="sub-menu">
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Mail
                                                Confirmation
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="email-template-confirm-1.html">Mail Confirmation 1</Link></li>
                                                <li><Link href="email-template-confirm-2.html">Mail Confirmation 2</Link></li>
                                                <li><Link href="email-template-confirm-3.html">Mail Confirmation 3</Link></li>
                                                <li><Link href="email-template-confirm-4.html">Mail Confirmation 4</Link></li>
                                                <li><Link href="email-template-confirm-5.html">Mail Confirmation 5</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Mail Reset
                                                password
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="email-template-forgot-password-1.html">Reset password 1</Link>
                                                </li>
                                                <li><Link href="email-template-forgot-password-2.html">Reset password 2</Link>
                                                </li>
                                                <li><Link href="email-template-forgot-password-3.html">Reset password 3</Link>
                                                </li>
                                                <li><Link href="email-template-forgot-password-4.html">Reset password 4</Link>
                                                </li>
                                                <li><Link href="email-template-forgot-password-5.html">Reset password 5</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Mail
                                                Promotional
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="email-template-offers-1.html">Offer mail 1</Link></li>
                                                <li><Link href="email-template-offers-2.html">Offer mail 2</Link></li>
                                                <li><Link href="email-template-offers-3.html">Offer mail 3</Link></li>
                                                <li><Link href="email-template-offers-4.html">Offer mail 4</Link></li>
                                                <li><Link href="email-template-offers-5.html">Offer mail 5</Link></li>
                                                <li><Link href="email-template-offers-6.html">Offer mail 6</Link></li>
                                                <li><Link href="email-template-offers-7.html">Offer mail 7</Link></li>
                                                <li><Link href="email-template-offers-8.html">Offer mail 8</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-hot"></span>
                                            <Link href="javascript:void(0)">Vendor account pages
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="vendor-dashboard.html">Vendor Dashboard</Link></li>
                                                <li><Link href="vendor-profile.html">Vendor Profile</Link></li>
                                                <li><Link href="vendor-uploads.html">Vendor Uploads</Link></li>
                                                <li><Link href="vendor-settings.html">Vendor Settings</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-trending"></span>
                                            <Link href="javascript:void(0)">User account pages
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="user-profile.html">User Profile</Link></li>
                                                <li><Link href="user-history.html">History</Link></li>
                                                <li><Link href="wishlist.html">Wishlist</Link></li>
                                                <li><Link href="track-order.html">Track Order</Link></li>
                                                <li><Link href="user-invoice.html">Invoice</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><Link href="javascript:void(0)">Construction
                                                pages
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="404-error-page.html">404 error page</Link></li>
                                                <li><Link href="under-maintenance.html">maintanence page</Link></li>
                                                <li><Link href="coming-soon.html">Coming soon page</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-new"></span>
                                            <Link href="javascript:void(0)">Vendor Catalog pages
                                                <i className="ecicon eci-angle-right"></i></Link>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><Link href="catalog-single-vendor.html">Catalog Single Vendor</Link></li>
                                                <li><Link href="catalog-multi-vendor.html">Catalog Multi Vendor</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><Link href="javascript:void(0)">Blog</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="blog-left-sidebar.html">Blog left sidebar</Link></li>
                                        <li><Link href="blog-right-sidebar.html">Blog right sidebar</Link></li>
                                        <li><Link href="blog-detail-left-sidebar.html">Blog detail left sidebar</Link></li>
                                        <li><Link href="blog-detail-right-sidebar.html">Blog detail right sidebar</Link></li>
                                        <li><Link href="blog-full-width.html">Blog full width</Link></li>
                                        <li><Link href="blog-detail-full-width.html">Blog detail full width</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><Link href="javascript:void(0)">Elements</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="elemets-products.html">Products</Link></li>
                                        <li><Link href="elemets-typography.html">Typography</Link></li>
                                        <li><Link href="elemets-title.html">Titles</Link></li>
                                        <li><Link href="elemets-categories.html">Categories</Link></li>
                                        <li><Link href="elemets-buttons.html">Buttons</Link></li>
                                        <li><Link href="elemets-tabs.html">Tabs</Link></li>
                                        <li><Link href="elemets-accordions.html">Accordions</Link></li>
                                        <li><Link href="elemets-blog.html">Blogs</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="offer.html">Hot Offers</Link></li>
                                <li className="dropdown scroll-to"><Link href="javascript:void(0)"><Image width={36} height={36}
                                    src="/assets/images/icons/scroll.svg" className="svg_img header_svg scroll" alt=""  /></Link>
                                    <ul className="sub-menu">
                                        <li className="menu_title">Scroll To Section</li>
                                        <li><Link href="javascript:void(0)" data-scroll="collection" className="nav-scroll">Top Collection</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="categories" className="nav-scroll">Categories</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="offers" className="nav-scroll">Offers</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="vendors" className="nav-scroll">Top Vendors</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="services" className="nav-scroll">Services</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="arrivals" className="nav-scroll">New Arrivals</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="reviews" className="nav-scroll">Client Review</Link></li>
                                        <li><Link href="javascript:void(0)" data-scroll="insta" className="nav-scroll">Instagram Feed</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Ec Main Menu End --> */}
        {/* <!-- ekka Mobile Menu Start --> */}
        <div id="ec-mobile-menu" className="ec-side-cart ec-mobile-menu">
            <div className="ec-menu-title">
                <span className="menu_title">My Menu</span>
                <button className="ec-close">×</button>
            </div>
            <div className="ec-menu-inner">
                <div className="ec-menu-content">
                    <ul>
                        <li><Link href="index.html">Home</Link></li>
                        <li><Link href="javascript:void(0)">Categories</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link href="javascript:void(0)">Classic Variation</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="shop-left-sidebar-col-3.html">Left sidebar 3 column</Link></li>
                                        <li><Link href="shop-left-sidebar-col-4.html">Left sidebar 4 column</Link></li>
                                        <li><Link href="shop-right-sidebar-col-3.html">Right sidebar 3 column</Link></li>
                                        <li><Link href="shop-right-sidebar-col-4.html">Right sidebar 4 column</Link></li>
                                        <li><Link href="shop-full-width.html">Full width 4 column</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:void(0)">Classic Variation</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                column</Link></li>
                                        <li><Link href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                column</Link></li>
                                        <li><Link href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                                column</Link></li>
                                        <li><Link href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                                column</Link></li>
                                        <li><Link href="shop-banner-full-width.html">Banner Full width 4 column</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:void(0)">Columns Variation</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="shop-full-width-col-3.html">3 Columns full width</Link></li>
                                        <li><Link href="shop-full-width-col-4.html">4 Columns full width</Link></li>
                                        <li><Link href="shop-full-width-col-5.html">5 Columns full width</Link></li>
                                        <li><Link href="shop-full-width-col-6.html">6 Columns full width</Link></li>
                                        <li><Link href="shop-banner-full-width-col-3.html">Banner 3 Columns</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="javascript:void(0)">List Variation</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="shop-list-left-sidebar.html">Shop left sidebar</Link></li>
                                        <li><Link href="shop-list-right-sidebar.html">Shop right sidebar</Link></li>
                                        <li><Link href="shop-list-banner-left-sidebar.html">Banner left sidebar</Link></li>
                                        <li><Link href="shop-list-banner-right-sidebar.html">Banner right sidebar</Link></li>
                                        <li><Link href="shop-list-full-col-2.html">Full width 2 columns</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="p-0" href="shop-left-sidebar-col-3.html"><Image width={36} height={36} className="img-responsive"
                                            src="/assets/images/menu-banner/1.jpg" alt="" /></Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="javascript:void(0)">Products</Link>
                            <ul className="sub-menu">
                                <li><Link href="javascript:void(0)">Product page</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="product-left-sidebar.html">Product left sidebar</Link></li>
                                        <li><Link href="product-right-sidebar.html">Product right sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Product 360</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="product-360-left-sidebar.html">360 left sidebar</Link></li>
                                        <li><Link href="product-360-right-sidebar.html">360 right sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Product vodeo</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="product-video-left-sidebar.html">vodeo left sidebar</Link></li>
                                        <li><Link href="product-video-right-sidebar.html">vodeo right sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Product gallery</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="product-gallery-left-sidebar.html">Gallery left sidebar</Link></li>
                                        <li><Link href="product-gallery-right-sidebar.html">Gallery right sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="product-full-width.html">Product full width</Link></li>
                                <li><Link href="product-360-full-width.html">360 full width</Link></li>
                                <li><Link href="product-video-full-width.html">Video full width</Link></li>
                                <li><Link href="product-gallery-full-width.html">Gallery full width</Link></li>
                            </ul>
                        </li>
                        <li><Link href="javascript:void(0)">Others</Link>
                            <ul className="sub-menu">
                                <li><Link href="javascript:void(0)">Mail Confirmation</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="email-template-confirm-1.html">Mail Confirmation 1</Link></li>
                                        <li><Link href="email-template-confirm-2.html">Mail Confirmation 2</Link></li>
                                        <li><Link href="email-template-confirm-3.html">Mail Confirmation 3</Link></li>
                                        <li><Link href="email-template-confirm-4.html">Mail Confirmation 4</Link></li>
                                        <li><Link href="email-template-confirm-5.html">Mail Confirmation 5</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Mail Reset password</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="email-template-forgot-password-1.html">Reset password 1</Link></li>
                                        <li><Link href="email-template-forgot-password-2.html">Reset password 2</Link></li>
                                        <li><Link href="email-template-forgot-password-3.html">Reset password 3</Link></li>
                                        <li><Link href="email-template-forgot-password-4.html">Reset password 4</Link></li>
                                        <li><Link href="email-template-forgot-password-5.html">Reset password 5</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Mail Promotional</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="email-template-offers-1.html">Offer Mail 1</Link></li>
                                        <li><Link href="email-template-offers-2.html">Offer Mail 2</Link></li>
                                        <li><Link href="email-template-offers-3.html">Offer Mail 3</Link></li>
                                        <li><Link href="email-template-offers-4.html">Offer Mail 4</Link></li>
                                        <li><Link href="email-template-offers-5.html">Offer Mail 5</Link></li>
                                        <li><Link href="email-template-offers-6.html">Offer Mail 6</Link></li>
                                        <li><Link href="email-template-offers-7.html">Offer Mail 7</Link></li>
                                        <li><Link href="email-template-offers-8.html">Offer Mail 8</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Vendor Account Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="vendor-dashboard.html">Vendor Dashboard</Link></li>
                                        <li><Link href="vendor-profile.html">Vendor Profile</Link></li>
                                        <li><Link href="vendor-uploads.html">Vendor Uploads</Link></li>
                                        <li><Link href="vendor-settings.html">Vendor Settings</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">User Account Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="user-profile.html">User Profile</Link></li>
                                        <li><Link href="user-history.html">User History</Link></li>
                                        <li><Link href="wishlist.html">Wishlist</Link></li>
                                        <li><Link href="track-order.html">Track Order</Link></li>
                                        <li><Link href="user-invoice.html">User Invoice</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Construction Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="404-error-page.html">404 Error Page</Link></li>
                                        <li><Link href="under-maintenance.html">Maintenance Page</Link></li>
                                        <li><Link href="coming-soon.html">Comming Soon Page</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="javascript:void(0)">Vendor Catalog Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="catalog-single-vendor.html">Catalog Single Vendor</Link></li>
                                        <li><Link href="catalog-multi-vendor.html">Catalog Multi Vendor</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="javascript:void(0)">Pages</Link>
                            <ul className="sub-menu">
                                <li><Link href="about-us.html">About Us</Link></li>
                                <li><Link href="contact-us.html">Contact Us</Link></li>
                                <li><Link href="cart.html">Cart</Link></li>
                                <li><Link href="checkout.html">Checkout</Link></li>
                                <li><Link href="compare.html">Compare</Link></li>
                                <li><Link href="faq.html">FAQ</Link></li>
                                <li><Link href="login.html">Login</Link></li>
                                <li><Link href="register.html">Register</Link></li>
                                <li><Link href="track-order.html">Track Order</Link></li>
                                <li><Link href="terms-condition.html">Terms Condition</Link></li>
                                <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="javascript:void(0)">Blog</Link>
                            <ul className="sub-menu">
                                <li><Link href="blog-left-sidebar.html">Blog left sidebar</Link></li>
                                <li><Link href="blog-right-sidebar.html">Blog right sidebar</Link></li>
                                <li><Link href="blog-detail-left-sidebar.html">Blog detail left sidebar</Link></li>
                                <li><Link href="blog-detail-right-sidebar.html">Blog detail right sidebar</Link></li>
                                <li><Link href="blog-full-width.html">Blog full width</Link></li>
                                <li><Link href="blog-detail-full-width.html">Blog detail full width</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="javascript:void(0)">Elements</Link>
                            <ul className="sub-menu">
                                <li><Link href="elemets-products.html">Products</Link></li>
                                <li><Link href="elemets-typography.html">Typography</Link></li>
                                <li><Link href="elemets-title.html">Titles</Link></li>
                                <li><Link href="elemets-categories.html">Categories</Link></li>
                                <li><Link href="elemets-buttons.html">Buttons</Link></li>
                                <li><Link href="elemets-tabs.html">Tabs</Link></li>
                                <li><Link href="elemets-accordions.html">Accordions</Link></li>
                                <li><Link href="elemets-blog.html">Blogs</Link></li>
                            </ul>
                        </li>
                        <li><Link href="offer.html">Hot Offers</Link></li>
                    </ul>
                </div>
                <div className="header-res-lan-curr">
                    <div className="header-top-lan-curr">
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
                    </div>
                    {/* <!-- Social Start --> */}
                    <div className="header-res-social">
                        <div className="header-top-social">
                            <ul className="mb-0">
                                <li className="list-inline-item"><Link className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainMenu