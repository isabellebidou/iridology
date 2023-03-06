function log(text) {
    if (process.env.NODE_ENV !== "production") {
      console.log(text);
    } 
  }

function  logError(text)  {
    if (process.env.NODE_ENV !== "production") {
      console.error(text);
    }
  }




  module.exports = {
 
    log,
    logError
    
  };