import React, { createContext, useContext, useState } from 'react';

// Tạo context
const ProductContext = createContext();

// Tạo provider
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://placehold.co/180x200', // URL hình ảnh
      name: 'Sản phẩm 1 ',
      price: '500,000',
    },
    {
      id: 2,
      image: 'https://placehold.co/180x200',
      name: 'Sản phẩm 2',
      price: '650,000',
    },
    {
      id: 3,
      image: 'https://placehold.co/180x200',
      name: 'Sản phẩm 3',
      price: '750,000',
    },
    {
      id: 4,
      image: 'link_to_image4.jpg',
      name: 'Sản phẩm 4',
      price: '550,000',
    },
    {
      id: 5,
      image: 'link_to_image5.jpg',
      name: 'Sản phẩm 5',
      price: '620,000',
    },
    {
      id: 6,
      image: 'link_to_image6.jpg',
      name: 'Sản phẩm 6',
      price: '780,000',
    },
    {
      id: 7,
      image: 'link_to_image7.jpg',
      name: 'Sản phẩm 7',
      price: '400,000',
    },
    {
      id: 8,
      image: 'link_to_image8.jpg',
      name: 'Sản phẩm 8',
      price: '520,000',
    },
    {
      id: 9,
      image: 'link_to_image9.jpg',
      name: 'Sản phẩm 9',
      price: '640,000',
    },
    {
      id: 10,
      image: 'link_to_image10.jpg',
      name: 'Sản phẩm 10',
      price: '580,000',
    },
    {
      id: 11,
      image: 'link_to_image11.jpg',
      name: 'Sản phẩm 11',
      price: '720,000',
    },
    {
      id: 12,
      image: 'link_to_image12.jpg',
      name: 'Sản phẩm 12',
      price: '900,000',
    },
    {
      id: 13,
      image: 'link_to_image13.jpg',
      name: 'Sản phẩm 13',
      price: '450,000',
    },
    {
      id: 14,
      image: 'link_to_image14.jpg',
      name: 'Sản phẩm 14',
      price: '850,000',
    },
    {
      id: 15,
      image: 'link_to_image15.jpg',
      name: 'Sản phẩm 15',
      price: '600,000',
    },
    {
      id: 16,
      image: 'link_to_image16.jpg',
      name: 'Sản phẩm 16',
      price: '670,000',
    },
    {
      id: 17,
      image: 'link_to_image17.jpg',
      name: 'Sản phẩm 17',
      price: '720,000',
    },
    {
      id: 18,
      image: 'link_to_image18.jpg',
      name: 'Sản phẩm 18',
      price: '780,000',
    },
    {
      id: 19,
      image: 'link_to_image19.jpg',
      name: 'Sản phẩm 19',
      price: '800,000',
    },
    {
      id: 20,
      image: 'link_to_image20.jpg',
      name: 'Sản phẩm 20',
      price: '530,000',
    },
    {
      id: 21,
      image: 'link_to_image21.jpg',
      name: 'Sản phẩm 21',
      price: '900,000',
    },
    {
      id: 22,
      image: 'link_to_image22.jpg',
      name: 'Sản phẩm 22',
      price: '750,000',
    },
    {
      id: 23,
      image: 'link_to_image23.jpg',
      name: 'Sản phẩm 23',
      price: '680,000',
    },
    {
      id: 24,
      image: 'link_to_image24.jpg',
      name: 'Sản phẩm 24',
      price: '850,000',
    },
    {
      id: 25,
      image: 'link_to_image25.jpg',
      name: 'Sản phẩm 25',
      price: '620,000',
    },
    {
      id: 26,
      image: 'link_to_image26.jpg',
      name: 'Sản phẩm 26',
      price: '590,000',
    },
    {
      id: 27,
      image: 'link_to_image27.jpg',
      name: 'Sản phẩm 27',
      price: '720,000',
    },
    {
      id: 28,
      image: 'link_to_image28.jpg',
      name: 'Sản phẩm 28',
      price: '740,000',
    },
    {
      id: 29,
      image: 'link_to_image29.jpg',
      name: 'Sản phẩm 29',
      price: '860,000',
    },
    {
      id: 30,
      image: 'link_to_image30.jpg',
      name: 'Sản phẩm 30',
      price: '950,000',
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
