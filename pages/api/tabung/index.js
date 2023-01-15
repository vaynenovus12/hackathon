import { tabung } from '../../../data/tabung'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(tabung)
    } else if (req.method === 'POST') {
        const name = req.body.name
        const tabung_name = req.body.tabung_name
        const currentValueTarget = req.body.currentValueTarget
        const target = req.body.target

        const validator_name = req.body.validator_name
        const validator_email = req.body.validator_email
        const validator_acno = req.body.validator_acno
        const method = req.body.method
        const amount = req.body.amount
        const percentage = req.body.percentage

        const newTabung = {
            id: Date.now(),
            name: name,
            tabung_name: tabung_name,
            currentValueTarget: currentValueTarget,
            target: target,
            validator_name: validator_name,
            validator_email: validator_email,
            validator_acno: validator_acno,
            method: method,
            amount: amount,
            percentage: percentage
        }

        tabung.push(newTabung)
        res.status(201).json(newTabung)
    }

    res.status(200).json(tabung)
}

