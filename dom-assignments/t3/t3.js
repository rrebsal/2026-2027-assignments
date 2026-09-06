function getBrowserInfo() {
  const ua = navigator.userAgent;
  let name = 'Unknown';
  let version = 'Unknown';

  if (ua.includes('Edg/')) {
    name = 'Microsoft Edge';
    version = ua.split('Edg/')[1].split('.')[0];
  } else if (ua.includes('Chrome/') && !ua.includes('Edg/')) {
    name = 'Google Chrome';
    version = ua.split('Chrome/')[1].split('.')[0];
  } else if (ua.includes('Firefox/')) {
    name = 'Mozilla Firefox';
    version = ua.split('Firefox/')[1].split('.')[0];
  } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
    name = 'Safari';
    version = ua.split('Version/')[1] ? ua.split('Version/')[1].split(' ')[0] : 'Unknown';
  }

  return `${name}, ${version}`;
}

function getOSInfo() {
  const ua = navigator.userAgent;

  if (ua.includes('Windows')) {
    return 'Windows';
  } else if (ua.includes('Mac OS')) {
    return 'macOS';
  } else if (ua.includes('Android')) {
    return 'Android';
  } else if (ua.includes('like Mac')) {
    return 'iOS';
  } else if (ua.includes('Linux')) {
    return 'Linux';
  }

  return 'Unknown';
}

const target = document.getElementById('target');

const browserInfo = getBrowserInfo();
const osInfo = getOSInfo();
const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;
const now = new Date();
const dateString = now.toLocaleDateString('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' });
const timeString = now.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });

target.insertAdjacentHTML('beforeend', `<p>Browser: ${browserInfo}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Operating system: ${osInfo}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Screen size: ${screenWidth} x ${screenHeight}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Available screen space: ${availWidth} x ${availHeight}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Date: ${dateString}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Time: ${timeString}</p>`);
