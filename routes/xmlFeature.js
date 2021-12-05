var express = require('express');
var router = express.Router();
var xml2js       = require('xml2js');
var SignedXml = require('xml-crypto').SignedXml	  
var fs = require('fs')




router.get('/jtox', function(req, res, next) {
   
var obj = {name: "Super", Surname: "Man", age: 23};
 
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);
  res.send(xml);
});

router.get('/xml', function(req, res, next) {

    var xml = "<library>" +
	            "<book>" +
	              "<name>Harry Potter</name>" +
	            "</book>" +
	          "</library>"
    console.log(1)
    var sig = new SignedXml()
    console.log(2)
    sig.addReference("//*[local-name(.)='book']")    
    console.log(3)
    sig.signingKey = fs.readFileSync("private.key")
    console.log(4)
    sig.computeSignature(xml)
    console.log(5)
    fs.writeFileSync("signed.xml", sig.getSignedXml())
    console.log(6)
    


});


router.get('/xtoj', function(req, res, next) {
  var parseString = require('xml2js').parseString;
  var xml = "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>";
  parseString(xml, function (err, result) {
    console.dir(JSON.parse(result));
    res.send(JSON.parse(result));
 
  });
});




module.exports = router;