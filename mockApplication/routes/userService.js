
exports.getAddresses = function (request, response){
    console.log ('In get Addresses');
    var address = {
    "total": 1,
    "results": [
        {
            "id": "ADD13540023435933265",
            "account_id": "ACC13540022540153011",
            "first_name": "Neeraj",
            "last_name": "Singh",
            "address_line1": "Address 1",
            "address_line2": "Address 2",
            "landmark": "LandMark",
            "city": "Bangalore",
            "state": "Karnataka",
            "state_code": "IN-KA",
            "country": "IN",
            "pincode": "560008",
            "phone": "9988887766",
            "guest": false,
            "active": true,
            "version": 1,
            "creation_date": "2012-11-27 13:15:43.0",
            "last_modified": "2012-11-27 13:15:43.0",
            "creating_system": "web",
            "preferences": null
        }
    ]
    };
    console.log ('address=' + JSON.stringify(address));
    response.send (JSON.stringify(address));
}