import { notification } from '../../../data/notification'

export default function handler(req, res) {
    res.status(200).json(notification)
}