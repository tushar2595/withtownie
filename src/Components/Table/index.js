import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import ApiManger from "../../APIManger/index";
import APIManger from "../../APIManger/index";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

class DenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    APIManger.fetchTable();
  }
  getDetailCard = () => {
    const Id = this.state.id;
    ApiManger.fetchCard(Id);
  };

  render() {
    console.log(this.state.id, "lsd,l,dsl,dl");
    const data = this.props.state_data ? this.props.state_data : "";
    console.log(this.state.id, "kmklmxkm");
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Request Id</TableCell>
              <TableCell>Tourist Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>No of People</TableCell>
              <TableCell>Total Actual Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    onClick={(_id) => {
                      this.setState({ id: row._id });
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.Request_id}
                  </TableCell>

                  <TableCell onClick={this.getDetailCard}>{row.Tourist_name}</TableCell>
                  <TableCell>{row.Start_date}</TableCell>
                  <TableCell>{row.End_date}</TableCell>
                  <TableCell>{row.Destination}</TableCell>
                  <TableCell>{row.People}</TableCell>
                  <TableCell>{row.list}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state_data: state.FetchReducer.state_data,
  };
};
export default connect(mapStateToProps)(DenseTable);
