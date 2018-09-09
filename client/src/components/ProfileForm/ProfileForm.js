import React from "react";
import { connect } from "dva";
import styles from "./ProfileForm.css";
import { Row, Col, Input, Icon, Tooltip, Select } from "antd";
const Option = Select.Option;
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annualIncome: 0,
      personalSavings: 0,
      monthlyExpense: 0,
      cpfSavings:0,
      housingGrants:0,
      currentAge:0,
      selectedLocation:{}
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.base}>
        {/* annual income field */}
        <div className={styles.form__title}>
        Self-assessment
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Annual Income</div>
            </Col>
            <Col span={1} />
            <Col span={8}>
              <Input
                type="number"
                addonBefore="$"
                addonAfter="SGD"
                value={this.state.annualIncome}
                onChange={e => {
                  this.setState({
                    annualIncome: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Personal Savings</div>
            </Col>
            <Col span={1}>
              <Tooltip title="Current total personal savings available for real estate investment">
                <Icon
                  className={styles.form__tip}
                  type="question-circle"
                  theme="outlined"
                />
              </Tooltip>
            </Col>
            <Col span={8}>
              <Input
                type="number"
                addonBefore="$"
                addonAfter="SGD"
                value={this.state.personalSavings}
                onChange={e => {
                  this.setState({
                    personalSavings: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Monthly Expense</div>
            </Col>
            <Col span={1}>
              <Tooltip title="Expected monthly expense">
                <Icon
                  className={styles.form__tip}
                  type="question-circle"
                  theme="outlined"
                />
              </Tooltip>
            </Col>
            <Col span={8}>
              <Input
                type="number"
                addonBefore="$"
                addonAfter="SGD"
                value={this.state.monthlyExpense}
                onChange={e => {
                  this.setState({
                    monthlyExpense: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>CPF Savings</div>
            </Col>
            <Col span={1}>
              <Tooltip title="CPF savings available for real estate investment">
                <Icon
                  className={styles.form__tip}
                  type="question-circle"
                  theme="outlined"
                />
              </Tooltip>
            </Col>
            <Col span={8}>
              <Input
                type="number"
                addonBefore="$"
                addonAfter="SGD"
                value={this.state.cpfSavings}
                onChange={e => {
                  this.setState({
                    cpfSavings: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Housing Grants</div>
            </Col>
            <Col span={1}>
              <Tooltip title="Housing Grants / Insurance">
                <Icon
                  className={styles.form__tip}
                  type="question-circle"
                  theme="outlined"
                />
              </Tooltip>
            </Col>
            <Col span={8}>
              <Input
                type="number"
                addonBefore="$"
                addonAfter="SGD"
                value={this.state.housingGrants}
                onChange={e => {
                  this.setState({
                    housingGrants: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Current Age</div>
            </Col>
            <Col span={1}>
            </Col>
            <Col span={8}>
              <Input
                type="number"
                addonAfter="years old"
                value={this.state.currentAge}
                onChange={e => {
                  this.setState({
                    currentAge: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className={styles.form__item}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className={styles.input__caption}>Preferred Location</div>
            </Col>
            <Col span={1}>
            </Col>
            <Col span={8}>
            <Select
              showSearch
              style={{ width: 230 }}
              placeholder="Select a location"
              onChange={(value)=>{
                // console.log(value)
                this.setState({
                  selectedLocation: JSON.parse(value)
                })
              }}
            >
              <Option value={JSON.stringify({lat:1.3150696,lng:103.7652462})}>Clementi</Option>
              <Option value={JSON.stringify({lat:1.3403898,lng:103.7089875})}>Jurong West</Option>
              <Option value={JSON.stringify({lat:1.3490142,lng:103.8390947})}>Marymount</Option>
              <Option value={JSON.stringify({lat:1.4381922,lng:103.7889597})}>Woodlands</Option>
              <Option value={JSON.stringify({lat:1.3200544,lng:103.8917746})}>Geylang</Option>
              <Option value={JSON.stringify({lat:1.3343035,lng:103.8563265})}>Toa Payoh</Option>
              <Option value={JSON.stringify({lat:1.3774142,lng:103.7719498})}>Bukit Panjang</Option>
              <Option value={JSON.stringify({lat:1.3495907,lng:103.9567879})}>Tampines</Option>
              <Option value={JSON.stringify({lat:1.3612182,lng:103.8862529})}>Hougang</Option>
              <Option value={JSON.stringify({lat:1.3984457,lng:103.9072046})}>Punggol</Option>
            </Select>
            </Col>
          </Row>
        </div>
        <div className={styles.submit__button} onClick={()=>{
            this.props.dispatch({
                type:"profile/postData",
                payload:{
                    annualIncome: this.state.annualIncome,
                    personalSavings: this.state.personalSavings,
                    monthlyExpense: this.state.monthlyExpense,
                    cpfSavings:this.state.cpfSavings,
                    housingGrants:this.state.housingGrants,
                    currentAge:this.state.currentAge,
                    selectedLocation:this.state.selectedLocation
                }
            })
            // this.props.dispatch({
            //     type:"profile/postData"
            // })
        }}>
        Submit
        </div>
      </div>
    );
  }
}

ProfileForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(ProfileForm);
