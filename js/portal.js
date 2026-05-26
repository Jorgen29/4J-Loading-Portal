/**
 * GSAT Portal Tab Opener Module
 */
document.addEventListener("DOMContentLoaded", () => {
  const openPortalBtn = document.getElementById("openPortalBtn");

  if (openPortalBtn) {
    openPortalBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Target GSAT portal link
      const portalUrl = "http://gsatportal.igsat.asia/users/login";

      // Opens a clean tab so the browser extension can safely take over
      window.open(portalUrl, "_blank", "noopener,noreferrer");
    });
  }
});
