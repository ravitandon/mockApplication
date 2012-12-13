
exports.getSla = function (request, response){
    var slaReponse = {
      "LSTMOBD348YDU5XYKUXWQ46PM": {
        "shipping_days": [
          {
            "value": "1",
            "qualifier": null
          }
        ]
      }
    };
    response.send (JSON.stringify(slaReponse));
}