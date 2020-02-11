export function handleFileSelect(setState) {
  var func = setState;
  return function handleFile(evt){
    var files = evt.target.files; // FileList object
    var f = files[0];
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        debugger
        // Render thumbnail.
        let JsonObj = JSON.parse(e.target.result);
        func(JsonObj);
        console.log(JsonObj);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
  }
}
