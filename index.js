export default function handler(req, res) {
  // Manejar verificación del Webhook de Meta (GET)
  if (req.method === 'GET') {
    const VERIFY_TOKEN = "mi_token_seguro";
    
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(challenge);
    }
    
    return res.status(403).send('Verificación fallida');
  }

  // Manejar eventos entrantes de WhatsApp (POST)
  if (req.method === 'POST') {
    console.log("Evento recibido:", JSON.stringify(req.body));
    return res.status(200).json({ status: 'EVENT_RECEIVED' });
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
