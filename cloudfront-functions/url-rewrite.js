// Rewrites extensionless URIs (e.g. /card) to their .html file (/card.html)
// and directory-style URIs (e.g. /sub/) to their index.html, so pages can be
// linked without a visible file extension even though the site has no build
// step and S3/CloudFront serve files by their literal key.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  } else if (!uri.includes(".")) {
    request.uri = uri + ".html";
  }

  return request;
}
