const Team = require('../models/team');

const getTeams = async (req, res = response) =>  {
    const teams = await Team.find().lean();

    res.json({
        success: true,
        teams
    });
}

const updateTeam = async (req, res = response) => {
    const { name, code, continent, tournament, photo } = req.body;

    try {
        const team = await Team.findById(req.body.id);
        team.name = name;
        team.code = code;
        team.continent = continent;
        team.tournament = tournament;
        team.photo = photo;

        await team.save();

        res.json({
            success: true,
            team
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error de servidor'
        });
    }

}

module.exports = {
    getTeams,
    updateTeam
}