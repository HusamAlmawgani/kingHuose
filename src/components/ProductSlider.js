import React, {useContext} from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
// import required modules
import { Navigation, Pagination } from 'swiper';
// import data
import { products } from '../data';
// import icons
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import {DataContext} from './DataProvider/DataProvider'
    

const ProductSlider = () => {
  const value = useContext(DataContext)
  const [products, setProducts] = value.products
  const addCart = value.addCart;
  // const { pages } = products;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='productSlider min-h-[1300px]'
    >
          <SwiperSlide>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
              {products.map((product, index) => {
                return (
                  <div
                    className='w-full max-w-[290px] h-[380px] text-left'
                    key={product.id}
                  >
                    <div className='border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition'>
                      {/* <img src={product} alt='' /> */}
                      <div onClick={() => addCart(product.id)} className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                        {/* زر الأضافة للسلة يتم فيه عملية API */}
                       <HiPlus className='text-xl text-primary'  />
                      </div>
                    </div>
                    <div className='font-semibold lg:text-xl'>{product.productName}</div>
                    <div className='flex items-center gap-x-3'>
                      <div>$ {product.price}</div>
                      {/* <div className='text-[15px] text-grey line-through'>
                        $ {oldPrice}
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
    
    
    </Swiper>
  );
};

export default ProductSlider;
