import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Box1 = [
    {
      title: 'RESTAURANTS',
      text1: 'Order Online',
      text2: 'Book Table',
      text3: 'Trending',
      text4: 'More ...',
      imagelink: "https://www.mountpalazzo.com/page_images/Dining-3.jpg"
    },
    {
      title: 'SHOP ONLINE',
      text1: 'Mobile',
      text2: 'Televisions',
      text3: 'Air Conditioners',
      text4: 'More ...',
      imagelink: 'https://i5.walmartimages.com/asr/46937b20-4326-4976-a99a-0dc85274491b.969bde916d1f5e2fadda9e750d52eb20.jpeg'

    }
  ];

  Box2 = [
    {
      title: 'DAILY NEEDS',
      text1: 'Grocery  ',
      text2: 'Chemists',
      text3: 'Bakery',
      text4: 'More ...',
      imagelink: 'https://previews.123rf.com/images/romastudio/romastudio1512/romastudio151200010/49996117-bag-full-of-healthy-food-studio-photography-of-brown-grocery-bag-with-fruits-vegetables-bread-bottle.jpg'

    },
    {
      title: 'DOCTORS',
      text1: 'Dentists',
      text2: 'Dermatologists',
      text3: 'ENT',
      text4: 'More ...',
      imagelink: 'https://5.imimg.com/data5/SELLER/Default/2021/6/SZ/CA/OZ/7376973/dr-stethoscope-250x250.jpg'
    }
  ];

  Box3 = [
    {
      title: 'TRAVEL',
      text1: 'Flights',
      text2: 'Bus',
      text3: 'Hotels',
      text4: 'Car Rentals',
      imagelink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aF9ON0y8NkkYID6gcxR55cKbKP_lpQ_WbtRR7mL6vVH-SBq9TZB0Qhvb3hJSxaJmiSM&usqp=CAU'
    },
    {
      title: 'REPAIRS',
      text1: 'Laptops',
      text2: 'Mobile Phones',
      text3: 'Washing Machine',
      text4: 'More ...',
      imagelink: 'https://cdn1.vectorstock.com/i/1000x1000/76/85/car-repair-shop-logo-vector-31057685.jpg'

    }
  ];

  Box4 = [
    {
      title: 'LOANS',
      text1: 'Personel Loans  ',
      text2: 'Car Loans',
      text3: 'Home Loans',
      text4: 'Credit Cards',
      imagelink: 'https://english.cdn.zeenews.com/sites/default/files/2021/06/13/943491-personal-loan.jpg'
    },
    {
      title: 'AUTO MOBILES',
      text1: 'New Cars',
      text2: 'Used Cars',
      text3: 'Car Insurance',
      text4: 'Driving Insurance ',
      imagelink: 'https://media.istockphoto.com/photos/illustration-of-generic-red-sedan-car-on-white-picture-id946459708?k=20&m=946459708&s=170667a&w=0&h=pftHAQ8dzeMn50Dgj97vSrhkRtQljeCaY2RoevupaMY='
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
