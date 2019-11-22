import React, { Component } from 'react';
import './products.css';


class Product extends Component {
      
      render(){
            return(
                  
                  <div className="card product">
                        <img className="card-img-top" src ={this.props.imgurl} alt="products"></img>
                        <div className="card-block">
                              <h4 className="card-title">{this.props.title}</h4>
                              <p className="cart-text">Price: ${this.props.price}</p>
                              <a href="#" className="btn btn-primary">Add to Wishlist</a>
                              
                        </div>
                  </div>
            
            );
            
      }
      
}

export default Product;