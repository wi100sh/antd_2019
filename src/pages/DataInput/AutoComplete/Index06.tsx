import {
  Typography,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            查询模式: 不确定类目。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
