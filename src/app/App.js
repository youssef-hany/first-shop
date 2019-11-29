import React, {
      Component
} from 'react';
import logo from './logo.svg';
import './App.css';


//components
import Product from '../product/products.js';
import WishList from '../wishlist/wishlist';
//services
import HttpService from '../services/http-service.js';

const http = new HttpService();



class App extends Component {


      constructor(props) {
            super();
            
            
            
            //bind functions
          
				
						this.state = {
				scrolled: true,
			};
            
  }
				
	componentDidMount(){
		window.addEventListener('scroll', () =>{
			const isTop = window.scrollY < 100;
				if(isTop !== true) {
					this.setState({ scrolled: true });
				} else{
					this.setState({ scrolled: false });
				}
		});
	}

	componentWillUnmount(){
		window.removeEventListener('scroll');
	}


     

			
      render() {
            return ( 
                  <div className = "App">
								
                  <header className = "App-header" >
                  <img src = { logo }   
                    
                  className = "App-logo"
                  alt = "logo">
                  </img>
										
                  </header>
								<nav className={this.state.scrolled ? ' navbar nv navbar-expand-lg navbar-dark bg-dark  scrolled' : 'navbar-expand-lg navbar-dark bg-dark'}>
            <a className="navbar-brand" href="#"><span><img src="../img/x-mark.png" className="img-fluid"></img></span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Photos</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Devices</a>
                            <a className="dropdown-item" href="#">Parts</a>
                            <a className="dropdown-item" href="#">Documentation</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
                  <div className="container-fluid App-main">
										 
                        <div className="row">
                              <div className="col-sm-8">
                                    <div className="row"></div>
                                    
                              </div>
                              
                              <div className="col-sm-4">
                                    <WishList />
                              </div>
                             
                              
                              
                        </div>
                       
                  </div> 
                        
                  </div>

            );
      }

}

export default App;
