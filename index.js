const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

const puerto = 8000;

const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/api.tupony.app/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/api.tupony.app/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/api.tupony.app/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpsServer = https.createServer(credentials, app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "src/public")));

httpsServer.listen(puerto, () => {
  console.log(`Servidor HTTPS en puerto ${puerto}`);
});
