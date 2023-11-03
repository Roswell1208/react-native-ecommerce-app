const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

// Jeu de produits
const products = [
    {
      id: 1,
      title: 'ASUS Prime Z390-A Motherboard',
      description: 'ATX motherboard with DDR4 memory support, USB 3.1 ports, and HD audio.',
      image: 'https://media.ldlc.com/r374/ld/products/00/05/03/03/LD0005030325_2.jpg',
      price: 179.99
    },
    {
      id: 2,
      title: 'Intel Core i7-9700K Processor',
      description: '9th generation octa-core processor with a base frequency of 3.6 GHz.',
      image: 'https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_SX679_.jpg',
      price: 349.99
    },
    {
      id: 3,
      title: 'NVIDIA GeForce RTX 3080 Graphics Card',
      description: 'Gaming graphics card with 10GB GDDR6X memory and real-time ray tracing.',
      image: 'https://m.media-amazon.com/images/I/81lBqpfoncS.jpg',
      price: 699.99
    },
    {
      id: 4,
      title: 'Samsung 970 EVO Plus 1TB SSD',
      description: 'NVMe M.2 SSD offering read speeds of up to 3,500MB/s.',
      image: 'https://media.ldlc.com/r1600/ld/products/00/05/19/54/LD0005195433_2_0005196062.jpg',
      price: 199.99
    },
    {
      id: 5,
      title: 'Corsair Vengeance LPX 16GB RAM',
      description: 'DDR4 memory module with a 3000MHz frequency for fast performance.',
      image: 'https://media.ldlc.com/r1600/ld/products/00/04/38/03/LD0004380349_2_0005319963.jpg',
      price: 79.99
    },
    {
      id: 6,
      title: 'EVGA SuperNOVA 750 G3, 80+ Gold 750W PSU',
      description: 'Modular power supply with 80+ Gold certification for maximum energy efficiency.',
      image: 'https://m.media-amazon.com/images/I/712amTsU7IL.jpg',
      price: 109.99
    },
    {
      id: 7,
      title: 'Noctua NH-D15 CPU Cooler',
      description: 'Dual-tower cooler with two NF-A15 fans for silent and efficient cooling.',
      image: 'https://m.media-amazon.com/images/I/91Hw1zcAIjL.__AC_SY300_SX300_QL70_ML2_.jpg',
      price: 89.95
    },
    {
      id: 8,
      title: 'NZXT H510i ATX PC Case',
      description: 'Mid-tower ATX case with tempered glass panel and intelligent fan control.',
      image: 'https://www.datocms-assets.com/34299/1617971513-h510i-2020-white-black-kraken-x-system.png',
      price: 99.99
    },
    {
      id: 9,
      title: 'Seagate Barracuda 2TB Hard Drive',
      description: '3.5" internal hard drive with ample storage capacity for your files.',
      image: 'https://media.ldlc.com/r1600/ld/products/00/06/00/96/LD0006009614.jpg',
      price: 59.99
    },
    {
      id: 10,
      title: 'TP-Link Archer T6E AC1300 Wireless Card',
      description: 'Dual-band Wi-Fi network card for fast and stable connections.',
      image: 'https://media.ldlc.com/r1600/ld/products/00/03/28/49/LD0003284963_2.jpg',
      price: 34.99
    },
    {
        id: 11,
        title: 'ASUS VG279Q 27-Inch Gaming Monitor',
        description: 'Full HD IPS monitor with a 144Hz refresh rate for smooth gaming.',
        image: 'https://m.media-amazon.com/images/I/61kt489dT3L._AC_UF1000,1000_QL80_.jpg',
        price: 299.99
      },
      {
        id: 12,
        title: 'Corsair K95 RGB Platinum XT Mechanical Keyboard',
        description: 'Mechanical gaming keyboard with programmable RGB lighting and Cherry MX keys.',
        image: 'https://m.media-amazon.com/images/I/71PzW7vZNUL._AC_UF1000,1000_QL80_.jpg',
        price: 199.99
      },
      {
        id: 13,
        title: 'Logitech G Pro X Superlight Gaming Mouse',
        description: 'Ultralight wireless gaming mouse with HERO sensor and long battery life.',
        image: 'https://m.media-amazon.com/images/I/61ykKLbddNL.jpg',
        price: 149.99
      },
      {
        id: 14,
        title: 'SteelSeries Arctis Pro Wireless Gaming Headset',
        description: 'Wireless headset with high-resolution audio and ClearCast microphone for clear communication.',
        image: 'https://m.media-amazon.com/images/I/71ltG1omzkL.jpg',
        price: 329.99
      },
      {
        id: 15,
        title: 'Razer Goliathus Extended Chroma Mouse Pad',
        description: 'RGB mouse pad with micro-textured surface for precise mouse movements.',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/71IkIdjHuRL._AC_UL600_SR600,600_.jpg',
        price: 59.99
      },
      {
        id: 16,
        title: 'Logitech C920 HD Pro Webcam',
        description: '1080p HD webcam with automatic low-light correction for clear video calls.',
        image: 'https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920/gallery/c920-gallery-1.png?v=1',
        price: 69.99
      },
      {
        id: 17,
        title: 'Audioengine A5+ Wireless Desktop Speakers',
        description: 'Wireless speakers with high-quality stereo sound and Bluetooth connectivity.',
        image: 'https://m.media-amazon.com/images/I/512T-sq7j8S.jpg',
        price: 499.99
      },
      {
        id: 18,
        title: 'HP OfficeJet Pro 9015 All-in-One Printer',
        description: 'Color inkjet printer with duplex printing and Wi-Fi connectivity.',
        image: 'https://www.bureau-vallee.fr/fstrz/r/s/dxbyzx5id4chj.cloudfront.net/pub/media/catalog/product/7/9/79444299_2022_1_c8a1.jpg',
        price: 229.99
      },
      {
        id: 19,
        title: 'APC Back-UPS Pro 1500VA UPS',
        description: 'UPS with battery backup to protect your electronic devices during power outages.',
        image: 'https://media.ldlc.com/r1600/ld/products/00/04/58/63/LD0004586393_2.jpg',
        price: 249.99
      },
      {
        id: 20,
        title: 'Anker USB-C PowerExpand Elite Docking Station',
        description: 'USB-C docking station with 13 ports including HDMI, Ethernet, USB-A, and SD card reader.',
        image: 'https://m.media-amazon.com/images/I/71jzuOv6-pL._AC_UF1000,1000_QL80_.jpg',
        price: 179.99
      }
  ];

  

// Endpoint pour récupérer la liste des produits
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});