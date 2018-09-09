import React from "react";
import { connect } from "dva";
import styles from "./EstateList.css";
import { List, Avatar, Icon } from "antd";
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    house_id: Math.random(),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}
for (let i = 0; i < 5; i++) {
  listData.push({
    href: "http://ant.design",
    title: `Hi this issome  contect`,
    house_id: Math.random(),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}
const IconText = ({ type, text, onClick }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
      onClick={onClick}
    />{" "}
    {text}{" "}
  </span>
);
class EstateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div className={styles.base}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 4
            }}
            dataSource={listData}
            footer={
              <div>
                <b> ant design </b> footer part{" "}
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    type="star-o"
                    text="156"
                    onClick={() => {
                      console.log(item);
                      this.props.dispatch({
                        type: "estateData/addEstate",
                        payload: {
                          item
                        }
                      });
                    }}
                  />,
                  <IconText
                    type="like-o"
                    text="156"
                    onClick={() => {
                      console.log(item);
                      this.props.dispatch({
                        type: "estateData/removeEstate",
                        payload: {
                          estateId:item.house_id
                        }
                      });
                    }}
                  />,
                  <IconText type="message" text="2" />
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}> {item.title} </a>}
                  description={item.description}
                />{" "}
                {item.content}{" "}
              </List.Item>
            )}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

EstateList.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EstateList);
