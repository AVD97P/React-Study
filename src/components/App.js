import React from 'react'
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {
constructor(props) {
    super(props)

    this.state = { images : []}

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}

   async onSearchSubmit(entry) {
        // console.log("search submit--> ",entry);
        const response = await axios.get(`https://pixabay.com/api/?key=12973143-e1ea73fe98fc5af5156bb3056&q=${entry}&image_type=photo`)
        console.log("search response--> ",response.data.hits);

        this.setState({ images: response.data.hits })
    }
    render () {
        return (
            <div className='ui container' style={{marginTop:'30px '}}>
                Welcome to Avd App
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;