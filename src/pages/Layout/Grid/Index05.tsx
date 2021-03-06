import {
  Typography,
  Row,
  Col,
} from 'antd';

import styles from './Index.less';

import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            Flex 布局基础。
            <br/>
            使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。
          </Paragraph>
        </Typography>
        <Row>
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
        <Row type="flex" justify="start">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
        <Row type="flex" justify="end">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={4} className={styles.col1}>col-1</Col>
          <Col span={4} className={styles.col2}>col-1</Col>
          <Col span={4} className={styles.col3}>col-1</Col>
          <Col span={4} className={styles.col4}>col-1</Col>
        </Row>
      </div>
    );
  }
}
export default Index;
