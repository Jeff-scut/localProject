import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import 'swiper/dist/css/swiper.min.css';
import '../style/food.css';

class Custom extends Component {
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
              <img src={require('../img/laoYe.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>拜神</h1></div>
                <div className="wordDetail">“拜神”就是一种对神的祭祀活动。其历史悠久，祭祀对象庞杂，影响非常广泛。“拜老爷”不仅活动多而且规模大。家里要祭祀，还要到“老爷宫”去祭祀。供品也要讲究，有三牲：猪，鸡，鱼；有特定做的潮汕粿食，如发粿，乒乓粿，桃粿等，有各种新鲜生果，还有必备的卤鹅。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/yingLaoye.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>迎老爷</h1></div>
                <div className="wordDetail">潮汕人称神仙为老爷，当地民间是多神崇拜的，各村都有自己的神。每年年初，潮汕地区都有迎老爷的风俗。就是将神像从庙里请出来，到村子里游行，在一个地方举行拜祭仪式，然后再送回神庙安放。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/jieRi.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>时年八节</h1></div>
                <div className="wordDetail">潮汕地区有句话叫：“过日子，勿忘时年八节。潮汕地区”。“岁时节日”的各种活动，世代沿袭相传，蔚然为俗。或纪念，或寓意，或祈福，富有民俗蕴义。潮汕人多于这些节日回家与亲友团聚，增进彼此的情感和凝聚力。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/huaYuan.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>出花园</h1></div>
                <div className="wordDetail">出花园是指当男女孩长到15岁时，便接受这样一种仪式的洗礼。关于“出花园”一语的由来，普遍认为未成年的孩子在一个五彩缤纷的花园里，直至15岁到来，宣告童年时代向另外一个时代的转变，所以要从“花园”中踏出，走向成年的门槛，从此要对自己，对社会负责。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/youHuo.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>打油火</h1></div>
                <div className="wordDetail">“打油火”是潮汕入厝的一种风俗，建了新宅，入宅居住，主人必须请师公来屋内做法一次，驱去室内邪煞之物，以求合家居住平安。这是潮汕乡下入厝的驱鬼仪式，俗称“打油火”。</div>
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

export default Custom;
