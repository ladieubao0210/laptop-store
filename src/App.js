import { css } from "@emotion/react";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
display: flex;
position: absolute;
top: 380px;
left: 49%;
width: 30px;
height: 30px;
`

function App() {
  const product = useSelector(state => state.product.laptopItems)
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?
          <ClipLoader color={"#CC9C8A"} loading={loading} css={override} />
          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<ProductListPage />} />
            <Route path='/product/:id' element={<ProductInfo product={product} />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>

      }
    </>
  );
}

export default App;