import React, { Component } from  'react';
import axios from 'axios';

class ApiTest extends Component {

    getUserData(){
        axios.get('/api/get-user').then((resp) => {
            console.log('Response from get-user', resp);
        }).catch((err) => {
            console.log('Error from get-user', err);
        })
    }

    getArticleData(){
        axios.get('/api/get-articles').then(resp => {
            console.log('Resp from get-articles: ', resp)
        }).catch((err) => {
            console.log('Error from get-articles:', err.message);
        })
    }
    
    

    render(){
        return (
            <div>
                <h1>API Testing </h1>
                <button onClick={this.getUserData}>Get User Infor</button>
                <br/>
                <button onClick={this.getArticleData}>Get Article Data</button>
            </div>
        )
    }
}

export default ApiTest;