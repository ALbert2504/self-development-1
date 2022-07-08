const uriToBlob = async (uri) => {
  try {
    const data = await fetch(uri);

    return await data.blob();
  } catch (e) {
    console.log(e);
  }
};

export default uriToBlob;
