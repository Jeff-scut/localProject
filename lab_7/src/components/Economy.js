import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import 'swiper/dist/css/swiper.min.css';
import '../style/food.css';

class Economy extends Component {
  constructor(props){
    super(props);
  }

  state ={
    collapsed:false,
  };

  componentDidMount(){
    new Swiper('.swiper-container',{
      spaceBetween:30,
      centeredSlides:true,
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      },
      pagination:{
        el:'.swiper-pagination',
        clickable: true,
      },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      effect: 'cube',
    });
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render(){
    return(
      <div className="wtf">
        <MyHeader />
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require('../img/diTu.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>概述</h1></div>
                <div className="wordDetail">惠来县辖13个镇、2个国营农场、1个华侨管理区、1个市直工业区。2015年，惠来县人口144.69万人，旅居港澳台和海外侨胞20多万人，是广东省著名侨乡。全县地区生产总值242.33亿元，人均地区生产总值2.17万元。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/eco2.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>现状</h1></div>
                <div className="wordDetail">当前的惠来县城镇率并不高，16年的数据显示是42%多，更多的农村地区是像图片里这样。我家位于周田镇，与上图区别并不是太大，生活节奏缓慢，有不少务农家庭。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/eco1.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>发展中</h1></div>
                <div className="wordDetail">惠来县城，已经初具规模，各校区楼盘正在火热建设中，绿化，基建也都在进步。未来还是光明的！</div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <MyNav />
        <MyFooter />
      </div>
    );
  }

}

export default Economy;
