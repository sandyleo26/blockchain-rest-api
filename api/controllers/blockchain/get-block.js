const Blockchain = require('./simpleChain').Blockchain

module.exports = async function getBlock(req, res) {
  const myBlockchain = new Blockchain();

  if (await myBlockchain.ready()) {
    const id = req.param('id')
  
    const result = await myBlockchain.getBlock(parseInt(id))
    return res.json(result)
  }
}
