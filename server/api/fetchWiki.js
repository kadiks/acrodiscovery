const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const fetchWiki = async (request, response) => {
  const url = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_ACCESS_TOKEN}`,
      "Notion-Version": `2022-02-22`,
    },
    method: "POST",
  });

  const query = await res.json();

  const dictionnaryArr = query.results.map((result) => {
    return {
      acronym: result?.properties?.Name?.title[0]?.plain_text,
      longName: result?.properties["Long name"]?.rich_text[0]?.plain_text,
    };
  });

  const dictionnary = dictionnaryArr.reduce((acc, curr) => {
    acc[curr.acronym] = curr;
    return acc;
  }, {});

  if (typeof response.status(200).json === "function") {
    return response.status(200).json(dictionnary);
  } else {
    return dictionnary;
  }
};

export default allowCors(fetchWiki);
