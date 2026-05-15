const shortlinks = require('../Model/Shortme');

const createShortlink = async (req, res) => {
    try {
        const { redirectUrl } = req.body;
        const shortId = crypto.randomBytes(6).toString('hex');
        const shortlink = new shortlinks({ redirectUrl, shortId, createdAt: new Date(),clicks: 0 });
        await shortlink.save();
        res.status(201).json(shortlink);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = createShortlink;