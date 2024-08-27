const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const axios = require("axios")
require("dotenv").config();
const {redisConnection} = require("../middlewares/redisMiddlewares")
const outlookRouter = express.Router();
const { Client } = require("@microsoft/microsoft-graph-client");
const { PublicClientApplication, ConfidentialClientApplication } = require("@azure/msal-node");
app.use(express.urlencoded({ extended: true }));

const clientId = process.env.OUTLOOK_CLIENT_ID;
const clientSecret = process.env.OUTLOOK_CLIENT_SECRET;
const redirectUri = "https://reachin-box-assignment.onrender.com/outlook/callback"; 

const scopes = ['user.read','Mail.Read','Mail.Send'];

const msalConfig = {
    auth: {
      clientId:clientId,
      authority: `https://login.microsoftonline.com/common`,
      redirectUri:redirectUri,
    },
  };
  
  const pca = new PublicClientApplication(msalConfig);
  
  const ccaConfig = {
    auth: {
      clientId : clientId,
      authority: `https://login.microsoftonline.com/common`,
      clientSecret : clientSecret,
      redirectUri:redirectUri
    },
  };
  
  const cca = new ConfidentialClientApplication(ccaConfig);
  outlookRouter.get("/signin", (req, res) => {
    const authCodeUrlParameters = {
      scopes:scopes,
      redirectUri:redirectUri,
    };
  
    cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
      res.redirect(response);
    });
  });


  outlookRouter.get("/callback", async(req, res) => {
    const tokenRequest = {
      code: req.query.code,
      scopes:scopes,
      redirectUri:redirectUri,
    };
    
    try {
      const response = await cca.acquireTokenByCode(tokenRequest);
      const accessToken = response.accessToken;
      console.log(accessToken)
      const userProfile = await axios('https://graph.microsoft.com/v1.0/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userData = userProfile.data
      const mail = userData.mail;
      redisConnection.set(mail,accessToken)
      console.log('User:', userData);
      res.send(userData);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

 module.exports = {
    outlookRouter
}