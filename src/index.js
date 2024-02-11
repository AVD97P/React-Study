import React from "react";
import  ReactDOM  from "react-dom";

import profile1 from "./images/black diamond.jpg"
import profile2 from "./images/SL8986MG-YG14K.jpg"
import profile3 from "./images/SP4945(WG)-M_WG_0.jpg"
// import SingleComment from "./SingleComment";
// import UserCard from "./UserCard";

// import App from "./components/App"; //Commented for img listing project
import App from "./App";

// import HemisphereDisplay from "./HemisphereDisplay";

// const App = function () {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log("position- - >",position),
//         (error) => console.log(error)
//     );
//     return (
//         <div className="ui comments">
//             <UserCard>
//            <SingleComment 
//            name='Avdhoot' 
//            date='Today 5:00 PM'
//            text='Its Amazing !!!'
//            img={profile1}
//            />
//            </UserCard>
//            <UserCard>
//            <SingleComment 
//            name='Himanshu'
//            date='Today 6:00 PM'
//            text='Wow !!!'
//            img={profile2}
//            />
//            </UserCard>
//            <UserCard>
//            <SingleComment 
//            name='Gajanan'
//            date='Today 7:00 PM'
//            text='Lovely !!!'
//            img={profile3}
//            />
//            </UserCard>
//         </div>
//     )
// }

// class Appc extends React.Component {
    // constructor (props) {
    //     super(props)

    //     this.state = { latitude : null,errorMsg : '' }
    //     window.navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             this.setState ({latitude : position.coords.latitude})
    //         },
    //         (error) => {
    //             this.setState({ errorMsg : error.message })
    //         }
    //         );
    //     }

    // state = { latitude : null,errorMsg : '' }

    // componentDidMount() {
    //     console.log("component Did Mount");
    //     window.navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         this.setState ({latitude : position.coords.latitude})
    //     },
    //     (error) => {
    //         this.setState({ errorMsg : error.message })
    //      }
    //         );
    // }
    
    // componentDidUpdate() {
    //     console.log("component Did Updated");
    // }

    // render () {
        // window.navigator.geolocation.getCurrentPosition(
        // (position) => console.log("position- - >",position),
        // (error) => console.log(error)
        // );
        // if (this.state.errorMsg && !this.state.latitude) {
        //     return <p>{this.state.errorMsg}</p>
        // }
        // if (!this.state.errorMsg && this.state.latitude) {
        //     // return <p>latitude : {this.state.latitude}</p>
        //     return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        // } 
        // else {
        //     return <p>Loading . . . ! </p>
        //  }
       
//     }
// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)