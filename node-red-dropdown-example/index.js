module.exports = function(RED) {
    function DropdownNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            let obj = {domain: config.domain, domains: config.domains};
            msg.payload = obj;
            node.send(msg);
        });
    }
    RED.nodes.registerType("dropdown",DropdownNode);
}