import React from "react";
import { connect } from "dva";
import styles from "./Example.css";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div />;
  }
}

Example.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Example);
