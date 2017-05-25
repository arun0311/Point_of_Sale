// Custom Success Response
exports.successResponse = function(data){
  body = {
    "body":data,
    "success":true,
    "status":200
  }
  return body;
}

// Custom Failure Response
exports.failureResponse = function(data){
  body = {
    "body":data,
    "success":false,
    "status":500
  }
  return body;
}
