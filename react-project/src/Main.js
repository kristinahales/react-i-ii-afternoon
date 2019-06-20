import React, {Component} from 'react';
import data from './data';



class Main extends Component {
    constructor() {
        super();
        this.state = {
            i: 0,
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        if (this.state.i > 0) {
            this.setState({ i: this.state.i - 1 });
        } else if(this.state.i = -1){
            this.setState({i: this.state.i = 24})
        }
    }
    
    next() {
        if (this.state.i < 24) {
            this.setState({ i: this.state.i + 1 });
        } else if(this.state.i = 25 ) {
            this.setState({i: this.state.i = 0})
        }
}
    

    render() {
        return (
            <div>
                <div className="gray-container">
                    <main className="white-container">
                        <div>{data[this.state.i].id}/{data.length}</div>
                        <div className="first">{data[this.state.i].name.first} {data[this.state.i].name.last}</div>
                        <div className="second">From: {data[this.state.i].city} {data[this.state.i].country}</div>
                        <div className="third">Employer: {data[this.state.i].employer}</div>
                        <div className="fourth">Title: {data[this.state.i].title}</div>
                        <div className="five">Favorite movies:</div>
                        <div className="six">1. {data[this.state.i].favoriteMovies[0]}</div>
                        <div className="six">2. {data[this.state.i].favoriteMovies[1]}</div>
                        <div className="six">3. {data[this.state.i].favoriteMovies[2]}</div>   
                    </main> 

                </div>
                <footer className='footer'>
                    <button onClick={this.previous}> &#60; Previous</button>
                    <button onClick={this.next}>Next ></button>
                </footer>

            </div>


        )
    }

}

export default Main; 

