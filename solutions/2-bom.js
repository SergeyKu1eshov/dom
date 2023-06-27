// BEGIN
export default function redirect(url) {
    location.href = url;
    return `${navigator.userAgent.split(" ")[0]} ${location.href}`;
  }
// END `