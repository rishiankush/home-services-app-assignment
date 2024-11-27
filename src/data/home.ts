import {Images} from '../constants/Images';

export const homeData = {
  categories: [
    {id: 1, name: 'Cleaning', icon: Images.cleaning},
    {id: 2, name: 'Repairing', icon: Images.repairing},
    {id: 3, name: 'Painting', icon: Images.painting},
    {id: 4, name: 'Laundry', icon: Images.laundry},
    {id: 5, name: 'Appliance', icon: Images.appliance},
    {id: 6, name: 'Plumbing', icon: Images.plumbing},
    {id: 7, name: 'Movers', icon: Images.movers},
    {id: 8, name: "Men's Salon", icon: Images.salon},
  ],
  services: [
    {
      id: 101,
      title: 'House Cleaning',
      price: '1100',
      reviews: '8,289',
      image: Images.person2,
      bookmarkIcon: Images.bookmarkDark,
    },
    {
      id: 102,
      title: 'House Cleaning',
      price: '1100',
      reviews: '8,289',
      image: Images.person2,
      bookmarkIcon: Images.bookmarkLight,
    },
    {
      id: 103,
      title: 'House Cleaning',
      price: '1100',
      reviews: '8,289',
      image: Images.person2,
      bookmarkIcon: Images.bookmarkLight,
    },
  ],
};
