import React from 'react';
import 'antd/dist/antd.min.css';
import { Card, Col, Row } from 'antd';
import BookCard from "./BookCard";
// import {BookCard} from './BookCard';
class CardGrid extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            array:this.props.array
        }
    }
    render() {
        return(
            <div className="site-card-wrapper">
                {/*<p>1</p>*/}
                <Row gutter={16}>
                    <Col span={8}>
                        <BookCard id={this.state.array.shift()}/>
                    </Col>
                    <Col span={8}>
                        <BookCard id={this.state.array.shift()}/>
                    </Col>
                    <Col span={8}>
                        <BookCard id={this.state.array.shift()}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardGrid;