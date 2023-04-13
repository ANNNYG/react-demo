import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Routers } from 'app/Router/index';

import { HomeItem } from './style';

const Home = () => {
  const navigate = useNavigate();

  const handleClickRouter = (path?: string) => {
    navigate(path!);
  };

  return (
    <div>
      {Routers.map(v => (
        <HomeItem key={v.name}>
          <Button type="link" onClick={() => handleClickRouter(v.path)}>
            {v.name}
          </Button>
        </HomeItem>
      ))}
    </div>
  );
};

export default Home;
