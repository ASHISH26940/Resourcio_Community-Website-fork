import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {  renderMediaFiles,rendermarkDown } from '../../hooks/mediaUtils';

const MediaTest = () => {
  const { data, loading, error } = useFetch('http://localhost:1337/api/mediatestings?populate=*');
  const [sampleData, setSampleData] = useState(null);
  const [markDown,setMarkDown]=useState([
    data,
    error,
    loading
  ]);
  useEffect(() => {
    if (data) {
      setSampleData(data);
    }
  }, [data]);
  useEffect(()=>{
    const { data, loading, error } = useFetch('http://localhost:1337/api/markdowns?populate=*');
    const updateState=(prevState)=>{
      if(data)
      {
        setMarkDown(data);
      }
      else return null
    }
    updateState()
  },[data])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>MediaTest</h1>
      {sampleData && sampleData.data.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '16px', marginBottom: '16px' }}>
          {/* {renderAttributes(item.attributes)} */}
          {renderMediaFiles(item.attributes.mediaFiles)}
          {rendermarkDown(iten)}
        </div>
      ))}
    </div>
  );
};

export default MediaTest;
