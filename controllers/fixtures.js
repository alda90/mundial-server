const Fixtures = require('../models/fixtures');

const getFixtures = async (req, res = response) =>  {
    const fixtures = await Fixtures.find({ 'matches.date': '2018-06-14' }).lean();

    
    res.json({
        success: true,
        fixtures
    });
}

const getFixturesByFecha = async (req, res = response) => {
    const date = req.params.date;

    const fixtures = await Fixtures.find({ 'matches.date': date }).lean();

    res.json({
        success: true,
        fixtures
    });
}

const updateFixtures = async (req, res = response) => {
    const { name, tournament, local } = req.body;

   // try {
        const fixture = await Fixtures.findById(req.body.id);
        fixture.name = name;
        fixture.tournament = tournament;
        //fixtures.matches.local = local;

        await fixture.save();

        res.json({
            success: true,
            fixture
        });
        
    // } catch (error) {
    //     return res.status(500).json({
    //         success: false,
    //         message: 'Error de servidor'
    //     });
    // }

}

module.exports = {
    getFixtures,
    getFixturesByFecha,
    updateFixtures
}