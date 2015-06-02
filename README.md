# mobileOnly
Support only mobile web - when the user is using desktop, show your UI in a phone, gently implying the web page should be opened on a mobile device.

# Usage

```javascript
var mobileOnly = require('mobileOnly'); // if you use browserify/webpack

mobileOnly("example", "iphone5.png");
```

You need to provide the url for an iphone5 (currently the only supported phone) yourself - you can find it here in the repo, though.
