const Blockchain = require('./simpleChain').Blockchain
const Block = require('./simpleChain').Block

module.exports = async function postBlock(req, res) {
  const myBlockchain = new Blockchain()
  if (await myBlockchain.ready()) {
    if (!req.body || !req.body.data) {
      return res.badRequest('data should be present in request body')
    }
    const newBlock = new Block(req.body.data)
    await myBlockchain.addBlock(newBlock)
    return res.ok({ body: newBlock.body })
  }

  return res.serverError()
}