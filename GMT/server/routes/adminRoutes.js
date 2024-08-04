const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Create Admin
router.post('/', async (req, res) => {
    const newAdmin = new Admin(req.body);
    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get all Admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get Admin by ID
router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        res.status(200).json(admin);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update Admin
router.put('/:id', async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedAdmin);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete Admin
router.delete('/:id', async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
