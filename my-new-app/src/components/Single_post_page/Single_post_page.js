import React from 'react';
import {Link} from 'react-router-dom';


class Single_post_page extends React.Component{
    constructor() {
        super();
        this.state = {
            post: [],
            draw: false
        }
    }
    componentDidMount() {
        fetch('/post/'+this.props.match.params.id)
            .then(res => res.json())
            .then(post => this.setState({post: post, draw: true}));
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

    render(){
         const flag = this.state.draw;
         let myimg = null;
         if(flag){
             myimg = <img src={'/images/'+this.state.post.filename}  width="400" height="450"/>
         }
         if(flag){
            let splited = this.state.post.tag.split(',');
            console.log(splited);
         }
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
                    {/* <div className="single-post-image">
                        <img src={'/images/'+this.state.filename}  width="400" height="450"/>
                    </div> */}
                    {myimg}
                </div>
            </React.Fragment>
        )
    }
}

export default Single_post_page;