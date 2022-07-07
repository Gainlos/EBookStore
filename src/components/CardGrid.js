import React from 'react';
import 'antd/dist/antd.min.css';
import { Card, Col, Row } from 'antd';
// import {BookCard} from './BookCard';
class CardGrid extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardGrid;