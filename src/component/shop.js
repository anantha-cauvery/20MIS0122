import React, {Component} from 'react';

class shop extends Component {
    render(){

        const products = [
            {id: "1", productN: "Samsung Galaxy s5", img: "img/product-5.jpg", mrp: "10000", dis: "8700" },
            {id: "2", productN: "LG Mobile", img: "img/product-2.jpg", mrp: "15000", dis: "13999" },
        ]
        const productist = products.map(product=>{
            return(
                <div key={product.id} className="col-md-3 col-sm-6">
                        <div className="single-shop-product">
                            <div className="product-upper">
                                <img src={product.img} alt="" />
                            </div>
                            <h2><a href="single-product.html">{product.productN}</a></h2>
                            <div className="product-carousel-price">
                                <ins>{product.dis}</ins> <del>{product.mrp}</del>
                            </div>  
                            <div className="product-option-shop">
                                <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="">Add to cart</a>
                            </div>                       
                        </div>
                 </div> 
            )
        });
        return (
            <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    {productist}
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-pagination text-center">
                            <nav>
                              <ul className="pagination">
                                <li>
                                  <a href="" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                  </a>
                                </li>
                                <li><a href="">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">4</a></li>
                                <li><a href="">5</a></li>
                                <li>
                                  <a href="" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}
export default shop ; 