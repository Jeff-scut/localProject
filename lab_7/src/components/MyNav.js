import React, { Component } from 'react';
import '../style/mynav.css';

class MyNav extends Component {

  render(){
    return(
      <div className="NavWrap">
        <ul className="navUl">
          <li><a href="#/custom">风土人情</a></li>
          <li><a href="#/scenery">名胜古迹</a></li>
          <li><a href="#/food">家乡美食</a></li>
          <li><a href="#/economy">经济发展</a></li>
          <li><a href="#/education">教育情况</a></li>
        </ul>
        <ul className="navUl">
          <li><a href="#/community">社区论坛</a></li>
        </ul>
      </div>
    )
  }

}

export default MyNav;
