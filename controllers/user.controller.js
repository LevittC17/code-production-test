import express from 'express';

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        return res.status(201).json({
            user,
        });


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default createUser;