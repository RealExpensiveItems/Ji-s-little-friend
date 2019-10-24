import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";

import Massage from "./massage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      item:"%itemname Say Hello to Ji's Little Friend%",
      seller:"%seller Forest%",
      imgurl:"https://hsm.utimaco.com/wp-content/uploads/2017/09/Applications_Grey_RGB_Random_Number_Generation-300x300.png",
      fit: true
    };
  }
  componentDidMount() {
    //API: get item name and img url and type
    //or inhert from the parent node
    var type="pants";
    // axios.get("/modal/"+type).then(
    //   data => {
    //     // console.log(data.data);
    //     this.setState({
    //       fit: data.data,
    //       load: true
    //     });
    //   },
    //   err => console.error(err)
    // );
    this.setState({
      load: true
    });
  }
  openModal(e){
    e.preventDefault();
    document.getElementById("FOREST-curtain").style.display = "block";
    document.getElementById("FOREST-modal").style.display = "block";
  }
  render() {
    return (this.state.load ?
      <div id = "FOREST-base">
        <div id="FOREST-curtain"/>
        <div id="FOREST-modal">
          <div id="FOREST-sidebar">
            <img id="FOREST-itemImg" src={this.state.imgurl} />
            <p id="FOREST-itemInfo">{this.state.seller+" - "+this.state.item}</p>
          </div>
          <Massage item={this.state.item} fit={this.state.fit}/>
        </div>
        <button id="FOREST-open" onClick={this.openModal.bind(this)}>Write a review</button>
      </div>
      : <div className="FOREST-box"></div>/* need a spinner here*/
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
