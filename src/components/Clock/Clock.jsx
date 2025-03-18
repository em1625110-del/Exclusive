import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', display:'flex' }}>
      <p>
        <ul style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', display:'flex', gap:'5px'}}>
            <li>{formatTime(time.getHours())}</li>:
            <li>{formatTime(time.getMinutes())}</li>:
            <li>{formatTime(time.getSeconds())}</li>
        </ul>
      </p>
    </div>
  );
}

export default Clock;
