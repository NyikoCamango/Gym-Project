import { List } from "antd";
import { useEffect, useState } from "react";

const EventRequests = ({ context }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);

  const approveEvent = async (id) => {
    let url = `https://fetch-your-body.herokuapp.com/public/approveEvent/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const rejectEvent = async (id) => {
    let url = `https://fetch-your-body.herokuapp.com/public/rejectEvent/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getEvents = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/getPendingEvents`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { events } = await response.json();
    setInitLoading(false);
    setList(events);
  };

  useEffect(() => {
    getEvents();
  }, [context]);

  return (
    <List
      className='demo-loadmore-list'
      loading={initLoading}
      itemLayout='horizontal'
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a onClick={() => approveEvent(item.id)} key={item.id}>
              Approve
            </a>,
            <a onClick={() => rejectEvent(item.id)} key={item.id}>
              Reject
            </a>,
          ]}
        >
          {/* <Skeleton avatar title={false} loading={item.loading} active> */}
          <List.Item.Meta
            //   avatar={<Avatar src={item.picture.large} />}
            title={item.title}
            description={`Scheduled for ${item.eventDate.substring(0, 10)}`}
          />
          <div>{item.description}</div>
          {/* </Skeleton> */}
        </List.Item>
      )}
    />
  );
};

export default EventRequests;
