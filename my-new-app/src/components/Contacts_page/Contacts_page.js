import React from 'react';
import './contacts.css';



class Contacts_page extends React.Component{
    sendComment(){
        const name = document.getElementById('comment_name').value;
        const age = document.getElementById('comment_age').value;
        const type = document.getElementById('comment_type').value;
        const text = document.getElementById('comment_text').value;
        const file = document.getElementById('comment_file').files[0];
        
        var data = new FormData();
        data.append('name', name);
        data.append('age', age);
        data.append('type', type);
        data.append('text', text);
        data.append('file', file);
        
        fetch('/contacts', {
            method: 'post',
            body: data
            })
        .then(function(response){
            console.log(response);
        })

        document.getElementById('question_block_id').innerHTML = "Спасибо!";
        document.getElementById('question_form_id').style.display = "none";
        // document.location.replace("/");

    }
    render(){
      return(
        <React.Fragment>
            <main>
                <div className="head-contacts">
                    <h1>Контакты</h1>
                    <div>
                        Как с нами связаться
                    </div>
                </div>
                <div className="block-area-1-contacts">
                    <div className="block-1-contacts">
                        г. Киев, ул. Большая Васильковская, 42<br/>
                        Пн-Пт: 8:00-22:00, Сб-Вс: 9:00-22:00
                    </div>
                    <div className="block-2-contacts">
                        +38 (044) 501-37-87<br/>
                        +38 (096) 725-68-75
                    </div>
                    <div className="block-3-contacts">
                        WordPress@gmail.com<br/>
                        WordPress.com.ua
                    </div>
                </div>
                <h1 className="question" id="question_block_id">
                    Есть вопросы или предложения?<br/>
                    Заполните форму обратной связи!
                </h1>
                <div className="my-form" encType="multipart/form-data">
                    <form id="question_form_id">
                        <div className="input-name">
                            <label>Имя</label>
                            <input type="text" name="userName" maxLength="15" id="comment_name" />
                        </div>
                        <div className="input-age">
                            <label>Возраст</label>
                            <input type="number" name="userAge" maxLength="3" id="comment_age" />
                        </div>
                        <div className="input-type">
                            <label>Тип обращения</label>
                            <select name="userType" type="text" id="comment_type">
                                <option>Пресcа</option>
                                <option>Партнерство</option>
                                <option>Другое</option>
                            </select><br/>
                        </div>
                        <div className="input-comment">
                            <label>Комментарий</label>
                            <textarea name="userText" type="text" maxLength="30" id="comment_text"></textarea>
                        </div>
                        <div className="input-file">
                            <input type="file" name="avatar" id="comment_file" />
                        </div>
                        <div className="input-button">
                            <span onClick={this.sendComment}>Отправить</span>
                        </div>
                    </form>
                </div>
            </main>                
        </React.Fragment>
      )
    }
}

export default Contacts_page;