import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const TestComponent = () => {
  const { data, loading, error } = useFetch('http://localhost:1337/api/testings');
  const [state, setState] = useState({
    title: '',
    body: [],
    testId: '',
    todayDate: ''
  });

  useEffect(() => {
    if (data) {
      // Adjust this based on how data is structured
      const { title, body, testId, todayDate } = data; // Directly destructure from data
      setState({
        title: title || '', // Ensure default values
        body: body || [],   // Ensure body is always an array
        testId: testId || '',
        todayDate: todayDate || ''
      });
    }
  }, [data]);

  const renderBodyContent = () => {
    if (!Array.isArray(state.body)) return null;

    return state.body.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index}>
            {item.children.map((child, childIndex) =>
              child.type === 'text' ? child.text : null
            ).join(' ')}
          </p>
        );
      }
      return null;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Title: {state.title}</h1>
      {renderBodyContent()}
      <p>Test ID: {state.testId}</p>
      <p>Today Date: {state.todayDate}</p>
    </div>
  );
};

export default TestComponent;
