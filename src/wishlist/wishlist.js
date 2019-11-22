import React, { Component } from 'react';
import './wishlist.css';

import ProductCondenced from '../product-condensed/product-condenced';

class WishList extends Component {
      constructor(props) {
            super(props);
            this.state = {wishList:[
                  {
                        "title":"first oadasdasdne",
                        "price":23.99,
                        "_id":"33333sadasda"
                  },
                  
                  {
                        "title":"first one",
                        "price":23.99,
                        "_id":"33333saddd"
                   
                  },
                  
                  {
                        "title":"first one",
                        "price":23.99,
                        "_id":"33333sadd"
                  }
            ]};
      //bind functions
            this.createWishList = this.createWishList.bind(this);
            
      }
      
      createWishList = () => {
            const list = this.state.wishList.map((product) => 
              <ProductCondenced product={product} key={product._id} />    
            );
      
            return(list);                                           
      }
      
      render(){
            return(
                  
                  <div className="card">
                        <div className="carr-block">
                              <h4 className="card-title">Wish List</h4>
                              <ul className="list-group">
                                    {this.createWishList()}
                              
                              </ul>
                        </div>
                  
            
                  </div>
            
            );
            
      }
      
}

export default WishList;