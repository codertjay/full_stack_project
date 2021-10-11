import React from 'react';
import {List, Avatar, Space} from 'antd';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";


const IconText = ({icon, text}) => (
    <Space>
        {React.createElement (icon)}
        {text}
    </Space>
);


const Articles = (props) => {
    console.log (props.data)

    return (
        <List key={props.key}
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log (page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<Link to={`/articles/${item.id}`}>{item.title}</Link> }
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );

}


export default Articles;



