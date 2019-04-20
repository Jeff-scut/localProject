import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import '../style/community.css';
import axios from 'axios';

class Community extends Component {
  constructor(props){
    super(props);

    this.state={
      messages:[],
      aaa:[],
      bbb:[]
    };
  }

  componentDidMount(){
    const { BMap, BMAP_STATUS_SUCCESS } = window
    var myMap=new BMap.Map("mapContainer");
      var myPoint=new BMap.Point(116.4554,23.0120);
      myMap.centerAndZoom(myPoint,9);
      myMap.enableScrollWheelZoom();
      myMap.addControl(new BMap.NavigationControl());
      var marker =new BMap.Marker(myPoint);
      myMap.addOverlay(marker);
      var opts = {
    	  width : 200,
    	  height: 80,
    	  title : "我家( ▔•з•▔ )" ,
    	}
    	var infoWindow = new BMap.InfoWindow("  虽然这里有点破破烂烂的，但是有爸妈呀~", opts);
    		myMap.openInfoWindow(infoWindow,myPoint);
  }

  addMsg(){
  	// var inputStr=document.getElementById('Nickname').value + document.getElementById('MsgContent').value;
    var temp0=new Date();
    var temp00=temp0.toLocaleDateString()+temp0.toLocaleTimeString();
  	var temp1=document.createElement("li");
    temp1.innerHTML='<div class="MsgHead"> <span class="MsgHeadName">'+document.getElementById('Nickname').value+'</span> </div>'
      +'<div class="MsgRight">'
      +'<div class="MsgMiddle">'+document.getElementById('MsgContent').value+'</div>'
      +'<div class="MsgBottom">'+temp00+'</div>'
      +'</div>'
      +'<div class="clear"></div>';
  	// temp1.setAttribute('id','x'+x.toString());
  	var temp2=document.getElementById('msgHere');
  	temp2.appendChild(temp1);
  }

  render(){
    return(
      <div>
        <MyHeader />
        <div className="mapArea">
          <div className="mapContainer" id="mapContainer"></div>
          <div className="mapRight">
            <h3>简单留言板</h3>
            <div className="controlHere">
              <div className="clear"></div>
              姓名：<input type="text" id="Nickname" />
              <br />
              内容：<input trpe="text" id="MsgContent" />
              <br />
              <input type="button" id="sendButton" value="发送" onClick={()=>this.addMsg()} />
            </div>
            <div className="clear"/>
            <div className="ulWrap">
            <ul id="msgHere"></ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div>
          <input onChange={event => this.inputChangeAaa(event.target.value)}/>
          <input onChange={event => this.inputChangeBbb(event.target.value)}/>
          <input trpe="button" value="发送" onClick={()=>this.sendPost(`http://localhost:5000/readSession`)} />
        </div>
        <MyFooter />
      </div>
    );
  }

  sendPost(url){
    var formData = new FormData();
    formData.append('aaa', this.state.aaa);
    formData.append('bbb', this.state.bbb);
    return axios({
      method: 'POST',
      url: url
      // data: formData
    }).catch(function(error) {
      alert('post失败');
      console.log(error);
    });
  }

  inputChangeAaa(term){
    this.setState({
      aaa: term
    });
  }
  inputChangeBbb(term){
    this.setState({
      bbb: term
    });
  }

}

export default Community;
