import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-contain">
          <div className="footer-word">
            <p>
              © Copyright 2016--2018 Jeff Huang ./ webLab7 Version.1.0.3
            </p>
          </div>
          <div className="qrCode">
            <div className="pic-1">
              <a href="#">微信</a>
              <img src={require('../img/TJHY.jpg')} />
            </div>
            <div className="pic-2">
              <a href="#">资助山区儿童</a>
              <img src={require('../img/money.png')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
