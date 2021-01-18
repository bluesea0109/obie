const db = require('../models')
const State_Policy_Carrier = db.State_Policy_Carrier
const Carrier = db.Carrier

const { policies, states } = require('../config/enum')

const index = async (req, res, next) => {
  const policy = req.query.policy.toLowerCase()
  const state = req.query.state.toUpperCase()

  let options = {
    attributes: [],
    include: [{ model: Carrier, as: 'carrier', attributes: ['id', 'name'] }],
    where: {
      policy: policies[policy],
      state: states[state],
    },
  }

  await State_Policy_Carrier.findAll(options)
    .then((data) => {
      res.json({ data })
    })
    .catch((err) => next(err))
}

module.exports = {
  index,
}
