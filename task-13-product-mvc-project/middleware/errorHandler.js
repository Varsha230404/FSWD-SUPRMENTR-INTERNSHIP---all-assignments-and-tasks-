const errorHandler = (error, req, res, next) => {
  console.error('[ERROR]', error.message);
  res.status(500).json({ message: 'Something went wrong' });
};

export default errorHandler;
