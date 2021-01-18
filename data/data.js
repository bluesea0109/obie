const XLSX = require('xlsx')
const path = require('path')
const Sequelize = require('sequelize')
const db = require('../models')
const Carrier = db.Carrier
const State_Policy_Carrier = db.State_Policy_Carrier
const { policies, states } = require('../config/enum')

const workbook = XLSX.readFile('./Data.xlsx')
const sheet_name_list = workbook.SheetNames
sheet_name_list.forEach((sheet_name) => {
  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name])
  if (sheet_name.indexOf('PL') !== -1) {
    xlData.forEach(async (row) => {
      let carrierValue = null
      let statesArray = []
      let policiesArray = []
      let items = []

      for (const [key, value] of Object.entries(row)) {
        if (key === 'Carrier') {
          carrierValue = value
        } else {
          statesArray.push(states[key.toUpperCase()])
          policiesArray.push(policies[value.toLowerCase()])
        }
      }

      const carrier = await Carrier.findOrCreate({
        where: { name: carrierValue },
        defaults: { name: carrierValue },
      })

      for (let i = 0; i < statesArray.length; i++) {
        items.push({
          carrierId: carrier[0].dataValues.id,
          policy: policiesArray[i],
          state: statesArray[i],
        })
      }

      items.forEach(async (item) => {
        await State_Policy_Carrier.create(item)
      })
    })
  }
})
