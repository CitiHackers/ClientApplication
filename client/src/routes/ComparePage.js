import React from "react";
import { connect } from "dva";
import styles from "./ComparePage.css";
import EstateComparison from '../components/EstateComparison/EstateComparison'
import {Row,Col} from 'antd'
function ComparePage(props) {
  return (
<div className={styles.base}>
    <Row type="flex" justify="center">
            <Col span={4}>
              
            </Col>
            <Col span={16}>
            <EstateComparison />
            </Col>
            <Col span={4}>
            </Col>
          </Row>
      
    </div>
  );
}

ComparePage.propTypes = {};
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ComparePage);
