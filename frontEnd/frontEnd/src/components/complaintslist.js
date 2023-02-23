import React from "react";
import { Stack, Alert, AlertTitle, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ({ context }) {
  const [list, setList] = useState([]);
  const [initLoading, setInitLoading] = useState(true);

  //function to get Events
  const getComplaints = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/complain`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { complaints } = await response.json();
    //
    //setInitLoading(false);
    setList(complaints);
  };
  const complaints = {
    title: "sample name",
    description: "sample description",
  };
  return (
    <div>
      <Typography align='center' component='h1' variant='h3' sx={{ m: 1 }}>
        <span>User Complaints</span>
      </Typography>

      <List
        className='demo-loadmore-list'
        loading={initLoading}
        itemLayout='horizontal'
        dataSource={list}
        renderItem={(item) => (
          <List.Item actions={context === "complaint"}>
            {/* <Skeleton avatar title={false} loading={item.loading} active> */}
            <List.Item.Meta
              //   avatar={<Avatar src={item.picture.large} />}
              title={<a href='https://ant.design'>{item.title}</a>}
              description={`Date filed ${item.updatedAt.substring(0, 10)}`}
            />
            {/* <div>content</div> */}
            {/* </Skeleton> */}
          </List.Item>
        )}
      />
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>T{complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          variant='filled'
          severity='error'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>{complaints.title}</AlertTitle>
          {complaints.description}
        </Alert>
        <p>List of all the complaints sent </p>
      </Stack>
    </div>
  );
}
