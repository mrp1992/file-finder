const exclusionListUtil = require('./exclusionListUtil');
describe('exclusionListUtil', () => {
    it('should return true if the given file is excluded', () => {
    
       expect(exclusionListUtil.isFileExcluded('.git')).toBeTruthy();
    });

    it('should return false if the given file is not excluded ', () => {
    
        expect(exclusionListUtil.isFileExcluded('abc')).toBeFalsy();
     });
})