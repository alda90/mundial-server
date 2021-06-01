const Stadium = require('../models/stadium');

const getStadiums = async (req, res = response) =>  {
    const stadiums = await Stadium.find();
    
    res.json({
        success: true,
        stadiums
    });
}

const updateStadium = async (req, res = response) => {
    const { key, name, capacity, city, timezone, tournament, photo } = req.body;


    try {
        const stadium = await Stadium.findById(req.body.id);
        stadium.key = key;
        stadium.name = name;
        stadium.capacity = capacity;
        stadium.city = city;
        stadium.timezone = timezone;
        stadium.tournament = tournament;
        stadium.photo = photo;

        await stadium.save();

        res.json({
            success: true,
            stadium
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error de servidor'
        });
    }

}

module.exports = {
    getStadiums,
    updateStadium
}