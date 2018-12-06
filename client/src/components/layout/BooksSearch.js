import React, { Component } from 'react'
import {connect} from "react-redux"
import InputField from '../common/InputField';
import {getBooks} from "../../actions/bookActions"
import Books from './Books';
import NoResults from './NoResults';

class BooksSearch extends Component {

  state = {
    searchText:"",
    visible:false,
    errors:''
  }

  componentDidMount(){
    this.props.getBooks()
  }

  onChange = (e) => {
    this.setState({searchText:e.target.value}, () => this.showBooks())
    }

  showBooks = () => {
      if(this.state.searchText.length === 1 || this.state.searchText.length === 2 ){
         this.setState({errors:"Enter at least 3 characters"})
      }else{
        this.setState({errors:""})
      }
   if (this.state.searchText.length >= 3){
        this.setState({visible:true})
     }else{
       this.setState({visible:false})
     }
    }

  render() {
    const {books} = this.props.book;
    const filteredBooks = books.filter(item => 
      item.title.toLowerCase().includes(this.state.searchText.toLowerCase()))

    let showResults;
      if(filteredBooks === undefined || filteredBooks.length === 0){
        showResults = <NoResults />
      }else{
        showResults = <Books filteredBooks = {filteredBooks} />
      }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-5">
              <InputField 
              name="book"
              type="text"
              placeholder="Search Books"
              autoFocus="autoFocus"
              onChange={this.onChange}
              error={this.state.errors}
              myStyles={this.state.errors ? {border:"3px solid red"}:null}
            />
          {this.state.visible ? showResults : null}
          </div>
        </div>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  book:state.book
})

export default connect(mapStateToProps,{getBooks})(BooksSearch)
