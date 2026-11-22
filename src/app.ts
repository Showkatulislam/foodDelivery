import "./config/env.js"
import express, { Express } from "express";


export const app:Express = express();

app.use(express.json())