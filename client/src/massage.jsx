import React from "react";

class Massage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  closeModal(e){
    e.preventDefault();
    document.getElementById("curtain").style.display = "none";
    document.getElementById("modal").style.display = "none";
  }
  render(){
    return(
      <div id="massage">
        <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
        
        <div id="title" className="container">
          <h3>{"My Review for "+this.props.item}</h3>
          <p className="explaination">Required fields are marked with *</p>
        </div>
        <div className="container">
          <h3>Product rating*</h3>
          <p>☆☆☆☆☆ Click to rate</p>
        </div>
        <div className="container">
          <h3>Review title*</h3>
          <div><input placeholder="Example: Makes hiking even easier"/></div>
        </div>
        <div className="container">
          <h3>Review*</h3>
          <div>
            <textarea rows="4"/>
            <button>Add photo</button>
            <button>Add video</button>
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
          <h3>Fit</h3>
          <p>Runs Small   Runs Large</p>
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