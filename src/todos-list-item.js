import React, {Component} from 'react';
import App from './App';
export default class TodosListItem extends React.Component {
  render() {
    return ( 
          <tr>
                <td> {this.props.description} </td>      
              <td><button onClick={this.props.deleteDescription}>Delete</button></td>
          </tr>
    );
  }
}

