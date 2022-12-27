const fetchWiki = async () => {
  const url = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_ACCESS_TOKEN}`,
      "Notion-Version": `2022-02-22`,
    },
    method: "POST",
  });

  const query = await response.json();

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
  return dictionnary;
};

export default fetchWiki;
