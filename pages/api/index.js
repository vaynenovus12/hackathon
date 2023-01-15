import { tabung } from '../../data/tabung'
import { validator_request } from '../../data/validator_request'

export default function handler(req, res) {
    res.status(200).json(tabung)
    res.status(200).json(validator_request)
}