import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import 'swiper/dist/css/swiper.min.css';
import '../style/food.css';

class Education extends Component {
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
      effect: 'fade',
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
              <img src={require('../img/edu01.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>教育发展</h1></div>
                <div className="wordDetail">2014年，惠来县有普通中学37所，小学250所；在校学生人数166401人，其中高中在校学生数24316人，初中在校学生数45473人，小学在校学生数96612人；专任教师数9490人，其中普通中学专任教师数4016人，小学专任教师数5474人。2015年，惠来县被国家认定为全国义务教育发展基本均衡县，2016年4月被省委省政府授予“广东省教育强县”称号。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/edu02.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>惠来一中</h1></div>
                <div className="wordDetail">创办于五四运动前夕的1919年4月21日，学校2007年12月被评为广东省一级学校，2013年5月通过国家级示范性高中终评，成为广东省国家级示范性高中。学校拥有学生5264人，专任教师248人，其中特级教师1人，市劳动模范2人，高级教师和研究生73人，中级教师123人。包含初中教学区和高中教学区两个校区，分别占地面积约120亩和约220亩。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/edu03.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>慈云实验中学</h1></div>
                <div className="wordDetail">惠来慈云实验中学位于县城东面的东山开发区，创办于2003年9月，由惠来县人民政府、林世铿先生、林宝喜先生、吴兆明先生共同投资兴建的一所寄宿制完全中学。创校至2006年三年期间，学校教师获得国家级奖项5人次，省级奖项7人次，市级奖项27人次。2006年高考，陈禹欣同学以总分846分的佳绩名列揭阳市第三名、惠来县第一名。（已经没有任何亮点了，这就是我们那边方圆几十公里第二好的中学）</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/edu04.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>周田中心小学</h1></div>
                <div className="wordDetail">我的母校...真正的农村小学就是在网上根本就找不到图片的那种...这是我大一暑假回去的时候拍的教学楼。学校不大，不过教室里和10年前一样只有在乌云密布又没放学的时候才会打开的日光灯，和从没开过的电风扇，以及永远在晃动的课桌椅:(</div>
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

export default Education;
