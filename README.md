xtyle
======
Simple HTML, CSS, and JavaScript framework for creating amazing web applications.

Links
-----
Website: [http://xtyle.xchema.com](http://xtyle.xchema.com)<br>
Wiki: [https://github.com/xchema/xtyle/wiki](https://github.com/xchema/xtyle/wiki)

Installation
------------
Download **xtyle** [clicking here](http://xchema.github.com/xtyle/xtyle.zip).

[Unzip](http://en.wikipedia.org/wiki/Zip_(file_format)) on your project directory. You will have a folder called **xtyle**. This is the structure of this file:
```
xtyle/
  - start.html
    css/
      - xtyle.css
      - xtyle.min.css
    js/
      - xtyle.js
```
Look **start.html** for an example how to place the files on this directory into your own **index.html** file.

###CSS File###
For the css file (preferable **xtyle.min.css**):
```html
...
   <link rel="stylesheet" type="text/css" href="css/xtyle.min.css">
...
```

###JavaScript File###
To install the xtyle JavaScript file you will need to follow this two steps:

(1) Download [JQuery](http://jquery.com/) and place it on the bottom of your **index.html** (preferable):
```html
...
    <script type="text/javascript" src="js/jquery.min.js"></script>
</body>
</html>
```
You have the choice of using an [CDN](http://en.wikipedia.org/wiki/Content_delivery_network) for JQuery instead:

**Google CDN**
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
```

**CloudFlare CDN**
```html
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
```

(2) Place your *xtyle.js* **AFTER** your JQuery declaration:
```html
...
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/xtyle.min.js"></script>
</body>
</html>
```

##You are awesome!##
###Thank you for using **xtyle**, visit our [wiki page](https://github.com/xchema/xtyle/wiki) for more information.###