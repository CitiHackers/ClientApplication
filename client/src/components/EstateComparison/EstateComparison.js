import React from "react";
import { connect } from "dva";
import styles from "./EstateComparison.css";
import { Row, Col} from "antd";
class EstateComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.base}>
        <Row gutter = {32} type="flex" justify="center">
          <Col span = {12} className = {styles.side_box}>
            <div className={styles.instruction}>Example A</div>
            <div className={styles.instruction}>House Name: Clementi</div>
            <div className={styles.instruction}>House Price: S$ 500,000</div>
            <div className={styles.instruction}>House Rent price : S$ 1,000 per month</div>
            <div className={styles.instruction}>House Type: HDB </div>
            <div className={styles.instruction}>Number of rooms: 3</div>
            <img alt="logo" width={400} src = "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"></img>
          </Col>
          <Col span = {12} className = {styles.side_box}>
            <div className={styles.instruction}>Example B</div>
            <div className={styles.instruction}>House Name: Kent Ridge</div>
            <div className={styles.instruction}>House Price: S$ 1,000,000</div>
            <div className={styles.instruction}>House Rent price : S$ 2,500 per month</div>
            <div className={styles.instruction}>House Type: Flat </div>
            <div className={styles.instruction}>Number of rooms: 4</div>
            <img alt="logo" width={400} src = "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"></img>
          </Col>
        </Row>
      </div>
    )
  }
}

EstateComparison.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EstateComparison);
