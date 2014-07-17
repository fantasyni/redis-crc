var crc = require('bindings')('crc.node');
var redisCrc = require('./lib/redisCrc');

module.exports.native = crc;
module.exports.crc16 = redisCrc.crc16;
module.exports.keyHashSlot = redisCrc.keyHashSlot;