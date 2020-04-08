const fs = require('fs');

const createFile = (dirName, fileName, content) => {
  return new Promise((resolve, reject) => {

    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, (err) => {
        if (err) reject(err);
      });
    }

    fs.appendFile(`${dirName}/${fileName}`, content, (err) => {
      if (err) {
        reject(err);
      }
      resolve(`Log saved ${content}`);
    });
  })
}

const generateLogs = async (dir, content) => {

  try {

    const fileName = `log_${new Date().toISOString()}.txt`;
    let logContent = `${content[~~(Math.random() * content.length - 1)]}
      Today is ${new Date().toISOString()}`;

    return await createFile(dir, fileName, logContent);

  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateLogs,
  createFile
};
