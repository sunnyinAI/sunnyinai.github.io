(() => {
  const { dataset } = document.body;
  const gaId = (dataset.gaId || "").trim();
  const plausibleDomain = (dataset.plausibleDomain || "").trim();

  if (gaId) {
    // Load Google Analytics (gtag) when GA measurement ID is provided.
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", gaId);
  }

  if (plausibleDomain) {
    // Load Plausible analytics when a domain attribute is set.
    const plausibleScript = document.createElement("script");
    plausibleScript.setAttribute("defer", "");
    plausibleScript.setAttribute("data-domain", plausibleDomain);
    plausibleScript.src = "https://plausible.io/js/script.js";
    document.head.appendChild(plausibleScript);
  }
})();
