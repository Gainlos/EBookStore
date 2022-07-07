import React from 'react';
import 'antd/dist/antd.min.css';
import {Card} from 'antd';
const {Meta}=Card;
class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:props.data
        }
    }
    render() {
        return (
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="BookCard" src={this.state.data.url} />}
            >
                <Meta title={this.state.data.title} description={this.state.data.description} />
            </Card>
        );
    }
}


export default BookCard;