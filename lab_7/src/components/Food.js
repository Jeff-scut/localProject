import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import 'swiper/dist/css/swiper.min.css';
import '../style/food.css';

class Food extends Component {
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
        <MyNav />
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require('../img/zhuJiao.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>隆江猪脚饭</h1></div>
                <div className="wordDetail">肥而不腻，入口香爽，爽香开胃，感觉入口软烂无渣、肥而不腻、香气四溢、胶棉而不沾牙，达到了落口消融的境界，肘子丰富的胶质和蹄筋“筋、骨、肉的的错综复杂”体现得淋漓精致</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/douJi.png')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>周田豆辑</h1></div>
                <div className="wordDetail">采用花生，面粉，芝麻，猪油等食材制作而成，其口味香甜可口，风味独特，属点心类甜品。豆辑皮做成之后，中间要包上明糖。明糖是用面粉、麦芽糖、猪油丁、芝麻、葱朥精等制作而成的。然后切成一寸见方的小块。豆辑整块呈浅黄色，中间明糖部分是深褐色，看起来赏心悦目，吃起来香甜可口，真是色、香、味俱佳。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/yuWan.png')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>神泉鱼丸</h1></div>
                <div className="wordDetail">鱼丸，又称“鱼圆”、“鱼腐”、“鱼脯”，是用鱼肉斩茸，加蛋清、淀粉搅拌上劲，挤成小丸子，入微沸水中煮熟而成。口味清爽不油腻，有鱼味而不见鱼，做汤菜只见碗中如繁星点点；做盘菜，鱼丸堆在中间如珍珠颗颗，配上菜心围边，青白分明，使人精神为之一爽，不禁食指大动。揭阳市著名鱼港——惠来神泉，捕获甚丰，鱼产品加工也很有特色，而以鳗鱼、淡甲、马鲛等鱼加工制成的鱼丸最出名，民间夸神泉鱼丸弹性之大，掉下地可弹回桌上。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/baoYu.png')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>靖海鲍鱼</h1></div>
                <div className="wordDetail">皇朝御用的天下第一鲍，是采用于不受到污染的海外放置野外成长的三山浦极品鲍鱼之品种，在待2至3年后迅速采收、制成及包装。由鲜鸡、鼓油及水熬煮多日后的顶汤，再配合日本干贝齐释放美味，让鲍鱼吸满汤汁精华，加上卓越的采购和包装技术，不但保留了新鲜鲍鱼的鲜味，而且弹牙顺口，口感上佳。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/liZhi.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>惠来荔枝</h1></div>
                <div className="wordDetail">惠来荔枝品种资源丰富，拥有“乌叶（又名黑叶）”、“怀枝”、“糯米糍”、“妃子笑”、“白蜡”、“桂味”等十六个品种，良种率达87%，品种资源十分丰富。其中，“乌叶”、“怀枝”、“糯米糍”三个品种年产量占全县年总产量的90%以上。尤其惠来“乌叶”荔枝久负盛名，是惠来县人民自己选育的优良品种，具有自主知识产权。</div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <MyFooter />
      </div>
    );
  }


}

export default Food;
