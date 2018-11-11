const Blockchain = sails.config.globals.simpleChain.Blockchain;
const Block = sails.config.globals.simpleChain.Block;

module.exports = async function postBlock(req, res) {
  const myBlockchain = new Blockchain()
  if (await myBlockchain.ready()) {
    if (!req.body || !req.body.body) {
      return res.badRequest('body should not be empty')
    }
    const newBlock = new Block(req.body.body)
    await myBlockchain.addBlock(newBlock)
    return res.ok({ body: newBlock.body })
  }

  return res.serverError()
}