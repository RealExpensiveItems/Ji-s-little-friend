import React from "react";

class Massage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate:"Click to rate",
      reviewFocused:false,
      invalidReviewInfo:"Required",
      invalidReviewWidth:"90px",

      titleBuffer:"",
      reviewBuffer:"",
      nicknameBuffer:"",
      emailBuffer:"",

      rating:"0",//
      title:"0",//
      review:"0",//50
      recommend:"0",
      nickname:"0",//4
      location:"0",
      email:"0",//
      fit:"0",
      read:"0",
      where:"0",
      feedback:"0",
      agree:"0"//
    };
  }
  closeModal(e){
    e.preventDefault();
    document.getElementById("curtain").style.display = "none";
    document.getElementById("modal").style.display = "none";
  }
  //////////
  //rating//
  //////////
  coloringRating(i){
    if(i==="0")this.setState({rate:"Click to rate"});
    if(i==="1"){var str="red";this.setState({rate:"Poor"});}
    if(i==="2"){var str="orange";this.setState({rate:"Fair"});}
    if(i==="3"){var str="yellow";this.setState({rate:"Average"});}
    if(i==="4"){var str="lawngreen";this.setState({rate:"Good"});}
    if(i==="5"){var str="green";this.setState({rate:"Excellent"});}
    for(var a=1;a<=5;a++)
      document.getElementById("star"+a).style.backgroundColor = a<=i?str:"#eee";
  }
  clickRating(e){this.setState({rating:e.currentTarget.getAttribute("value")});}
  hoverRating(e){this.coloringRating(e.currentTarget.getAttribute("value"));}
  leaveRating(){this.coloringRating(this.state.rating);}
  /////////
  //title//
  /////////
  blurTitle(){if(this.state.titleBuffer.length===0)this.setState({title:"-1"});}
  updateTitle(e){
    if(e.target.value.length>0)this.setState({title:"1"});
    this.setState({titleBuffer:e.target.value});
  }
  //////////
  //review//
  //////////
  hoverReview(){if(this.state.review!=="-1")this.blackReview();}
  focusReview(){
    if(this.state.review!=="-1")this.blackReview();
    this.setState({reviewFocused:true});
  }
  leaveReview(){if(!this.state.reviewFocused && this.state.review!=="-1")this.recoverReview();}
  updateReview(e){
    if(e.target.value.length>49){
      this.setState({review:"1"});
      this.blackReview();
    }else if(this.state.review!=="-1")this.setState({review:"0"});
    this.setState({
      invalidReviewInfo:`${50-e.target.value.length} characters too short`,
      invalidReviewWidth:"180px",
      reviewBuffer:e.target.value
    });
    if(e.target.value.length===0)this.setState({
      invalidReviewInfo:"Required",
      invalidReviewWidth:"90px"
    });
  }
  blurReview(){
    if(this.state.review==="1")this.recoverReview();
    if(this.state.review==="0"){
      this.setState({review:"-1"});
      this.redReview();
    }
    this.setState({reviewFocused:false});
  }
  blackReview(){document.getElementById("reviewcontainer").style.borderColor="black";}
  redReview(){document.getElementById("reviewcontainer").style.borderColor="crimson";}
  recoverReview(){
    document.getElementById("reviewcontainer").style.borderColor="#ccc";
    document.getElementById("reviewcontainer").style.borderTopColor="#aaa";
  }
  /////////////
  //recommend//
  /////////////
  hdlRecommend(e){
    e.currentTarget.style.backgroundColor="#777";
    e.currentTarget.style.color="white";
    var i=e.currentTarget.getAttribute("value");
    this.setState({recommend:i});
    if(i==="1")i="recno";
    else i="recyes";
    document.getElementById(i).style.borderColor="#ccc";
    document.getElementById(i).style.borderBottomColor="#999";
    document.getElementById(i).style.backgroundColor="#eee";
    document.getElementById(i).style.color="#777";
  }
  hoverRecommend(e){
    if(e.currentTarget.getAttribute("value")!==this.state.recommend){
      e.currentTarget.style.borderColor="#999";
      e.currentTarget.style.backgroundColor="#ddd";
    }
  }
  leaveRecommend(e){
    if(e.currentTarget.getAttribute("value")!==this.state.recommend){
      e.currentTarget.style.borderColor="#ccc";
      e.currentTarget.style.borderBottomColor="#999";
      e.currentTarget.style.backgroundColor="#eee";
      e.currentTarget.style.color="#777";
    }
  }
  ////////////
  //nickname//
  ////////////
  blurNickname(){if(this.state.nicknameBuffer.length===0)this.setState({nickname:"-1"});}
  updateNickname(e){
    if(e.target.value.length>0)this.setState({nickname:"1"});
    this.setState({nicknameBuffer:e.target.value});
  }
  /////////
  //email//
  /////////
  blurEmail(){if(this.state.emailBuffer.length===0)this.setState({email:"-1"});}
  updateEmail(e){
    if(e.target.value.length>0)this.setState({email:"1"});
    this.setState({emailBuffer:e.target.value});
  }

  hdlLocation(){this.setState({location:"1"});}
  hdlFit(){this.setState({fit:"1"});}
  hdlWhere(){this.setState({where:"1"});}
  hdlRead(){this.setState({read:"1"});}
  hdlFeedback(){this.setState({feedback:"1"});}

  onPost(){
    var obj={};
    if(this.state.rating==="0")obj.rating="-1";
    if(this.state.title==="0")obj.title="-1";
    if(this.state.review==="0")obj.review="-1";
    if(this.state.nickname==="0")obj.nickname="-1";
    if(this.state.email==="0")obj.email="-1";
    if(this.state.agree==="0")obj.agree="-1";

    if(this.state.recommend==="0")obj.recommend="1";
    if(this.state.location==="0")obj.location="1";
    if(this.state.fit==="0")obj.fit="1";
    if(this.state.read==="0")obj.read="1";
    if(this.state.where==="0")obj.where="1";
    if(this.state.feedback==="0")obj.feedback="1";
    this.setState(obj);
  }
  render(){
    return(
      <div id="massage">

        <div id="header" className="container">
          <h3>{"My Review for "+this.props.item}</h3>
          <p className="explaination">Required fields are marked with *</p>

          <div className="closecontainer">
            <img className="close" onClick={this.closeModal.bind(this)} src={require("../../db/assets/times.svg")}/>
          </div>
        </div>

        <div id="rating" className="container">
          <h3 style={{color:this.state.rating==="-1"?"crimson":"black"}}>Product rating*</h3>
          <div id="starcontainer">
            <div id="stars">
              {([1,2,3,4,5]).map((i)=>(
              <div id={"star"+i} className="stars" value={i}
                onMouseOver={this.hoverRating.bind(this)}
                onClick={this.clickRating.bind(this)}
                onMouseLeave={this.leaveRating.bind(this)}>
                <img className="greystar" src={require("../../db/assets/star-grey.svg")}/>
                <img className="whitestar" src={require("../../db/assets/star-white.svg")}/>
              </div>
              ))}
            </div>
            <p>{this.state.rate}</p>
          </div>
          {this.state.rating==="0"?<div/>
          :this.state.rating==="-1"
          ?<div className="invalidcontainer">
            <div className="invalidwrap">
              <span className="invalidtext">Required&nbsp;</span>
              <img className="invalidimg" src={require("../../db/assets/times.svg")}/>
            </div>
          </div>
          :<div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="container">
          <div className="inlinewrap">
            <h3 className="shorttitle" style={{color:this.state.title==="-1"?"crimson":"black"}}>Review title*</h3>
            {this.state.title==="0"?<div/>
            :this.state.title==="-1"
            ?<div className="invalidcontainer inlineic">
              <div className="invalidwrap">
                <span className="invalidtext">Required&nbsp;</span>
                <img className="invalidimg" src={require("../../db/assets/times.svg")}/>
              </div>
            </div>
            :<div className="validcontainer inlinevc">
              <div className="validwrap">
                <img className="validimg" src={require("../../db/assets/tick.svg")}/>
              </div>
            </div>}
          </div>
          <input placeholder="Example: Makes hiking even easier" value={this.state.titleBuffer}
            onBlur={this.blurTitle.bind(this)}
            onChange={this.updateTitle.bind(this)}/>
        </div>

        <div className="container">
          <div className="inlinewrap">
            <h3 className="shorttitle" style={{color:this.state.review==="-1"?"crimson":"black"}}>Review*</h3>
            {this.state.review==="0"?<div/>
            :this.state.review==="-1"
            ?<div className="invalidcontainer inlineic">
              <div className="invalidwrap" style={{width:this.state.invalidReviewWidth}}>
                <span className="invalidtext">{this.state.invalidReviewInfo}&nbsp;</span>
                <img className="invalidimg" src={require("../../db/assets/times.svg")}/>
              </div>
            </div>
            :<div className="validcontainer inlinevc">
              <div className="validwrap">
                <img className="validimg" src={require("../../db/assets/tick.svg")}/>
              </div>
            </div>}
          </div>
          <div id="reviewcontainer"
            onMouseOver={this.hoverReview.bind(this)}
            onMouseLeave={this.leaveReview.bind(this)}>
            <textarea rows="4" id="reviewarea"
              onFocus={this.focusReview.bind(this)}
              onBlur={this.blurReview.bind(this)}
              onChange={this.updateReview.bind(this)}/>
            <div id="addp">Add photo</div>
            <div id="addv">Add video</div>
          </div>
        </div>

        <div id="recommend" className="container">
          <div className="left">
            <h3 style={{color:this.state.recommend==="-1"?"crimson":"black"}}>Would you recommend this product to a friend?</h3>
          </div>
          <div className="right">
            <button id="recyes" value="1"
              onClick={this.hdlRecommend.bind(this)}
              onMouseOver={this.hoverRecommend.bind(this)}
              onMouseLeave={this.leaveRecommend.bind(this)}>Yes</button>
            <button id="recno" value="2"
              onClick={this.hdlRecommend.bind(this)}
              onMouseOver={this.hoverRecommend.bind(this)}
              onMouseLeave={this.leaveRecommend.bind(this)}>No</button>
          </div>
          {this.state.recommend==="0"?<div/>:
          <div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="container">
          <div className="left">
            <div className="inlinewrap">
              <h3 className="shorttitle" style={{color:this.state.nickname==="-1"?"crimson":"black"}}>Nickname*</h3>
              {this.state.nickname==="0"?<div/>
              :this.state.nickname==="-1"
              ?<div className="invalidcontainer inlineic">
                <div className="invalidwrap">
                  <span className="invalidtext">Required&nbsp;</span>
                  <img className="invalidimg" src={require("../../db/assets/times.svg")}/>
                </div>
              </div>
              :<div className="validcontainer inlinevc">
                <div className="validwrap">
                  <img className="validimg" src={require("../../db/assets/tick.svg")}/>
                </div>
              </div>}
            </div>
            <input placeholder="Example: jackie27" value={this.state.nicknameBuffer}
              onBlur={this.blurNickname.bind(this)}
              onChange={this.updateNickname.bind(this)}/>
          </div>
          <div className="right">
            <div className="inlinewrap">
              <h3 className="shorttitle">Location</h3>
              {this.state.location==="0"?<div/>:
              <div className="validcontainer inlinevc">
                <div className="validwrap">
                  <img className="validimg" src={require("../../db/assets/tick.svg")}/>
                </div>
              </div>}
            </div>
            <input placeholder="Example: Seattle, WA" onBlur={this.hdlLocation.bind(this)}/>
          </div>
        </div>

        <div id="email" className="container">
          <div className="left">
            <h3 className="shorttitle" style={{color:this.state.email==="-1"?"crimson":"black"}}>Email*</h3>
            <input placeholder="Example: youremail@example.com" value={this.state.emailBuffer}
              onBlur={this.blurEmail.bind(this)}
              onChange={this.updateEmail.bind(this)}/>
           </div>
          {this.state.email==="0"?<div/>
          :this.state.email==="-1"
          ?<div id="emailvalidcontainer" className="invalidcontainer">
            <div className="invalidwrap">
              <span className="invalidtext">Required&nbsp;</span>
              <img className="invalidimg" src={require("../../db/assets/times.svg")}/>
            </div>
          </div>
          :<div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>

        {this.props.fit?
        <div id="fit" className="container">
          <div className="left">
            <h3>Fit</h3>
          </div>
          <div className="right">
            <form id="fitform">
              {[1,2,3,4,5].map((i)=>(
              <div id={"fit"+i} className="inputcontainer"
                onClick={this.hdlFit.bind(this)}>
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>))}
            </form>
            <p>Runs Small Runs Large</p>
          </div>
          {this.state.fit==="0"?<div/>:
          <div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>
        :<div className="box"/>}

        <div id="read" className="container">
          <div className="left">
            <h3>Did you read product reviews online before first purchasing this item?</h3>
          </div>
          <div className="right">
            <select onChange={this.hdlRead.bind(this)}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          {this.state.read==="0"?<div/>:
          <div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div id="where" className="container">
          <div className="left">
            <h3>Where did you purchase the product?</h3>
          </div>
          <div className="right">
            <select onChange={this.hdlWhere.bind(this)}>
              <option>Select</option>
              <option>Online</option>
              <option>In-Store</option>
            </select>
          </div>
          {this.state.where==="0"?<div/>:
          <div className="validcontainer">
            <div className="validwrap">
              <img className="validimg" src={require("../../db/assets/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="container">
          <div className="inlinewrap">
            <h3>What feedback do you have for the people who designed and manufactured this product?</h3>
            {this.state.feedback==="0"?<div/>:
            <div className="validcontainer inlinevc">
              <div className="validwrap">
                 <img className="validimg" src={require("../../db/assets/tick.svg")}/>
              </div>
            </div>}
          </div>
          <textarea rows="4" onBlur={this.hdlFeedback.bind(this)}/>
        </div>

        <div id="post" className="container">
          <div className="termcontainer"><input  className="termcontent"type="checkbox"/></div>
          <div className="termcontainer"><label className="termcontent">I agree to the</label></div>
          <div className="termcontainer"><a  className="termcontent" href="#">{"terms & conditions"}</a></div>
          <p className="explaination">You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>
          <button id="postreview" onClick={this.onPost.bind(this)}>Post review</button>
        </div>
      </div>
    );
  }
}

export default Massage;