import Image from "next/image"
import Link from "next/link"
import './../../../styles/css/plugins/slick.min.css'

const CategorySidebar = () => {
  return (
    <>
         {/* <!-- Category Sidebar start --> */}
    <div className="ec-side-cat-overlay"></div>
    <div className="col-lg-3 category-sidebar" data-animation="fadeIn">
            <div className="cat-sidebar">
                <div className="cat-sidebar-box">
                    <div className="ec-sidebar-wrap">
                        {/* <!-- Sidebar Category Block --> */}
                        <div className="ec-sidebar-block">
                            <div className="ec-sb-title">
                                <h3 className="ec-sidebar-title">Category<button className="ec-close">×</button></h3>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/dress-8.svg" className="svg_img" alt="drink" />Cothes</div>
                                        <ul style={{'display':'block'}}>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Shirt <span title="Available Stock">- 25</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">shorts & jeans <span title="Available Stock">- 52</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">jacket<span title="Available Stock">- 500</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">dress & frock  <span title="Available Stock">- 35</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20}  src="/assets/images/icons/shoes-8.svg" className="svg_img" alt="drink" />Footwear</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Sports <span title="Available Stock">- 25</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Formal <span title="Available Stock">- 52</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Casual <span title="Available Stock">- 40</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">safety shoes <span title="Available Stock">- 35</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/jewelry-8.svg" className="svg_img" alt="drink" />jewelry</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Earrings <span title="Available Stock">- 50</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Couple Rings <span title="Available Stock">- 35</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Necklace <span title="Available Stock">- 40</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/perfume-8.svg" className="svg_img" alt="drink" />perfume</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Clothes perfume<span title="Available Stock">- 4 pcs</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">deodorant <span title="Available Stock">- 52 pcs</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Flower fragrance <span title="Available Stock">- 10 pack</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Air Freshener<span title="Available Stock">- 35 pack</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/cosmetics-8.svg" className="svg_img" alt="drink" />cosmetics</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">shampoo<span title="Available Stock"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Sunscreen<span title="Available Stock"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">body wash<span title="Available Stock"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">makeup kit<span title="Available Stock"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/glasses-8.svg" className="svg_img" alt="drink" />glasses</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Sunglasses <span title="Available Stock">- 20</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Lenses <span title="Available Stock">- 52</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="ec-sb-block-content">
                                <ul>
                                    <li>
                                        <div className="ec-sidebar-block-item"><Image width={20} height={20} src="/assets/images/icons/bag-8.svg" className="svg_img" alt="drink" />bags</div>
                                        <ul>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">shopping bag <span title="Available Stock">- 25</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">Gym backpack <span title="Available Stock">- 52</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">purse <span title="Available Stock">- 40</span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ec-sidebar-sub-item"><Link href="shop-left-sidebar-col-3.html">wallet <span title="Available Stock">- 35</span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Sidebar Category Block --> */}
                    </div>
                </div>
                <div className="ec-sidebar-slider-cat">
                    <div className="ec-sb-slider-title">Best Sellers</div>
                    <div className="ec-sb-pro-sl">
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/1.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">baby fabric shoes</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$5.00</span>
                                        <span className="new-price">$4.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/2.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Men hoodies t-shirt</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$10.00</span>
                                        <span className="new-price">$7.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/3.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Girls t-shirt</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                        <i className="ecicon eci-star"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$5.00</span>
                                        <span className="new-price">$3.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/4.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">woolen hat for men</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$15.00</span>
                                        <span className="new-price">$12.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/5.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Womens purse</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$15.00</span>
                                        <span className="new-price">$12.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/6.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Baby toy doctor kit</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                        <i className="ecicon eci-star"></i>
                                        <i className="ecicon eci-star"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$50.00</span>
                                        <span className="new-price">$45.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/7.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">teddy bear baby toy</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$35.00</span>
                                        <span className="new-price">$25.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href="product-left-sidebar.html" className="sidekka_pro_img"><Image width={80} height={80}
                                        src="/assets/images/product-image/2.jpg" alt="product" /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link href="product-left-sidebar.html">Mens hoodies blue</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                        <i className="ecicon eci-star"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">$15.00</span>
                                        <span className="new-price">$13.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default CategorySidebar