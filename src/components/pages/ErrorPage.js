import React from 'react';
import { Link } from "react-router-dom";
import { Result, Button } from 'antd'

const ErrorPage = () => {
  return (
    <Result
      status="error"
      title="404"
      subTitle="this page not found"
      extra={[
        <Button type="primary" key="console">
          <Link to="/">Go Home</Link>
        </Button>
      ]}
    />
  )
};

export default ErrorPage;
