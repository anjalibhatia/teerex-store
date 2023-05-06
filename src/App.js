import React ,{useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
// import * as mainService from './mainService';


const BulkActionUpload = (props) => {
  const url = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
  const [allProductsList, setAllProductsList] = useState([]);

  const fetchProductList = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setAllProductsList(d))
  }

  useEffect(() => {
    fetchProductList();
  }, []);
  
  return (
    <div className="App">
      <div className='row'>
        {allProductsList.map((dataObj, index) => {
          return (
              <div className='col-4'>
                <img  alt='t-shirt' style={{width: '100%'}} src={dataObj.imageURL}></img>
                <div className='row'>
                <div className='col-6'>
                <p style={{ fontSize: 10, width: '8rem', color: 'black' }} className='text-uppercase'>{dataObj.price}</p>
                </div>
                <div className='col-6'>
                <button>Add to cart</button>
                </div>
                </div>
              </div>
          );
        })}
    </div>
    </div>
  );
}

export default BulkActionUpload;