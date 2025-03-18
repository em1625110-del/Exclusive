import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryPage() {
  const { categoryName } = useParams(); 
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
        console.log(response.data); 
        if (response.data.products && response.data.products.length > 0) {
          setCategoryData(response.data.products);
        } else {
          setCategoryData([]); 
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };
  
    fetchCategoryData();
  }, [categoryName]);
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='category-page'>
      <h1>{categoryName}</h1>
      {categoryData.length === 0 ? (
        <p>Нет продуктов в данной категории</p>
      ) : (
        <ul>
          {categoryData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default CategoryPage;
