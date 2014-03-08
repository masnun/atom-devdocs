module.exports = {
    activate: function() {
        atom.workspaceView.command('doc', this.search);
    },

    search: function() {
        var wordUnderCursor = atom.workspace.getActiveEditor().getWordUnderCursor()
        var shell = require('shell');
        shell.openExternal("http://devdocs.io/#q=" + wordUnderCursor);
    }
}
