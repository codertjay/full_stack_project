import React, {Fragment} from "react";
import Articles from "../components/Article";
import axios from 'axios'
import CustomForm from "../components/Form";


class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount () {
        axios.get ('http://127.0.0.1:8000/api/article/')
            .then (res => {
                this.setState ({articles: res.data})
                console.log ('the data', res)
            })
            .catch (err => console.err (err))

    }

    render () {
        return (
            <div>
                <Articles key={this.state.articles.id}
                          data={this.state.articles}/>
                <br/>
                <h2> Create an article </h2>
                <CustomForm requestType="post" articleID={null}
                            buttonText="Create"
                />
            </div>
        )
    }
}

export default ArticleList
