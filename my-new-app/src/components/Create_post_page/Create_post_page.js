import React from 'react';


class Create_post_page extends React.Component{

    sendPost(){
        const title = document.getElementById('post_title').value;
        const text = document.getElementById('post_text').value;
        let tag = document.getElementById('post_tag').value;
        let tags = JSON.stringify(document.getElementById('post_tag').value.split(','));
        const file = document.getElementById('post_image').files[0];
        var data = new FormData();
        data.append('title', title);
        data.append('text', text);
        data.append('tag', tag);
        data.append('tags', tags);
        data.append('file', file);
        
        fetch('/create-post', {
            method: 'post',
            body: data
            })
        .then(function(response){
            console.log(response);
        })

        document.getElementById('create_post_title').innerHTML = "Спасибо!";
        document.getElementById('button_create_post').style.display = "none";
        document.getElementById('post_image').style.display = "none";

    }

    render(){
        return(
            <React.Fragment>
                <div className="head-create-post-page">
                    <h1 id="create_post_title">Напишите что-нибудь ниже!</h1>
                </div>
                <div className="head-block-1">
                    <input className="input-title" type="text" id="post_title" placeholder="Введите заголовок" maxLength="110"></input><br/>
                    <input type="text" id="post_tag" placeholder="Тэг"></input><br/>
                    <textarea className="input-textarea" id="post_text" type="text" placeholder="Введите что-нибудь крутое"></textarea>
                    <input className="input-file" type="file" id="post_image"></input>
                    <span id="button_create_post" className="create-post-input-button" onClick={this.sendPost}>Отправить</span>
                </div>
            </React.Fragment>
        )
    }
}

export default Create_post_page;