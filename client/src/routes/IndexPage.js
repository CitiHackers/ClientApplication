import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import ProfileForm from "../components/ProfileForm/ProfileForm";
function IndexPage(props) {
  return (
    <div className={styles.base}>
      <div className={styles.form__assessment}>
        <div className={styles.form__content}>
          <ProfileForm/>
          </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(IndexPage);
