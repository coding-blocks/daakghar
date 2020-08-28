const passport = require("passport");

// const requireFromEnvironment = variable => {
//   let value = process.env[variable];

//   if (!value) {
//     console.error("No $" + variable + " found in environment.");
//     console.log("You probably forgot to export the correct variables specified in util/environment.sh");
//     process.exit(1);
//   }

//   return value;
// };

const setCorsHeaders = (request, response, next) => {
  if (["http://localhost:3113"].includes(request.get("origin")))
    response.setHeader("Access-Control-Allow-Origin", request.get("origin"));

  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,api-key,user,user-id,access-token,oauth-id,authorization"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const checkRequestOrigin = (req, res, next) => {
  if (req.app.get("env") === "development" || req.get("origin") == "https://ide.codingblocks.com") next();
  else res.status(403).send("INVALID: REQUEST ORIGIN");
};

// const authenticateOrPass = (req, res, next) => {
//   passport.authenticate("bearer", { session: false }, (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     req.user = user || {};
//     return next();
//   })(req, res, next);
// };

// const getDataFromStream = function(stream) {
//   return new Promise((resolve, reject) => {
//     let result = "";
//     stream.on("data", data => (result += data));
//     stream.on("end", () => resolve(result));
//     stream.on("error", reject);
//   });
// };

// module.exports.requireFromEnvironment = requireFromEnvironment;
module.exports.setCorsHeaders = setCorsHeaders;
// module.exports.authenticateOrPass = authenticateOrPass;
module.exports.checkRequestOrigin = checkRequestOrigin;
// module.exports.getDataFromStream = getDataFromStream;
