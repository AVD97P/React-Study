import React, { Component } from 'react'

class SearchInput extends Component {
    // onInputChange (event) {
    //     console.log("ev--->",event.target.value);
    // }
    constructor (props) {
        super(props)
        this.state = { entry : ''}
        // this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log("on submit",this.state.entry);
        this.props.onSearchSubmit(this.state.entry)
    }
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
                <div className='ui massive icon input'>
                    <input 
                    type='text' 
                    placeholder='search...' 
                    onInput={(event) => this.setState({entry : event.target.value})} 
                    value={this.state.entry}/>
                    <i className='search icon'></i>
                </div>
            </div>
        </form>
    </div>
    )
  }
}

export default SearchInput