import React from "react";

class Massage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate:"Click to rate",
      rating:"0",//
      title:0,//
      review:0,//50
      recommend:0,
      nickname:0,//4
      location:0,
      email:0,//
      fit:0,
      read:0,
      where:0,
      feedback:0,
      agree:0//
    };
  }
  closeModal(e){
    e.preventDefault();
    document.getElementById("curtain").style.display = "none";
    document.getElementById("modal").style.display = "none";
  }

  coloringRating(i){
    if(i==="0")this.setState({rate:"Click to rate"});
    if(i==="1"){var str="red";this.setState({rate:"Poor"});}
    if(i==="2"){var str="orange";this.setState({rate:"Fair"});}
    if(i==="3"){var str="yellow";this.setState({rate:"Average"});}
    if(i==="4"){var str="lightgreen";this.setState({rate:"Good"});}
    if(i==="5"){var str="green";this.setState({rate:"Excellent"});}
    for(var a=1;a<=5;a++)
      document.getElementById("star"+a).style.backgroundColor = a<=i?str:"#eee";
  }
  clickRating(e){
    this.setState({rating:e.currentTarget.getAttribute("value")});
  }
  hoverRating(e){
    this.coloringRating(e.currentTarget.getAttribute("value"));
  }
  leaveRating(){
    this.coloringRating(this.state.rating);
  }

  blackReview(){
    document.getElementById("reviewcontainer").style.borderColor="black";
  }
  recoverReview(){
    document.getElementById("reviewcontainer").style.borderColor="#ccc";
    document.getElementById("reviewcontainer").style.borderTopColor="#aaa";
  }
  render(){
    return(
      <div id="massage">
        <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
        
        <div id="title" className="container">
          <h3>{"My Review for "+this.props.item}</h3>
          <p className="explaination">Required fields are marked with *</p>
        </div>

        <div id="rating" className="container">
          <h3>Product rating*</h3>
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
        </div>

        <div className="container">
          <h3>Review title*</h3>
          <div><input placeholder="Example: Makes hiking even easier"/></div>
        </div>

        <div className="container">
          <h3>Review*</h3>
          <div id="reviewcontainer"
            onMouseOver={this.blackReview}
            onMouseLeave={this.recoverReview}>
            <textarea rows="4" id="reviewarea"
              onFocus={this.blackReview}
              onBlur={this.recoverReview}/>
            <div id="addp">Add photo</div>
            <div id="addv">Add video</div>
          </div>
        </div>

        <div className="container">
          <div className="left"><h3>Would you recommend this product to a friend?</h3></div>
          <div className="right">
            <button id="recyes">Yes</button>
            <button id="recno">No</button>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <h3>Nickname*</h3>
            <input placeholder="Example: jackie27"/>
          </div>
          <div className="right">
            <h3>Location</h3>
            <input placeholder="Example: Seattle, WA"/>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <h3>Email*</h3>
            <input placeholder="Example: youremail@example.com"/>
          </div>
        </div>

        {this.props.fit?
        <div className="container">
          <div className="left">
            <h3>Fit</h3>
          </div>
          <div className="right">
            <form id="fitform">
              <div className="inputcontainer">
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>
              <div className="inputcontainer">
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>
              <div className="inputcontainer">
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>
              <div className="inputcontainer">
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>
              <div className="inputcontainer">
                <div className="dummy">&nbsp;</div>
                <input type="radio" name="fit"/>
              </div>
            </form>
            <p>Runs Small Runs Large</p>
          </div>
        </div>
        :<div className="box"></div>}

        <div className="container">
          <div className="left">
            <h3>Did you read product reviews online before first purchasing this item?</h3>
          </div>
          <div className="right">
            <select>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <h3>Where did you purchase the product?</h3>
          </div>
          <div className="right">
            <select>
              <option>Select</option>
              <option>Online</option>
              <option>In-Store</option>
            </select>
          </div>
        </div>

        <div className="container">
          <h3>What feedback do you have for the people who designed and manufactured this product?</h3>
          <textarea rows="4"/>
        </div>

        <div id="post" className="container">
          <div className="termcontainer"><input  className="termcontent"type="checkbox"/></div>
          <div className="termcontainer"><label className="termcontent">I agree to the</label></div>
          <div className="termcontainer"><a  className="termcontent" href="#">{"terms & conditions"}</a></div>
          <p className="explaination">You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>
          <button id="postreview">Post review</button>
        </div>
      </div>
    );
  }
}

export default Massage;