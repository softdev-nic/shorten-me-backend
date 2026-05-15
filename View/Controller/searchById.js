const Shortlinks = require('../Shortlinks');

const searchById = async (req, res) => {
  try {
    const shortlink = await Shortlinks.findOne({ shortId: req.params.id });
    if (!shortlink) {
      return res.status(404).json({ error: 'Shortlink not found' });
    }
    await shortlink.save();
    res.redirect(shortlink.redirectUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = searchById;