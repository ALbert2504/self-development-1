const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const id = req.headers.authorization;

    if (!id) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized',
      });
    }

    req.userId = id;

    next();
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong',
      e
    });
  }
};

export default auth;