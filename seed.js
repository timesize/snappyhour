var db = require("./models");

var Location = [{
  name: "Smokies",
  address: "123 Pine St",
  zipCode: 94101,
  deal:"True"
},
{
  name: "Joshua Tree",
  address: "Bush St",
  zipCode: 94101,
  deal:"True"
},
{
  name: "Blue Owl",
  address: "2nd Ave",
  zipCode: 94101,
  deal: "True"
}

];

db.Primary.remove({}, function(err, deletedPrimaries){

  db.Primary.create( Location, function(err, successfulPrimary){
    if (err) { return console.log('ERROR', err); }

    console.log("success! HEre's the actual DB Entry: ", successfulPrimary);
    process.exit();
  });
  console.log("Everything removed!");
});
