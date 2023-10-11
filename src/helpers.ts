// https://stackoverflow.com/a/64500313
const writeTextToFile = (data: string, fileName: string) => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

const strToNumber = (strNum: string) => {
  const str = strNum.trim().toLowerCase();
  let num;
  if (str.includes('k')) {
    num = Number(str.replace(/k/i, '')) * 1000;
  } else if (str.includes('m')) {
    num = Number(str.replace(/m/i, '')) * 1000000;
  } else {
    num = Number(str);
  }

  return num;
};

export { strToNumber, writeTextToFile };
