import React from "react";
import { connect } from "dva";
import styles from "./ListPage.css";
import EstateList from "./../components/EstateList/EstateList";
import {Row, Col, Affix} from 'antd'
function ListPage(props) {
  return (
    <div className={styles.base}>
    <Affix>
    <div className={styles.navigation}>
    </div>
    </Affix>
    <Row type="flex" justify="center">
            <Col span={4}>
              
            </Col>
            <Col span={16}>
            <EstateList />
            </Col>
            <Col span={4}>
            </Col>
          </Row>
      
    </div>
  );
}

ListPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ListPage);
