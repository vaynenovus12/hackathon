import { validator_request } from "../../../data/validator_request"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(validator_request)
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

        const newValidatorReq = {
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

        validator_request.push(newValidatorReq)
        res.status(201).json(newValidatorReq)
    }

    res.status(200).json(validator_request)
}

