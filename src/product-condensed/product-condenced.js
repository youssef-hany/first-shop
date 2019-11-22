import React, { Component } from 'react';
import './product-condenced.css';


class ProductCondenced extends Component {
      
      render(){
            return(
                  <li className="list-group-item">
                        <div className="row">   
                              <a href="#" className="btn btn-outline-danger pc-condensed">X</a>
                              <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
                        </div>
                     
                  </li>
                  
            );
            
      }
      
}

export default ProductCondenced;