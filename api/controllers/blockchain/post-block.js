const Blockchain = require('./simpleChain').Blockchain
const Block = require('./simpleChain').Block

module.exports = async function postBlock(req, res) {
console.log('post called')
  const myBlockchain = new Blockchain()

  const newBlock = new Block(JSON.stringify(req.body))
  await myBlockchain.addBlock(newBlock)
  res.ok()
}