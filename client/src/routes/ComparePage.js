import React from "react";
import { connect } from "dva";
import styles from "./ComparePage.css";
import EstateComparison from '../components/EstateComparison/EstateComparison'
function ComparePage(props) {
  return (
    <div className={styles.base}>
      <div className={styles.form__assessment}>
        <div className={styles.form__content}>
          <EstateComparison/>
          </div>
      </div>
    </div>
  );
}

ComparePage.propTypes = {};
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ComparePage);
