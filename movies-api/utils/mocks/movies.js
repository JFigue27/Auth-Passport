const moviesMock = [
  {
    id: '282780d7-8e37-4e3c-b9e5-1e0d6dad4875',
    title: "The Stranger's Return",
    year: 1989,
    cover: 'http://dummyimage.com/119x195.jpg/cc0000/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2067,
    contentRaiting: 'NC-17',
    source: 'https://cyberchimps.com/posuere/felis/sed/lacus.png',
    tags: ['Comedy|Drama', 'Comedy|Drama', 'Documentary|Drama|War', 'Drama']
  },
  {
    id: '0e91c92a-40ff-4854-adc6-1b7e17afb0fa',
    title: "Orchestra Rehearsal (Prova d'orchestra)",
    year: 2004,
    cover: 'http://dummyimage.com/147x153.png/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2033,
    contentRaiting: 'NC-17',
    source:
      'https://infoseek.co.jp/elit/proin/risus/praesent/lectus/vestibulum.png',
    tags: [
      'Drama|Thriller',
      'Comedy|Drama',
      'Comedy',
      'Crime|Horror|Mystery|Thriller',
      'Action|Animation|Children|Sci-Fi'
    ]
  },
  {
    id: 'a628e8c3-db1a-4db8-8374-d852b5eebf91',
    title: 'Notorious Bettie Page, The',
    year: 1999,
    cover: 'http://dummyimage.com/243x102.png/cc0000/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 1993,
    contentRaiting: 'R',
    source:
      'https://bing.com/elementum/nullam/varius/nulla/facilisi/cras/non.jpg',
    tags: ['Drama|Fantasy|Sci-Fi']
  },
  {
    id: '6657e7e1-4eb2-4635-9255-24fb4463b5c2',
    title: 'House of Wax',
    year: 2000,
    cover: 'http://dummyimage.com/165x130.jpg/dddddd/000000',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1948,
    contentRaiting: 'PG',
    source: 'https://issuu.com/penatibus/et.png',
    tags: ['Comedy|Crime|Drama|Thriller']
  },
  {
    id: 'a4d0daf2-d4ce-4b18-bd98-00f8894843eb',
    title: 'Night and the City',
    year: 2007,
    cover: 'http://dummyimage.com/109x145.bmp/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 2049,
    contentRaiting: 'G',
    source: 'http://fc2.com/id/turpis/integer/aliquet.jsp',
    tags: ['Comedy|Drama', 'Comedy|Drama|Romance', 'Mystery|Thriller', 'Drama']
  },
  {
    id: '5513a1ec-4814-4df6-b5b5-d03fbe3b23fa',
    title: 'Girl with a Pearl Earring',
    year: 1990,
    cover: 'http://dummyimage.com/180x135.bmp/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 2043,
    contentRaiting: 'PG-13',
    source: 'http://ftc.gov/viverra/pede/ac/diam/cras.xml',
    tags: ['Romance|Thriller', 'Documentary', 'Comedy', 'Adventure|Comedy']
  },
  {
    id: '8ebab4b2-df17-4dda-bdb4-a77a6ed64f3d',
    title: 'God Help the Girl',
    year: 1998,
    cover: 'http://dummyimage.com/181x182.jpg/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 2060,
    contentRaiting: 'PG',
    source: 'https://example.com/orci/luctus/et/ultrices/posuere/cubilia.json',
    tags: [
      'Drama|Horror|Mystery',
      'Comedy|Romance',
      'Comedy',
      'Drama',
      'Comedy'
    ]
  },
  {
    id: 'c66d5532-aabe-4a79-ae7c-990b55320ed5',
    title: 'Barrier (Bariera)',
    year: 2008,
    cover: 'http://dummyimage.com/131x228.png/5fa2dd/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 2010,
    contentRaiting: 'PG',
    source: 'https://jimdo.com/nulla/nisl/nunc/nisl/duis/bibendum.png',
    tags: ['Documentary', 'Action|Thriller', 'Crime|Drama', 'Drama|Romance']
  },
  {
    id: '99b03ac0-4dbf-4618-9383-3199d476e1ea',
    title: 'Collateral',
    year: 2008,
    cover: 'http://dummyimage.com/241x202.bmp/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2012,
    contentRaiting: 'PG-13',
    source: 'https://list-manage.com/feugiat/et/eros.json',
    tags: [
      'Action|Crime|Thriller',
      'Comedy',
      'Action|Adventure|Thriller',
      'Documentary',
      'Drama|Musical|Romance'
    ]
  },
  {
    id: '32ce994f-0f14-4150-b85b-39e472dacfcb',
    title: 'Afflicted, The',
    year: 2009,
    cover: 'http://dummyimage.com/211x158.png/5fa2dd/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1909,
    contentRaiting: 'PG-13',
    source: 'https://creativecommons.org/orci/mauris.xml',
    tags: [
      '(no genres listed)',
      'Crime|Drama|Thriller',
      'Documentary',
      'Horror'
    ]
  },
  {
    id: 'dd8d32f1-c83c-4c53-8fa1-1a4cfe667c65',
    title: 'Christmas Story 2, A',
    year: 2005,
    cover: 'http://dummyimage.com/179x218.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1946,
    contentRaiting: 'PG',
    source:
      'http://unesco.org/neque/libero/convallis/eget/eleifend/luctus/ultricies.html',
    tags: [
      'Musical|Romance',
      'Drama',
      'Adventure|Fantasy|Romance',
      'Documentary',
      'Drama'
    ]
  },
  {
    id: '7f569388-834d-4196-9ef9-ffbd09e6099d',
    title: 'Evil (Ondskan)',
    year: 2001,
    cover: 'http://dummyimage.com/182x250.png/dddddd/000000',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1929,
    contentRaiting: 'PG',
    source: 'https://themeforest.net/in/hac/habitasse/platea.xml',
    tags: ['Comedy', 'Comedy|Drama|Fantasy|Romance']
  },
  {
    id: '4fbce04b-561f-41c1-8de7-3e785323febb',
    title: 'Time Lapse',
    year: 2009,
    cover: 'http://dummyimage.com/133x165.png/dddddd/000000',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1921,
    contentRaiting: 'G',
    source:
      'http://pinterest.com/tempor/convallis/nulla/neque/libero/convallis/eget.xml',
    tags: ['Horror|Thriller', 'Comedy|Drama']
  },
  {
    id: '74d2c4ce-d296-4c73-8eb2-d9622002508a',
    title: 'Bye Bye Monkey (Ciao maschio)',
    year: 2006,
    cover: 'http://dummyimage.com/231x166.png/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1906,
    contentRaiting: 'G',
    source: 'https://wix.com/lectus.png',
    tags: ['Comedy', 'Adventure|Comedy']
  },
  {
    id: '746203c1-b15c-48b3-a0bf-5583b016f7a3',
    title: 'Svengali',
    year: 2011,
    cover: 'http://dummyimage.com/126x236.jpg/ff4444/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 2048,
    contentRaiting: 'R',
    source: 'https://wp.com/ante/ipsum/primis/in/faucibus/orci/luctus.png',
    tags: [
      'Comedy',
      'Drama|Romance|Sci-Fi',
      'Comedy',
      'Action|Adventure|Fantasy|IMAX',
      'Action|Adventure|Crime|Drama|Mystery|Thriller'
    ]
  },
  {
    id: 'ab74bbbb-1a81-4c16-a128-82403f0fb522',
    title: 'Lucky',
    year: 2012,
    cover: 'http://dummyimage.com/163x212.jpg/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 1998,
    contentRaiting: 'PG-13',
    source:
      'https://prnewswire.com/volutpat/quam/pede/lobortis/ligula/sit/amet.png',
    tags: ['Comedy|Musical', 'Action|Adventure|Drama|Thriller']
  },
  {
    id: '280a1b55-893e-4e76-8eea-22dc7540719f',
    title: 'The Land Before Time XIII: The Wisdom of Friends',
    year: 2002,
    cover: 'http://dummyimage.com/112x143.jpg/ff4444/ffffff',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1953,
    contentRaiting: 'PG',
    source: 'http://about.me/justo/lacinia/eget/tincidunt.html',
    tags: ['Documentary']
  },
  {
    id: 'f726753e-d4b1-49a3-902d-da810f9d004a',
    title: "Manual of Love 2 (Manuale d'amore (capitoli successivi))",
    year: 2010,
    cover: 'http://dummyimage.com/159x135.png/dddddd/000000',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1950,
    contentRaiting: 'G',
    source: 'https://so-net.ne.jp/semper/porta.xml',
    tags: ['Drama', 'Fantasy|Horror|Sci-Fi|Thriller']
  },
  {
    id: '2778caa1-b59b-40a1-9701-2f689bff8a1d',
    title: 'Trans-Europ-Express',
    year: 1986,
    cover: 'http://dummyimage.com/228x129.jpg/ff4444/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 2028,
    contentRaiting: 'G',
    source: 'http://bizjournals.com/volutpat/sapien/arcu.xml',
    tags: ['Comedy|Drama|Romance', 'Drama', 'Drama|Thriller|Western']
  },
  {
    id: '332447ed-5565-4984-8179-5df121167725',
    title: 'Werewolf of London',
    year: 2000,
    cover: 'http://dummyimage.com/230x213.bmp/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2010,
    contentRaiting: 'PG-13',
    source: 'http://odnoklassniki.ru/accumsan/tortor.js',
    tags: [
      'Comedy|Drama',
      'Drama',
      'Action|Adventure|Drama|War',
      'Adventure|Children|Comedy'
    ]
  },
  {
    id: 'ef449eb8-a46e-426e-bf41-62b6ac66d283',
    title: 'Rocky VI ',
    year: 1980,
    cover: 'http://dummyimage.com/177x163.png/ff4444/ffffff',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 1976,
    contentRaiting: 'G',
    source: 'http://mediafire.com/dapibus/augue.xml',
    tags: [
      'Comedy|Drama|Romance',
      'Crime|Drama|Film-Noir|Thriller',
      'Action|Crime|Mystery|Romance|Sci-Fi|Thriller'
    ]
  },
  {
    id: '95db8c2e-a0ab-483f-b785-4193ae418b52',
    title: 'Lost in Yonkers',
    year: 2006,
    cover: 'http://dummyimage.com/214x212.png/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 2039,
    contentRaiting: 'PG',
    source: 'https://shop-pro.jp/vivamus/vestibulum/sagittis/sapien.jpg',
    tags: ['Comedy|Drama|Romance', 'Drama', 'Documentary|Mystery']
  },
  {
    id: '5c20142e-cba4-43f5-8a05-a119bfd4e4e8',
    title: 'Love Sick Love',
    year: 1997,
    cover: 'http://dummyimage.com/161x178.jpg/cc0000/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 1960,
    contentRaiting: 'PG-13',
    source: 'http://mashable.com/donec/vitae.png',
    tags: [
      'Crime|Drama|Mystery|Thriller',
      'Drama|Musical|Romance',
      'Drama|Romance',
      'Drama',
      'Comedy|Drama|Musical'
    ]
  },
  {
    id: '5ac86ca3-e4b6-4c6e-bcb8-f3f0beaf1891',
    title: 'Kiwi!',
    year: 1997,
    cover: 'http://dummyimage.com/100x140.png/ff4444/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2044,
    contentRaiting: 'NC-17',
    source: 'https://wix.com/aliquam.json',
    tags: ['Drama|Romance|War', 'Musical', 'Drama']
  },
  {
    id: '753619db-8dfb-4a18-b796-ba37c23611d7',
    title: 'Operation Petticoat',
    year: 1999,
    cover: 'http://dummyimage.com/105x222.png/cc0000/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2023,
    contentRaiting: 'PG',
    source: 'https://yellowbook.com/nulla/facilisi/cras.html',
    tags: ['Comedy|Drama|Romance', 'Action', 'Drama']
  },
  {
    id: '5b22a47f-3a6b-4222-8b1d-edb48637fbed',
    title: "Child's Christmas in Wales, A",
    year: 1996,
    cover: 'http://dummyimage.com/194x172.png/5fa2dd/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1918,
    contentRaiting: 'PG-13',
    source: 'https://chronoengine.com/elementum.html',
    tags: ['Comedy|Drama|Romance|Thriller']
  },
  {
    id: '84a6b858-232b-4973-8948-0cde178e9177',
    title: 'Knuckle ',
    year: 1996,
    cover: 'http://dummyimage.com/100x207.png/5fa2dd/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1988,
    contentRaiting: 'G',
    source: 'https://mediafire.com/quam/fringilla.js',
    tags: ['Comedy|Musical']
  },
  {
    id: 'f0a33e17-5d6b-404b-95bc-e233cb1a22ca',
    title: 'Comic Book Villains',
    year: 1994,
    cover: 'http://dummyimage.com/148x142.bmp/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1948,
    contentRaiting: 'PG-13',
    source:
      'https://myspace.com/leo/maecenas/pulvinar/lobortis/est/phasellus.png',
    tags: ['Documentary', 'Action|Drama']
  },
  {
    id: 'a81e37a0-721d-44f2-9bd0-e8b49c24c9f9',
    title: 'Sublime',
    year: 2008,
    cover: 'http://dummyimage.com/148x216.jpg/5fa2dd/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1936,
    contentRaiting: 'R',
    source: 'http://epa.gov/in/imperdiet/et.js',
    tags: [
      'Documentary',
      'Drama|Mystery',
      '(no genres listed)',
      'Comedy|Sci-Fi'
    ]
  },
  {
    id: '230c167f-2605-41d9-aeae-5599eb87d549',
    title: 'Householder, The (Gharbar)',
    year: 2012,
    cover: 'http://dummyimage.com/153x159.jpg/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1950,
    contentRaiting: 'G',
    source: 'https://quantcast.com/purus.json',
    tags: ['Comedy|Fantasy|Sci-Fi', 'Documentary', 'Comedy|Drama', 'Action']
  },
  {
    id: 'eca76aff-d79f-450e-90cf-72288f47d6ef',
    title: 'Shriek If You Know What I Did Last Friday the Thirteenth',
    year: 2008,
    cover: 'http://dummyimage.com/150x232.bmp/dddddd/000000',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1939,
    contentRaiting: 'G',
    source: 'https://de.vu/nulla/sed.png',
    tags: [
      'Action|Comedy',
      'Crime|Drama|Mystery|Thriller',
      'Comedy',
      'Drama|Horror|Romance|Thriller',
      'Drama|War'
    ]
  },
  {
    id: '02f186d3-e04e-4d62-a270-5422c618f748',
    title: 'Life as a House',
    year: 1999,
    cover: 'http://dummyimage.com/154x199.png/cc0000/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2032,
    contentRaiting: 'R',
    source:
      'https://answers.com/non/mattis/pulvinar/nulla/pede/ullamcorper.aspx',
    tags: ['Crime|Mystery|Romance|Thriller']
  },
  {
    id: '9c043c67-7340-4bde-b4f9-a18605aadb8e',
    title: 'Ticket To Romance (En enkelt til Korsør)',
    year: 2008,
    cover: 'http://dummyimage.com/154x181.bmp/dddddd/000000',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1938,
    contentRaiting: 'PG-13',
    source: 'https://cpanel.net/eleifend.js',
    tags: ['Drama', 'Drama|Thriller', 'Comedy|Drama|Romance', 'Drama']
  },
  {
    id: '7939f03b-e67d-4ad4-a334-d8d700685c42',
    title: '11 x 14',
    year: 1999,
    cover: 'http://dummyimage.com/183x116.jpg/dddddd/000000',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 1902,
    contentRaiting: 'G',
    source: 'http://typepad.com/luctus.html',
    tags: ['Horror', 'Drama|Romance', 'Documentary', 'Drama']
  },
  {
    id: '9c1f3e77-2df6-4a36-803e-0dc3435c5356',
    title: 'First Wives Club, The',
    year: 2010,
    cover: 'http://dummyimage.com/202x175.jpg/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1926,
    contentRaiting: 'PG',
    source: 'https://miitbeian.gov.cn/sagittis/sapien/cum.html',
    tags: ['Comedy|Crime']
  },
  {
    id: '1b5b8789-daf4-4692-ae08-b1e654f9c7cc',
    title: 'Mad Max Beyond Thunderdome',
    year: 1997,
    cover: 'http://dummyimage.com/117x159.png/cc0000/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2018,
    contentRaiting: 'G',
    source: 'https://accuweather.com/eleifend/quam/a.jsp',
    tags: ['Drama|Romance']
  },
  {
    id: '484436eb-c74b-4ab2-b6f4-43e609c64daa',
    title: 'Maurice',
    year: 1998,
    cover: 'http://dummyimage.com/246x162.png/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1979,
    contentRaiting: 'PG',
    source: 'https://samsung.com/sociis/natoque/penatibus/et/magnis/dis.js',
    tags: ['Comedy|Documentary', 'Comedy']
  },
  {
    id: '405d5360-e061-412e-80b3-2fa21a4222a4',
    title: 'Godfather: Part III, The',
    year: 1995,
    cover: 'http://dummyimage.com/130x183.jpg/5fa2dd/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2012,
    contentRaiting: 'G',
    source: 'http://t.co/sed/sagittis/nam/congue/risus.jpg',
    tags: ['Crime|Drama', 'Documentary|War', 'Action|Comedy|Crime|Thriller']
  },
  {
    id: 'a921f8ba-f573-4f85-92ab-251640935625',
    title: 'Undead',
    year: 1992,
    cover: 'http://dummyimage.com/209x206.jpg/5fa2dd/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 1895,
    contentRaiting: 'PG',
    source: 'https://altervista.org/ipsum/primis/in.xml',
    tags: ['Romance|Thriller', 'Comedy|Western', 'Crime|Thriller']
  },
  {
    id: '6dcc3dc6-33c3-48d8-afa6-bcc7c4fa659b',
    title: 'The DUFF',
    year: 2011,
    cover: 'http://dummyimage.com/154x141.bmp/ff4444/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2068,
    contentRaiting: 'G',
    source: 'https://ucla.edu/integer/aliquet/massa.json',
    tags: [
      'Crime|Film-Noir',
      'Drama|Thriller',
      'Drama|Romance',
      'Comedy|Romance',
      'Action|Thriller|Western'
    ]
  },
  {
    id: 'bb6547b2-42f8-4641-a5d2-41e35ead0bda',
    title: 'The Valley of Gwangi',
    year: 1993,
    cover: 'http://dummyimage.com/149x155.bmp/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2024,
    contentRaiting: 'PG',
    source: 'https://netscape.com/mauris/morbi/non/lectus/aliquam/sit.xml',
    tags: ['Comedy', 'Drama']
  },
  {
    id: 'dc7b2060-9185-4f74-8d5b-34deaca5a111',
    title: 'Pride & Prejudice',
    year: 2005,
    cover: 'http://dummyimage.com/138x155.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1945,
    contentRaiting: 'R',
    source: 'http://is.gd/vitae.png',
    tags: ['Action|Crime|Drama|Thriller', 'Comedy|Fantasy']
  },
  {
    id: 'f2d7602a-1d26-449d-a530-affb2768dd4a',
    title: 'Knightriders',
    year: 2007,
    cover: 'http://dummyimage.com/225x242.jpg/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 2031,
    contentRaiting: 'PG-13',
    source:
      'https://bloglines.com/suspendisse/potenti/in/eleifend/quam/a/odio.jsp',
    tags: ['Sci-Fi', 'Adventure|Crime|Horror|Thriller', 'Drama', 'Comedy|Drama']
  },
  {
    id: '882ac3a8-7adb-46d6-8437-451e53c1478c',
    title: 'Dances With the Dragons ( Yu long gong wu)',
    year: 2009,
    cover: 'http://dummyimage.com/114x164.bmp/5fa2dd/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2057,
    contentRaiting: 'PG',
    source: 'https://ezinearticles.com/nulla.js',
    tags: ['Comedy', 'Documentary', 'Documentary']
  },
  {
    id: 'fe085eb5-657b-450d-b17a-2ea93fa3dfbd',
    title: "You'll Never Get Rich",
    year: 2000,
    cover: 'http://dummyimage.com/160x120.bmp/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2038,
    contentRaiting: 'PG',
    source: 'https://dailymotion.com/volutpat/quam/pede/lobortis/ligula.html',
    tags: ['Comedy|Musical|Romance', 'Comedy|Crime|Mystery|Thriller']
  },
  {
    id: '6d7b3664-042a-4f12-977e-7d1c21b1546c',
    title: 'Frankenstein 90',
    year: 2007,
    cover: 'http://dummyimage.com/242x208.bmp/cc0000/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2064,
    contentRaiting: 'PG-13',
    source: 'http://hao123.com/cubilia/curae.js',
    tags: ['Adventure|Animation|Children|Comedy|Fantasy|Romance']
  },
  {
    id: '73d30d40-c0a4-46bd-b3af-1613ea83e0bc',
    title: 'Saturn 3',
    year: 1992,
    cover: 'http://dummyimage.com/214x156.bmp/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1986,
    contentRaiting: 'PG',
    source: 'http://oakley.com/molestie.html',
    tags: [
      'Comedy',
      'Drama|Horror|Thriller',
      'Drama',
      'Action|Film-Noir|Sci-Fi',
      'Comedy|Drama|Romance'
    ]
  },
  {
    id: '495ba546-d89a-4b1b-81e2-69768795d248',
    title: 'Heidi',
    year: 2003,
    cover: 'http://dummyimage.com/236x201.jpg/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2032,
    contentRaiting: 'PG-13',
    source: 'http://usda.gov/leo.aspx',
    tags: [
      'Drama',
      'Comedy',
      'Action|Horror|Sci-Fi',
      'Drama|Romance',
      'Action|Drama|War'
    ]
  },
  {
    id: '184069e5-0a8c-4014-9ad0-3f3af15a2560',
    title: 'Stuck ',
    year: 2011,
    cover: 'http://dummyimage.com/108x175.png/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1929,
    contentRaiting: 'PG-13',
    source: 'https://instagram.com/nisl/duis/ac/nibh/fusce.jsp',
    tags: ['Drama|Mystery', 'Children|Fantasy']
  },
  {
    id: '9ea27d38-b4fa-4582-992a-facd8a757021',
    title: 'Hostel',
    year: 2006,
    cover: 'http://dummyimage.com/191x235.bmp/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2036,
    contentRaiting: 'NC-17',
    source:
      'https://lycos.com/sit/amet/consectetuer/adipiscing/elit/proin/risus.aspx',
    tags: [
      'Drama|Film-Noir|Thriller',
      'Action|Drama|War|Western',
      'Drama',
      'Action|Drama|War',
      'Action|Comedy'
    ]
  },
  {
    id: 'fab0c109-1505-48de-af53-24aa863d4378',
    title: 'Before Midnight',
    year: 2007,
    cover: 'http://dummyimage.com/110x209.jpg/5fa2dd/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 1890,
    contentRaiting: 'G',
    source: 'http://photobucket.com/laoreet/ut.jsp',
    tags: ['Comedy|War', 'Crime|Drama|Film-Noir']
  },
  {
    id: '4ecb00e7-76f4-47ee-84b5-4e2a830335ba',
    title: 'Ninjas vs. Zombies',
    year: 2000,
    cover: 'http://dummyimage.com/151x126.png/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 2034,
    contentRaiting: 'R',
    source: 'https://dell.com/nibh/fusce/lacus.xml',
    tags: ['Children|Comedy|Drama|Fantasy', 'Drama']
  },
  {
    id: '24451b93-eb4c-407f-b186-6ba863e23c9e',
    title: 'Flame and the Arrow, The',
    year: 1996,
    cover: 'http://dummyimage.com/222x196.bmp/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1983,
    contentRaiting: 'PG-13',
    source: 'https://so-net.ne.jp/pulvinar/sed.xml',
    tags: ['Comedy|Drama', 'Comedy|Musical', 'Comedy', 'Drama|Sci-Fi']
  },
  {
    id: 'ad6f13d9-814f-4b83-9257-054747bd35c3',
    title: 'No Retreat, No Surrender',
    year: 2000,
    cover: 'http://dummyimage.com/112x168.png/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1945,
    contentRaiting: 'NC-17',
    source: 'http://toplist.cz/sit/amet/justo/morbi.jpg',
    tags: ['Drama', 'Comedy|Drama']
  },
  {
    id: 'a0860ea4-8c51-462d-b4fc-edca78293458',
    title: 'Haunting, The',
    year: 2011,
    cover: 'http://dummyimage.com/181x107.jpg/ff4444/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1959,
    contentRaiting: 'G',
    source: 'https://biblegateway.com/etiam/vel.png',
    tags: ['Drama', 'Action|Comedy|Crime', 'Comedy|Drama|Romance']
  },
  {
    id: '8cc008cf-a15a-4a79-8cab-c2be38594383',
    title: 'Easy Wheels',
    year: 2006,
    cover: 'http://dummyimage.com/210x129.jpg/ff4444/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1892,
    contentRaiting: 'NC-17',
    source: 'http://about.com/nulla/elit/ac/nulla/sed/vel.jpg',
    tags: [
      'Comedy',
      'Action|Adventure',
      'Comedy|Drama|Romance',
      'Drama|Horror|Thriller'
    ]
  },
  {
    id: 'ed492b82-3da4-492b-bae4-4e75d2651e4c',
    title: 'Real Cancun, The',
    year: 2005,
    cover: 'http://dummyimage.com/212x198.bmp/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1977,
    contentRaiting: 'R',
    source: 'http://wired.com/morbi/non/lectus/aliquam/sit/amet.jpg',
    tags: ['Drama|Romance']
  },
  {
    id: '0e240a48-29d6-4b8b-bb7a-3982ca1903c9',
    title: 'Genevieve',
    year: 1965,
    cover: 'http://dummyimage.com/186x153.png/cc0000/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1937,
    contentRaiting: 'NC-17',
    source:
      'http://pcworld.com/scelerisque/quam/turpis/adipiscing/lorem/vitae/mattis.aspx',
    tags: ['Comedy|Fantasy|Mystery', 'Crime|Thriller']
  },
  {
    id: '918abef4-dfb7-40a7-954d-3d51deb0aeea',
    title: 'Woman of the Year',
    year: 2005,
    cover: 'http://dummyimage.com/102x127.bmp/dddddd/000000',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1984,
    contentRaiting: 'R',
    source: 'https://tinypic.com/aliquam/convallis/nunc.png',
    tags: ['Comedy|Romance']
  },
  {
    id: '68d1c778-69a2-4042-8b8c-ffdeba7930e0',
    title: 'Couch Trip, The',
    year: 2010,
    cover: 'http://dummyimage.com/218x229.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1905,
    contentRaiting: 'PG',
    source: 'http://cbslocal.com/non/interdum.jsp',
    tags: [
      'Documentary',
      'Action|Drama|Horror|Mystery',
      'Drama|Romance',
      '(no genres listed)'
    ]
  },
  {
    id: '397b0c30-a4d1-495a-9b9d-2674df0c2ac5',
    title: 'Tremors 4: The Legend Begins',
    year: 2006,
    cover: 'http://dummyimage.com/246x235.png/cc0000/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1977,
    contentRaiting: 'PG-13',
    source: 'https://g.co/in/tempor/turpis/nec/euismod/scelerisque.html',
    tags: [
      'Comedy|Drama|Fantasy|Romance',
      'Comedy|Documentary',
      'Drama',
      'Comedy|Romance'
    ]
  },
  {
    id: '7cdc4201-4319-4a34-8e1d-de9152b3a2c6',
    title: 'After Tiller',
    year: 1980,
    cover: 'http://dummyimage.com/124x137.jpg/dddddd/000000',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1932,
    contentRaiting: 'NC-17',
    source:
      'http://deviantart.com/tempus/vivamus/in/felis/eu/sapien/cursus.jsp',
    tags: ['Adventure|Drama|Horror', 'Comedy', 'Mystery|Thriller']
  },
  {
    id: '1f68bd41-61c2-4326-9846-3197b2147be4',
    title: 'Crips and Bloods: Made in America',
    year: 1994,
    cover: 'http://dummyimage.com/152x136.bmp/cc0000/ffffff',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1896,
    contentRaiting: 'R',
    source: 'http://alexa.com/dictumst/aliquam/augue.js',
    tags: ['Drama|Fantasy']
  },
  {
    id: '0791072d-ee03-4c81-8d2c-e9dcc6da2192',
    title: 'Oh, Woe Is Me (Hélas pour moi)',
    year: 2001,
    cover: 'http://dummyimage.com/155x223.png/dddddd/000000',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1898,
    contentRaiting: 'NC-17',
    source:
      'https://ebay.co.uk/platea/dictumst/aliquam/augue/quam/sollicitudin/vitae.json',
    tags: ['Drama|Mystery|Thriller', 'Comedy', 'Drama', 'Comedy|Drama', 'Drama']
  },
  {
    id: 'bc9c964c-8d57-44cb-ad21-825543b70af6',
    title: 'Words and Pictures',
    year: 2004,
    cover: 'http://dummyimage.com/178x106.jpg/5fa2dd/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2047,
    contentRaiting: 'PG-13',
    source: 'https://geocities.com/turpis/elementum/ligula/vehicula.png',
    tags: ['Action|Crime|Thriller']
  },
  {
    id: 'f26f5eef-d2da-42a9-9508-c14f93a2f679',
    title: "It's Alive 2: It Lives Again",
    year: 2005,
    cover: 'http://dummyimage.com/240x112.png/5fa2dd/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1966,
    contentRaiting: 'R',
    source: 'http://princeton.edu/morbi/vel/lectus/in/quam/fringilla.html',
    tags: [
      'Animation',
      'Comedy',
      'Comedy',
      'Action|Drama|Horror|Sci-Fi|Thriller',
      'Adventure|Fantasy'
    ]
  },
  {
    id: '66e5aee3-99da-4a93-93e2-2fde81a8ee5d',
    title: 'Jonathan Livingston Seagull',
    year: 1992,
    cover: 'http://dummyimage.com/133x146.jpg/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1904,
    contentRaiting: 'NC-17',
    source: 'http://dagondesign.com/lacus/at.png',
    tags: ['Comedy|Drama|Thriller', 'Drama', 'Drama']
  },
  {
    id: '8bfde93f-f7d9-493f-9409-8afd882daa57',
    title: 'Petals on the Wind',
    year: 2009,
    cover: 'http://dummyimage.com/151x250.jpg/5fa2dd/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 2029,
    contentRaiting: 'G',
    source: 'https://oracle.com/curae/nulla/dapibus/dolor.aspx',
    tags: ['Drama', 'Drama', 'Comedy|Drama', 'Documentary|Musical']
  },
  {
    id: 'badd4db2-98d0-4a43-a6df-e0513c98dba2',
    title: 'Last Holiday',
    year: 1992,
    cover: 'http://dummyimage.com/216x115.png/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1974,
    contentRaiting: 'G',
    source: 'https://tripadvisor.com/elit/sodales/scelerisque/mauris/sit.aspx',
    tags: ['Drama', 'Documentary', 'Adventure|Drama', 'Crime|Drama|Romance']
  },
  {
    id: '7169fd49-bc9c-43aa-b39b-176a49939537',
    title: 'It Conquered the World',
    year: 1992,
    cover: 'http://dummyimage.com/227x164.bmp/cc0000/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1901,
    contentRaiting: 'PG-13',
    source: 'http://rediff.com/tortor.aspx',
    tags: [
      'Action|Crime|Drama|Thriller',
      'Drama',
      'Action|Crime',
      'Documentary'
    ]
  },
  {
    id: 'cc7611ba-ef74-4865-afa1-18bce53bbe43',
    title: 'Repast (Meshi)',
    year: 1994,
    cover: 'http://dummyimage.com/240x218.png/5fa2dd/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1927,
    contentRaiting: 'R',
    source: 'https://about.me/nisi/venenatis/tristique/fusce/congue.jsp',
    tags: ['Drama', 'Comedy|Crime']
  },
  {
    id: 'bcb6f563-57a4-43a6-8c32-e90900debf7d',
    title: 'Odd Couple, The',
    year: 1995,
    cover: 'http://dummyimage.com/146x115.jpg/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1953,
    contentRaiting: 'PG',
    source: 'https://sakura.ne.jp/amet/justo/morbi.jsp',
    tags: [
      'Action|Sci-Fi|Thriller',
      'Adventure|Animation|Comedy|Fantasy|IMAX',
      'Crime|Drama|Thriller',
      'Drama',
      'Action|Drama|War'
    ]
  },
  {
    id: '202be42a-701f-4dab-9cdd-21ac96b33041',
    title: 'Priceless (Hors de prix)',
    year: 2007,
    cover: 'http://dummyimage.com/116x212.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 2063,
    contentRaiting: 'PG',
    source: 'http://skyrock.com/luctus/cum/sociis/natoque/penatibus/et.jpg',
    tags: ['Comedy|Drama', 'Children|Comedy']
  },
  {
    id: 'ef32702a-4c26-4c85-839d-b154c0e920e8',
    title: 'Young Unknowns, The',
    year: 2002,
    cover: 'http://dummyimage.com/240x126.png/cc0000/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1940,
    contentRaiting: 'R',
    source: 'https://comsenz.com/varius/ut/blandit/non.xml',
    tags: [
      'Drama|Thriller',
      'Drama|Romance|Thriller',
      'Horror|Romance|Sci-Fi',
      'Action|Thriller',
      'Documentary'
    ]
  },
  {
    id: 'fb436f13-5fb7-4aa8-8ce8-bb098bb87a68',
    title: 'Kentuckian, The',
    year: 2011,
    cover: 'http://dummyimage.com/162x145.jpg/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 2024,
    contentRaiting: 'PG-13',
    source: 'https://usda.gov/lorem/vitae/mattis/nibh/ligula/nec.jpg',
    tags: ['Sci-Fi', 'Horror', 'Comedy']
  },
  {
    id: '9b41ef5c-b155-4b14-9426-b04198ae60c3',
    title: 'Plague Dogs, The',
    year: 2007,
    cover: 'http://dummyimage.com/225x201.jpg/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1906,
    contentRaiting: 'NC-17',
    source: 'https://pinterest.com/non/mauris/morbi/non/lectus.png',
    tags: ['Drama|Horror|Thriller', 'Drama', 'Documentary', 'Documentary']
  },
  {
    id: 'c831f8d7-2eb3-486a-a85d-ef2fa9e326d5',
    title: "Red's Dream",
    year: 2009,
    cover: 'http://dummyimage.com/190x181.jpg/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2037,
    contentRaiting: 'PG',
    source:
      'http://privacy.gov.au/fusce/congue/diam/id/ornare/imperdiet/sapien.jsp',
    tags: ['Animation|Comedy|Sci-Fi', 'Drama', 'Horror']
  },
  {
    id: 'a358bd30-bb38-42bf-a136-64084e5184b3',
    title: 'Tanner Hall',
    year: 2002,
    cover: 'http://dummyimage.com/116x109.bmp/5fa2dd/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 1947,
    contentRaiting: 'R',
    source: 'http://linkedin.com/venenatis/non.jsp',
    tags: ['Drama|Romance', 'Drama|Romance', 'Action|Drama', 'Documentary']
  },
  {
    id: 'cc755632-9184-4dc2-b739-e7c9acba1db1',
    title: 'Teahouse of the August Moon, The',
    year: 1994,
    cover: 'http://dummyimage.com/202x209.jpg/cc0000/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 1915,
    contentRaiting: 'G',
    source: 'https://ebay.co.uk/donec/vitae/nisi/nam/ultrices/libero.js',
    tags: ['Comedy|Crime|Mystery']
  },
  {
    id: '45546fe7-d700-4381-a464-dc765c495ade',
    title: 'Two Rode Together',
    year: 1986,
    cover: 'http://dummyimage.com/234x162.png/5fa2dd/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2068,
    contentRaiting: 'G',
    source: 'https://aboutads.info/lacinia/eget.json',
    tags: [
      'Drama',
      'Comedy|Drama|Romance',
      'Action|Adventure|Fantasy|Romance',
      'Drama|Romance'
    ]
  },
  {
    id: '3424cc7b-7353-44c7-bba3-61b205c7c369',
    title: 'Class of 1999',
    year: 1993,
    cover: 'http://dummyimage.com/221x221.bmp/cc0000/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1976,
    contentRaiting: 'G',
    source: 'https://engadget.com/cubilia/curae/duis.html',
    tags: ['Romance', 'Documentary']
  },
  {
    id: '732afea3-24c1-4538-a549-6287ca7886d8',
    title: "Santa's Pocket Watch",
    year: 1993,
    cover: 'http://dummyimage.com/190x181.jpg/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 2030,
    contentRaiting: 'R',
    source: 'https://spotify.com/ipsum/praesent.jpg',
    tags: ['Comedy|Drama|Musical', 'Comedy|Fantasy|Musical']
  },
  {
    id: '57307192-554a-4a28-8ff9-a501345fd4c6',
    title: 'Dolly Sisters, The',
    year: 1999,
    cover: 'http://dummyimage.com/175x208.bmp/5fa2dd/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2028,
    contentRaiting: 'PG',
    source: 'http://amazon.de/lobortis/vel/dapibus/at/diam.js',
    tags: ['Drama|Thriller', 'Drama', 'Drama', 'Drama|Romance']
  },
  {
    id: '3d284254-c993-4847-99a4-5652f48d654b',
    title: 'Chump at Oxford, A',
    year: 1994,
    cover: 'http://dummyimage.com/217x223.png/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1928,
    contentRaiting: 'PG-13',
    source: 'https://goo.ne.jp/rutrum/at/lorem/integer/tincidunt.js',
    tags: ['Crime|Drama', 'Drama', 'Comedy|Horror']
  },
  {
    id: '41f6e3ed-a400-46c6-8cb4-1543ad71082c',
    title: "Satan's Sword II (Daibosatsu toge: Ryujin no maki)",
    year: 2011,
    cover: 'http://dummyimage.com/172x240.jpg/ff4444/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 1983,
    contentRaiting: 'NC-17',
    source: 'https://cpanel.net/lobortis/vel/dapibus/at/diam.jpg',
    tags: ['Animation']
  },
  {
    id: 'a3ce1217-490a-42a5-9271-878b99d648dc',
    title: 'Staggered',
    year: 1996,
    cover: 'http://dummyimage.com/122x247.png/5fa2dd/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1984,
    contentRaiting: 'PG-13',
    source: 'https://amazonaws.com/rutrum/at.aspx',
    tags: ['Comedy|Drama', 'Comedy']
  },
  {
    id: 'd720151e-f625-4179-be52-0b710bd606cd',
    title: 'Words, The',
    year: 2002,
    cover: 'http://dummyimage.com/179x156.bmp/ff4444/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1921,
    contentRaiting: 'PG',
    source: 'http://reddit.com/gravida.png',
    tags: ['Comedy|Sci-Fi', 'Documentary', 'Drama', 'Drama']
  },
  {
    id: '19af383a-f508-4fd7-bee5-c909b11eebef',
    title: "Pyromaniac's Love Story, A",
    year: 2012,
    cover: 'http://dummyimage.com/114x217.jpg/ff4444/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 1997,
    contentRaiting: 'PG-13',
    source: 'https://i2i.jp/fusce/lacus/purus.aspx',
    tags: ['Action|Adventure|Thriller', 'Comedy|Drama']
  },
  {
    id: '3e7691ae-8ea5-4e5f-aab3-c32b904a6fde',
    title: 'Howling IV: The Original Nightmare',
    year: 1992,
    cover: 'http://dummyimage.com/235x137.png/ff4444/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2021,
    contentRaiting: 'NC-17',
    source: 'https://yellowpages.com/nulla/dapibus.png',
    tags: ['Comedy|Drama', 'Romance', 'Comedy|Crime|Mystery']
  },
  {
    id: '8a48b488-be8a-4e72-a7ee-de1261837945',
    title: 'Life of Oharu, The (Saikaku ichidai onna)',
    year: 2009,
    cover: 'http://dummyimage.com/112x230.bmp/5fa2dd/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1897,
    contentRaiting: 'R',
    source: 'http://amazon.co.jp/pellentesque/at/nulla/suspendisse.html',
    tags: [
      'Comedy|Musical|Romance',
      'Crime|Horror|Mystery|Thriller',
      'Action|Crime|Western',
      'Horror',
      'Drama|Romance'
    ]
  },
  {
    id: 'b3e63e97-e041-4733-bf11-c513b631973f',
    title: 'XX/XY',
    year: 1985,
    cover: 'http://dummyimage.com/106x200.jpg/ff4444/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 1912,
    contentRaiting: 'R',
    source: 'http://livejournal.com/arcu/adipiscing/molestie/hendrerit/at.html',
    tags: ['Drama|Romance', 'Horror|Sci-Fi']
  },
  {
    id: '8e508b93-40dd-426e-88d7-820504a78487',
    title: 'Carson City',
    year: 2005,
    cover: 'http://dummyimage.com/101x107.bmp/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1927,
    contentRaiting: 'NC-17',
    source:
      'http://sakura.ne.jp/platea/dictumst/aliquam/augue/quam/sollicitudin/vitae.jpg',
    tags: ['Western']
  },
  {
    id: '7ba40bff-fda2-468f-a231-2d13ac9090b9',
    title: 'Taffin',
    year: 2005,
    cover: 'http://dummyimage.com/191x163.bmp/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1955,
    contentRaiting: 'R',
    source: 'http://delicious.com/bibendum/felis/sed/interdum.aspx',
    tags: [
      'Adventure|Drama|Romance',
      'Crime|Drama',
      'Adventure|Fantasy',
      'Documentary|IMAX',
      'Documentary'
    ]
  },
  {
    id: 'd08f0d51-4b9f-43f6-8cd7-ccfb0f0eb36b',
    title: 'D.E.B.S.',
    year: 2011,
    cover: 'http://dummyimage.com/108x219.bmp/dddddd/000000',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 2059,
    contentRaiting: 'PG',
    source: 'https://cnet.com/nunc/proin/at/turpis/a/pede/posuere.png',
    tags: ['Action|Crime']
  },
  {
    id: 'daf92ce5-70c5-4a3c-b5d3-c3a3a63d3334',
    title: 'Times Square',
    year: 1992,
    cover: 'http://dummyimage.com/130x215.png/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1958,
    contentRaiting: 'PG',
    source: 'http://g.co/penatibus/et/magnis.jpg',
    tags: ['Drama', 'Comedy', 'Animation|Children', 'Drama']
  },
  {
    id: '2d0cb8fc-c13b-4843-9b84-86613d0283e5',
    title: 'First Descent',
    year: 2004,
    cover: 'http://dummyimage.com/158x247.jpg/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2070,
    contentRaiting: 'NC-17',
    source: 'https://vk.com/turpis/a/pede/posuere/nonummy/integer.json',
    tags: [
      'Comedy|Drama|Romance',
      'Action|Adventure|Sci-Fi',
      'Drama|Romance',
      'Action|Western',
      'Comedy|Sci-Fi'
    ]
  },
  {
    id: '10ef9e8f-4460-4604-ac8b-feda2631810d',
    title: 'Letter to Momo, A (Momo e no tegami)',
    year: 1996,
    cover: 'http://dummyimage.com/141x193.bmp/ff4444/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1890,
    contentRaiting: 'R',
    source: 'https://bizjournals.com/enim/lorem/ipsum.js',
    tags: ['Action|Comedy|Thriller', 'Comedy']
  },
  {
    id: '9bab4300-3304-46a4-a952-539492edb38e',
    title: 'The Fearless Four',
    year: 1997,
    cover: 'http://dummyimage.com/220x164.png/ff4444/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1959,
    contentRaiting: 'NC-17',
    source: 'http://acquirethisname.com/rhoncus/aliquam/lacus/morbi.js',
    tags: [
      'Drama|Romance',
      'Documentary|Musical',
      'Animation|Children|Comedy',
      'Drama|Fantasy|Romance'
    ]
  },
  {
    id: '83173c8d-160e-47fa-96a3-5db99233d39c',
    title: 'Bound',
    year: 1997,
    cover: 'http://dummyimage.com/116x118.jpg/5fa2dd/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 2010,
    contentRaiting: 'NC-17',
    source: 'https://ebay.com/ante/ipsum/primis.html',
    tags: ['Comedy|Drama|Romance', 'Action|Comedy|Documentary']
  },
  {
    id: 'e2540d21-eb61-4e59-8026-cce8778bc2a5',
    title: 'Friday the 13th Part VIII: Jason Takes Manhattan',
    year: 2011,
    cover: 'http://dummyimage.com/124x144.jpg/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1916,
    contentRaiting: 'R',
    source: 'http://phoca.cz/nisi/volutpat/eleifend/donec/ut/dolor.json',
    tags: ['Animation', 'Comedy', 'Comedy|Drama']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
