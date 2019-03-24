import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import '../style/login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      whoami:''
    };
  }

  render(){
    return(
      <div>
        <div className="main-style">
          <div className="main-box">
            <div className="main-detail-bg" />
            <div className="main-detail">
              <div>
                <h3 className="h3-style">用户登录</h3>
                <div className="login">
                  <input type="text" className="login-user"
                    onChange={event => this.inputChangeName(event.target.value)}
                  />
                  <input type="password" className="login-lock"
                    onChange={event => this.inputChangePassword(event.target.value)}
                  />
                  <input type="checkbox" style={{ width: '12px', height: '12px' }} />
                  <span>记住密码</span>
                  <input type="button" value="登录"
                    onClick={ ()=>this.checkPsd()}
                    className="login-button"
                  />
                  <div className="down-style">
                    <p>建议在
                      <span><a href="http://www.chromeliulanqi.com/Chrome_Latest_Setup.exe">{' '}Chrome{' '}</a></span>
                      浏览器下访问,账户密码为admin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    )
  }

  inputChangeName(term) {
    this.setState({
      username: term
    });
  }
  inputChangePassword(term) {
    this.setState({
      password: term
    });
  }
  checkPsd(){
    if(this.state.username==="admin"&&this.state.password==="admin"){
      window.location.href="#/custom";
    }
    else {
      alert('用户密码错误！');
      window.location.href="#/login";
    }
  }

}

export default Login;
