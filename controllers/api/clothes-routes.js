const router = require('express').Router();
const { Clothes } = require('../../models');
const withAuth = require('../../utils/auth');

//create new clothing item
//add back in Auth, after checking route
router.post('/', withAuth, async (req, res) => {
    console.log("user id:", req.session.user_id)
    try {
        const newItem = await Clothes.create({
            ...req.body,
            // type: req.body.type,
            // brand: req.body.brand,
            // date_purchased: req.body.date_purchased,
            // description: req.body.description,
            // filename: req.body.filename,
            //must change the below to req.session.user_id
            //updated it from req.body.user_id to req.session.user_id
            user_id: req.session.user_id,
        });

        res.status(200).json(newItem);
    } catch (err) {
        res.status(400).json(err);
    }
});


//update clothing item
// add in withAuth middleware once routes are checked
router.put('/:id', async (req, res) => {
    try {
        const updateItem = await Clothes.update(
            {
                type: req.body.type,
                brand: req.body.brand,
                date_purchased: req.body.date_purchased,
                description: req.body.description,
                filename: req.body.filename,
                //must change the below to req.session.user_id
                user_id: req.body.user_id,
            },
            {
                where: {
                    id: req.params.id,
                    //must add req.session.urer_id - or do I even need it?
                    //user_id: req.session.user_id,
                },
            }
        );

        if(!updateItem) {
            res.status(404).json({ message: 'No clothing item found with this id!'});
            return;
        }

        res.status(200).json(updateItem);

    } catch (err) {
        res.status(400).json(err)
    }
})

//delete clothing item
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const deleteItem = await Clothes.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!deleteItem) {
            res.status(404).json({ message: 'No clothing item found with this id!'});
            return;
        }

        res.status(200).json(deleteItem);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;
