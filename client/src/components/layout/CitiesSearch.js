import React, { Component } from 'react'
import {connect} from "react-redux"
import InputField from '../common/InputField';
import {getCities} from "../../actions/cityActions"
import Cities from './Cities';
import NoResults from './NoResults';

class CitiesSearch extends Component {

  state = {
    searchText:"",
    visible:false,
    errors:''
  }

  componentDidMount(){
    this.props.getCities()
  }

  onChange = (e) => {
    this.setState({searchText:e.target.value}, () => this.showCities())
    }

  showCities = () => {
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
    const {cities} = this.props.city;
    const filteredCities = cities.filter(item => 
      item.toLowerCase().includes(this.state.searchText.toLowerCase()))

    let showResults;
      if(filteredCities === undefined || filteredCities.length === 0){
        showResults = <NoResults />
      }else{
        showResults = <Cities  filteredCities = {filteredCities} />
      }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-5">
              <InputField 
              name="city"
              type="text"
              placeholder="Search City"
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
  city:state.city
})

export default connect(mapStateToProps,{getCities})(CitiesSearch)
