export const downloadFile = async (url: string, baseName: string) => {
  const blob = await fetch(url).then(res => res.blob());

  const urlBlob = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', urlBlob);
  link.setAttribute('download', `${baseName}`);
  link.dispatchEvent(new MouseEvent('click'));
};
