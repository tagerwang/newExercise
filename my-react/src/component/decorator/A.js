import React, { Component } from 'react';

export default function(ElseComponent){
    return class A extends Component {
        // constructor(props){
        //     super(props)
        // }

        render() {
            return (
                <div>
                    组件A----react 高阶组件
                    
                    <ElseComponent/>
                </div>
            );
        }
    }
}