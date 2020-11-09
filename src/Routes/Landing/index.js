import React, { Component } from 'react';
import DataTable from '../../Components/Table/index';
import Card from '../../Components/Card/index';

class Landing extends Component {
  render() {
    return (
      <div>
        <DataTable />
        <Card/>
      </div>
    );
  }
}

export default Landing;