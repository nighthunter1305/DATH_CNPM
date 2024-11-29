import React, { createContext, useContext, useState } from 'react';

// Tạo context
const ProductContext = createContext();

// Tạo provider
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/f3/cf/7d/f3cf7dcc9659b26070dc992b755ee5a9.jpg',
      name: 'Hành hoa ',
      price: '50,000',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/52/16/30/52163035cc1bdebd100316d5a693f6a5.jpg',
      name: 'Cần tây',
      price: '120,000',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/0a/66/d2/0a66d2d5bfda1fa0bcd240620b3b18bd.jpg',
      name: 'Khoai lang',
      price: '35,000',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/b7/f2/3f/b7f23fe82a2f1c47c4c826d0a196ac71.jpg',
      name: 'Súp lơ',
      price: '75,000',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/ee/bc/53/eebc53bf8a2813ee654f351e52c18bcf.jpg,https://i.pinimg.com/736x/6c/5a/d7/6c5ad76aa34366dd56113a93f3b0eafa.jpg',
      name: 'Cải thảo nhà trồng',
      price: '30,000',
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/ee/59/70/ee5970a4cc4f66965d42e2ace382fda7.jpg',
      name: 'Củ dền',
      price: '78,000',
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/2b/39/57/2b3957f114ea136697805f508682f4e1.jpg',
      name: 'Sầu riêng Đắk Lắk',
      price: '80,000',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/236x/4e/91/11/4e911118b84a0da507f2e7f3bfa4dac6.jpg',
      name: 'Hạt óc chó',
      price: '135,000',
    },
    {
      id: 9,
      image: 'https://i.pinimg.com/736x/f3/62/aa/f362aa15e2c0dd16e73c0953257bdba6.jpg',
      name: 'Mắm mực Khánh Hòa 500ml',
      price: '75,000',
    },
    {
      id: 10,
      image: 'https://i.pinimg.com/736x/ee/ab/9e/eeab9e39737fc183c28b627d915d8798.jpg',
      name: 'Gà ta',
      price: '180,000',
    },
    {
      id: 11,
      image: 'https://i.pinimg.com/236x/79/c8/23/79c823fa4cff546a3b1ae384e98a2474.jpg',
      name: 'Hạt dẻ cười',
      price: '427,000',
    },
    {
      id: 12,
      image: 'https://i.pinimg.com/736x/ff/1b/ac/ff1bacf2568fde566555fb851de4ce9a.jpg',
      name: 'Giò heo',
      price: '200,000',
    },
    {
      id: 13,
      image: 'https://i.pinimg.com/736x/07/33/9c/07339cc4a6816a65ef9f400d6b285211.jpg',
      name: '10 cái Nem chua Lai Vung Giao Tho',
      price: '30,000',
    },
    {
      id: 14,
      image: 'https://i.pinimg.com/736x/67/31/0b/67310b1a694d6f6c90097eaa653d7276.jpg',
      name: 'Gà ủ muối',
      price: '150,000',
    },
    {
      id: 15,
      image: 'https://i.pinimg.com/736x/db/d7/72/dbd772d6c48f6bc93cfa474c03398f74.jpg',
      name: '1kg Trâu gác bếp',
      price: '450,000',
    },
    {
      id: 16,
      image: 'https://i.pinimg.com/736x/5f/95/ae/5f95ae03e236c3cc72a307636080cc66.jpg',
      name: 'Mực tẩm gia vị',
      price: '80,000',
    },
    {
      id: 17,
      image: 'https://i.pinimg.com/736x/c3/46/70/c34670067645b6a06312fc6468b34b5e.jpg',
      name: '1kg Bánh tráng muối',
      price: '70,000',
    },
    {
      id: 18,
      image: 'https://i.pinimg.com/736x/c9/e9/80/c9e98025e17d0ccb54822d38bac38d35.jpg',
      name: 'Kẹo dừa Bến Tre',
      price: '780,000',
    },
    {
      id: 19,
      image: 'https://i.pinimg.com/736x/e2/07/7d/e2077d1f55a9b2673474e0ef2cb43d5a.jpg',
      name: 'Nước mắm Phú quốc 500ml',
      price: '70,000',
    },
    {
      id: 20,
      image: 'https://i.pinimg.com/236x/af/4f/73/af4f739f9d580a44e09748e7e05f5abc.jpg',
      name: '1kg Hoa quả sấy mix',
      price: '125,000',
    },
    {
      id: 21,
      image: 'https://i.pinimg.com/736x/c7/de/c1/c7dec19a8f9cea87ca869502d06814ec.jpg',
      name: '50 cây Nem chua Thanh Hóa',
      price: '130,000',
    },
    {
      id: 22,
      image: 'https://i.pinimg.com/736x/be/a7/fc/bea7fc7dc26c388de396376340a80ae6.jpg',
      name: '1kg xoài xanh + mắm nêm',
      price: '78,000',
    },
    {
      id: 23,
      image: 'https://i.pinimg.com/736x/53/81/1f/53811f85dd478b42f9f3503071413d30.jpg',
      name: 'Trứng ngỗng',
      price: '37,000',
    },
    {
      id: 24,
      image: 'https://i.pinimg.com/236x/f0/31/82/f03182d675895035ca5bc5835f40dc95.jpg',
      name: '1l Sữa bắp nhà làm',
      price: '55,000',
    },
    {
      id: 25,
      image: 'https://i.pinimg.com/236x/5b/b5/55/5bb555225178ca40c27168ef0b010645.jpg',
      name: '5 cái Bánh giò Cô Ba',
      price: '60,000',
    },
    {
      id: 26,
      image: 'https://i.pinimg.com/736x/f9/83/6e/f9836e784d6ee09e4b8cc48417fe6ba4.jpg',
      name: 'Khô cá lóc 1 nắng',
      price: '168,000',
    },
    {
      id: 27,
      image: 'https://i.pinimg.com/736x/de/1e/44/de1e44091dd301b0fd37b3f31d0e3f65.jpg',
      name: 'Bơ Đắk Lắk',
      price: '32,000',
    },
    {
      id: 28,
      image: 'https://i.pinimg.com/736x/49/07/7a/49077abf8e3a7c26b963374033b08743.jpg',
      name: 'Bánh chưng nhà làm',
      price: '40,000',
    },
    {
      id: 29,
      image: 'https://i.pinimg.com/236x/dd/fc/dd/ddfcdd377daea1278a74666dcf2a243e.jpg',
      name: '5 cái Bánh tiêu',
      price: '20,000',
    },
    {
      id: 30,
      image: 'https://i.pinimg.com/736x/12/d5/cb/12d5cb16f9eb1cb00ad6cf904e059012.jpg',
      name: 'Hành tây Đà Lạt',
      price: '75,000',
    },
  ]
);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook để sử dụng context
export const useProducts = () => useContext(ProductContext);
