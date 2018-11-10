module.exports = async function getBlock(req, res) {
  const id = req.param('id')

  console.log('id', id)

  return res.json({ id })
}
