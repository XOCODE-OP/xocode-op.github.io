/*

Add sim check
and articles
add ionic util app
ass as skill only: java web server
add as skill only: node js express js server
add eduform


add ninja demake

add a tagging system.



*/

// Games and Prototypes in 2D
var projects = [
  {
    title: "Bitcoin Wallet",
    minilabel: "Bitcoin Wallet",
    proglang: "Java",
    tags: ["java"],
    url: "",
    img: "bitcoinwallet.jpg",
    bigimg: "bitcoinwallet.jpg",
    desc: "2019 Java Bitcoin Wallet. UNDER CONSTRUCTION, description TBD."
  }, {
    title: "ALKAHEST - Map & Game Editor",
    minilabel: "Map & Game Editor",
    proglang: "Java OpenGL",
    tags: ["libgdx", "opengl", "java", "game", "game2d", "tools"],
    img: "alkahest.gif",
    bigimg: "alkahest.png",
    video: "Vyl-B7aULOo",
    subline: "2D OpenGL Level Editor<br>PC using Java, Libgdx, OpenGL<br>2011-2013",
    desc: "https://www.youtube.com/embed/uxtBKUDZLwI<br /><br />The new Level Editor being developed alongside Quantum Nucleus, as such it is faily specialized for this game. Creating Layers, changing types, tile-favorites, quick tileset-changing, items, enemies, portals, scripts and scenes, playing and rendering lights in realtime, setting up AI behaviors - ALKAHEST is becoming a great and powerful tool to shape Quantum Nucleus. Developed with Java, LWJGL, OpenGL." +
      "<br />side scroller, scripting, tiles, tilemaps, layers, save to file load, items, enemies, events, opengl gui, lights, new layer system<br /><br />"
  },{
    title: "Demake Ninja",
    minilabel: "Lowpoly 3D Game Demo",
    tags: ["unity", "csharp", "game", "game3d"],
    img: "demaken.jpg",
    proglang: "C#",
    video: "QYXrozqmjf0",
    bigimg: "demaken.jpg",
    subline: "Unity 3D Game",
    desc: "<p>Personal Project.</p><p>Low Poly video game made for a game jam.</p><p>Using Unity and C# this emulates the feel of Tenchu for PS1.</p><p>Including models and textures.</p>"
  }, {
    img: "mpacman.gif",
    bigimg: "pacman.jpg",
    tags: ["unity", "csharp", "game", "game3d"],
    title: "Medical Pac-man",
    minilabel: "3D Game",
    proglang: "C#",
    video: "https://drive.google.com/file/d/0B7dHrGvdQHFbRnNmY0U3SjFPYkE/preview",
    subline: "Tradeshow arcade style video game<br>PC using Unity3D<br>2017",
    desc: "<p>An arcade style video game that was made specifically for a medical tradeshow, featuring relevant devices.</p>" +
      "<p>It was produced on request and was used at a tradeshow in April 2017. It also featured a highscore system for a giveaway at the tradeshow." +
      "The concept was pacman with a medical theme plus including the topic of tumors being removed by a special medical device, which is the player controls.</p>" +
      "<p>It also has joystick support to emulate the feeling of using the actual medical device. At the tradeshow the game was used with an appropriate joystick.</p>"
  },{
    img: "thesisvr.gif",
    bigimg: "thesis.png",
    tags: ["unity", "csharp", "game", "game3d", "vr", "php", "sql"],
    proglang: "C#, PHP",
    video: "59wvJi05PBg",
    subline: "First person puzzle based storytelling demo<br>PC and VR using Unity3D and SteamVR<br>2017",
    title: "Thesis: VR Storytelling",
    minilabel: "3D VR Game",
    desc: "<p>In my bachelor thesis I looked at the difference in storytelling between VR and traditional video games." +
      "<br />What kind of techniques can be used to convey exposition to the player, what tools, what methods, advantages and disadvantages." +
      "<br />This demo was used to measure the difference in time between PC players and VR players as they try to solve puzzles and finish this game.</p>"
  }, {
    img: "vndungeoncrawler.gif",
    bigimg: "dungeoncrawl.jpg",
    tags: ["unity", "csharp", "game", "game3d"],
    proglang: "C#",
    video: "JuAltf0VfSY",
    title: "Visual Novel Dungeon Crawler",
    minilabel: "3D Game",
    subline: "Visual novel dungeon crawler type video game prototype<br>PC using Unity3D<br>2017",
    desc: "<p>This was a prototype I made to play around with the idea of a Shin Megami Tensei: Strange Journey type game.</p>" +
      "<p>Its a rudimentary proof of concept and didnt include a fight system yet.</p>"
  }, {
    img: "2dgravityphysics.gif",
    bigimg: "2dgravityphysics.png",
    tags: ["libgdx", "opengl", "java", "game", "game2d", "tools"],
    title: "2D Gravity Physics",
    proglang: "Java OpenGL",
    minilabel: "2D Gravity Physics",
    video: "LDW7qK-dK-I",
    subline: "2D engine framework to simulate gravity<br>PC using Java, Libgdx, OpenGL<br>2012",
    desc: "<p>This includes slopes of technically any angle, open and closed platforms, moving horizontally and vertically.</p>" +
      "<p>Established necessary technology.</p>" +
      "<p>Developed with Java & Libgdx on PC.</p><br /><a class='githublink' href='https://github.com/DRXO/PhysicsMaster' target='_blank' >Github Link</a>"
  },{
    title: "Nanooq",
    minilabel: "Firefox OS Fork",
    proglang: "JavaScript",
    tags: ["javascript", "html", "css"],
    img: "nanooq.gif",
    bigimg: "nanooq.gif",
    subline: "Media tablet UI<br>built on Firefox OS. HTML, CSS, JS<br>2014",
    desc: "<p>Nanooq was a prototype tablet UI that was made at net mobile. Built from Firefox OS as a white-label fork. Designed as media tablet to show content to customers.</p><img src='img/nanooq_show.gif' />"
  },{
    title: "Android Crypto Portfolio App",
    minilabel: "Android Crypto App",
    proglang: "Android App",
    tags: ["java", "crypto", "android", "fintech"],
    url: "https://www.piecex.com/products/Android-Crypto-Portfolio-App-384",
    img: "crypto-portfolio-android.jpg",
    bigimg: "android_crypto.png",
    desc: "Want to create a Cryptocurrency portfolio app for Android?<br />Don't start from scratch!<br /><br />This item features a fully functional working portfolio app than can be used as a template and changed and taken apart as needed.<br /><br />Every cryptocurrency comes with an icon images.<br /><br />This project is an Android Studio project. Obviously you can just go ahead and take the source code and put it in any kind of project, which is the most likely case. But in case Android Studio is available to you, you can load it and try out.<br />An APK is included which was built from this project. Can be easily loaded and tried out.<br /><br />Features:<br />- Poll prices<br />- Add coin holdings<br />- Create transactions<br />- Auto save and load to file<br />- Calculation to USD value<br />- Total amount calculation<br /><br />"
  },
  {
    title: "Cryptocurrency Dashboard ",
    minilabel: "Cryptocurrency Dashboard",
    proglang: "JavaScript",
    tags: ["javascript", "html", "css", "fintech", "crypto", "frontend", "web"],
    url: "https://www.piecex.com/products/Cryptocurrency-Dashboard-Bundle-4-in-1-382",
    img: "crypto.jpg",
    bigimg: "cryptoweb.png",
    desc: "Crypto Dashboard. Pricewatch, Converter, Portfolio and Graphs, all together in one dashboard if you are interested in the cryptocurrency items.<br /><br />These items are included:<br /><br />Cryptocurrency Price Watch. See live prices at all times.<br />https://www.piecex.com/products/view/377<br /><br />Cryptocurrency Graphs. Check the current charts for most crypto coins.<br />https://www.piecex.com/products/view/378<br /><br />Cryptocurrency Converter. Convert from any into any crypto currency, dynamically.<br />https://www.piecex.com/products/view/380<br /><br />Cryptocurrency Portfolio. Add holdings, make changes, add real balances from the blockchain and see the total value in USD.<br />https://www.piecex.com/products/view/381",
    video: "https://www.youtube.com/embed/GTnYmVgKfTs"
  },{
    title: "Source Code Analysis Backend",
    minilabel: "Code Analysis Program",
    tags: ["csharp"],
    img: "codeana.jpg",
    bigimg: "codeana.jpg",
    proglang: "C#",
    subline: "Backend web utility with REST interface",
    desc: "<p>Work project.</p><p>This project scans code bases, compares them against other code bases and calculates a similarity score. It also generates a list of files and a list of functions for every source code file.</p><p>Runs on a webserver, responds to REST calls, uses AWS resources. </p><p>Techs used: C#, ASP .NET, React, Kestrel, AWS</p>"
  },{
    title: "Smart Text Editor - INTELLIGENT HELPER",
    minilabel: "Electron App",
    proglang: "JavaScript",
    tags: ["javascript", "html", "css", "electron"],
    url: "https://www.piecex.com/products/Smart-Text-Editor-INTELLIGENT-HELPER-442",
    img: "litsmart.jpg",
    bigimg: "litsmart.png",
    desc: "LitSmart is a desktop app, using Electron, which is a text editor that automatically offers word related information to the writer while working using intelligent code, without the need to switch applications..<br />Automatically and on the fly, this program will look at the last word typed by the user and will search for synonyms, wikipedia entries and word definitions. The user may also select/highlight any part of the text and thereby manually start this process with the selected part.<br /><br />Smart, Automatic, on the fly:<br />* Word Definitons<br />* Wikipedia<br />* Synonyms<br /><br />CHECK THE VIDEO: [https://player.vimeo.com/video/315198634](https://player.vimeo.com/video/315198634)",
    video: "https://player.vimeo.com/video/315198634"
  },{
    title: "Smart Code Helper - AUTOMATIC code Suggestions",
    minilabel: "Electron App",
    proglang: "JavaScript",
    tags: ["javascript", "html", "css", "electron"],
    url: "https://www.piecex.com/products/Smart-Code-Helper-AUTOMATIC-code-Suggestions-441",
    img: "smart-code-helper.jpg",
    bigimg: "smart-code-helper.jpg",
    desc: "Smart Code Helper is a desktop app, using Electron, which is a code editor that automatically offers suggestions, help and solutions to the developer while working.<br />Automatically, the program will look at the current line of code and will search for suggestions online or the developer may select any part of the code and manually start this process with the selected part.<br /><br />CHECK THE VIDEO: https://player.vimeo.com/video/314468741",
    video: "https://player.vimeo.com/video/314468741"
  },{
    title: "Discord Bot",
    minilabel: "Discord Chat Bot",
    proglang: "Java & Python",
    img: "discordbot.gif",
    tags: ["java", "tools", "python"],
    subline: "Chat and utility Bot for the Discord chat platform<br>built with Java and Python using Discord API.<br>2016",
    itemID: "Discord Bot",
    desc: "<p>Chat bot with various utility functions.</p>"
  }, {
    img: "bloobuy.gif",
    proglang: "Android",
    tags: ["java", "android", "tools"],
    subline: "Bluetooth low energy beacon platform<br>Java, Android, iOS<br>2014",
    title: "Bloobuy - Bluetooth LE Beacon Advertisement Solution",
    minilabel: "Android Bluetooth LE tech",
    desc: "<p>Bluetooth low energy beacon platform, SDK using REST and prototype app on mobile. Also security aspects and backend.</p><img src='img/bloobuy.jpg' /><br><a class='githublink' href='https://github.com/DRXO/AndroidBluetoothLeBeaconsSDK' target='_blank'>Github Link</a>"
  }, {
      title: "ECOM - Ecommerce web platform",
      proglang: "Web Tech",
      minilabel: "Ecommerce web platform",
      tags: ["javascript", "html", "css", "php"],
      url: "https://www.piecex.com/products/ECOM-Ecommerce-web-platform-455",
      img: "ecom.jpg",
      bigimg: "ecom.png",
      desc: "This is a web template for a fully functioning Ecommerce platform, where products can be shown, browsed, wishlisted, put in cart, bought, added reviews, user created, etc.<br />The server is realized via PHP and MySQL database. The frontend is JavaScript, HTML and CSS.<br /><br />External resources include: Jquery, Bootstrap, Font-awesome, JSCookie, animate.css,  slick.js, noUiSlider, jquery.zoom.js. Images : Unsplash , pixabay, Montserrat font<br /><br />Features include:<br />* SQL database code and dummy entries of products, categories and reviews.<br />* Products data model.<br />* Searching function<br />* Search filters<br />* Categories data model.<br />* Reviews per item integration code and data model.<br />* Rating calculation from review<br />* Wishlist<br />* Cart<br />* Cookies<br />* Checkout<br />* Product details page with tabs<br />* etc<br /><br />Check the video.",
      video: "https://player.vimeo.com/video/325359221"
    },
    {
      title: "Mouse Analytics",
      minilabel: "Mouse Analytics",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css"],
      url: "https://www.piecex.com/products/Mouse-Analytics-418",
      img: "mouseanalytics.jpg",
      bigimg: "mouseanalytics.jpg",
      desc: "This mouse analytics code tracks and reveals user mouse journeys to you.<br />It lets you replay the full sessions of every visit, which lets you improve the user experience and optimize your site.<br />No need to guess which parts of the website cause issues to the user in terms of UI and UX.<br /><br />Additionally, by using all sessions collectively for a specific website, this code can draw heatmaps that show overall trends and which areas of the website are of more and less interest and usage.<br /><br />This code tracks clicks, positions/movements, scrolling and resizing.<br /><br />During playback clicks are animated visually to make them visible. Scroll events are simulated, so that your playback window as well will scroll at the same time in the playback.<br />Another thing tracked are resize events. Whenever the user resizes their browser we simulate this in the playback. We also account for this during positional tracking and heatmap drawing.<br /><br />No more guessing. Get your information just like this. Keep an eye on your website.<br /><br />We use an image of the japanese amazon frontpage to simulate a website, in this case.",
      video: "https://player.vimeo.com/video/304994023"
    }, 
    {
      title: "Web Analytics Link Shortener Click Tracker",
      minilabel: "Web Analytics Platform",
      proglang: "PHP & JavaScript",
      tags: ["javascript", "html", "css", "php", "analytics", "data", "funnels"],
      url: "https://piecex.com/products/Web-Analytics-Link-Shortener-Click-Tracker-Argos-810",
      img: "analytics.jpg",
      bigimg: "analytics.png",
      desc: "<p>Argos is a web analytics platform template. it can be used to realize your own analytics data collecting system.</p><p>Also featured is shortening of links. Links can be created and then pasted and triggered anywhere.</p><p>Link creation features the option to Cloak, for cases in which redirects are not useful.<br />      Links can be easily added, deleted and tested and are flexible with routing.</p><p>Test your data collection with one click of a button.<br />      This project features an easy to copy and paste snippet which you can use on any page, to collect data (using your server as a backend).</p><p>Chart your data: You can easily select any column and render a chart which compares that column inside the data against each other.</p><p>Filtering data is easy, just click on any value inside the list of accesses and the entire list will be filtered by that value.</p><p>If you want to export the entire list of access as a CSV so you can use it in your favorite spreadsheet software, just clicking one button is enough to export it.<br />Using this software you can easily build your own click tracker, page funnel, analytics platform and more.</p><p>Technologies used: HTML, CSS, SQL, PHP (Development used an Apache server)</p>",
      video: "vXUrEDPJI5E"
    },{
      title: "Issue Tracker / Team Manager - Web Template",
      minilabel: "Web Issue Tracker",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css", "php"],
      url: "https://www.piecex.com/products/Issue-Tracker-Team-Manager-Web-Template-414",
      img: "issue-tracker.gif",
      bigimg: "issue-tracker.jpg",
      desc: "This project uses HTML, PHP, CSS and JavaScript to provide a template for an Issue Tracker / Team Manager system, in which the users can open new issues, assign priorities to them, as well as status. People can be assigned to the issue and comments can be posted.<br />All operations in this template use dynamic ajax. This is a single page using JavaScript and PHP.",
      video: "https://player.vimeo.com/video/301999489"
    },{
      title: "News Website Template",
      minilabel: "News Website",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css"],
      url: "https://www.piecex.com/products/News-Website-Template-410",
      img: "news-template.jpg",
      bigimg: "news.jpg",
      desc: "Make your own news website for general or specific niche news!<br />Simply download this template and get started. It provides everything you need.<br />Fully working database.<br />PHP interface.<br />HTML &amp; CSS structure.<br />Using MySQL.<br /><br />This project uses HTML, CSS and JavaScript to provide a simple to use template for making websites like this. Frameworks used: Jquery and Lity.<br /><br />",
      video: "https://player.vimeo.com/video/300912983"
    },{
      title: "Small Website Template",
      minilabel: "Small Website",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css"],
      url: "https://www.piecex.com/products/Small-Website-Template-409",
      img: "website-template.jpg",
      bigimg: "smallpage.jpg",
      desc: "There are big websites and there are are scrolling pages that only cover one simple page, but in between exists a space for everyone who has a little more content to show than just a simple flyer of information or advertising. For example small businesses or private websites.<br /><br />This project uses HTML, CSS and JavaScript to provide a simple to use template for making websites like this. Frameworks used: Jquery and Lity.<br /><br />Single Page JavaScript templating. Dynamic content injection:<br />We use templating in JavaScript, meaning the entire content of the website ad every tab/page is contained within the JavaScript file, inside the tabs variable, which is a json variable.<br />This way we only have one HTML file with the structure, we never have to reload, single page but we also don\u2019t need PHP, any server side code or any other frameworks.",
      video: "https://player.vimeo.com/video/299832620"
    },{
      title: "Restaurant Ordering Tablet",
      minilabel: "Restaurant Tablet",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css"],
      url: "https://www.piecex.com/products/Restaurant-Ordering-Tablet-398",
      img: "restaurant-tablet.jpg",
      bigimg: "restaurant-tablet.jpg",
      desc: "Front-end tablet ui template for restaurants.<br /><br />Many restaurants have switched from paper menus to ordering with digital tablets, making it easy to browse and order without the need of a waiter, while impressing the customer.<br /><br />Comes with over 25 free stock images of dishes.<br /><br />This is a easy to use template for such a pproject.<br /><br />Possible to use with ElectronJS or in fullscreen mode on a tablet, for native experience.",
      video: "https://www.youtube.com/embed/AwGYaVqY5OU"
    },{
      title: "Marketing Website - Template",
      minilabel: "Marketing Website",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css"],
      url: "https://www.piecex.com/products/Marketing-Website-Template-397",
      img: "marketing-single-page.jpg",
      bigimg: "marketing.jpg",
      desc: "This project is a marketing page, layout / template.<br />Creating a marketing page for a product, service or company is very easy and will be very quickly accomplished, using this template.<br />Features:<br />- Single page<br />- All scrolling<br />- Big slides with fullsize background images<br />- Colors, alignments, images easily changed.<br />- Slides with multiple sub slides, horizontally<br />- Animations that trigger upon scrolling down to the content<br /><br />Using HTML, CSS and some JavaScript.",
      video: "https://www.youtube.com/embed/T01pePBDMYI"
    },{
      title: "Web Login Register System - Template",
      minilabel: "Web User System",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css", "php"],
      url: "https://www.piecex.com/products/Web-Login-Register-System-Template-394",
      img: "login-system.jpg",
      bigimg: "login.png",
      desc: "This is a login and register code template for php with an example to try out.<br />It uses BCRYPT to save password hashes, saves PHP sessions to the database and checks some basic injection problems.<br />This piece of code is fully functional for login and registering. Don't start from scratch, use this code and work off of this.",
      video: "https://www.youtube.com/embed/XUrtayZOtAs"
    },
    {
      title: "Ticket System - Web Template",
      minilabel: "Web Ticket System",
      proglang: "Web Tech",
      tags: ["javascript", "html", "css", "php"],
      url: "https://www.piecex.com/products/Ticket-System-Web-Template-395",
      img: "ticket-system.jpg",
      bigimg: "ticket.png",
      desc: "Ticket system are a common part your venture might need. Almost every business has to have some sort of communication or support system with it customers. No matter if it is B2B or B2C.<br />Apart from support, this is a generic system and can be used to track all sorts of information, including internal ones.<br /><br />As a versatile template, this can be changed to match whatever you need.",
      video: "https://www.youtube.com/embed/Y9RPuVUiQ3U"
    },
    {
      title: "Video Streaming App - Template",
      minilabel: "Video Streaming App",
      proglang: "Electron App",
      tags: ["javascript", "html", "css", "electron"],
      url: "https://www.piecex.com/products/Video-Streaming-App-Template-392",
      img: "video-stream.jpg",
      bigimg: "videoapp.jpg",
      desc: "Video media consumption has shifted to online and we are still in the infancy of this industry. People want to consume video via the internet using streaming.<br /><br />Build a video streaming platform on your own, using this app template. <br />This template features a custom video player (custom media controls / UI) for the mp4 file url playback but also supports YouTube embed playback. Basic search and filter is provided. Check out the video and screenshots.<br />A number of videos and categories are provided via json library file. There is also a side bar menu.<br /><br />Written in Javascript/HTML using ElectronJS, this can used to build your code natively for Windows, Mac and Linux as a desktop application. It can also be ported to a normal website with minimal effort, by exchanging electron exclusive APIs.",
      video: "https://www.youtube.com/embed/KJ4UWkKPOmk"
    },
    {
      title: "Password Manager  - Application Template",
      minilabel: "Password Manager",
      proglang: "Electron App",
      tags: ["javascript", "html", "css", "php", "electron"],
      url: "https://www.piecex.com/products/Password-Manager-Application-Template-390",
      img: "password-manager.jpg",
      bigimg: "password.png",
      desc: "More and more users switch to password managers. For good reason! Security is a major concern nowadays.<br />Many password managers exist, some as web interfaces and some as desktop applications.<br /><br />This template provides a fully working protoype of a password manager. Including password encryption for security, being able to save passwords to clipboard directly without showing it on screen and so on.<br />Coupled with an elegant design.<br />You can add and remove ad many username/email/password combinations as you want; These are stored encrypted as a json file, holding all the data.<br />Every entry has a title name and a text field for arbitrary notes.<br />Encrypting is being done using AES.<br /><br />This project uses ElectronJS which can used to build your code natively for Windows, Mac and Linux as a desktop application. It can also be ported to a normal website with minimal effort, by exchanging electron exclusive APIs.",
      video: "https://www.youtube.com/embed/xaNRz1B2dXc"
    },
    {
      title: "Music Player & Streaming - Electron App Template",
      minilabel: "Music Player",
      proglang: "Electron App",
      tags: ["javascript", "html", "css", "php", "electron"],
      url: "https://www.piecex.com/products/Music-Player-Streaming-Desktop-App-Template-391",
      img: "music-stream.jpg",
      bigimg: "music-stream.png",
      desc: "Ever used Spotify or similar apps?<br /><br />This is a template for a music streaming application.<br /><br />Some of the features include:<br />- Media controls / UI built completely from scratch<br />- Music library<br />- History<br />- Jump forward and backward, skip around/seek<br />- Play local files, stream files<br />- Search/filter by title or various tags like instruments or feel.<br /><br />All of the basic functionality of such a music app are found here.<br />Of course this can be used for local files too instead of streaming, ideally both.<br /><br />This project uses ElectronJS which can used to build your code natively for Windows, Mac and Linux as a desktop application. It can also be ported to a normal website with minimal effort, by exchanging electron exclusive APIs.  ",
      video: "https://www.youtube.com/embed/NFObQVqphGU"
    },
    {
      title: "C# ASP.NET Core Kestrel Web Server",
      minilabel: "C# ASP Kestrel Server",
      proglang: "C# Backend",
      tags: ["csharp", "backend"],
      url: "https://www.piecex.com/products/C-ASPNET-Core-Kestrel-Web-Server-586",
      img: "kestrel-cover.png",
      bigimg: "kestrel.jpg",
      desc: "This project is an easy to use, easy to adapt, ready to go code-base for a web server made in C#. The exact technology stack here is C# ASP.NET Core and Kestrel. This also uses React in order to facilitate a Web Browser interface, which can be used for in and outputs. Handle all sorts of requests and establish for C# web server with this prototype."
    },
    {
      title: "Sample Mock-data Generator",
      minilabel: "Mock-data Generator",
      proglang: "JavaScript",
      tags: ["javascript", "html", "css", "web"],
      url: "https://www.piecex.com/products/Sample-Data-Generator-Mocking-583",
      img: "mockdata-cover.png",
      bigimg: "mockdata.png",
      desc: "A lot of IT projects need some mocked up sample data to work and test.Before your project is done you feed it with this kind of data to try out all the functionality.But maybe you need to generate some of this data for other purposes, like getting random numbers, strings, UUIDs and so on.Written in JavaScript with a Web Ui, this project provides around 40 different data types to generate data for.Additionally you can export as many rows of data as you need in JSON or SQL form.",
      video: "https://player.vimeo.com/video/354595564"
    },
    {
      title: "Medical Clinic App - Reception Data",
      minilabel: "Clinic Management Client",
      proglang: "Electron App",
      tags: ["electron", "javascript", "html", "css"],
      url: "https://www.piecex.com/products/Medical-Clinic-App-Reception-Data-576",
      img: "clinic-cover.jpg",
      bigimg: "clinic.png",
      desc: "Clinic Reception Data is a desktop app, using Electron, which takes care of the basic reception data needs of a medical clinic. As such it includes features like: Appointment Calendar. Patient data, searchable via various data types. Online ticket list. Staff list. Automatic saving and loading of all data. This is a JavaScript based project using ElectronJS which makes it natively runnable on all desktop systems and can also be ported to the web with relative ease, since it's all HTML, CSS and Javascript.",
      video: "https://player.vimeo.com/video/351136064"
    },
    {
      title: "Ionic Utility App - Notes, Weather & Clock, Stocks",
      minilabel: "Ionic Utility App",
      proglang: "AnuglarJS",
      tags: ["angular", "android", "javascript", "html", "css"],
      url: "https://www.piecex.com/products/Ionic-Utility-App-Notes-Weather-Clock-Stocks-549",
      img: "ionicutil-cover.png",
      bigimg: "ionic.png",
      desc: "This project is an ionic app with different utility functions, mainly to showcase a non trivial application at work. In the notes section you find logic and UI code to add new notes, edit them, change the CSS/UI depending on what is selected, delete notes, as well as all the relevant logic code, such as saving and loading the list of notes to and from storage, so that the list does not disappear. On the weather and clock tab the user is able to type in any location on earth and get a best match. From that match, this code uses the longitude and latitude to poll the weather and the time. The stock tab polls a number of common stocks to check as well as the possibility for the user to search for any term and get the stock and it’s quote for the best match. The search term does not have to be a symbol, it can be part of the name or description etc.",
      video: "https://player.vimeo.com/video/345826696"
    },
    {
      title: "Stock Photo Finder - Python Cross Platform Desktop UI Program",
      minilabel: "Stock Photo UI App",
      proglang: "Python & QT",
      tags: ["python"],
      url: "https://www.piecex.com/products/Stock-Photo-Finder-Python-Cross-Platform-Desktop-UI-Program-531",
      img: "stockpic-cover.jpg",
      bigimg: "stockimages.jpg",
      desc: "<p>Written in Python, this is a cross platform desktop application using PyQt. I wanted to use Qt in a project and also wanted to make a python app that actually has a UI and runs on a desktop client.</p><p>In this app search terms can be typed in and free stock photos will be found, using popular online sources.</p>"
    },
    {
      title: "Autoprice",
      minilabel: "Autopricing Bot",
      proglang: "Python",
      tags: ["python"],
      img: "autoprice.jpg",
      bigimg: "autoprice.jpg",
      desc: "Written in Python, this is a an algorithm to automatically price items on an ecommerce platform depending on external, internal factors and analytics."
    },
    {
      title: "Currency Converter Backend & Frontend via NodeJS & Express JS",
      minilabel: "Express JS Server",
      proglang: "NodeJS",
      tags: ["nodejs", "javascript", "html", "css", "web"],
      url: "https://www.piecex.com/products/Currency-Converter-Website-with-NodeJS-Express-JS-524",
      img: "nodejs-currency-cover.jpg",
      bigimg: "currencyconverter.jpg",
      video: "https://player.vimeo.com/video/341301177",
      desc: "This project is a website template / module, made via HTTP server, run via NodeJS and Express JS in JavaScript. This project realizes a currency converter website, while providing frontend as well as backend.The backend will make HTTP request to an external source, in order to fetch the required data for the currency conversion.Our frontend has JavaScript code which requests the available currencies from our own server backend, which then in turn calls the external source. This way you also avoid cross origin problems (CORS).The frontend is simple HTML5, CSS, JavaScript. The backend is implemented via NPM, NodeJS, Express JS. Meaning you run the NPM script on your webserver.ExpressJS will establish the listening to a port and serving content via routes.Routes are defined and highly managed by the user manually."
    },
    {
      title: "EduForm - Learning Platform Template - JavaScript Single Page",
      minilabel: "Educational Website",
      proglang: "JavaScript",
      tags: ["javascript", "html", "css", "web"],
      url: "https://www.piecex.com/products/EduForm-Learning-Platform-Template-JavaScript-Single-Page-506",
      img: "eduform-cover.jpg",
      bigimg: "eduform.png",
      video: "https://player.vimeo.com/video/339947846",
      desc: "This is a web template for a functioning educational learning platform. It is written in HTML, CSS, JavaScript. There is no sql database. All data is saved inside javascript and polled from there. The entire page is a single page application, all data is exchanged and polled dynamically. The page features as many courses. Courses have a title, description, image. Every course has a number of slides. Every slide has a title and can have arbitrary html code for its content. Every page can also include a quiz, which has to be answered correctly in order to progress to the next slide. Other features include: History, HTML5 storage saving and loading, Search function, Filter course lists, Progress per course is saved, Quizzes"
    },{
      title: "Amazon S3 bucket downloader",
      minilabel: "AWS S3 Downloader",
      proglang: "C#",
      tags: ["csharp"],
      url: "https://www.piecex.com/products/Amazon-S3-bucket-downloader-C-602",
      img: "amazons3-cover.png",
      bigimg: "amzs3.jpg",
      desc: "This is a web template for a functioning educational learning platform. It is written in HTML, CSS, JavaScript. There is no sql database. All data is saved inside javascript and polled from there. The entire page is a single page application, all data is exchanged and polled dynamically. The page features as many courses. Courses have a title, description, image. Every course has a number of slides. Every slide has a title and can have arbitrary html code for its content. Every page can also include a quiz, which has to be answered correctly in order to progress to the next slide. Other features include: History, HTML5 storage saving and loading, Search function, Filter course lists, Progress per course is saved, Quizzes"
    },{
      title: "Survey System",
      minilabel: "Survey System",
      proglang: "JavaScript",
      tags: ["js", "web", "html", "css"],
      url: "https://www.piecex.com/products/Survey-System-591",
      bigimg: "survey.jpg",
      img: "surveysystem-cover.png",
      desc: "This is a survey system project. It is a template / prototype made with web the common web technologies HTML, JavaScript, CSS. Survey data is saved in a JSON object, which gets saved to HTML storage. The JavaScript in this project uses jQuery and sets up all the click events. Also it sets up all the automatic refresh calls.There is a surveys object which contains an array of surveys, each surveys has an array of questions and every question has an array of choices. The choices can be of different types.For test purposes, the code will create sample surveys for you to play around with a see."
    },{
      title: "Web 3D Model Viewer Module - via FBX and JavaScript",
      minilabel: "Web 3D Model Viewer",
      proglang: "JavaScript",
      tags: ["js", "web", "html", "css"],
      url: "https://www.piecex.com/products/Web-3D-Model-Viewer-Module-via-FBX-and-JavaScript-462",
      img: "webfbx-cover.png",
      bigimg: "webfbx.png",
      video: "https://player.vimeo.com/video/328351223",
      desc: "This is a web codebase written in HTML, JavaScript and CSS. With it you can include a 3D model, fbx file format, on any website. Mouse controls can be used to rotate the model and look at it. Whenever the mouse is not inside the preview box, it is rotated slightly by itself."
    },{
      title: "3D CSS Pack: Isometric, 3D Charts, Tilting",
      minilabel: "Web 3D Model Viewer",
      proglang: "JavaScript",
      tags: ["web", "html", "css"],
      url: "https://www.piecex.com/products/3D-CSS-Pack-3-Isometric-3D-Charts-Tilting-468",
      img: "csspack-cover.png",
      bigimg: "css3.png",
      video: "https://player.vimeo.com/video/330441311",
      desc: "This is a pack of multiple example templates on how to use advanced CSS transformation for modern 3D effects and use cases. Some JavaScript may be used, but it’s only to manipulate CSS values. This pack includes: Isometric: Sideways angled way of looking at 3D graphics for a better overview perspective. Used to give a better spatial impression of 3D depth. Chart Bars: Using 3D to create a graph in bars. Chart Bars with Textures: Slightly modified version with textures. Tilt: Mouse following 3D tilt rendering. Effect can be modified for all sorts of slight or heavy tilt effects."
    },
    {
      title: "SKIRMISH",
      minilabel: "2D Game",
      proglang: "Android OpenGL",
      tags: ["libgdx", "opengl", "java", "game", "game2d", "android"],
      img: "skirmish.gif",
      bigimg: "skirmish.jpg",
      video: "d3ekBHEPjNo",
      subline: "Turn-based strategy video game<br>PC, Android using Java, Libgdx, OpenGL<br>2012-2013",
      desc: "<p>Each player starts off with a couple of different vehicles, units, like tanks and helicopters. There are also different terrains. Each player has to strategically move and place units to eliminate the enemies units.</p>" +
        "<p>Developed with Java & Libgdx. Released on PC & Android.</p>" +
        //"<br><p><a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDQ0w3QXFWY3FIanc' target='_blank'>Link to Windows Installer</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDV3BiNGZUZE5wR3c' target='_blank'>Direct APK Link</a></p>" +
        "<br><p><a class='githublink' href='https://github.com/DRXO/SKIRMISH' target='_blank' >Github Link</a></p>"
    }, {
      title: "Stella",
      minilabel: "2D Game",
      proglang: "Android OpenGL",
      tags: ["libgdx", "opengl", "java", "game", "game2d", "android"],
      img: "stella.gif",
      bigimg: "stella.png",
      video: "YtJ38KFNZRU",
      subline: "Puzzle adventure video game<br>PC, Android using Java, Libgdx, OpenGL<br>2013",
      desc: "<p>Cute puzzle adventure game with a lemmings feel to it. " +
        "Uses Flock/Swarm dynamics, the player has to guide a swarm of stars to their goal.</p>" +
        "<p>This game features a polygon based map system with AABB collisions.</p>" +
        "<p>Developed with Java & Libgdx. Released on PC & Android.</p>" +
        "<p>Personally I developed the early prototypes for this game, after that my position shifted to that of a Producer.</p>" +
        "<br><br><p><a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a></p>"
    }, {
      title: "Black Nebula",
      minilabel: "2D Game",
      proglang: "Java OpenGL",
      tags: ["libgdx", "opengl", "java", "game", "game2d", "android"],
      img: "blacknebula.gif",
      video: "ZU7nIEHmQ_8",
      bigimg: "blacknebula.jpg",
      subline: "2D Arcade-Style Space Shooter Video Game,<br>PC using Java, Libgdx, OpenGL<br>2011-2013",
      desc: "<p>This game started as a in the veine of a popular game development competition. Later it got redone and polished. The result is a fast paced 2D arcade-style space shooter game. You control a spaceship trying to survive a barrage of enemies who pursuit and trying to kill you. Reminiscent of Asteroids or even Sinistar, since this game incorporates a 'Nemesis'</p>" +
        "<p>Developed with Java and Libgdx(OpenGL). Released on PC & Android.</p>" +
        //"<br><p><a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDci14OUdOQW1kTms' target='_blank'>Link to Windows Installer</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDSFdvRnJTamQxQms' target='_blank'>Direct APK Link</a></p>" +
        "<br><p><a class='githublink' href='https://github.com/DRXO/Black-Nebula' target='_blank' >Github Link</a></p>"
    }, {
      title: "Dungeon Puzzle Gems",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "game2d", "android"],
      url: "https://www.piecex.com/products/Dragon-Gems-Unity-Game-Template-408",
      img: "dungeon-puzzle.jpg",
      bigimg: "dungeon-puzzle.jpg",
      desc: "Unity Game 2D Template which can be used for Windows, Linux, Mac, Android, IOS and more using Unity.<br /><br />Match gems and defeat the enemy!<br /><br />This is a Unity template for creating gem matching games with enemies. This project features sprites, backgrounds, textures, sound effects, particle effects and all the code, this template provides a fully working basic prototype.",
      video: "22hKrGFfTio"
    }, {
      title: "Puzzle Block - Game Template",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "game2d", "android"],
      url: "https://www.piecex.com/products/Puzzle-Block-Game-Template-405",
      img: "puzzleblock.jpg",
      bigimg: "puzzleblock.png",
      desc: "Game Template which can be used for Windows, Linux, Mac, Android, IOS and more using Unity.<br /><br />Grab blocks from the bottom, drag them and let go on the board. If the placement is valid, it will be placed.<br /><br />This is a Unity template for creating puzzle games with blocks, filling up rows or columns. This project features sprites, many background layers, sound effects, particle effects, music and all the code, this template provides a fully working basic prototype.<br /><br />",
      video: "https://www.youtube.com/embed/J1vlouQeZkQ"
    }, {
      title: "Flappy Parkour Game - Unity Template",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "game2d", "android"],
      url: "https://www.piecex.com/products/Flappy-Parkour-Game-Unity-Template-401",
      img: "flappy.jpg",
      bigimg: "flappy.png",
      desc: "This unity template is a fully functional prototype of a flappy / parkour type game. Similar to a runner game but in 2D.<br />Mouse down/finger down will make the player ascent, gravity pulls the player down. Colliding with obstacles/blocks or the ground leads to failure. Collecting items/gems increases points.<br /><br />Featuring parallax layered background scrolling. (7 layers all different parallax depth)<br /><br />This project comes with:<br />- All code<br />- Sprites<br />- Backgrounds<br />- Particle Effects<br />- Sound Effects<br />- Music<br />- Prefabs",
      video: "https://www.youtube.com/embed/UcLoesKUyiw"
    }, {
      title: "Space Shooter - Unity Template",
      minilabel: "2D Game",
      proglang: "C#",
      bigimg: "spaceshooter.jpg",
      tags: ["unity", "csharp", "game", "game2d", "android"],
      url: "https://www.piecex.com/products/Space-Shooter-Unity-Template-404",
      img: "spaceshooter-unity.jpg",
      desc: "Unity template in which the player controls a space ship, moving, dodging and shooting at incoming enemy space ships.<br />Featuring various enemy space ship sprites, particle effects and a multi layered parallax scrolling background for added depth.<br /><br />The project includes:<br />- Sprites<br />- Background layers<br />- Sound Effects<br />- Music<br />- Code<br />- Particle Effects &amp; Prefabs<br /><br />Because this was made with Unity, porting to Android and iOS is trivially simply.<br />The controls in this prototype are created for keyboard controls. Please adapt it for whichever control scheme you may need, especially when using mobile.",
      video: "https://www.youtube.com/embed/4fPUuknyeOA"
    }, {
      title: "Visual Novel template for Unity",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "game2d"],
      url: "https://www.piecex.com/products/Visual-Novel-template-for-Unity-388",
      img: "visual-novel.jpg",
      bigimg: "visual-novel.png",
      desc: "Want to create your own Visual Novels?<br />This project serves as a Unity template.<br />Featuring:<br />- Code, with easy to use functions for many common actions in visual novels.<br />- Sample character sprites<br />- Sample music<br />- Sample backgrounds<br /><br />This includes all you need to get you started. Easy to easy, easy to extend. Including assets.",
      video: "https://www.youtube.com/embed/q0jgg1wkRck"
    }


  ];

  /*
https://www.piecex.com/products/3D-CSS-Pack-3-Isometric-3D-Charts-Tilting-468

https://www.piecex.com/products/Web-3D-Model-Viewer-Module-via-FBX-and-JavaScript-462
https://www.piecex.com/products/Web-Polls-System-Template-589
https://www.piecex.com/products/Survey-System-591
https://www.piecex.com/products/Amazon-S3-bucket-downloader-C-602
https://www.piecex.com/products/EduForm-Learning-Platform-Template-JavaScript-Single-Page-506
https://www.piecex.com/products/Currency-Converter-Website-with-NodeJS-Express-JS-524
https://www.piecex.com/products/Stock-Photo-Finder-Python-Cross-Platform-Desktop-UI-Program-531
https://www.piecex.com/products/Ionic-Utility-App-Notes-Weather-Clock-Stocks-549
https://www.piecex.com/products/Medical-Clinic-App-Reception-Data-576
https://www.piecex.com/products/Sample-Data-Generator-Mocking-583
https://www.piecex.com/products/C-ASPNET-Core-Kestrel-Web-Server-586

  */