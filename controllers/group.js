const Group = require('../models/group');

const getGroups = async (req, res = response) =>  {
    const groups = await Group.find().lean();

    
    res.json({
        success: true,
        groups
    });
}

const updateGroup = async (req, res = response) => {
    const { name, tournament } = req.body;

    try {
        const group = await Group.findById(req.body.id);
        group.name = name;
        group.tournament = tournament;

        await group.save();

        res.json({
            success: true,
            group
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error de servidor'
        });
    }

}

module.exports = {
    getGroups,
    updateGroup
}