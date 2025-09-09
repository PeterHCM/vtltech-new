/*! Scripts v25.9.9 | (c) 9/09/2025 by Peter from VTL Tech Co., Ltd.*/
// === Constants ===
const logoSquareUrl = "https://n.vtltech.com.vn/media/5xun3pcc/vtl_logo.svg";
const currentPageUrl = window.location.href;
// === QR Code ===
function initQRCode() {
  const qrTarget = document.getElementById("url_qr");
  if (qrTarget && typeof QRCodeStyling !== "undefined") {
    const qr = new QRCodeStyling({
      width: 200,
      height: 200,
      type: "svg",
      data: currentPageUrl,
      image: logoSquareUrl,
      margin: 2,
      dotsOptions: { color: "#fff", type: "rounded" },
      cornersSquareOptions: { color: "#006361", type: "extra-rounded" },
      cornersDotOptions: { color: "#e06800" },
      backgroundOptions: { color: "transparent" },
      imageOptions: { crossOrigin: "anonymous", margin: 2, imageSize: 0.3 }
    });
    qrTarget.innerHTML = "";
    qr.append(qrTarget);
  }
}
// === Init All ===
document.addEventListener("DOMContentLoaded", function () {
  initQRCode();
});