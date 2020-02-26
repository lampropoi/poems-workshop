const getPoems = async () => {
  const spreadsheetId = '1K4yxWtEIUguMlTpbqsrG50rb8vG6Qsj5TErYFVeGEXo';
  const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': '7484c361d0dd4473e4f2c94abca65ba53eb27844'
    },
    body: JSON.stringify({
      query: `
        {
          get {
            id
            title
            image
            description
            descriptionFull
          }
        }
      `
    })
  });
  const responseJSON = await response.json();
  return responseJSON && responseJSON.data && responseJSON.data.get && responseJSON.data.get;
};

export default getPoems;
