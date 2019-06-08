import React from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
import {Link} from 'react-router-dom';

class Posts_page extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: [],
            search: ''
        }
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 20)});
    }
    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({posts}));
    }
    render(){
        let m_posts = this.state.posts.filter(
            (posts) => {
                return posts.tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return(
            <React.Fragment>
                {/* <Header/> */}
                <div className="post-title">
                    <h1>Выберите интересующий вас пост!</h1>
                </div>
                <input value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                <div className="post-container">
                    {m_posts.map( posts =>
                        <Link key={posts._id} className="single-ref" to={"/post/"+posts._id}>{posts.title}<br/></Link>
                    )}
                </div>
                {/* <Footer/> */}
            </React.Fragment>
        )
    }
}

export default Posts_page;