const brides = require ('./brides');
const bridesmaids = require ('./bridesmaids');
const shoes = require ('./shoes');

let BridesPageArr = [];
let BridesmaidsPageArr = [];
let productDetailsObj = {};

module.exports = {
  getBridesDresses() {
      for (i=0; i< brides.Brides.length; i++) {
        BridesPageArr[i] =
        {pics: brides.Brides[i].pics, name: brides.Brides[i].name};}
    return BridesPageArr;
  },

  getBridesmaidsDresses() {
    for (i=0; i< bridesmaids.Bridesmaids.length; i++) {
      BridesmaidsPageArr[i] =
      {pics: bridesmaids.Bridesmaids[i].pics, name: bridesmaids.Bridesmaids[i].name};}
    return BridesmaidsPageArr;
  },

  getBridesProduct(productID) {
    productDetailsObj = brides.Brides[productID];
    return productDetailsObj;
  },

  getBridesmaidsProduct(productID) {
    productDetailsObj = bridesmaids.Bridesmaids[productID];
    return productDetailsObj;
  },

}
