import React from 'react';
import {Link} from 'react-router-dom';

class Cloud_page extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: [],
            tags: []
        }
    }
    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({posts}, () =>{
                console.log(this.state.posts);
            }));
        
    }
    render(){
        return(
            <React.Fragment>
                <div className="post-title">
                    <h1>Выберите интересующий вас пост!</h1>
                </div>
                <div className="post-container">
                    {this.state.posts.map( posts =>
                        <Link key={posts._id} className="single-ref" to={"/post/"+posts._id}>{posts.title}<br/></Link>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Cloud_page;