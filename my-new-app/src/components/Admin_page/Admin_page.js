import React from 'react';


class Admin_page extends React.Component{
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        fetch('/admin')
            .then(res => res.json())
            .then(comments => this.setState({comments}, () => console.log('comments fetched...',
            comments)));
    }
    render(){
        return(
            <React.Fragment>
                {this.state.comments.map( comments =>
                    <div className="ans-block" key={comments._id}> 
                        <div className="ans-block-text">
                            <span> Имя пользователя:{comments.name} <br/> </span>
                            <span>  Возраст:{comments.age} <br/> </span>
                            <span>  Тип обращения:{comments.type} <br/> </span>
                            <span>  Коммент:{comments.text} <br/> </span>
                        </div>
                        <div className="ans-block-image">
                            <img src={"/images/"+comments.filename} alt={comments.filename} width="400" height="450"/> 
                        </div>                          
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default Admin_page;