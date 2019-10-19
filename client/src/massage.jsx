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
        <div>
          <h3>{"My Review for "+this.props.item}</h3>
          <p>Required fields are marked with *</p>
        </div>

        <div>
          <h3>Product rating*</h3>
          <p>☆☆☆☆☆ Click to rate</p>
        </div>

        <div>
          <h3>Review title*</h3>
          <div><input/></div>
        </div>

        <div>
          <h3>Review*</h3>
          <div>
            <input/>
            <button>Add photo</button>
            <button>Add video</button>
          </div>
        </div>

        <div>
          <div><h3>Would you recommend this product to a friend?</h3></div>
          <div><button>Yes</button><button>No</button></div>
        </div>

        <div>
          <div>
            <h3>Nickname*</h3>
            <input/>
          </div>
          <div>
            <h3>Location</h3>
            <input/>
          </div>
        </div>

        <div>
          <h3>Email*</h3>
          <input/>
        </div>

        {this.props.fit?
        <div>
          <h3>Fit</h3>
          <p>Runs Small   Runs Large</p>
        </div>
        :<div></div>}

        <div>
          <h3>Did you read product reviews online before first purchasing this item?</h3>
          <select>
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <h3>Where did you purchase the product?</h3>
          <select>
            <option>Select</option>
            <option>Online</option>
            <option>In-Store</option>
          </select>
        </div>

        <div>
          <h3>What feedback do you have for the people who designed and manufactured this product?</h3>
          <input/>
        </div>

        <div>
          <p>I agree to the </p>
          <a>{"terms & conditions"}</a>
          <p>You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>
          <button>Post review</button>
        </div>
      </div>
    );
  }
}

export default Massage;