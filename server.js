import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/wb", async (req, res) => {
  const nm = req.query.nm;

  const url =
    `https://card.wb.ru/cards/v2/detail?appType=1&curr=rub&dest=-1257786&nm=${nm}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.json({ error: true });
  }
});

app.listen(3000, () => console.log("running"));