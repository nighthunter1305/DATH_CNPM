import strawberry from "../assets/images/strawberry.jpg";
import papaya from "../assets/images/papaya.jpg";
import corn from "../assets/images/corn.jpg";
import grape from "../assets/images/grape.jpg";

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

// mock data for add-product

export const mockBrands = [
  { id: "1", name: "No brand" },
  { id: "2", name: "Xtra Mart" },
  { id: "3", name: "Big Market" },
  { id: "4", name: "Dalat FreshFruit" },
];

export const mockExpirations = [
  { id: "1", label: "1 tháng" },
  { id: "3", label: "3 tháng" },
  { id: "6", label: "6 tháng" },
  { id: "12", label: "12 tháng" },
];

export const mockOrigins = [
  { id: "VN", label: "Việt Nam" },
  { id: "CN", label: "Trung Quốc" },
  { id: "US", label: "Mỹ" },
  { id: "JP", label: "Nhật Bản" },
];

export const mockWeights = [
  { id: "1", label: "500g" },
  { id: "2", label: "1kg" },
  { id: "3", label: "2kg" },
  { id: "4", label: "5kg" },
];
