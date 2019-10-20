import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Massage from "./massage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      item:"Say Hello to Ji's Little Friend %itemname",
      seller:"Forest %seller",
      imgurl:"https://hsm.utimaco.com/wp-content/uploads/2017/09/Applications_Grey_RGB_Random_Number_Generation-300x300.png",
      fit: true
    };
  }
  componentDidMount() {
    //API: get item name and img url and type
    //or inhert from the parent node
    var type="pants";
    axios.get("/modal/"+type).then(
      data => {
        // console.log(data.data);
        this.setState({
          fit: data.data,
          load: true
        });
      },
      err => console.error(err)
    );
  }
  openModal(e){
    e.preventDefault();
    document.getElementById("curtain").style.display = "block";
    document.getElementById("modal").style.display = "block";
  }
  render() {
    return (this.state.load ?
      <div id = "base">
        <div id="curtain"/>
        <div id="modal">
          <div id="sidebar">
            <img id="itemImg" src={this.state.imgurl} />
            <p id="itemInfo">{this.state.seller+" - "+this.state.item}</p>
          </div>
          <Massage item={this.state.item} fit={this.state.fit}/>
        </div>
        <button id="open" onClick={this.openModal.bind(this)}>Write a review</button>
      </div>
      : <div className="box"></div>/* need a spinner here*/
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
