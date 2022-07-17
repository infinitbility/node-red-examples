const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})

module.exports = function(RED) {
    function EnvNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            let obj = {apiUrl: process.env.API_URL};
            msg.payload = obj;
            node.send(msg);
        });
    }
    RED.nodes.registerType("node-env",EnvNode);
}