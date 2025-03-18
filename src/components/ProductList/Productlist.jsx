import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProductFetch } from '../redux/other-api/ProducSlice';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Product.scss'
import Clock from '../Clock/Clock';
function Productlist() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
 console.log(data);
 
  useEffect(() => {
    if (categoryName) {
      dispatch(getProductFetch(categoryName));
    }
  }, [dispatch, categoryName]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <Banner  />
      <div  className='carts'>
        {data.slice(0,1).map((item) => (
          <div key={item.id}>
      <h1 className='h1-carts'>{item.category}</h1>
      <div className='brand'>
        <h1>brand:{item.brand}</h1>
        <Clock/>
      </div>
      </div>
        ))}
      <div className='my-carts'>
      {data.map((item) => (
        <Cart key={item.id} data={item} />
      ))}
      </div>
      </div>
    </div>
  );
}

export default Productlist;
