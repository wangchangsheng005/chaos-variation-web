import React, { Component } from 'react';
import { Card , Calendar , Button ,Table,Alert  } from 'antd';
import { connect } from 'dva';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
@connect(({ uManagement, loading }) => ({  // 连接uManagement.js文件
  uManagement,
  loading: loading.models.uManagement,
}))



export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'uManagement/queryUserAll',
    });
  }

  ondbButton = event => {
    const { dispatch } = this.props;
    dispatch({
      type: 'uManagement/dbButton',
    });
    return (alert(this.props));
  };

  render() {

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];
    const { uManagement: { record } } = this.props;
    const dataSource = [...record];
    return (
      <div>
        <div>
          {
            this.state.cardList.map(card => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            })
          }
      </div>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div>
          <Table
            bordered
            dataSource={dataSource}
            columns={columns}
            size="small" />
        </div>
        <div><Button type="primary"  onClick = {this.ondbButton}>点击</Button></div>
      </div>
    );
  }

}