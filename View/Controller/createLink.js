const shortlinks = require('../Shortlinks')
const crypto = require('crypto');


const CreateLink = async (req, res) => { 
    try {
        const { redirectUrl } = req.body;
        const shortId = crypto.randomBytes(6).toString('hex');

        const newLink = await shortlinks.create({
            shortId,
            redirectUrl,
            createdAt: new Date()
        });

        return res.status(201).json(`${req.protocol}://${req.get('host')}/${shortId}`);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = CreateLink;

        