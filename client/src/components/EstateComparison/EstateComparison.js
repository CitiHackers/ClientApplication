import React from "react";
import { connect } from "dva";
import styles from "./EstateComparison.css";
class EstateComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
        <div>
        hello world
        </div>
    )
  }
}

EstateComparison.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EstateComparison);
