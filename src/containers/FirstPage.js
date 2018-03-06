import React, { Component } from 'react'
import ToggleDisplay from 'react-toggle-display';
import { Link } from 'react-router-dom'
import './FirstPage.css'
import _ from 'lodash';
import { TablePagination } from 'react-pagination-table';


export default class FirstPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      list: [],
      show: false
    }
    
  }
  
  showTweets = (event) => {
    fetch("http://localhost:3001/", {
      method: 'POST'
    }).then(
      (response) => response.json()
    ).then((data) => {
      this.setState({
        list: data,
        show: true
      })
    }) 
    event.preventDefault()
  }

  orderTweetsAsc = () => {
    let list = this.state.list
    let asc = _.orderBy(list, ['tweet'], ['asc']);
    this.setState({ list: asc})
  }
  orderTweetsDesc = () => {
    let list = this.state.list
    let asc = _.orderBy(list, ['tweet'], ['asc']);
    let desc = _.orderBy(asc, ['tweet'], ['desc']);
    this.setState({list: desc })
  }
  render() {
    return (  
      <div className="wrapper">
        <div>
          <h1 className="header-text">100 #oscars tweets</h1>
            { !this.state.show ? 
              <button type="submit" onClick={this.showTweets}>Show Tweets</button>
              : null 
            }
          <div className="align-buttons">
            {this.state.show ? 
              <button onClick={this.orderTweetsAsc}>Ascending</button>
              : null
            }

            {this.state.show ? 
              <button onClick={this.orderTweetsDesc}>Descending</button>
              : null 
            }
          </div>      
        </div>
        {this.state.show ? 
          <TablePagination
            data={ this.state.list }
            columns="tweet"
            perPageItemCount={ 10 }
            totalCount={ 100 }
          /> 
          : null 
        }
      </div>
    )
  }
}