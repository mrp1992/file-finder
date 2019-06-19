const path = require('path');
describe('index.js', () => {

    jest.spyOn(global.console, 'log');

it('should return all the files with TODO in the current directory', () => {
    const filePaths = require('./index');
    const currentDirectory = path.join(__dirname, '/../../testData');

    expect(console.log).toHaveBeenCalledWith(path.join(currentDirectory, 'TextFileWithTODO.txt'));
    expect(console.log).not.toHaveBeenCalledWith(path.join(currentDirectory, 'TextFileWithoutTODO.txt'));
    expect(console.log).not.toHaveBeenCalledWith(path.join(currentDirectory, 'TextFileWithSmallTODO.txt'));

});

});