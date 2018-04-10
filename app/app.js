'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('IntroductionIntent');
    },

    'IntroductionIntent': function() {
        this.ask('Hey bro! For which city would you like to hear a fun fact?', 'Please tell me a city for which you would like to hear a fun fact.');
    },

    'FunFactIntent': function(city) {
        if (city.value == 'Montreal') {
            let options = ['Montreal has a flag with five symbols. The cross represents Christian principles. The fleur-de-lis is for the French, the shamrock for the Irish, the thistle for the Scottish and the Lancastrian rose for the English', 'No building in Montreal can be taller than the cross on the Mount Royal Mountain', 'Montreal has the highest number of restaurants per capita in Canada and the second highest in North America after New York City', 'On average there are 12 days per year with a windchill below -30 C and one day per year with a windchill below -40 C', 'There are 11 university level institutions in Montreal including four that are world-class. Students pay some of the cheapest tuition in Canada.']
            this.tell(options[Math.floor(Math.random() * options.length)]);
        } else if (city.value == 'Toronto') {
            let options = ['Toronto is one of the most cultural diverse cities in the world.', 'Yonge Street in Toronto is the longest street in the world.', 'City Hall appeared in Star Trek!'];
            this.tell(options[Math.floor(Math.random() * options.length)]);
        } else if (city.value == 'Vancouver') {
            let options = ['Vancouver is the largest film production center in North America after Los Angeles and New York City', 'Vancouver has the 4th largest cruise ship terminal in the world.', 'The Vancouver Aquarium ranks in the top 5 worldwide.', 'Greenpeace, one of the world\'s oldest and most successful environmental groups was established in Vancouver.'];
            this.tell(options[Math.floor(Math.random() * options.length)]);
        }
    },
});

module.exports.app = app;
