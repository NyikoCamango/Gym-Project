import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';

const MemberList = ({context}) => {

const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);


  const getMembers = async() => {
    let url = `https://fetch-your-body.herokuapp.com/public/members`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {members} = await response.json();
    setInitLoading(false);
    setList(members);
  }

  const getTrainers = async() => {
    let url = `https://fetch-your-body.herokuapp.com/public/trainers`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {trainers} = await response.json();
    setInitLoading(false);
    setList(trainers);
  }

  const makeTrainer = async (userId) => {
    let url = `https://fetch-your-body.herokuapp.com/public/makeTrainer`;
    const response = await fetch(url, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId
        })
    });
  }

  useEffect(() => {
    if(context === 'MEMBER'){
        getMembers()
    } else {
        getTrainers()
    }
  }, [context]);

    return (
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={context === 'MEMBER' &&  [<a onClick={() => makeTrainer(item.id)} key={item.id}>Make Trainer</a>]}
            >
              {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                <List.Item.Meta
                //   avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.email}</a>}
                  description={`Joined on ${item.updatedAt.substring(0, 10)}`}
                />
                {/* <div>content</div> */}
              {/* </Skeleton> */}
            </List.Item>
          )}
        />
      );


}

export default MemberList