import React, { Component } from 'react';
import A from './A'
@A
class B extends Component {
    render() {
        return (
            <div>
                这是B组件
            </div>
        );
    }
}

// export default A(B); // 用装饰器直接@A 再抛出B即可
export default B;