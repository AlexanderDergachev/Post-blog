import React from 'react';
import {Link} from 'react-router-dom';


class Single_post_page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        fetch('/post/'+this.props.match.params.id)
            .then(res => res.json())
            .then(post => this.setState({post}));
    }

    // componentWillMount() {
    //     const request = async () => {
    //         const response = await fetch('/post/'+this.props.match.params.id)
    //         // .then(res => res.json())
    //         const json = await response.json();
    //         const post = await this.setState({post : json});
    //     } 
    //     request();
        
    // }
    test(str){
        return str.split(',');
    }
    render(){
         this.test.bind(this.state.post.tag);
         console.log(this.state.post.tag);
         
        return(
            <React.Fragment>
                <div className="delete-post-tot">
                    <Link to={'/post/edit/'+this.state.post._id}>Редактировать</Link>
                    </div>
                <div className="single-post-title">
                    <h1>{this.state.post.title}</h1>
                </div>
                <div className='single-post-main'>
                    <div className="single-post-text">
                        {this.state.post.text}
                    </div>
                    <div className="single-post-image">
                        <img src={"/images/"+this.state.post.filename} alt={this.state.post.filename} width="400" height="450"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Single_post_page;