const Hoteldata = [
    { hotelId: '1', id: '1', 'name': "COX'S BAZAR", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.", 'price': 34, 'nightPrice': 167, district: 'coxbazar', category: 'coxbazar', img: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '252 stays Sep 13-17 3 guests' },
    { hotelId: '1', id: '2', 'name': "COX'S BAZAR", 'title': 'Apartment in lost Panorama', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 198, district: 'coxbazar', img: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '252 stays Sep 13-17 3 guests' },
    { hotelId: '1', id: '3', 'name': "COX'S BAZAR", 'title': 'AR Lunge & Pull', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 210, district: 'coxbazar', img: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_223/f_auto,q_auto,w_1100/v1555272928/shape/mentalfloss/50569-istock-486178472.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '252 stays Sep 13-17 3 guests' },
    { hotelId: '2', id: '4', 'name': "SREEMANGAL", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out.", 'price': 34, 'nightPrice': 350, category: 'sreemangal', district: 'sreemangal', img: 'https://pritamsinghhotel.com/wp-content/uploads/2020/02/Suites.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '552 stays Sep 13-17 2 guests' },
    { hotelId: '2', id: '5', 'name': "SREEMANGAL", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 230, district: 'sreemangal', img: 'https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '552 stays Sep 13-17 2 guests' },
    { hotelId: '2', id: '6', 'name': "SREEMANGAL", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 150, district: 'sreemangal', img: 'https://media.nomadicmatt.com/hotelreview1a.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '552 stays Sep 13-17 2 guests' },
    { hotelId: '3', id: '7', 'name': "SUNDARBANS", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.", 'price': 34, 'nightPrice': 330, category: 'sundarbans', district: 'sundarbans', img: 'https://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },
    { hotelId: '3', id: '8', 'name': "SUNDARBANS", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 260, district: 'sundarbans', img: 'https://pix7.agoda.net/hotelImages/1198373/-1/43cc893c81e31356ac2bb63b0395a849.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '3', id: '9', 'name': "SUNDARBANS", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'sundarbans', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '4', id: '10', 'name': "KUAKATA", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': 'Kuakata is a town in southeastern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide. From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal', 'price': 34, 'nightPrice': 290, district: 'kuakata', category: 'kuakata', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '4', id: '11', 'name': "KUAKATA", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'kuakata', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '4', id: '12', 'name': "KUAKATA", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'kuakata', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '5', id: '13', 'name': "KAPTAI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': 'Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. The lake was created as a result of building the Kaptai Dam on the Karnaphuli River, as part of the Karnaphuli Hydro-electric project.', 'price': 34, 'nightPrice': 290, district: 'kaptai', category: 'kaptai', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '5', id: '14', 'name': "KAPTAI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'kaptai', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '5', id: '15', 'name': "KAPTAI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'kaptai', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '6', id: '16', 'name': "BATIARI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': 'Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. The lake was created as a result of building the Kaptai Dam on the Karnaphuli River, as part of the Karnaphuli Hydro-electric project.', 'price': 34, 'nightPrice': 290, district: 'batiari', category: 'batiari', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '6', id: '17', 'name': "BATIARI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'batiari', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },

    { hotelId: '6', id: '18', 'name': "BATIARI", 'title': 'Light Bright airy stylish apt & safe peacefull stay', 'description': '4 Guests 2 bedrooms 2 bed 2 baths', 'price': 34, 'nightPrice': 290, district: 'batiari', img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/69/48/b8/amber-dale-munnar.jpg', 'type': '4 guest 2 bedrooms 2 beds 2 baths', 'wifi': 'Wifi air Condition Kitchen', 'cancel': 'Cancellation flexibility available', 'guests': '1022 stays Aug 10-29 4 guests' },
]

export default Hoteldata;