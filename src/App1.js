import React,{ Component } from 'react';
import './App.css';

var open = false;

class App extends Component {

  state = {
    open_left : false,
    toggle : false
  }

  componentDidMount(){
    document.getElementById("mySidenav_left").style.width = "60px";
  }

   closeNav = () =>{
     document.getElementById("mySidenav_left").style.width = "60px";
     this.setState({
       open_left : !this.state.open_left
     })
  }

   openNav = () =>{
     document.getElementById("mySidenav_left").style.width = "250px";
     this.setState({
       open_left : !this.state.open_left
     })
  }

  demo = () =>{
    if(!this.state.toggle)
    {
      document.getElementById("demo1").style.transform = 'translate(-30px,-70px)';
      document.getElementById("demo2").style.transform = 'translate(-70px,-30px)';
      document.getElementById("demo3").style.transform = 'translate(-70px,30px)';
      document.getElementById("demo4").style.transform = 'translate(-30px,70px)';
    }
    else {
      document.getElementById("demo1").style.transform = 'translate(0px,0px)';
      document.getElementById("demo2").style.transform = 'translate(0px,0px)';
      document.getElementById("demo3").style.transform = 'translate(0px,0px)';
      document.getElementById("demo4").style.transform = 'translate(0px,0px)';
    }
    this.setState({
      toggle : !this.state.toggle
    })


  }

  render(){
    return (
      <div>
        <div id="mySidenav_left" class="sidenav_left">

          {
            this.state.open_left ?
            <React.Fragment>
              <a  onClick={this.closeNav} style={{color:"white",cursor:"pointer"}}>&times;</a>

            </React.Fragment>
            :
            <React.Fragment>
              <a  onClick={this.openNav} style={{color:"white",cursor:"pointer"}}>&#9779;</a>
            </React.Fragment>
          }
          <div className="demo" style={{fontSize:"23px",color:"white",cursor:"pointer"}}><i class="fa fa-rss" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Feed</div>
          <div className="demo" style={{fontSize:"23px",color:"white",cursor:"pointer"}}><i class="fa fa-bullseye" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Info</div>
          <div className="demo" style={{fontSize:"23px",color:"white",cursor:"pointer"}}><i class="fa fa-bullhorn" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Notification</div>
          <div className="demo" style={{fontSize:"23px",color:"white",cursor:"pointer"}}><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Friends</div>
        </div>


        <div className="menu" onClick={this.demo}>

          {
            this.state.toggle?
            <div style={{marginLeft:"5px",fontWeight:"900",fontSize:"32px"}}>&times;</div>:""
          }
          <div id="demo1" className="menu">
          </div>
          <div id="demo2" className="menu">
          </div>
          <div id="demo3" className="menu">
          </div>
          <div id="demo4" className="menu">
          </div>
        </div>
        <div className="header">
          <div style={{display:"flex",alignItems:"center"}}>
            <div style={{flex:"0.05"}}>
            </div>
            <div style={{flex:"0.35"}}>
            <p style={{color:"white",fontSize:"25px",margin:"0px",paddingTop:"16px",fontWeight:"900"}}>NEWS FEED</p>
            </div>
            <div style={{flex:"0.6",textAlign:"end",marginRight:"80px"}}>
              <i className="fa fa-bolt" style={{marginTop:"23px",fontSize:"26px",color:"white",cursor:"pointer"}}></i>
              <i className="fa fa-comments" style={{marginLeft:"50px",marginTop:"23px",fontSize:"26px",color:"white",cursor:"pointer"}}></i>
              <i className="fa fa-smile" style={{marginLeft:"50px",marginTop:"23px",fontSize:"26px",color:"white",cursor:"pointer"}}></i>
            </div>
          </div>

        </div>
        <br/><br/>
        <div style={{width:"90%",margin:"auto"}}>
          <div className="row">
            <div className="col-md-3">
              <div className="firstcard">

              </div>

            </div>
            <div className="col-md-6">
            <div className="secondcard">
              <br/><br/>
            <h2 style={{textAlign:"center",color:"white"}}>Gamers Back!</h2>
            </div>
            </div>
            <div className="col-md-3">
            <div className="secondcard">

            </div>
            </div>
          </div>

        </div>
      </div>

    );
  }

}

export default App;
