module.exports = {
    activate: function() {
        atom.commands.add('atom-text-editor', {
            'devdocs:doc': this.search
        });
    },

    search: function() {
        var wordToSearchFor = atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor();
        var shell = require('shell');
        shell.openExternal("http://devdocs.io/#q=" + wordToSearchFor);
    }
};
