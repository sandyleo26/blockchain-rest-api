const Blockchain = require('./simpleChain').Blockchain

module.exports = async function getBlock(req, res) {
  const myBlockchain = new Blockchain();

  if (await myBlockchain.ready()) {

      const id = parseInt(req.param('id'))
      const curHeight = await myBlockchain.getBlockHeight()

      if (isNaN(id) || id > curHeight) {
        return res.badRequest('block id is not valid')
      }

      const result = await myBlockchain.getBlock(parseInt(id))
      return res.json(result)
  }
}
