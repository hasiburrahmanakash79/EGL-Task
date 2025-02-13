const fs = require('fs');
const path = require('path');

exports.processWebhook = (req, res) => {
  const { eventType, data } = req.body;

  const signature = req.headers['x-signature'];
  if (!signature) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const filePath = path.join(__dirname, '../db.json');
  let dbData = [];
  if (fs.existsSync(filePath)) {
    dbData = JSON.parse(fs.readFileSync(filePath));
  }
  dbData.push({ eventType, data });
  fs.writeFileSync(filePath, JSON.stringify(dbData, null, 2));

  res.status(200).json({ success: true, message: 'Received' });
};