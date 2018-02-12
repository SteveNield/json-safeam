module.exports = function(raw){
  try{
    return {
      res: JSON.parse(raw),
      raw: raw,
      success: true
    };
  } catch(err) {
    return {
      err: err,
      raw: raw,
      success: false
    };
  }
}
