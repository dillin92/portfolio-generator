const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there is an error, reject the promise and send the error to the Promises catch method
            if (err) {
                reject (err);
                return;
            }

            resolve ({
                ok: true,
                message: 'File Created!'
            });
        });

    });
};

const copyFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./dist/style.css.', fileContent, err => {
            if(err){
                reject(err);
            }

            resolve ({
                ok:true,
                message: 'file created'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
  };