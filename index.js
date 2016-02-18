/* jshint node: true */
'use strict';

function _importFiles(app, themeCode) {
    var folder = app.bowerDirectory + '/datatables.net-' + themeCode + '/';
    var bowerFile = require(folder + 'bower.json');

    bowerFile.main.forEach(function (value) {
        app.import(folder + value);
    });
}

module.exports = {
    name: 'ember-cli-datatables',

    mappings: {
        bootstrap: 'bs',
        jqueryui: 'jqui',
        foundation: 'zf'
    },

    included: function (app, parentAddon) {
        var target = (parentAddon || app);

        target.import(target.bowerDirectory + '/datatables.net/js/jquery.datatables.js');

        this.importTheme(target);
    },

    importTheme: function (app) {
        var projectConfig = this.project.config(app.env);
        var config = projectConfig['ember-cli-datatables'];

        var theme = (config.theme && mapping[config.theme]) ? mapping[config.theme] || 'dt';

        _importFiles(app, mappings[theme]);

        if (config.responsive) {
            _importFiles(app, 'responsive');
            _importFiles(app, 'responsive-' + theme);
        }
    }
};
