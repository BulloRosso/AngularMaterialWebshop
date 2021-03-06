# AngularMaterialWebshop
A demo application using angular 1.4 and material design for angular 0.10 hosted in an ASP.NET MVC 5/WebAPI project.

<h2>What is this all about?</h2>

<p>This is a proof of concept for an application using <strong>Google's Material Design</strong> instead of the predominant Bootstrap 3 framework.</p>

![_flow](https://cloud.githubusercontent.com/assets/10236695/9574176/86b796e4-4fc4-11e5-8301-0f21ed683d38.PNG)

<p>Bold titles in the diagram above indicate the areas of interest for this proof of concept.</p>

<p>Attention: This is not a ready-to-go template or starter-kit!</p>

<p>Attention: This is not a single page application! AngularJS is just used to extend single pages - the heavylifting is done by ASP.NET MVC views and controllers.

<p>
If you know how to use Bootstrap there are few questions you might face relatively early:
<ul>
<li>How does the grid system work?</li>
<li>How do I use the offcanvas pattern?</li>
<li>How does a minimal navigation structure work?</li>
<li>What kind of animations can I use?</li>
</ul>
</p>

<p>
Hopefully, this demo will answer the questions above along with some other issues you might encounter on your way to your first material design app...
</p>

<H2>Using the demo without ASP.NET</h2>

<p>
The main angular stuff as well as images and CSS is located in the /content/-folder. If you are using other technologies like node.js you might start with these files:
</p>
![_appstructure](https://cloud.githubusercontent.com/assets/10236695/9581916/7d10cdca-5002-11e5-94f5-4a35e7c28f2d.PNG)

<h2>Example use case: Mobile First! design shop</h2>

![_ws1](https://cloud.githubusercontent.com/assets/10236695/9558921/f0e45032-4deb-11e5-8ba6-0481dedaaf8b.JPG)

<p>
<strong>Tiles</strong> inside a flex grid on the welcome page are meant to test the versatility of the grid component. Currently 4 types of tiles are showcased:
<ul>
<li>Image tile</li>
<li>Image tile with con in the header</li>
<li>Image tile with call-to-action button</li>
<li>Text tile</li>
</ul>
</p>

<h2>Product page</h2>

<p>
The product page is as plain as a product pages can get ;-) The only things worth to mention are:
<ul>
  <li>Fine grained use of typography</li>
  <li>Call-to-action buttons (with flyout actions)</li>
</ul>
</p>

![_product](https://cloud.githubusercontent.com/assets/10236695/9588179/0ad8b32e-5027-11e5-84af-4baca2cf2dc8.PNG)

<h2>Off-canvas menus</h2>

<p>The <strong>shopping cart</strong> showcases some animations:</p>

![_ws2](https://cloud.githubusercontent.com/assets/10236695/9558992/b5faffb0-4dec-11e5-92e3-6662057bf722.JPG)

<p>
<ul>
<li>Slide in for the offcanvas menu</li>
<li>Slide out for deleted cart items</li>
</ul>
</p>

<p>The <strong>communication menu</strong> illustrates the use of subnavigation (tabs) inside the offcanvas element:</p>

![_ws3](https://cloud.githubusercontent.com/assets/10236695/9561053/e45d0bc0-4e35-11e5-8407-0b9df8b539bd.JPG)

<p>There are some issues regarding the offcanvas element (sidenav) with the current version 0.10 of angular-material like the height of the element.</p>

<h2>Checkout process</h2>
<p>
A lot of effort can be saved if out-of-the-box components can be deployed - like in situations where some users might be in need of assistance. The checkout process is a typical use-case:
</p>
![_checkout1](https://cloud.githubusercontent.com/assets/10236695/9581917/7d13fd10-5002-11e5-9bfd-6a8c0c8d0fc6.PNG)
<p>
Today help should be interactive - so offering FAQs is fine: But connecting customers to the sales hotline seamlessly by <strong>live chat</strong> during the checkout-process is a must-have:
</p>
![_checkout2](https://cloud.githubusercontent.com/assets/10236695/9581915/7d0e645e-5002-11e5-8d1f-2345c9b58047.PNG)

<p>
Probably the most distinctive feature of material design is the different look &amp; feel of forms:
</p>

![_forms](https://cloud.githubusercontent.com/assets/10236695/9590873/afc0da46-5037-11e5-9a52-60472013efea.PNG)

<p>
I personally like this kind of form design because it is so much lighter than the usual box arrays. Error messages appear much more natural below the input fields - compared to the common Bootstrap popovers.
</p>

<h2>Search experience</h2>

<p>
Search is somewhat basic in the current version: there's only the autocomplete search in the header:
</p>

![_search1](https://cloud.githubusercontent.com/assets/10236695/9589355/08f075cc-502e-11e5-8748-b5e326f8c0bd.PNG)

<p>
Search results are difficult to filter in mobile first design: There's no space to fit in all the facets. There's only one filter in the second navigation row:
</p>

![_search2](https://cloud.githubusercontent.com/assets/10236695/9589356/08f1391c-502e-11e5-9e22-4ed4901a0e7d.PNG)
