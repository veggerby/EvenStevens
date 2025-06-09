const axios = require('axios');

exports.callAiEvaluator = async function(number) {
  // Call the Python AI evaluator service
  const response = await axios.post('http://ai-evaluator:8000/evaluate', { number });
  return response.data;
};
