# mobileOnly
Support only mobile web - when the user is using desktop, show your UI in a phone, gently implying the web page should be opened on a mobile device.

# Usage

```javascript
var mobileOnly = require('mobileOnly'); // if you use browserify/webpack

mobileOnly("id_of_your_main_element", "url_for_iphone5.png");
```

You need to provide the url for an iphone5 (currently the only supported phone) yourself - you can find it here in the repo, though.
