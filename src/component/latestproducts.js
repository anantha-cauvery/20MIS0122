import React, {Component} from 'react';

class latestproducts extends Component{
    render(){
        const Products = [
            {id: "1", productN: "Samsung Galaxy s5", img: "img/product-5.jpg", mrp: "10000", dis: "8700" },
            {id: "2", productN: "LG Mobile", img: "img/product-2.jpg", mrp: "15000", dis: "13999" },
           
        ]
        const productslinks = Products.map(Product=>{
            return(
                    <div className="single-product" key={Product.id}>
                        <div className="product-f-image">
                            <img src={Product.img} alt="" />
                             <div className="product-hover">
                                 <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                 
                                </div>
                        </div>
                         <h2><a href="single-product.html">{Product.productN}</a></h2>
                        <div className="product-carousel-price">
                            <ins>{Product.dis}</ins> <del>{Product.mrp}</del>
                        </div> 
                     </div>
            )
        });
        return(
            <div className="maincontent-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="latest-product">
                            <h2 className="section-title">Latest Products</h2>
                            <div className="product-carousel">
                                {productslinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default latestproducts;