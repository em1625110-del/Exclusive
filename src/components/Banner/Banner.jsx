import 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import banner from '../../assets/img/image.png'; 
import { getCategories } from '../redux/other-api/CategorySlice.js';

function Banner() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className='banner container'>
      <div className='sidebar'>
        <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link to={`/category/${item}`}>{item}</Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Карусель */}
      <div className='carousel'>
        <Carousel fade>
          {[...Array(3)].map((_, index) => (
            <Carousel.Item key={index}>
              <img src={banner} alt={`Slide ${index + 1}`} className="carousel-image" />
              <Carousel.Caption>
                <h3>{`Slide ${index + 1}`}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
