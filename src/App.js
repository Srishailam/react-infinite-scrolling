import React from "react";
import MerchantCard from "./components/MerchantCard";
import logo from './logo.svg';
import './App.css';

function App() {

  const [merchantData, setMerchantData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [paginate, setPaginate] = React.useState(15);

React.useEffect(() => {

  const fetchMerchantData = () => {
    setIsLoading(true);
    fetch('https://staging.api.1m.app/api/users/nearby/merchants')
    .then(data => data.json())
    .then(data => {
      setMerchantData(data);
      setIsLoading(false);
    })
    .catch();
  }

  fetchMerchantData();
}, [])


if (isLoading){
  return <>fetching the merchants info...</>
}


  return (
    <div className="App">
      {
        merchantData.slice(0,paginate).map( (eachMerchantInfo, index) => {
          return <div className="MerchantsContainer" key={eachMerchantInfo.id} data-testid={eachMerchantInfo.id}>
            <div>{index+1}</div>
            <MerchantCard merchantInfo={eachMerchantInfo}/>
          </div>
        })
      }
    </div>
  );
}

export default App;
