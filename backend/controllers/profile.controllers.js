const Profile = require('../models/profile.model');
const { uploadToCloudinary } = require('../uploads/uploads');

const createProfile = async (req, res) => {
    const {
        nickname, fullname, birthday, gender, work, hobbies,
        LifeMotto, toGo, message, profilePicture, author
    } = req.body;

    try {
        const newProfile = new Profile({
            nickname,
            fullname,
            birthday,
            gender,
            work,
            hobbies,
            LifeMotto,
            toGo,
            message,
            profilePicture,
            author
        });

        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProfile = async (req, res) => {
    const { author } = req.params;
    let updateData = req.body;

    try {
        if (req.file) {
            const profilePictureUrl = await uploadToCloudinary(req.file.path);

            updateData.profilePicture = profilePictureUrl;
        }

        const updatedProfile = await Profile.findOneAndUpdate(
            { author: author },
            updateData,
            {
                new: true,
                runValidators: true,
            });

        if (!updatedProfile) {
            return res.status(404).json({ error: 'Profile không tồn tại!' });
        }

        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createProfile,
    updateProfile,
};