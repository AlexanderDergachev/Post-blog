import React from 'react';


class Edit_post_page extends React.Component{
    constructor(props) {
        super(props);
        this.id = props.match.params.id
        this.state = {
            post: [],
            post_title: '',
            post_text: ''
        }
    }
    onChangeTitleHandler = (e) => {
        this.setState({ post_title: e.currentTarget.value })
    }
    onChangeTextHandler = (e) => {
        this.setState({ post_text: e.currentTarget.value })
    }
    componentDidMount() {
        fetch('/post/edit/'+this.props.match.params.id)
            .then(res => res.json())
            .then(post => this.setState({post_title: post.title, post_text: post.text}, () => console.log('post fetched...',
            post)));
    }

    editPost(id){
        const title = document.getElementById('post_title').value;
        const text = document.getElementById('post_text').value;
        const file = document.getElementById('post_image').files[0];

        var data = new FormData();
        data.append('title', title);
        data.append('text', text);
        data.append('file', file);
        
        fetch('/post/edit/'+id, {
            method: 'put',
            body: data
            })
        .then(function(response){
            console.log(response);
        })

        document.getElementById('edit_post_title').innerHTML = "Спасибо!";
        document.getElementById('post_image').style.display = "none";
        document.getElementById('edit_post_button').style.display = "none";
        // document.location.replace("/posts");
    }
    deletePost(id){
        const title = document.getElementById('post_title').value;
        var data = new FormData();
        data.append('title', title);

        fetch('/post/delete/'+id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'},
            body: JSON.stringify( {id} )
            })
        .then(function(response){
            console.log(response);
        })
        document.location.replace("/posts");
    }
    render(){
        return(
            <React.Fragment> 
                <span  onClick={() => this.deletePost(this.props.match.params.id)}>удалить</span>
                <div className="head-create-post-page">
                    <h1 id="edit_post_title">Отредактируйте ниже</h1>
                </div>
                <div className="head-block-1">
                    <input onChange={this.onChangeTitleHandler} className="input-title" type="text" id="post_title" value={this.state.post_title} maxLength="110"></input><br/>
                    <textarea onChange={this.onChangeTextHandler} className="input-textarea" id="post_text" type="text" value={this.state.post_text}></textarea>
                    <input className="input-file" type="file" id="post_image"></input>
                    <span id="edit_post_button" className="create-post-input-button" onClick={() => this.editPost(this.props.match.params.id)}>Редактировать</span>
                </div>
            </React.Fragment>
        )
    }
}

export default Edit_post_page;