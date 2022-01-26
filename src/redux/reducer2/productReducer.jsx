import * as Type from "../types/index";

const initialState = {
  laptopItems: [
    {
      id: 1,
      image: "/Img/LItem1.png",
      title: "MSI GF63 Thin 10SCXR 020VN",
      description: "MSI Gaming Laptop",
      oldPrice: 22999000,
      newPrice: 21490000,
      screen: 13.3,
      screendetail: '15.6"Full HD (1920 x 1080)144Hz',
      core: 7,
      coredetail: "i7 10750H2.6GHz",
      ram: 8,
      ramdetail:
        "8 GBDDR4 2 khe (1 khe 8GB + 1 khe rời)3200 MHz (Thông số thanh RAM được lắp trong máy)",
      ssd: 512,
      ssddetail:
        "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 2TB)Hỗ trợ khe cắm HDD SATA (nâng cấp tối đa 2TB)",
      ga: "NVIDIA GeForce GTX 1650 Max Q 4GB",
      gadetail: "Card rời GTX 1650 Max-Q 4GB",
      special: "Có đèn bàn phím",
      hdh: "Windows 10 Home SL",
      des: "Vỏ nhựa",
      weight: "Dài 359 mm - Rộng 254 mm - Dày 21.7 mm - Nặng 1.86 kg",
      year: "2021",
      category: "laptop",
      price: "low",
      name: ["msi", "all-brand"],
    },
    {
      id: 2,
      image: "/Img/LItem2.png",
      title: "MSI Katana GF76 11UC 096VN",
      description: "MSI Gaming Laptop",
      oldPrice: 30299000,
      newPrice: 29190000,
      screen: 17.3,
      screendetail: '17.3", 1920 x 1080 Pixel, IPS, 144 Hz',
      core: 7,
      coredetail: "Intel Core i7-11800H",
      ram: 8,
      ramdetail: "8 GB, DDR4, 3200 MHz",
      ssd: 512,
      ssddetail: "SSD 512 GB",
      ga: "NVIDIA® GeForce® RTX3050 4GB",
      gadetail: "NVIDIA® GeForce® RTX3050 4GB",
      special: "Có đèn bàn phím",
      hdh: "Windows 10",
      des: "Vỏ nhựa",
      weight: "397 x 275 x 25",
      year: "2021",
      category: "laptop",
      price: "midle",
      name: ["msi", "all-brand"],
    },
    {
      id: 3,
      image: "/Img/LItem3.png",
      title: "ACER NITRO 5 AN515-55-53AG",
      description: "ACER Gaming",
      oldPrice: 30499000,
      newPrice: 28499000,
      screen: 15.6,
      screendetail: '15.6", 1920 x 1080 Pixel, IPS, 144 Hz, LED-backlit',
      core: 7,
      coredetail: "Intel Core i7-11800H",
      ram: 8,
      ramdetail: "8 GB, DDR4, 3200 MHz",
      ssd: 512,
      ssddetail: "SSD 512 GB",
      ga: "Nvidia Geforce RTX3050Ti 4GB",
      gadetail: "NVIDIA GeForce RTX 3050Ti 4 GB & Intel UHD Graphics",
      special: "Có đèn bàn phím",
      hdh: "Windows 11",
      des: "Vỏ nhựa",
      weight: "363.4 x 255 x 23.9",
      year: "2021",
      category: "laptop",
      name: ["acer", "all-brand"],
    },
    {
      id: 4,
      image: "/Img/LItem4.png",
      title: 'MacBook Pro 13" 2020',
      description: "Macbook Pro 13",
      oldPrice: 47999000,
      newPrice: 46999000,
      screen: 13.3,
      screendetail:
        '13.3", 2560 x 1600 Pixel, IPS, IPS LCD LED Backlit, True Tone',
      core: 5,
      coredetail: "Intel Core i5-10th-gen",
      ram: 16,
      ramdetail: "16 GB, LPDDR4X, 3733 MHz",
      ssd: 512,
      ssddetail: "SSD 512 GB",
      ga: "Intel Iris Plus Graphics",
      gadetail: "Intel Iris Plus Graphics",
      special: "Có đèn bàn phím",
      hdh: "Mac OS",
      des: "Vỏ nhựa",
      weight: "304.1 x 212.4 x 15.6",
      year: "2020",
      category: "laptop",
      price: "high",
      name: ["apple", "all-brand"],
    },
  ],
  mobileItem: [
    {
      id: 1,
      image: "Img/PItem1.png",
      name: "IPhone 13 Promax Gray",
      desc: "Apple Phone",
      oldPrice: 31900000,
      newPrice: 28900000,
    },
    {
      id: 2,
      image: "Img/PItem2.png",
      name: "IPhone 13 Promax Light Blue",
      desc: "Apple Phone",
      oldPrice: 31900000,
      newPrice: 28900000,
    },
    {
      id: 3,
      image: "Img/PItem3.png",
      name: "IPhone 13 Light White",
      desc: "Apple Phone",
      oldPrice: 27900000,
      newPrice: 23900000,
    },
  ],
  otherItem: [
    {
      id: 1,
      image: "Img/OtherItem1.png",
      name: "Asus Rog Swift 27inc Gaming",
      desc: "LCD Gaming",
      oldPrice: 19600000,
      newPrice: 15900000,
    },
    {
      id: 1,
      image: "Img/OtherItem2.png",
      name: "Msi Optix G241vc Full Hd 23.6 Curved Led Gaming",
      desc: "LCD Gaming",
      oldPrice: 5490000,
      newPrice: 5290000,
    },
  ],
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_ITEM: {
      let newCartItem = [...state.cartItem];
      const check = newCartItem.find((item) => item.id === action.payload.id);
      if (check) {
        newCartItem = newCartItem.map((item) =>
          item.id === action.payload.id
            ? { ...check, quantity: check.quantity + 1 }
            : item
        );
      } else {
        const products = {
          ...action.payload,
          quantity: 1,
        };
        newCartItem.push(products);
      }
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
      return {
        ...state,
        cartItem: newCartItem,
      };
    }
    case Type.DECRE_ITEM: {
      let newCartItem = [...state.cartItem];
      const check = newCartItem.find((item) => item.id === action.payload.id);
      if (check.quantity === 1) {
        newCartItem = newCartItem.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        newCartItem = newCartItem.map((item) =>
          item.id === action.payload.id
            ? { ...check, quantity: check.quantity - 1 }
            : item
        );
      }
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
      return {
        ...state,
        cartItem: newCartItem,
      };
    }
    case Type.REMOVE_ITEM: {
      let newCartItem = [...state.cartItem];
      newCartItem = newCartItem.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
      return {
        ...state,
        cartItem: newCartItem,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
