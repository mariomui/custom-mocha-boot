// write code below here 

describe('switchy', ()=> {
  it('should be a function', () => {
    expect(typeof switchy).toEqual('function');
  })
  it('object should have all odd values', () => {
    let arr = ['jack', 'bob'];
    let obj = {};
    function checkObj(obj) {
      if (Object.keys(obj).length === 0) {
        return false;
      }
      for (let key in obj) {
        if ((obj[key] % 2) === 0) {
          return false;
        }
      }
      return true;
    }
    switchy(arr,obj)
    expect(checkObj(obj)).toEqual(true) 
  })
  
  it("should have all the array values as object keys", () => {
      let arr = ['bob','sam', 'jacky','smith'];
      let obj = {}
      function checkArr(arr) {  
        for (var i = 0; i < arr.length; i++) {
          if (obj[arr[i]] === undefined) {
            return false;
          }
          return true;
        }
      }
        switchy(arr,obj);
        expect(checkArr(arr)).toEqual(true);
      
    });
})