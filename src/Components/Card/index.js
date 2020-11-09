import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import "./style.css";

class DetailCard extends React.Component {
  render() {
    const Name = this.props.card_data ? this.props.card_data.Tourist_name : "";
    const StartDate = this.props.card_data ? this.props.card_data.Start_date : "";
    const EndDate = this.props.card_data ? this.props.card_data.End_date : "";
    const Request_id = this.props.card_data ? this.props.card_data.Request_id : "";
    const Destination = this.props.card_data ? this.props.card_data.Destination : "";
    const People = this.props.card_data ? this.props.card_data.People : "";
    const Price = this.props.card_data ? this.props.card_data.list : "";

    return <Card className={"card-container"}>
      <div className={"title-container"}>{Name}</div>
      <div className={"title-place-container"}>Mumbai(IND)</div>
      <div className={"title-content"}>Request Id<div className={"card-content"}>{Request_id}</div></div>
      <div className={"title-content"}>Start Date<div className={"card-content"}>{StartDate}</div></div>
      <div className={"title-content"}>End Date<div className={"card-content"}>{EndDate}</div></div>
      <div className={"title-content"}>Tourist Name<div className={"card-content"}>{Name}</div></div>
      <div className={"title-content"}>Destination<div className={"card-content"}>{Destination}</div></div>
      <div className={"sub-title-container"}>About Personalize Tour</div>

      <div className={"title-content"}>No of people<div className={"card-content"}>{People}</div></div>
      <div className={"title-content"}>Price<div className={"card-content"}>{Price}</div></div>
    </Card>;
  }
}
const mapStateToProps = (state) => {
  return {
    card_data: state.FetchReducer.card_data,
  };
};
export default connect(mapStateToProps)(DetailCard);
