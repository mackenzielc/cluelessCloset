const { Clothes } = require('../models');

const clothesdata = [
    {
        type: 'shirt',
        date_purchased: 'March 30, 2020',
        brand: 'Aritzia',
        description: 'sleeveless, taupe',
        filename: 'blouse.png',
        user_id: '1'
    },
    {
        type: 'shirt',
        date_purchased: 'June 30, 2019',
        brand: 'Zara',
        description: 'short sleeve, yellow',
        filename: 't-shirt-yellow.png',
        user_id: '1'
    },
    {
        type: 'shirt',
        date_purchased: 'June 30, 2019',
        brand: 'Zara',
        description: 'short sleeve, blue',
        filename: 't-shirt-blue.png',
        user_id: '1'
    },
]

const seedClothes = () => Clothes.bulkCreate(clothesdata);

module.exports = seedClothes;