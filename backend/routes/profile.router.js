const express = require('express');
const multer = require('multer');
const { storage, uploadToCloudinary } = require('../uploads/uploads');
const { createProfile, updateProfile } = require('../controllers/profile.controllers');

const router = express.Router();

const upload = multer({ storage: storage });

router.post('/createProfile', upload.single('profilePicture'), async (req, res) => {
    try {
        console.log(req.file);
        if (!req.file) {
            return res.status(400).json({ error: 'Không có file nào được chọn!' });
        }

        const profilePictureUrl = await uploadToCloudinary(req.file.path);
        req.body.profilePicture = profilePictureUrl;

        createProfile(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/updateProfile/:author', upload.single('profilePicture'), updateProfile);



module.exports = router;