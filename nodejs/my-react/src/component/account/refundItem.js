import React, { Component } from 'react';
import { Card, Row, Col } from "antd";
const { Meta }  = Card
class RefundItem extends Component {
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
                <Card title={`${this.props.refundTime} 还款`}>
                <Row className = "refund-mb">
                    <Col span={8}>还款金额</Col>
                    <Col span={16} style={{textAlign: 'right'}}>￥{this.props.refundAmount}</Col>
                </Row>
                <Row className = "refund-mb">
                    <Col span={8}>本金：</Col>
                    <Col span={16} style={{textAlign: 'right'}}>￥{this.props.benj}</Col>
                </Row>
                <Row>
                    <Col span={8}>利息：</Col>
                    {this.refundAmount(this.props.index, this.props.interestDays, this.props.lastData)}
                </Row>
                    {/* <Meta
                    title={this.props.refundAmount}
                    description={this.props.refundTime}
                    ></Meta> */}
                </Card>
            </li>
        );
    }
    refundAmount (index, interestDays, lastData) {
        return <Col span={16} style={{textAlign: 'right'}}>￥{this.props.interest}</Col>
    }
}

export default RefundItem;