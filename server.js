import express from "express";

const app = express();

app.get("/wb", async (req, res) => {
  const nm = req.query.nm;

  const url =
    `https://card.wb.ru/cards/v2/detail?appType=1&curr=rub&dest=-1257786&nm=${nm}`;

  try {
    const r = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json,text/plain,*/*",
        "Referer": "https://www.wildberries.ru/",
        "Origin": "https://www.wildberries.ru"
      }
    });

    const text = await r.text();

    res.setHeader("Content-Type", "application/json");
    res.send(text);

  } catch (e) {
    res.json({ error: true, message: e.message });
  }
});

app.listen(3000, () => console.log("running"));