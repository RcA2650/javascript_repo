//Get current URL and PathName

function fetchURLDetails() {
    return JSON.stringify({
      currentUrl: window.location.href,
      pathname: window.location.pathname
    });
  }