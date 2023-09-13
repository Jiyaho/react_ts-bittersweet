const router = require('express').Router();
const { Posting } = require('../models/Posting');

// router.get('/', (req, res) => res.send({ test: 'postings routes is connected..' }));

// Create Posting
router.post('/', async (req, res) => {
  try {
    const posting = new Posting(req.body);
    await posting.save();
    res.status(201).send(posting);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Posting by PostingID
router.patch('/:_id', async (req, res) => {
  try {
    const posting = await Posting.findByIdAndUpdate(req.params._id, req.body);
    await posting.save();
    res.status(200).send(posting);
  } catch (error) {
    res.status(500).send({ error });
  }
});

// Delete Posting by PostingID
router.delete('/:_id', async (req, res) => {
  try {
    const posting = await Posting.findByIdAndDelete(req.params._id);
    if (!posting) {
      return res.status(404).send('Posting was not found');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
});

// Find All Postings
router.get('/', async (req, res) => {
  try {
    const postings = await Posting.find({});
    res.status(200).send(postings);
  } catch (error) {
    res.status(500).json({ getPostsSuccess: false, error });
  }
});

// Find Posting by PostingID
router.get('/:_id', async (req, res) => {
  try {
    const posting = await Posting.findById(req.params._id);
    if (!posting) return res.status(404).send({ err: 'Posting is not found' });
    res.send(posting);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
