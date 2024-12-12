import strawberry from "../assets/images/strawberry.jpg";
import papaya from "../assets/images/papaya.jpg";
import corn from "../assets/images/corn.jpg";
import grape from "../assets/images/grape.jpg";

// mock data for product
export const mockProductData = [
  {
    id: 1,
    name: "Dâu tây Jumbo Rainer",
    image: strawberry,
    price: 100000,
    quantity: 1,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
    category: "Yêu thích",
  },
  {
    id: 2,
    name: "Nho xanh Đà Lạt",
    image: grape,
    price: 82000,
    quantity: 3,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
    category: "Yêu thích",
  },
  {
    id: 3,
    name: "Đu đủ nhiệt đới",
    image: papaya,
    price: 121000,
    quantity: 3,
    shopName: "Bach Hoa Xanh Market",
    shopId: 2,
    category: "Mall",
  },
  {
    id: 4,
    name: "Ngô hữu cơ",
    image: corn,
    price: 56000,
    quantity: 4,
    checked: false,
    shopName: "Coop Mart",
    shopId: 3,
    category: "Hot sale",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/f3/cf/7d/f3cf7dcc9659b26070dc992b755ee5a9.jpg",
    name: "Hành hoa ",
    price: 50000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/52/16/30/52163035cc1bdebd100316d5a693f6a5.jpg",
    name: "Cần tây",
    price: 120000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/736x/0a/66/d2/0a66d2d5bfda1fa0bcd240620b3b18bd.jpg",
    name: "Khoai lang",
    price: 35000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/736x/b7/f2/3f/b7f23fe82a2f1c47c4c826d0a196ac71.jpg",
    name: "Súp lơ",
    price: 75000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/736x/ee/bc/53/eebc53bf8a2813ee654f351e52c18bcf.jpg,https://i.pinimg.com/736x/6c/5a/d7/6c5ad76aa34366dd56113a93f3b0eafa.jpg",
    name: "Cải thảo nhà trồng",
    price: 30000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 10,
    image:
      "https://i.pinimg.com/736x/ee/59/70/ee5970a4cc4f66965d42e2ace382fda7.jpg",
    name: "Củ dền",
    price: 78000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 11,
    image:
      "https://i.pinimg.com/736x/2b/39/57/2b3957f114ea136697805f508682f4e1.jpg",
    name: "Sầu riêng Đắk Lắk",
    price: 80000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 12,
    image:
      "https://i.pinimg.com/236x/4e/91/11/4e911118b84a0da507f2e7f3bfa4dac6.jpg",
    name: "Hạt óc chó",
    price: 135000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 13,
    image:
      "https://i.pinimg.com/736x/f3/62/aa/f362aa15e2c0dd16e73c0953257bdba6.jpg",
    name: "Mắm mực Khánh Hòa 500ml",
    price: 75000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 14,
    image:
      "https://i.pinimg.com/736x/ee/ab/9e/eeab9e39737fc183c28b627d915d8798.jpg",
    name: "Gà ta",
    price: 180000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 15,
    image:
      "https://i.pinimg.com/236x/79/c8/23/79c823fa4cff546a3b1ae384e98a2474.jpg",
    name: "Hạt dẻ cười",
    price: 427000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 16,
    image:
      "https://i.pinimg.com/736x/ff/1b/ac/ff1bacf2568fde566555fb851de4ce9a.jpg",
    name: "Giò heo",
    price: 200000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 17,
    image:
      "https://i.pinimg.com/736x/07/33/9c/07339cc4a6816a65ef9f400d6b285211.jpg",
    name: "10 cái Nem chua Lai Vung Giao Tho",
    price: 30000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 18,
    image:
      "https://i.pinimg.com/736x/67/31/0b/67310b1a694d6f6c90097eaa653d7276.jpg",
    name: "Gà ủ muối",
    price: 150000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 19,
    image:
      "https://i.pinimg.com/736x/db/d7/72/dbd772d6c48f6bc93cfa474c03398f74.jpg",
    name: "1kg Trâu gác bếp",
    price: 450000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 20,
    image:
      "https://i.pinimg.com/736x/5f/95/ae/5f95ae03e236c3cc72a307636080cc66.jpg",
    name: "Mực tẩm gia vị",
    price: 80000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 21,
    image:
      "https://i.pinimg.com/736x/c3/46/70/c34670067645b6a06312fc6468b34b5e.jpg",
    name: "1kg Bánh tráng muối",
    price: 70000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 22,
    image:
      "https://i.pinimg.com/736x/c9/e9/80/c9e98025e17d0ccb54822d38bac38d35.jpg",
    name: "Kẹo dừa Bến Tre",
    price: 82000,
    shopName: "Winmart",
    shopId: 6,
  },
  {
    id: 23,
    image:
      "https://i.pinimg.com/736x/e2/07/7d/e2077d1f55a9b2673474e0ef2cb43d5a.jpg",
    name: "Nước mắm Phú quốc 500ml",
    price: 70000,
    shopName: "Winmart",
    shopId: 6,
  },
  {
    id: 24,
    image:
      "https://i.pinimg.com/236x/af/4f/73/af4f739f9d580a44e09748e7e05f5abc.jpg",
    name: "1kg Hoa quả sấy mix",
    price: 125000,
    shopName: "Winmart",
    shopId: 6,
  },
  {
    id: 25,
    image:
      "https://i.pinimg.com/736x/c7/de/c1/c7dec19a8f9cea87ca869502d06814ec.jpg",
    name: "50 cây Nem chua Thanh Hóa",
    price: 130000,
    shopName: "Đông Hoà Market",
    shopId: 8,
  },
  {
    id: 26,
    image:
      "https://i.pinimg.com/736x/be/a7/fc/bea7fc7dc26c388de396376340a80ae6.jpg",
    name: "1kg xoài xanh + mắm nêm",
    price: 78000,
    shopName: "Chợ trái cây",
    shopId: 7,
  },
  {
    id: 27,
    image:
      "https://i.pinimg.com/736x/53/81/1f/53811f85dd478b42f9f3503071413d30.jpg",
    name: "Trứng ngỗng",
    price: 37000,
    shopName: "Winmart",
    shopId: 6,
  },
  {
    id: 28,
    image:
      "https://i.pinimg.com/236x/f0/31/82/f03182d675895035ca5bc5835f40dc95.jpg",
    name: "1l Sữa bắp nhà làm",
    price: 55000,
    shopName: "Winmart",
    shopId: 6,
  },
  {
    id: 29,
    image:
      "https://i.pinimg.com/236x/5b/b5/55/5bb555225178ca40c27168ef0b010645.jpg",
    name: "5 cái Bánh giò Cô Ba",
    price: 60000,
    shopName: "Viet Global",
    shopId: 4,
  },
  {
    id: 30,
    image:
      "https://i.pinimg.com/736x/f9/83/6e/f9836e784d6ee09e4b8cc48417fe6ba4.jpg",
    name: "Khô cá lóc 1 nắng",
    price: 168000,
    shopName: "Đồ khô An Hoàng",
    shopId: 5,
  },
  {
    id: 31,
    image:
      "https://i.pinimg.com/736x/de/1e/44/de1e44091dd301b0fd37b3f31d0e3f65.jpg",
    name: "Bơ Đắk Lắk",
    price: 32000,
    shopName: "Viet Global",
    shopId: 4,
  },
  {
    id: 32,
    image:
      "https://i.pinimg.com/736x/49/07/7a/49077abf8e3a7c26b963374033b08743.jpg",
    name: "Bánh chưng nhà làm",
    price: 40000,
    shopName: "Viet Global",
    shopId: 4,
  },
  {
    id: 33,
    image:
      "https://i.pinimg.com/236x/dd/fc/dd/ddfcdd377daea1278a74666dcf2a243e.jpg",
    name: "5 cái Bánh tiêu",
    price: 20000,
    shopName: "Viet Global",
    shopId: 4,
  },
  {
    id: 34,
    image:
      "https://i.pinimg.com/736x/12/d5/cb/12d5cb16f9eb1cb00ad6cf904e059012.jpg",
    name: "Hành tây Đà Lạt",
    price: 75000,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
  },
  {
    id: 35,
    name: "Dâu tây Jumbo Rainer",
    image: strawberry,
    price: 100000,
    quantity: 1,
    checked: false,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
    category: "Yêu thích",
  },
];

// mock data for cart
export const mockCartData = [
  {
    id: 1,
    name: "Dâu tây Jumbo Rainer",
    image: strawberry,
    price: 100000,
    quantity: 1,
    checked: false,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
    category: "Yêu thích",
  },
  {
    id: 2,
    name: "Nho xanh Đà Lạt",
    image: grape,
    price: 82000,
    quantity: 3,
    checked: false,
    shopName: "Dalat FreshFruit Store",
    shopId: 1,
    category: "Yêu thích",
  },
  {
    id: 3,
    name: "Đu đủ nhiệt đới",
    image: papaya,
    price: 121000,
    quantity: 3,
    checked: false,
    shopName: "Bach Hoa Xanh Market",
    shopId: 2,
    category: "Mall",
  },
  {
    id: 4,
    name: "Ngô hữu cơ",
    image: corn,
    price: 56000,
    quantity: 4,
    checked: false,
    shopName: "Coop Mart",
    shopId: 3,
    category: "Hot sale",
  },
];

export const mockVouchers = [
  { id: 1, code: "GREEN20", description: "Giảm 20k cho đơn từ 100k" },
  {
    id: 2,
    code: "FREESHIP",
    description: "Miễn phí vận chuyển cho đơn từ 200k",
  },
  { id: 3, code: "SALE50", description: "Giảm 50k cho đơn từ 500k" },
  { id: 4, code: "SUMMER10", description: "Giảm 10% cho đơn hàng mùa hè" },
  { id: 5, code: "WELCOME15", description: "Giảm 15k cho khách hàng mới" },
  {
    id: 6,
    code: "BUY2GET1",
    description: "Mua 2 tặng 1 cho sản phẩm chọn lọc",
  },
  { id: 7, code: "FLASHSALE", description: "Giảm 30% trong 24 giờ tới" },
  {
    id: 8,
    code: "HEALTHY30",
    description: "Giảm 30k cho đơn hàng thực phẩm sạch",
  },
  {
    id: 9,
    code: "CHIPSLIFE",
    description: "Giảm 20% cho tất cả sản phẩm snack",
  },
];

export const mockAddresses = [
  {
    name: "Nguyễn Văn A",
    phone: "0123456789",
    isDefault: true,
    provinceCode: 1,
    districtCode: 2,
    wardCode: 37,
    provinceName: "Thành phố Hà Nội",
    districtName: "Quận Hoàn Kiếm",
    wardName: "Phường Phúc Tân",
    addressDetail: "số nhà 01, ngõ 17",
  },
];

// mock-data for orders
// order_id, image, name, quantity, total_price, status
export const mockOrders = [
  {
    order_id: 1,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
  {
    order_id: 2,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi ",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
  {
    order_id: 3,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi ",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
  {
    order_id: 4,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
  {
    order_id: 5,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
  {
    order_id: 6,
    image:
      "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1733567631~exp=1733571231~hmac=57e7294723282cdd4652202b86e082edbcaa3c9c722089938f0bf5767a689b1b&w=826",
    name: "Dâu tươi",
    quantity: 100,
    total_price: 36000,
    status: "accepted",
  },
];

// mock-data for seller products
export const mockSellerProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 1",
    price: "100,000",
    stock: 50,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 2",
    price: "200,000",
    stock: 30,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 3",
    price: "300,000",
    stock: 20,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 4",
    price: "400,000",
    stock: 10,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 5",
    price: "500,000",
    stock: 25,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 6",
    price: "600,000",
    stock: 15,
  },
  {
    id: 7,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 7",
    price: "700,000",
    stock: 40,
  },
  {
    id: 8,
    image: "https://via.placeholder.com/50",
    name: "Sản phẩm 8",
    price: "800,000",
    stock: 18,
  },
];

// mock-data users
export const mockUsers = [
  {
    id: 123,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "0948321119",
    role: "Người bán",
  },
  {
    id: 234,
    name: "Trần Thị B",
    email: "b@gmail.com",
    phone: "0948322119",
    role: "Người mua",
  },
  {
    id: 345,
    name: "Lê Văn C",
    email: "c@gmail.com",
    phone: "0948321119",
    role: "Người mua",
  },
  {
    id: 456,
    name: "Phạm Văn D",
    email: "d@gmail.com",
    phone: "0948321119",
    role: "Người bán",
  },
  {
    id: 567,
    name: "Nguyễn Thị E",
    email: "e@gmail.com",
    phone: "0948342119",
    role: "Người mua",
  },
  {
    id: 678,
    name: "Đỗ Văn F",
    email: "f@gmail.com",
    phone: "0948322345",
    role: "Người bán",
  },
  {
    id: 789,
    name: "Hoàng Văn G",
    email: "g@gmail.com",
    phone: "0948313267",
    role: "Người mua",
  },
  {
    id: 8910,
    name: "Trịnh Thị H",
    email: "h@gmail.com",
    phone: "0948890765",
    role: "Người bán",
  },
  {
    id: 91011,
    name: "Lý Văn I",
    email: "i@gmail.com",
    phone: "0948321889",
    role: "Người mua",
  },
  {
    id: 101112,
    name: "Hồ Thị K",
    email: "k@gmail.com",
    phone: "0948321113",
    role: "Người bán",
  },
  {
    id: 111213,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "0942121119",
    role: "Người bán",
  },
  {
    id: 121314,
    name: "Trần Thị B",
    email: "b@gmail.com",
    phone: "0943211119",
    role: "Người mua",
  },
  {
    id: 131415,
    name: "Lê Văn C",
    email: "c@gmail.com",
    phone: "0964221119",
    role: "Người mua",
  },
  {
    id: 141516,
    name: "Phạm Văn D",
    email: "d@gmail.com",
    phone: "0911321119",
    role: "Người bán",
  },
  {
    id: 151617,
    name: "Nguyễn Thị E",
    email: "e@gmail.com",
    phone: "0911721119",
    role: "Người mua",
  },
  {
    id: 161718,
    name: "Đỗ Văn F",
    email: "f@gmail.com",
    phone: "0941471119",
    role: "Người bán",
  },
  {
    id: 171819,
    name: "Hoàng Văn G",
    email: "g@gmail.com",
    phone: "0948321119",
    role: "Người mua",
  },
  {
    id: 181920,
    name: "Trịnh Thị H",
    email: "h@gmail.com",
    phone: "0948321119",
    role: "Người bán",
  },
  {
    id: 192021,
    name: "Lý Văn I",
    email: "i@gmail.com",
    phone: "0948321119",
    role: "Người mua",
  },
  {
    id: 202122,
    name: "Hồ Thị K",
    email: "k@gmail.com",
    phone: "0948321119",
    role: "Người bán",
  },
];

// mock-data for seller orders
export const mockSellerOrders = [
  { orderId: "OD001", productId: 1, quantity: 2, status: "Accepted" },
  { orderId: "OD002", productId: 2, quantity: 1, status: "Accepted" },
  { orderId: "OD003", productId: 3, quantity: 5, status: "Pending" },
  { orderId: "OD004", productId: 2, quantity: 3, status: "Pending" },
  { orderId: "OD005", productId: 4, quantity: 3, status: "Accepted" },
  { orderId: "OD006", productId: 6, quantity: 3, status: "Accepted" },
  { orderId: "OD007", productId: 8, quantity: 3, status: "Pending" },
  { orderId: "OD008", productId: 7, quantity: 3, status: "Accepted" },
  { orderId: "OD009", productId: 5, quantity: 3, status: "Accepted" },
];
