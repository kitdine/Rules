var obj = JSON.parse($response.body);
if (obj.data) {
  for (var i = obj.data.length - 1; i >= 0; i--) {
    if (obj.data[i].content.indexOf("raw_ad_data") > 0) {
      obj.data.splice(i, 1);
    }
  }
}
$done({body: JSON.stringify(obj)});