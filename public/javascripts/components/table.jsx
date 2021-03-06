var products = [
{ "NO":1,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.22,"MARK":171201,"L":247,"W":138,"H":129},
{"NO":2,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.29,"MARK":171202,"L":301,"W":160,"H":124},
{"NO":3,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.31,"MARK":171203,"L":182,"W":155,"H":85},
{"NO":4,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.35,"MARK":171204,"L":185,"W":145,"H":85},
{"NO":5,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.36,"MARK":171205,"L":167,"W":123,"H":155},
{"NO":6,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":3.168,"MARK":171206,"L":156,"W":150,"H":143},
{"NO":7,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.13,"MARK":171207,"L":253,"W":205,"H":164},
{"NO":8,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.1,"MARK":171208,"L":198,"W":175,"H":127},
{"NO":9,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.19,"MARK":171209,"L":230,"W":76,"H":158},
{"NO":10,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.47,"MARK":171210,"L":305,"W":225,"H":90},
{"NO":11,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.46,"MARK":171211,"L":213,"W":97,"H":150},
{"NO":12,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.44,"MARK":171212,"L":138,"W":190,"H":132},
{"NO":13,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.45,"MARK":171213,"L":160,"W":105,"H":155},
{"NO":14,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.43,"MARK":171214,"L":302,"W":200,"H":65},
{"NO":15,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.41,"MARK":171215,"L":310,"W":190,"H":82},
{"NO":16,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.39,"MARK":171216,"L":265,"W":125,"H":86},
{"NO":17,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.14,"MARK":171217,"L":300,"W":167,"H":156},
{"NO":18,"DESCRIPTION":"BLOCK MARBLE ","CLASS":"A","BBC":4.48,"MARK":171218,"L":300,"W":220,"H":98}];


import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const cellEditProp = {
  mode: 'click'
};

export default class Table extends React.Component {

  render() {
    return  (

      <BootstrapTable insertRow exportCSV data={ products } cellEdit={ cellEditProp} >
          <TableHeaderColumn dataField='NO' isKey={ true } dataSort={ true }>NO</TableHeaderColumn>
          <TableHeaderColumn dataField='DESCRIPTION' dataSort={ true }>DESCRIPTION</TableHeaderColumn>
          <TableHeaderColumn dataField='CLASS' dataSort={ true }>CLASS</TableHeaderColumn>
          <TableHeaderColumn dataField='BBC' dataSort={ true }>BBC</TableHeaderColumn>
          <TableHeaderColumn dataField='MARK' dataSort={ true }>MARK</TableHeaderColumn>
          <TableHeaderColumn dataField='L' dataSort={ true }>L</TableHeaderColumn>
          <TableHeaderColumn dataField='W' dataSort={ true }>W</TableHeaderColumn>
          <TableHeaderColumn dataField='H' dataSort={ true }>H</TableHeaderColumn>
      </BootstrapTable>

    );
  }

}


