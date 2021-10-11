import React, {Component} from 'react';
import {Form, Input, Button} from "antd";
import axios from 'axios'

const FormItem = Form.Item

class CustomForm extends Component {

    handelFormSubmit = (event, requestType, articleID) => {
        console.log ('called form submit')
        event.preventDefault ()
        const title = event.target.elements.title.value
        const description = event.target.elements.description.value
        const content = event.target.elements.content.value
        console.log ('title', description, content)
        console.log ('requestType',requestType)
        console.log ('articleID',articleID)
        switch (requestType) {
            case 'post':
                axios.post ('http://127.0.0.1:8000/api/article/', {
                    title: title,
                    description: description,
                    content: content
                }).then (res => console.log (res.data))
                    .catch (err => console.error(err))
                console.log ('posting')
            case 'put':
                axios.put (`http://127.0.0.1:8000/api/article/${articleID}/`, {
                    title: title,
                    description: description,
                    content: content
                }).then (res => console.log (res.data))
                    .catch (err => console.log (err))
                console.log ('updating')

        }
    }

    render () {
        return (
            <div>
                <form onSubmit={(event) => this.handelFormSubmit (event, this.props.requestType,
                    this.props.articleID)}>
                    <FormItem label="Title">
                        <Input name="title" placeholedr="Put a title here "/>
                    </FormItem>
                    <FormItem label="Description">
                        <Input name="description" placeholedr="Put your description here "/>
                    </FormItem>
                    <FormItem label="Content">
                        <Input name="content" placeholedr="Enter some content..."/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
                </form>
            </div>
        );
    }
}


export default CustomForm;