export interface Product {
  id: string
  name: string
  price: number
  description: string
  fullDescription: string
  images: string[]
  rating: number
  reviews: number
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh flowers (Sameday delivery)",
    price: 62000,
    description: "Beautifully arranged fresh flowers delivered on the same day",
    fullDescription:
      "Surprise your loved ones with a stunning bouquet of fresh flowers, delivered on the same day. Our expert florists handpick the finest blooms to create a unique arrangement that conveys your heartfelt sentiments.",
    images: [
      "/flowe1.jpg",
      "/flowe2.jpg",
      "/flowe1.jpg",
      "/flowe1.jpg",
    ],
    rating: 4.8,
    reviews: 124,
    category: "Flower",
  },
  {
    id: "2",
    name: "Pizza & Drinks (Best Quality)",
    price: 62000,
    description: "Delicious pizza with a selection of drinks",
    fullDescription:
      "Treat yourself and your loved ones to the ultimate pizza experience. Our best-quality pizzas are made with fresh ingredients and come with a variety of drinks to choose from.",
    images: [
      "/Pizza & Drinks (Best Quality).jpg",
      "/Pizza & Drinks (Best Quality)2.jpg",
      "/Pizza & Drinks (Best Quality)3.jpg",
      "/Pizza & Drinks (Best Quality)1.jpg",
    ],
    rating: 4.9,
    reviews: 89,
    category: "Food",
  },
  {
    id: "3",
    name: "Teddy Bear (Sameday delivery)",
    price: 62000,
    description: "Soft and cuddly teddy bear for all ages",
    fullDescription:
      "Surprise someone special with our adorable teddy bear, available for same-day delivery. Made from high-quality materials, this plush toy is perfect for hugs and companionship.",
    images: [
      "/Teddy Bear.jpg",
      "/Teddy Bear1.jpg",
      "/Teddy Bear2.jpg",
      "/Teddy Bear3.jpg",
    ],
    rating: 4.7,
    reviews: 56,
    category: "Toys",
  },
  {
    id: "4",
    name: "Benz Car Key",
    price: 77000,
    description: "Luxury car key for Mercedes-Benz vehicles",
    fullDescription:
      "This luxury car key is designed specifically for Mercedes-Benz vehicles, combining style and functionality. A perfect gift for car enthusiasts.",
    images: [
      "/Benz Car Key.jpg",
      "/Benz Car Key1.jpg",
      "/Benz Car Key2.jpg",
      "/Benz Car Key3.jpg",
    ],
    rating: 4.9,
    reviews: 203,
    category: "Auto",
  },
  {
    id: "5",
    name: "Customized Blanket (photos & text)",
    price: 47000,
    description: "Personalized blanket with your chosen photos and text",
    fullDescription:
      "Create a cozy and memorable gift with our customized blanket. Upload your favorite photos and add a personal message to make it truly unique.",
    images: [
      "/Customized Blanket (photo & text).jpg",
      "/Customized Blanket (photo & text)4.jpg",
      "/Customized Blanket (photo & text)2.jpg",
      "/Customized Blanket (photo & text)3.jpg",
    ],
    rating: 4.8,
    reviews: 145,
    category: "Clothes",
  },
  {
    id: "6",
    name: "Customized hoodie(text & photo)",
    price: 70000,
    description: "Personalized hoodie with your chosen text and photo",
    fullDescription:
      "Create a unique and stylish hoodie with our customization options. Upload your favorite photo and add a personal message to make it truly yours.",
    images: [
      "/Customized hoodie(text & photo).jpg",
      "/Customized hoodie(text & photo)1.jpg",
      "/Customized hoodie(text & photo)2.jpg",
      "/Customized hoodie(text & photo)3.jpg",
    ],
    rating: 4.7,
    reviews: 98,
    category: "Clothes",
  },
  {
    id: "7",
    name: "Customized Mug (photo and text)",
    price: 42000,
    description: "Personalized mug with your chosen photo and text",
    fullDescription:
      "Create a unique and memorable mug with our customization options. Upload your favorite photo and add a personal message to make it truly yours.",
    images: [
      "/Customized Mug (photo and text).jpg",
      "/Customized Mug (photo and text)1.jpg",
      "/Customized Mug (photo and text)2.jpg",
      "/Customized Mug (photo and text)3.jpg",
    ],
    rating: 4.8,
    reviews: 167,
    category: "Accessories, Men, Women",
  },
  {
    id: "9",
    name: "Customized Necklace (photo & text)",
    price: 47000,
    description: "Personalized necklace with your chosen photo and text",
    fullDescription:
      "Create a unique and stylish necklace with our customization options. Upload your favorite photo and add a personal message to make it truly yours.",
    images: [
      "/Customized Necklace.jpg",
      "/Customized Necklace1.jpg",
      "/Customized Necklace2.jpg",
      "/Customized Necklace3.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Men, Women",
  },
    {
    id: "10",
    name: "Customized Photo Lamp",
    price: 60000,
    description: "Personalized photo lamp with your chosen image",
    fullDescription:
      "Create a warm and inviting atmosphere with our customized photo lamp. Upload your favorite image and add a personal message to make it truly unique.",
    images: [
      "/Customized Photo Lamp.jpg",
      "/Customized Photo Lamp1.jpg",
      "/Customized Photo Lamp2.jpg",
      "/Customized Photo Lamp3.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Accessories",
  },
    {
    id: "11",
    name: "Customized Ring (photo & text)",
    price: 50000,
    description: "Personalized ring with your chosen photo and text",
    fullDescription:
      "Create a unique and stylish ring with our customization options. Upload your favorite photo and add a personal message to make it truly yours.",
    images: [
      "/Customized Ring (photo & text).jpg",
      "/Customized Ring (photo & text)1.jpg",
      "/Customized Ring (photo & text)2.jpg",
      "/Customized Ring (photo & text)3.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Accessories",
  },
    {
    id: "12",
    name: "Customized T-Shirt",
    price: 47000,
    description: "Personalized T-Shirt with your chosen photo and text",
    fullDescription:
      "Create a unique and stylish T-Shirt with our customization options. Upload your favorite photo and add a personal message to make it truly yours.",
    images: [
      "/Customized T-Shirt.jpg",
      "/Customized T-Shirt1.jpg",
      "/Customized T-Shirt2.jpg",
      "/Customized T-Shirt3.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Clothes",
  },
    {
    id: "13",
    name: "Documents (contact Agent for more info)",
    price: 0,
    description: "Assistance with document processing and delivery",
    fullDescription:
      "Contact our agent for more information.",
    images: [
      "/Documents.jpg",
      "/Documents1.jpg",
      "/Documents1.jpg",
      "/Documents.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Books",
  },
    {
    id: "14",
    name: "Engagement Rings (Different sizes & designs)",
    price: 38000,
    description: "Variety of engagement rings in different sizes and designs",
    fullDescription:
      "Explore our exquisite collection of engagement rings, featuring a variety of sizes and designs to suit every taste. Whether you prefer classic solitaires or modern halo settings, we have the perfect ring for your special moment.",
    images: [
      "/Engagement Rings1.jpg",
      "/Engagement Rings2.jpg",
      "/Engagement Rings3.jpg",
      "/Engagement Rings4.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Fashion",
  },
    {
    id: "15",
    name: "House Key",
    price: 42000,
    description: "Duplicate house keys with precision and care",
    fullDescription:
      "Our expert locksmiths ensure that your duplicate house keys are made with the highest quality standards.",
    images: [
      "/House Key1.jpg",
      "/House Key.jpg",
      "/House Key3.jpg",
      "/House Key4.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Key",
  },
    {
    id: "16",
    name: "Membership/ID card",
    price: 67000,
    description: "Custom membership and ID cards tailored to your needs",
    fullDescription:
      "Contact our agent for more information.",
    images: [
      "/Membership.jpg",
      "/Membership1.jpg",
      "/Membership.jpg",
      "/Membership1.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Cards",
  },
    {
    id: "17",
    name: "Necklace (Different sizes & designs)",
    price: 37000,
    description: "Diverse collection of necklaces in various sizes and designs",
    fullDescription:
      "Explore our exquisite collection of necklaces, featuring a variety of sizes and designs to suit every taste. Whether you prefer classic pendants or modern statement pieces, we have the perfect necklace for you.",
    images: [
      "/Necklace1.jpg",
      "/Necklace2.jpg",
      "/Necklace3.jpg",
      "/Necklace4.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Fashion",
  },
    {
    id: "18",
    name: "Photo Frame (Different sizes & designs)",
    price: 57000,
    description: "Diverse collection of photo frames in various sizes and designs",
    fullDescription:
      "Explore our exquisite collection of photo frames, featuring a variety of sizes and designs to suit every taste. Whether you prefer classic wooden frames or modern metal designs, we have the perfect frame for your cherished memories.",
    images: [
      "/PhotoFrame1.jpg",
      "/PhotoFrame2.jpg",
      "/PhotoFrame3.jpg",
      "/PhotoFrame4.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Home",
  },
    {
    id: "20",
    name: "Wristwatch (multiple designs)",
    price: 42000,
    description: "Stylish wristwatches in multiple designs",
    fullDescription:
      "Explore our exquisite collection of wristwatches, featuring a variety of designs to suit every taste. Whether you prefer classic analog styles or modern smartwatches, we have the perfect timepiece for you.",
    images: [
      "/Wristwatch1.jpg",
      "/Wristwatch2.jpg",
      "/Wristwatch3.jpg",
      "/Wristwatch4.jpg",
    ],
    rating: 4.6,
    reviews: 112,
    category: "Fashion",
  },
]