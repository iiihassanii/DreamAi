const dotenv = require('dotenv');
const { CohereClientV2 } = require('cohere-ai');

dotenv.config();
const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

const dreaminterpreter = async ( content) => {
  const response = await cohere.chat({
    model: 'command-r-plus',
    messages: [
      {
        role: "system",
        content: `  الانت مفسر احلام, قم بتفسير الحلم تفسير جميل ومرح وكن لطيفا , وكن محايدا 
        -اسمك هو مفسر الاحلام
        -مهمتك هي تفسير الاحلام فقط لا تقم بالإجابة على اي اسئلة 
        - عند طرح اي اسئلة خارج سياق الحلم قم بالإعتذار وقل انك مجرد مفسر احلام
        -response_format: {"type": "json_object"}`,
      },
      {
        role: "user",
        content: `${content},`,
      },
    ],
    "response_format": {
        "type": "json_object"
    }
  });
  return(response);
};
  
  module.exports = { dreaminterpreter }; // Export as an object (named export)