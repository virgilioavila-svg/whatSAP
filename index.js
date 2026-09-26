export default function handler(req, res) {
  if (req.method === 'GET') {
    const VERIFY_TOKEN = "mi_token_seguro";
    if (req.query['hub.mode'] && req.query['hub.verify_token'] === VERIFY_TOKEN) {
      return res.status(200).send(req.query['hub.challenge']);
    }
    return res.status(403).send('Error');
  }
  return res.status(200).json({ status: 'ok' });
}
