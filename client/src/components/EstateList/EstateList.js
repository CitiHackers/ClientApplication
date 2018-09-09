import React from "react";
import { connect } from "dva";
import styles from "./EstateList.css";
import { List, Avatar, Icon } from "antd";
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    starred: false,
    price:533110,
    type:'CONDO',
    rent:2100,
    size: '100 sqft',
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
const IconText = ({theme, type, text, onClick }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
      theme={theme}
      onClick={onClick}
    />
    {text}
  </span>
);
class EstateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}
  loadIconText(item){
    //item exist in list
    if(this.props.estateData.selectedEstates.indexOf(item)!==-1){
      return([
        <IconText
          type="star-o"
          theme="filled"
          text="Favorited"
          onClick={()=>this.removeItem(item)}
        />,
        <IconText
          type="dollar"
          text={item.price>1000000?(item.price/1000000).toFixed(1)+'mil':(item.price/1000).toFixed(1)+'k'}
        />,
        <IconText type="home" text={`${item.type}   ${item.size}`} />,
      ])
    }
    else{
      return([
        <IconText
          type="star-o"
          text="Favorite"
          onClick={()=>this.addItem(item)}
        />,
        <IconText
          type="dollar"
          text={item.price>1000000?(item.price/1000000).toFixed(1)+'mil':(item.price/1000).toFixed(1)+'k'}
        />,
        <IconText type="home" text={`${item.type}, ${item.size}`} />
      ])
    }
  }
  addItem(item){
    this.props.dispatch({
      type: "estateData/addEstate",
      payload: {
        item
      }
    });
  }
  removeItem(item){
    this.props.dispatch({
      type: "estateData/removeEstate",
      payload: {
        estateId:item.house_id
      }
    });
  }
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
                <b> ant design </b> footer part
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={this.loadIconText(item)}
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
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

EstateList.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EstateList);
