import React, { Component } from 'react';
import { Card, Row, Col } from "antd";
const { Meta }  = Card
class RepaymentItem extends Component {
    constructor (props) {
        super(props)
        // console.log(props, 'propsItem')
        this.state = {
            selfAmounted: 0
        }
    }
    render() {
        return (
            <li>
                <Card title={`${this.props.time} 借款`}>
                <Row className = "refund-mb">
                    <Col span={8}>借款金额</Col>
                    <Col span={16} style={{textAlign: 'right'}}>￥{this.props.amount}</Col>
                </Row>
                    {/* <Meta
                    title={this.props.refundAmount}
                    description={this.props.refundTime}
                    ></Meta> */}
                </Card>
            </li>
        );
    }
}

export default RepaymentItem;