Object.defineProperty(exports, "__esModule", {value: true})
exports.handler = void 0
const uuidv4 = require("uuidv4").uuid

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    code: uuidv4(),
    body: JSON.stringify("Hello from Lambda!"),
  }
  return response
}
