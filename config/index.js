// look for config.json
var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb+srv://'+ configValues.uname + ':'+ configValues.pwd +
        '@cluster0.ikkmx5t.mongodb.net/nodetodosample?retryWrites=true&w=majority';
    }
}