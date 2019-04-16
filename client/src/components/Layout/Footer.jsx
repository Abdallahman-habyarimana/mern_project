import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                            </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    
                </div>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="http://www.abdallahmanh.com" target="_blank"> Abdallahman Habyarimana</a> <a href="https://rvm-portfolio.herokuapp.com/home" target="_blank"> & Renata Moura</a>
                    </div>
                </div>

        </footer>
        
         );
    }
}
 
export default Footer;