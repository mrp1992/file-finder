const fetchTodoFiles = require('./fetchTodoFiles');
const path = require('path');

describe('fetchTodoFiles', () => {
    const folderPath = path.join(__dirname, '../..');
    const currentDirectory = path.join(folderPath, 'testData');

    it('should return all the files with absolute path which have TODO', () => {
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).toContain(path.join(currentDirectory, 'TextFileWithTODO.txt'));
    });

    it('should return undefined when the path is invalid', () => {
        expect(fetchTodoFiles.fetchAllFilePaths("abc")).toBeUndefined();
    });

    it('should not return files which have no TODO in it', () => {
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).not.toContain(path.join(currentDirectory, 'TextFileWithoutTODO.txt'));
    });

    it('should not return files which have small TODO in it', () => {
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).not.toContain(path.join(currentDirectory, 'TextFileWithSmallTODO.txt'));
    });

    it('should not return files which have small TODO in it', () => {
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).not.toContain(path.join(currentDirectory, 'TextFileWithSpaceBetweenTODO.txt'));
    });
});