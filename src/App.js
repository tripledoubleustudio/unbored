import React, {useState, useEffect} from 'react';
import './style.css';

const App = () => {

  const [activity, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://www.boredapi.com/api/activity/');
      const response = await data.json();
      console.log(response);
      setData(response);
    }
    fetchData();
  }, []);




  return(
    <>
    <header>Unbored</header>
    <div className="activity">{activity.activity}</div>
    <div className="type">– {activity.type}</div>
    </>
  )
}

export default App;
