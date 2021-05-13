const router = require('express').Router();
const { User, Clothes } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('home', {loggedIn: req.session.logged_in})
});

// Get one users closet
// Add the custome middleware (withAuth) before allowing the user to access the closet
// router.get('/user/:id', async (req, res) => {
//   try {
//     const dbUserCloset = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Clothes,
//           attributes: [
//             'id',
//             'type',
//             'brand',
//             'date_purchased',
//             'description',
//             'filename',
//           ],
//         },
//       ],
//     });

//     res.status(200).json(dbUserCloset)

//     const closet = dbUserCloset.get({ plain: true });
//     res.render('profile', {closet})

//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [
        { 
          model: Clothes,
          attributes: [
            'id',
            'type',
            'brand',
            'date_purchased',
            'filename',
            'description',
          ]
        }],
    });

    const user = userData.get({ plain: true });
    res.render('profile', {user, 
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
})


// Get one item of clothing
// Add the custome middleware (withAuth) before allowing the user to access the closet
// router.get('/clothes/:id', async (req, res) => {
//   try {
//     const dbClothes = await Clothes.findByPk(req.params.id)
//     res.status(200).json(dbClothes)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

router.get('/clothes/:id', withAuth, async (req, res) => {
  try {
    const clothesData = await Clothes.findByPk(req.params.id)
    const clothes = clothesData.get({ plain: true });
    res.render('clothes', { clothes,
      loggedIn: req.session.loggedIn 
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the profile
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
