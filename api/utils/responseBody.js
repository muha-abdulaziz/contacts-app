module.exports = (message, data, error) => {
  if (!message) throw new Error('message is required');
  return {
    message,
    data: data || null,
    error: error || undefined,
  };
};
