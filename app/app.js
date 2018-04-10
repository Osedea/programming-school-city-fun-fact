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
        this.tell('What\'s up' + city.value + ', here is a fun fact.');
    },
});

module.exports.app = app;
