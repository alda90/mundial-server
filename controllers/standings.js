const Standings = require('../models/standings');

const getStandings = async (req, res = response) => {
    const standings = await Standings.find().lean();

    res.json({
        success: true,
        standings
    });
}

const updateStanding = async (req, res = response) => {
    const { name, tournament } = req.body;

    try {
        const standing = await Standings.findById(req.body.id);
        standing.name = name;
        standing.tournament = tournament;

        await standing.save();

        res.json({
            success: true,
            standing
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error de servidor'
        });
    }
}

module.exports = {
    getStandings,
    updateStanding
}