import React from "react";

import Card from "@material-ui/core/Card";
import "./style.css";

class DetailCard extends React.Component {
  render() {
    return <Card className={"card-container"}>
        <div className={"title-container"}>March Andru</div>
        <div className={"title-place-container"}>Mumbai(IND)</div>
        <div className={"title-content"}>Request Id<div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>Start Date<div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>End Date<div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>Tourist Name<div className={"card-content"}>kmdakcm</div></div>
        <div className={"sub-title-container"}>About Personalize Tour</div>
        <div className={"title-content"}>Type of Tour<div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>Meeting Point <div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>Tour End Point <div className={"card-content"}>kmdakcm</div></div>
        <div className={"title-content"}>No of people<div className={"card-content"}>kmdakcm</div></div>
    </Card>;
  }
}
export default DetailCard;
