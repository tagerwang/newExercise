import React, { Component } from 'react';
import { Card, Tabs, Row, Col } from "antd";
import { StickyContainer, Sticky } from 'react-sticky';
import RefundItem from "./refundItem";
import RepaymentItem from "./repaymentItem";
import './account.css';
const TabPane = Tabs.TabPane;
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);
const onChangeTab = (activeKey) => {
  console.warn(activeKey)
  document.documentElement.scrollTop = document.body.scrollTop = 0
}
class account extends Component {
    constructor (props) {
        super(props)
        this.state = {
            paidTotal: 0,
            interestTotal: 0,
            refundList: [],
            repaymentList: []
        }
        fetch('./account.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        ...this.state,
                        refundList: data.refundList,
                        repaymentList: data.repaymentList
                    }, function (){
                        this.updateList()
                    })
                })
            }
        })
        
    }
    updateList () {
        let paidItems = 0 
        let interestTotal = 0
        this.setState.refundList = this.state.refundList.map((item, index) => {
            if (index === 0) {
                item.interest = Math.round((0.03/100)*(33*30000+28*30000+22*40000)) // 利息
                item.benj = item.refundAmount - item.interest
                paidItems = item.benj
                interestTotal = item.interest
            } else {
                item.interest = Math.round((0.03/100)*item.interestDays*(100000-paidItems))
                item.benj = item.refundAmount - item.interest
                paidItems += item.benj
                interestTotal += item.interest
            }
            return item
        })
        this.setState({
            ...this.state,
            paidTotal: paidItems,
            interestTotal
        })
    }
    render() {
        return (
            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} onChange={onChangeTab}>
                    <TabPane tab="还款记录" key="1" style={{ height: 'auto' }}>
                        <ul className = "refund-ul">
                            {this.state.refundList.map((item, index) => {
                                return <RefundItem 
                                index={index}
                                benj = {item.benj}
                                refundTime={item.refundTime} 
                                refundAmount={item.refundAmount}
                                interest={item.interest}
                                lastData ={this.state.refundList[index > 0 ? index - 1 : 0]}
                                 key={index}
                                 ></RefundItem>
                            })}
                        </ul>
                        <Card title={`合计`}>
                            <Row className = "refund-mb">
                                <Col span={8}>累计已还本金</Col>
                                <Col span={16} style={{textAlign: 'right'}}>￥{this.state.paidTotal}</Col>
                            </Row>   
                            <Row className = "refund-mb">
                                <Col span={8}>累计已还利息</Col>
                                <Col span={16} style={{textAlign: 'right'}}>￥{this.state.interestTotal}</Col>
                            </Row>
                            <Row className = "refund-mb">
                                <Col span={8}>其他</Col>
                                <Col span={16} style={{textAlign: 'right'}}>免息借款金额5万,已还1万</Col>
                            </Row>   
                            <Row className = "refund-mb">
                                <Col span={8}>总还款额(含利息)</Col>
                                <Col span={16} style={{textAlign: 'right'}}>￥{this.state.paidTotal + this.state.interestTotal + 10000}</Col>
                            </Row>                 
                        </Card>
                    </TabPane>
                    <TabPane tab="借款记录" key="2" style={{ height: 'auto' }}>
                        <ul className = "refund-ul">
                            {this.state.repaymentList.map((item, index) => {
                                return <RepaymentItem 
                                index={index}
                                benj = {item.benj}
                                time={item.time} 
                                amount={item.amount}
                                interest={item.interest}
                                 key={index}
                                 ></RepaymentItem>
                            })}
                        </ul>
                        <Card title={`其他`}>
                            <Row className = "refund-mb">
                                <Col span={8}>日利率</Col>
                                <Col span={16} style={{textAlign: 'right'}}>0.03%</Col>
                            </Row>   
                            <Row className = "refund-mb">
                                <Col span={12}>总借款15万</Col>
                                <Col span={12} style={{textAlign: 'right'}}>免息借款金额5万</Col>
                            </Row>                  
                        </Card>
                    </TabPane>
                    {/* <Header></Header> */}
                </Tabs>
            </StickyContainer>
        );
    }
}

export default account;