"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = File;
var d = document;

function File() {
  var fs = d.getElementById('file');
  var json = d.getElementById('json');
  fs.addEventListener('change', function (e) {
    var files = e.target.files,
        f = files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      var data = new Uint8Array(e.target.result),
          workbook = XLSX.read(data, {
        type: 'array'
      }),
          first_sheet_name = workbook.SheetNames[0],
          worksheet = workbook.Sheets[first_sheet_name],
          jsonData = XLSX.utils.sheet_to_json(worksheet, {
        raw: true
      });
      console.log(jsonData);
    };

    reader.readAsArrayBuffer(f);
  }, false);
}