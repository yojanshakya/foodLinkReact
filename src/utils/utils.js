export const convertBase64ToFile = async (base64) => {
  const url = 'data:image/png;' + base64;
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob],"File name",{ type: "image/png" });
      return file
    })
}



export function dataURLtoFile(dataurl, filename = "image") {
  var arr = ("data:image/png;base64," + dataurl).split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// //Usage example:
// var file = dataURLtoFile('data:image/png;base64,......', 'a.png');
// console.log(file);