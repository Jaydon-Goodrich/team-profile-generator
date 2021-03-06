const fs = require('fs');
//Function for writing a file to index.html
const writeNewFile = function(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error reject error
            if(err) {
                reject(err);
                return;
            }

            //if okay resolve promise
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
}
//function for copying the CSS file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err){
                reject(err);
                return;
            }

            //if okay
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
};

module.exports = { writeNewFile, copyFile };