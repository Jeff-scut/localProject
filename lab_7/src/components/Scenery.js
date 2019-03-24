import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import 'swiper/dist/css/swiper.min.css';
import '../style/food.css';

class Scenery extends Component {
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
      effect: 'flip',
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
              <img src={require('../img/shiKengYuan.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>世铿院</h1></div>
                <div className="wordDetail">揭阳市首家国家3A级旅游景区。 世铿院分前后两部分。前部分有石雕九龙吐珠，八骏腾空，雕刻工艺堪称鬼斧神工，栩栩如生，活龙活现；四周规模壮观的280幅大理石碑林，雕刻着叶选平、马万琪、启功、沈鹏、孙轶青、关山月等全国各地以及港、澳、台地区领导、名人名家无偿赠送的278幅丹青墨宝，该院收藏名书名画共500多幅。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/duJiaCun.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>度假村</h1></div>
                <div className="wordDetail">惠来海滨度假村有南港渔家、海景宾馆、南港特产品商场；有浴场服务区，游艇服务区，休闲活动景区，露营烧烤区；度假村内有天然海滨浴场，宽广无垠；妈祖石雕像，威仪端庄，镇海安澜，神光普照；大象雕像，体态雄姿；溪东古炮台，坐镇海边；清山岩古庵辉煌雅致，殿内尽现道家特色；假山瀑布、小桥流水、亭台通栏，曲径幽林，鸟语花香；跨港拱桥，美若虹带；海边椰树林立，榕树成荫，到处奇花异草，怪石磷峋；“蛙龟对唱”自然景观，栩栩如生，海风吹拂，凉爽宜人，优美的自然景观与风景名胜融为一体。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/haiNing.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>海宁县遗址</h1></div>
                <div className="wordDetail">海宁县-湮没在历史中的千年古城。据《惠来县志》（2002年版）记载：“东晋咸和六年（331）从南海郡拆出部分地域设立东官郡，在今惠来西部地区置海宁县，隶属东官郡[1]。义熙九年（413），又从东官郡拆置义安郡（郡治设于今潮州市），海宁与海阳、潮阳、绥安、义招为其属县。海宁县历宋、齐、梁、陈、隋各朝至唐武德四年（621）撤去建制，并入潮阳县。”从此消失在史册。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/baiHua.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>百花山</h1></div>
                <div className="wordDetail">百花山，又名百花尖、百花岩，在惠来县城东11公里处。此处群峰挺拔，四季如春，繁花似锦，其中百花峰冠出群峰，惠来古八景谓之“百花领袖”，上有百花园及古百花岩遗址，传说唐高僧大颠曾在此修行。南侧山腰有庄严禅寺，建于清乾隆年间，近年修葺一新，寺周有百花灵泉、玉石水门、飞炉显圣、动摇石、试剑石等景点。流传民间的百花公主的动人传说，更为此山蒙上一层神奇色彩。</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={require('../img/haiJiao.jpg')} />
              <div className="wordWrapper">
                <div className="wordHead"><h1>海角甘泉</h1></div>
                <div className="wordDetail">在约800年前的宋代，古镇神泉还是一个四面环水的小岛，然而在海边沙滩上居然发现有一口泉眼，任凭潮水涨落盐卤浸泡，到处都是咸水，惟独此泉甘甜非凡，成为海角的一大奇景，也惠泽一方渔民。相传当时穷人患病，没有钱医治，在这里喝上一口甘甜的泉水，便能解除病痛，人民赞颂这是一口救人的“神泉”。公元1553年，这个原来叫做“神前”的地方正式更名为“神泉”，可谓“城以泉名”。</div>
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

export default Scenery;
