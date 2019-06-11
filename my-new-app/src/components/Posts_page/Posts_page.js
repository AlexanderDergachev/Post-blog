import React from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
import {Link} from 'react-router-dom';

class Posts_page extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: [],
            search: '',
            draw: false,
            tags: []
        }
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 20)});
    }
    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({posts: posts, draw: true}))
    }

    render(){
        const flag = this.state.draw;
        
        // if(flag){
        //     let splited = this.state.post.tag.split(',');
        //     console.log(splited);
        //  }
        let m_posts = this.state.posts.filter(
            (posts) => {
                return posts.tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );


        return(
            <React.Fragment>
                <div className="post-title">
                    <h1>Выберите интересующий вас пост!</h1>
                </div>
                <input className="search-input" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Поиск по тэгам"></input>
                <div className="post-container">
                    {m_posts.map( posts =>
                        <Link key={posts._id} className="single-ref" to={"/post/"+posts._id}>{posts.title}<br/></Link>
                    )}

                </div>
            </React.Fragment>
        )
    }
}

export default Posts_page;