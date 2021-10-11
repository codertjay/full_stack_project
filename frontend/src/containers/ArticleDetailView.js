import React, {Component} from 'react';
import axios from "axios";
import {Button, Card} from "antd";
import CustomForm from "../components/Form";
import {Redirect} from 'react-router-dom'

class ArticleDetailView extends Component {
    state = {
        article: {}
    }

    componentDidMount () {
        const articleId = this.props.match.params.articleID
        axios.get (`http://127.0.0.1:8000/api/article/${articleId}`)
            .then (res => {
                this.setState ({article: res.data})
                console.log ('the data', res)
            })
    }

    handleDelete = e => {
        e.preventDefault()
        const articleId = this.props.match.params.articleID

        axios.delete(`http://127.0.0.1:8000/api/article/${articleId}`)
            .then(res => {
                console.log ('article deleted')
            })

    }


    render () {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br/>
                <h2> Create an article </h2>
                <CustomForm responseType="put"
                            articleID={this.props.match.params.articleID}
                            buttonText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button htmlType="submit" type="danger">Delete</Button>
                </form>
            </div>
        );
    }
}

export default ArticleDetailView;