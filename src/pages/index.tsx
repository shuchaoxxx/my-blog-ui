import { register } from '@/services/auth/api';
import { getCategoryList } from '@/services/category/api';
import React, { useEffect, useState } from 'react';
import { history, connect } from 'umi';
// import { Button } from '@/.umi/';
import { Button, DatePicker } from 'antd';
import auth from '@/models/auth';

function HomePage({ dispatch }) {
  const [categoryList, setCategoryList] = useState<any[]>([]);

  async function refresh() {
    try {
      const res = await getCategoryList();
      setCategoryList(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const login = () => {
    console.log(9);
    dispatch({
      type: 'auth/login',
      payload: {
        name: 'admin',
        password: 'admin123',
      },
    });

    // dispatch({
    //   type: 'auth/registerEffects',
    //   payload: {
    //     name: '111',
    //     password: '111',
    //     password_confirm: '111',
    //   },
    // });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <div>{auth.state.status}</div>
      <Button
        type="primary"
        onClick={() => {
          login();
        }}
      >
        666
      </Button>
      <DatePicker></DatePicker>
      {!categoryList && <p>Loading...</p>}
      {categoryList && (
        <div>
          {categoryList.map((post) => (
            <div key={post.id}>
              <div onClick={() => history.push(`/posts/${post.id}`)}>
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default connect(({ auth }) => {
  auth;
})(HomePage);
