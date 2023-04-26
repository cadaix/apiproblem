import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
         <div>TOPLAM TUTAR <span>{totalAmount} $</span></div>
        </div>
      ) : (
        <div>Sepetiniz Boş..</div>
      )}
    </div>
  );
};

export default Cart;
