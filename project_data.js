
// Games and Prototypes in 2D
var projects = [
  {
    title: "Bitcoin Wallet using Java",
    minilabel: "Bitcoin Wallet",
    proglang: "Java",
    tags: ["Java"],
    url: "https://www.piecex.com/source-code/Bitcoin-Wallet-Template-Fully-functional-621",
    img: "bitcoinwallet.jpg",
    subline: "",
    bigimg: "bitcoinwallet_gui-big.jpg",
    bigimg2: "bitcoinwallet.jpg",
    desc: "This project is using Java and Swing for the GUI.<br /><br />" +
    "Manage wallets, import a wallet, and" +
    "create new ones. New incoming and outgoing transactions are shown in the GUI" +
    "console. Balance is calculated. The program features a transaction list with full" +
    "details. Manage addresses.<br /><br />" +
    "Send satoshi to a target address. All the basic functionality.",
    group: "crypto"
  },{
    title: "Bitcoin Java Module",
    minilabel: "Bitcoin Java Module",
    proglang: "Java",
    tags: ["Java"],
    url: "https://www.piecex.com/source-code/Bitcoin-Java-Module-643",
    img: "bitcoinmoduleJava.jpg",
    bigimg2: "btc_java_module1.png",
    bigimg: "btc_java_module2.jpg",
    desc: "Makes it easy to set up bitcoin, initialize and run common tasks using the supplied methods and example classes.<br />"+
    "Supports wallet management.<br />"+
    "Features included are:<br />"+
    "- Check balance<br />"+
    "- Print / See all transactions of a given wallet<br />"+
    "- Send coins to address<br />"+
    "- Get new addresses for your wallet<br />",
    group: "crypto"
  },{
    title: "Bitcoin NodeJS Lazy API",
    minilabel: "Bitcoin Lazy API",
    proglang: "JavaScript",
    tags: ["JavaScript"],
    url: "https://www.piecex.com/source-code/Node-JS-Bitcoin-Blockchain-API-697",
    img: "bitcoinlazyapi.jpg",
    bigimg: "lazybtc.jpg",
    bigimg2: "bitcoinlazyapi.jpg",
    desc: "Lazy API for the Bitcoin Blockchain using Node JS. <a href='https://en.bitcoin.it/wiki/Lazy_API' target='_blank'>https://en.bitcoin.it/wiki/Lazy_API</a> "+
    "<br />A lazy API here is a name for an API that does NOT require you to run your own Bitcoin Node. Which is usually the case. This API interfaces with one of the many public website APIs to read out the blockchain’s data."+
    "<br />This code provides functionality to do anything one may want from blockchain data, however only read operations."+
    "<br />Check out blocks, addresses, transactions."+
    "<br />See confirmations, hashes, inputs, outputs, amounts and more.",
    group: "crypto"
  },{
    title: "Bitcoin C++ Connector",
    minilabel: "Bitcoin Connector",
    proglang: "C++",
    tags: ["C++"],
    url: "https://www.piecex.com/source-code/C-Bitcoin-Connector-685",
    img: "bitcoin_c.jpg",
    bigimg: "btc_c_module1.png",
    bigimg2: "btc_c_module2.png",
    desc: "This C++ codebase is meant for merchants, payment systems and other Bitcoin node operators.<br />"+
    "Sample on how to control a bitcoin node from C++ and send coins, view transaction, get balance, see all incoming transactions, see address specific incoming transactions (useful for payments) etc.",
    group: "crypto"
  },{
    title: "Ebisu - Cryptocurrency Trading Bot",
    minilabel: "Cryptocurrency Trading Bot",
    proglang: "Java",
    tags: ["Java"],
    url: "",
    img: "ebisu-cover.jpg",
    bigimg: "ebisu1.png",
    bigimg2: "ebisu2.png",
    desc: "This cryptocurrency trading bot was written in 2017 using Java on IntelliJ.<br />It uses Bittrex to trade and can trade whichever coin is on Bittrex, using"+
    " the Bittex API. CLI only. <br />"+
    "It features basic trend and price analysis as well as a watchlist to give certain coins specific attention. And a blacklist to ignore some coins specifically, "+
    "even if the bot thinks that the trend shows an opportunity. I wrote this bot for fun, to see if I could scalp some volatility.",
    group: "crypto"
  },{
    title: "Android Crypto Portfolio App",
    minilabel: "Android Crypto App",
    proglang: "Android App",
    tags: ["Java", "android"],
    url: "https://www.piecex.com/products/Android-Crypto-Portfolio-App-384",
    img: "crypto-portfolio-android.jpg",
    bigimg: "androidcrypto.jpg",
    bigimg2: "android_crypto.png",
    desc: "Features a fully functional working portfolio app.<br /><br />"+
    "Every cryptocurrency comes with an icon images.<br /><br />"+
    "Features:<br />"+
    "- Poll prices<br />"+
    "- Add coin holdings<br />"+
    "- Create transactions<br />"+
    "- Auto save and load to file<br />"+
    "- Calculation to USD value<br />"+
    "- Total amount calculation<br /><br />",
    group: "crypto"
  },
  {
    title: "Cryptocurrency Dashboard ",
    minilabel: "Cryptocurrency Dashboard",
    proglang: "JavaScript",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://www.piecex.com/products/Cryptocurrency-Dashboard-Bundle-4-in-1-382",
    img: "crypto.jpg",
    bigimg: "dashboard1.png",
    video: "https://www.youtube.com/embed/GTnYmVgKfTs",
    desc: ""+
    "Functionality:<br />"+
    "- Cryptocurrency Price Watch. See live prices at all times.<br />"+
    "- Cryptocurrency Graphs. Check the current charts for most crypto coins.<br />"+
    "- Cryptocurrency Converter. Convert from any into any crypto currency, dynamically.<br />"+
    "- Cryptocurrency Portfolio. Add holdings, make changes, add real balances from the blockchain and see the total value in USD.",
    group: "crypto"
  }, 
  {
    title: "ANUBIS.LINK",
    minilabel: "ANUBIS.LINK",
    proglang: "JavaScript Web3",
    tags: ["JavaScript", "HTML", "CSS", "Web3"],
    url: "http://anubis.link",
    img: "missing.jpg",
    bigimg: "missing.png",
    bigimg2: "missing.png",
    desc: `ye`,
    group: "crypto"
  }, 

  {
    title: "Video Streaming App Prototype",
    minilabel: "Video Streaming App",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "Electron"],
    url: "https://www.piecex.com/products/Video-Streaming-App-Template-392",
    img: "video-stream.jpg",
    bigimg: "videoapp.jpg",
    desc: "This is a project similar to the Netflix concept for playing video.<br /><br />"+
    "This prototype features a custom video player (custom media controls / UI) for the mp4 file url playback but also supports YouTube embed playback. <br />"+
    "Basic search and filter is provided. Check out the video and screenshots.<br />"+
    "A number of videos and categories are provided via json library file. There is also a side bar menu.<br /><br />"+
    "Written in Javascript/HTML using ElectronJS, this can used to build your code natively for Windows, Mac and Linux as a desktop application. ",
    video: "https://www.youtube.com/embed/KJ4UWkKPOmk",
    group: "electron desktop apps"
  },
  {
    title: "LitSmart - Smart Text Editor",
    minilabel: "Word Processor Tool",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "Electron"],
    url: "https://www.piecex.com/products/Smart-Text-Editor-INTELLIGENT-HELPER-442",
    img: "litsmart.jpg",
    bigimg: "litsmart.png",
    desc: "LitSmart is a desktop app, using Electron, "+
    "which is a text editor that automatically offers word related information to the writer while working using intelligent code, "+
    "without the need to switch applications.<br />"+
    "On the fly automatically, this program will look at the last word typed by the user and will search for synonyms, "+
    "wikipedia entries and word definitions. The user may also select/highlight any part of the text "+
    "and thereby manually start this process with the selected part.<br /><br />"+
    "Smart, Automatic, on the fly:<br /> Word Definitons<br /> Wikipedia<br /> Synonyms.",
    video: "https://player.vimeo.com/video/315198634",
    group: "electron desktop apps"
  },{
    title: "ClipSyne",
    minilabel: "Clipboard Manager",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "Electron"],
    url: "https://github.com/XOCODE-OP/ClipSyne",
    img: "missing.jpg",
    bigimg: "missing.jpg",
    bigimg2: "missing.jpg",
    desc: "ClipSyne",
    group: "electron desktop apps"
  },{
    title: "Smart Code Helper - AUTOMATIC code Suggestions",
    minilabel: "Code Editor",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "Electron"],
    url: "https://www.piecex.com/products/Smart-Code-Helper-AUTOMATIC-code-Suggestions-441",
    img: "smart-code-helper.jpg",
    bigimg: "smart-code-helper.jpg",
    desc: "Smart Code Helper is a desktop app, using Electron, which is a code editor that automatically offers suggestions, "+
    "help and solutions to the developer while working.<br />Automatically, "+
    "the program will look at the current line of code and will search for suggestions online or the developer may select any "+
    "part of the code and manually start this process with the selected part.",
    video: "https://player.vimeo.com/video/314468741",
    group: "electron desktop apps"
  },
  {
    title: "Music Player & Streaming - Electron App Template",
    minilabel: "Music Player",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "PHP", "Electron"],
    url: "https://www.piecex.com/products/Music-Player-Streaming-Desktop-App-Template-391",
    img: "music-stream.jpg",
    bigimg: "musicapp.png",
    desc: "This is a project similar to the Spotify concept for streaming music.<br /><br />"+
    "Some of the features include:"+
    "<br />- Media controls / UI built completely from scratch"+
    "<br />- Music library"+
    "<br />- History"+
    "<br />- Jump forward and backward, skip around/seek"+
    "<br />- Play local files, stream files"+
    "<br />- Search/filter by title or various tags like instruments or feel."+
    "<br /><br />All of the basic functionality of such a music app are found here."+
    "<br />Of course this can be used for local files too instead of streaming, ideally both.",
    video: "https://www.youtube.com/embed/NFObQVqphGU",
    group: "electron desktop apps"
  },
  {
    title: "Password Manager  - Application Template",
    minilabel: "Password Manager",
    proglang: "Electron",
    tags: ["JavaScript", "HTML", "CSS", "PHP", "Electron"],
    url: "https://www.piecex.com/products/Password-Manager-Application-Template-390",
    img: "password-manager.jpg",
    bigimg: "password.png",
    desc: "Password manager including password encryption for security, "+
    "being able to save passwords to clipboard directly without showing it on screen and so on.<br />"+
    "Coupled with a nice ui.<br />"+
    "You can add and remove as many username/email/password combinations as you want; "+
    "These are stored encrypted as a json file, holding all the data.<br />Every entry has a title name and a text field for arbitrary notes.<br />"+
    "Encrypting is being done using AES.",
    video: "https://www.youtube.com/embed/xaNRz1B2dXc",
    group: "electron desktop apps"
  },
  {
    title: "Medical Clinic App",
    minilabel: "Clinic Management Client",
    proglang: "Electron App",
    tags: ["Electron", "JavaScript", "HTML", "CSS"],
    url: "https://www.piecex.com/products/Medical-Clinic-App-Reception-Data-576",
    img: "clinic-cover.jpg",
    bigimg: "clinic.png",
    desc: "This is a clinic stagg and reception sata app, using Electron. "+
    "It includes features like: <br />"+
    "Appointment Calendar, custom made calendar.<br />"+
    "Patient data, searchable via various data types.<br />Online ticket list.<br />"+
    "Staff database.<br />Automatic saving and loading of all data. ",
    video: "https://player.vimeo.com/video/351136064",
    group: "electron desktop apps"
  },

  
  {
    title: "Currency Converter Backend & Frontend via NodeJS & Express JS",
    minilabel: "Currency Converter JS",
    proglang: "NodeJS",
    tags: ["NodeJS", "JavaScript", "HTML", "CSS"],
    url: "https://www.piecex.com/products/Currency-Converter-Website-with-NodeJS-Express-JS-524",
    img: "nodejs-currency-cover.jpg",
    bigimg: "currencyconverter.jpg",
    video: "https://player.vimeo.com/video/341301177",
    desc: `This project is a website module, made via HTTP server, run via NodeJS and Express JS in JavaScript, providing frontend as well as backend. 
    The backend will make HTTP request to an external source, in order to fetch the required data for the currency conversion. 
    Our frontend has JavaScript code which requests the available currencies from our own server backend, which then in turn calls the external source. 
    The backend is implemented via NPM, NodeJS, Express JS. 
    ExpressJS will establish the listening to a port and serving content via routes. 
    Routes are defined and highly managed by the user manually.`,
    group: "browser based"
  },
  
  {
    title: "Nanooq",
    minilabel: "Firefox OS Fork",
    proglang: "JavaScript",
    tags: ["JavaScript", "HTML", "CSS"],
    img: "nanooq-cover.gif",
    bigimg: "nanooq.gif",
    bigimg2: "nanooq.gif",
    desc: "Multi purpose operating system fork.<br />Built on Firefox OS. HTML, CSS, JS in 2014<br />"+
    "Nanooq was a prototype tablet UI that was made at net mobile. <br />"+
    "Built from Firefox OS as a white-label fork. This white fork was designed to have many different specific custom use cases. <br />"+
    "Some of the use cases included car dealership digital catalogue, linux desktop port, "+
    "media tablet and restaurant tablet to order. Also smartphone forks for specific audiences. "+
    "All apps needed were made, such as contacts app, launcher, call app etc.</p>",
    group: "other",
    hightlight: true
  }, 
 
  {
      title: "ECOM - Ecommerce Web platform",
      proglang: "Web Tech",
      minilabel: "Ecommerce Web platform",
      tags: ["JavaScript", "HTML", "CSS", "PHP"],
      url: "https://www.piecex.com/products/ECOM-Ecommerce-web-platform-455",
      img: "ecom.jpg",
      bigimg: "ecom.png",
      desc: "Ecommerce platform, where products can be shown, browsed, "+
      "wishlisted, put in cart, bought, added reviews, user created, etc.<br />"+
      "The server is realized via PHP and MySQL database. The frontend is JavaScript, HTML and CSS.<br /><br />"+
      "External resources include: Jquery, Bootstrap, Font-awesome, JSCookie, animate.CSS,  slick.js, noUiSlider, jquery.zoom.js. "+
      "Features include:<br /> "+
      "SQL database code and dummy entries of products, categories and reviews.<br /> "+
      "Products data model.<br /> "+
      "Searching function<br /> "+
      "Search filters<br /> "+
      "Categories data model.<br /> "+
      "Reviews per item integration code and data model.<br /> "+
      "Rating calculation from review<br /> "+
      "Wishlist<br /> Cart<br /> Cookies<br /> Checkout<br /> Product details page with tabs<br /> etc.",
      video: "https://player.vimeo.com/video/325359221",
      group: "browser based"
    },
    
    {
      title: "Mouse Analytics",
      minilabel: "Mouse Analytics",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Mouse-Analytics-418",
      img: "mouseanalytics.jpg",
      bigimg: "mouseanalytics.jpg",
      desc: "This mouse analytics code tracks and reveals user mouse journeys to you.<br />"+
      "It lets you replay the full sessions of every visit, which lets you improve the user experience and optimize your site.<br />"+
      "No need to guess which parts of the website cause issues to the user in terms of UI and UX.<br /><br />"+
      "Additionally, by using all sessions collectively for a specific website, "+
      "this code can draw heatmaps that show overall trends and which areas of the website are of more and less interest and usage.<br /><br />"+
      "This code tracks clicks, positions/movements, scrolling and resizing.<br /><br />"+
      "During playback clicks are animated visually to make them visible. Scroll events are simulated,"+
      " so that your playback window as well will scroll at the same time in the playback.<br />Another thing tracked are resize events. "+
      "Whenever the user resizes their browser we simulate this in the playback. "+
      "It also account for this during positional tracking and heatmap drawing.",
      video: "https://player.vimeo.com/video/304994023",
      group: "browser based"
    }, 
    
    {
      title: "Web Analytics Link Shortener Click Tracker",
      minilabel: "Web Analytics Platform",
      proglang: "PHP & JavaScript",
      tags: ["JavaScript", "HTML", "CSS", "PHP", "analytics", "data", "funnels"],
      url: "https://piecex.com/products/Web-Analytics-Link-Shortener-Click-Tracker-Argos-810",
      img: "analytics.jpg",
      bigimg: "analytics.png",
      desc: "<p>Argos is a web analytics platform template. "+
      "It can be used to realize an analytics data collecting system.</p>"+
      "<p>Also featured is shortening of links. Links can be created and then pasted and triggered anywhere.</p>"+
      "<p>Link creation features the option to Cloak, for cases in which redirects are not useful.<br />"+
      "Links can be easily added, deleted and tested and are flexible with routing.</p><p>Test your data collection with one click of a button.<br />"+
      "This project features an easy to copy and paste snippet which you can use on any page, to collect data (using your server as a backend).</p>"+
      "<p>Chart your data: You can easily select any column and render a chart which compares that column inside the data against each other.</p>"+
      "<p>Filtering data is easy, just click on any value inside the list of accesses and the entire list will be filtered by that value.</p>"+
      "<p>If you want to export the entire list of access as a CSV so you can use it in your favorite spreadsheet software, "+
      "just clicking one button is enough to export it.<br />Using this software you can easily build your own click tracker, page funnel, "+
      "analytics platform and more.</p>"+
      "<p>Technologies used: HTML, CSS, SQL, PHP (Development used an Apache server)</p>",
      video: "https://www.youtube.com/embed/vXUrEDPJI5E",
      group: "browser based"
    },
     
    {
      title: "Issue Tracker / Team Manager - Web Template",
      minilabel: "Web Issue Tracker",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS", "PHP"],
      url: "https://www.piecex.com/products/Issue-Tracker-Team-Manager-Web-Template-414",
      img: "issue-tracker.gif",
      bigimg: "issue-tracker.jpg",
      desc: "This an issue tracker / team manager system, like a Trello type board, "+
      "in which the users can open new issues, assign priorities to them, as well as status. "+
      "People can be assigned to the issue and comments can be posted.<br />All operations in this template use dynamic ajax. "+
      "This is a single page using JavaScript and PHP.",
      video: "https://player.vimeo.com/video/301999489",
      group: "browser based"
    },{
      title: "News Website Template",
      minilabel: "News Website",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/News-Website-Template-410",
      img: "news-template.jpg",
      bigimg: "news.jpg",
      desc: "News website template."+
      "News database with PHP interface.<br />"+
      "HTML &amp; CSS structure.<br />"+
      "Using MySQL.<br /><br />"+
      "Frameworks used: Jquery and Lity.<br /><br />",
      video: "https://player.vimeo.com/video/300912983",
      group: "browser based"
    },{
      title: "Small Website Template",
      minilabel: "Small Website",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Small-Website-Template-409",
      img: "website-template.jpg",
      bigimg: "smallpage.jpg",
      desc: "There are big websites and there are are scrolling pages that only cover one simple page, "+
      "but in between exists a space for everyone who has a little more content to show than just a simple flyer of information or advertising. "+
      "For example small businesses or private websites.<br /><br />"+
      "This project uses HTML, CSS and JavaScript to provide a simple to use template for making websites like this. "+
      "Frameworks used: Jquery and Lity.<br /><br />"+
      "Single Page JavaScript templating. Dynamic content injection:<br />"+
      "We use templating in JavaScript, meaning the entire content of the website ad every tab/page is contained within the JavaScript file, inside the tabs variable, which is a json variable.<br />This way we only have one HTML file with the structure, we never have to reload, single page but we also don\u2019t need PHP, any server side code or any other frameworks.",
      video: "https://player.vimeo.com/video/299832620",
      group: "browser based"
    },
    {
      title: "Restaurant Ordering Tablet",
      minilabel: "Restaurant Tablet",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Restaurant-Ordering-Tablet-398",
      img: "restaurant-tablet.jpg",
      bigimg: "restaurant.jpg",
      desc: "Front-end tablet ui template for a restaurant tablet.<br /><br />"+
      "Many restaurants have switched from paper menus to ordering with digital tablets, "+
      "making it easy to browse and order without the need of a waiter, while impressing the customer.<br /><br />"+
      "Possible to use with ElectronJS or in fullscreen mode on a tablet, for native experience.",
      video: "https://www.youtube.com/embed/AwGYaVqY5OU",
      group: "browser based"
    },{
      title: "Marketing Website - Template",
      minilabel: "Marketing Website",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Marketing-Website-Template-397",
      img: "marketing-single-page.jpg",
      bigimg: "marketing.jpg",
      desc: "This project is a marketing page, layout / template.<br />"+
      "Design of this website template is aimed at a site that markets or informs about a product.<br />"+
      "Features:<br />"+
      "- Single page<br />"+
      "- All scrolling<br />"+
      "- Big slides with fullsize background images<br />"+
      "- Colors, alignments, images easily changed.<br />"+
      "- Slides with multiple sub slides, horizontally<br />"+
      "- Animations that trigger upon scrolling down to the content<br /><br />Using HTML, CSS and some JavaScript.",
      video: "https://www.youtube.com/embed/T01pePBDMYI",
      group: "browser based"
    },{
      title: "Web Login Register System - Template",
      minilabel: "Web User System",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS", "PHP"],
      url: "https://www.piecex.com/products/Web-Login-Register-System-Template-394",
      img: "login-system.jpg",
      bigimg: "login.png",
      desc: "This is a login and register code module for php.<br />"+
      "It uses BCRYPT to save password hashes, saves PHP sessions to the database and checks some basic injection problems.<br />"+
      "Fully functional for login and registering.",
      video: "https://www.youtube.com/embed/XUrtayZOtAs",
      group: "browser based"
    },
    {
      title: "Ticket System - Web Template",
      minilabel: "Web Ticket System",
      proglang: "Web Tech",
      tags: ["JavaScript", "HTML", "CSS", "PHP"],
      url: "https://www.piecex.com/products/Ticket-System-Web-Template-395",
      img: "ticket-system.jpg",
      bigimg: "ticket.png",
      desc: "Complete web ticket system.<br />"+
      "Includes ticket status, administration, appending comment system, changing of status, timestamps, email system.<br />"+
      "using PHP mysql database and vanilla webstack + jQuery.",
      video: "https://www.youtube.com/embed/Y9RPuVUiQ3U",
      group: "browser based"
    },
    {
      title: "Mock-data Generator",
      minilabel: "Mock-data Generator",
      proglang: "JavaScript",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Sample-Data-Generator-Mocking-583",
      img: "mockdata-cover.png",
      bigimg: "mockdata.png",
      desc: "This is a mock data (sample data) generator, made with web tech and usable in the browser.<br />"+
      "Either generate one set or as many rows of random data as you need.<br />"+
      "Over 40 different data types are supported like random numbers, strings, UUIDs, dates, IP addresses, names, addresses etc. Additionally you can export the data as JSON or SQL.",
      video: "https://player.vimeo.com/video/354595564",
      group: "browser based"

    },
    {
      title: "Ionic Utility App - Notes, Weather & Clock, Stocks",
      minilabel: "Ionic Utility App",
      proglang: "AngularJS JavaScript",
      tags: ["angular", "android", "JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Ionic-Utility-App-Notes-Weather-Clock-Stocks-549",
      img: "ionicutil-cover.png",
      bigimg: "ionic.png",
      desc: "Ionic app with different utility functions, mainly to showcase a non trivial application at work. "+
      "Notes section to add new notes, edit, and delete notes.<br /> "+
      "On the weather and clock tab the user is able to type in any location on earth and get a best match. "+
      "From that match, this code uses the longitude and latitude to poll the weather and the time. <br />"+
      "The stock tab polls a number of common stocks to check as well as the possibility for the user to "+
      "search for any term and get the stock and it’s quote for the best match. "+
      "The search term does not have to be a symbol, it can be part of the name or description etc.",
      video: "https://player.vimeo.com/video/345826696",
      group: "browser based"
    },{
      title: "Survey System",
      minilabel: "Survey System",
      proglang: "JavaScript",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Survey-System-591",
      bigimg: "survey.jpg",
      bigimg2: "survey2.jpg",
      img: "surveysystem-cover.png",
      desc: "This is a survey system project. "+
      "This is a simple survey/quiz type system, made with web the common web technologies HTML, JavaScript, CSS. Survey data is saved in a JSON object, "+
      "which gets saved to HTML storage. The JavaScript in this project uses jQuery and sets up all the click events. "+
      "Also it sets up all the automatic refresh calls. There is a surveys object which contains an array of surveys, each surveys has an array of "+
      "questions and every question has an array of choices. The choices can be of different types.For test purposes, "+
      "the code will create sample surveys for you to play around with a see. Obviously this can also be used for other purposes that require a choice system, like assistants or similar.",
      group: "browser based"
    },{
      title: "Web 3D Model Viewer Module - via FBX and JavaScript",
      minilabel: "Web 3D Model Viewer",
      proglang: "JavaScript",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/Web-3D-Model-Viewer-Module-via-FBX-and-JavaScript-462",
      img: "webfbx-cover.png",
      bigimg: "webfbx.png",
      video: "https://player.vimeo.com/video/328351223",
      desc: "This is a web codebase written in HTML, JavaScript and CSS. "+
      "It shows include a 3D model, using the fbx file format, in a browser / web system. Mouse controls can be used to rotate the model and look at it. "+
      "Whenever the mouse is not inside the preview box, it is rotated slightly by itself.",
      group: "browser based"
    },
    {
      title: "Code Base Analysis Tool",
      minilabel: "Code Analysis Program",
      tags: ["JavaScript", "NodeJS"],
      img: "missing.jpg",
      bigimg: "missing.jpg",
      bigimg2: "missing.jpg",
      proglang: "NodeJS",
      subline: "Source Code Analysis Tool",
      desc: "<p>TODO TODO TODO TODO TODO TODO TODO TODO This project scans code bases, compares them against other code bases and calculates a similarity score. "+
      "It also generates a list of files and a list of functions for every source code file, supporting many programming languages.</p>"+
      "<p>Runs on a webserver, responds to REST calls, uses AWS build. </p>"+
      "<p>Techs used: C#, ASP .NET, React, Kestrel, AWS</p>",
      group: "other",
      hightlight: true
    },
    {
      title: "EduForm - Learning Platform Template - JavaScript Single Page",
      minilabel: "Educational Website",
      proglang: "JavaScript",
      tags: ["JavaScript", "HTML", "CSS"],
      url: "https://www.piecex.com/products/EduForm-Learning-Platform-Template-JavaScript-Single-Page-506",
      img: "eduform-cover.jpg",
      bigimg: "eduform.png",
      video: "https://player.vimeo.com/video/339947846",
      desc: "It is written in HTML, CSS, JavaScript. There is no sql database. "+
      "All data is saved inside JavaScript and polled from there. The entire page is a single page application, all data is exchanged and polled dynamically. "+
      "The page features as many courses. Courses have a title, description, image. Every course has a number of slides. "+
      "Every slide has a title and can have arbitrary HTML code for its content. Every page can also include a quiz, "+
      "which has to be answered correctly in order to progress to the next slide. "+
      "Other features include: History, HTML5 storage saving and loading, Search function, Filter course lists, Progress per course is saved, Quizzes",
      group: "browser based"
    },{
      title: "3D CSS Pack: Isometric, 3D Charts, Tilting",
      minilabel: "Web 3D Model Viewer",
      proglang: "JavaScript",
      tags: ["HTML", "CSS"],
      url: "https://www.piecex.com/products/3D-CSS-Pack-3-Isometric-3D-Charts-Tilting-468",
      img: "CSSpack-cover.png",
      bigimg: "CSS3.png",
      video: "https://player.vimeo.com/video/330441311",
      desc: "This is a pack of multiple example templates on how to use advanced CSS transformation for modern 3D effects and use cases. "+
      "Some JavaScript may be used, but it’s only to manipulate CSS values. "+
      "This pack includes: Isometric: Sideways angled way of looking at 3D graphics for a better overview perspective. "+
      "Used to give a better spatial impression of 3D depth. Chart Bars: Using 3D to create a graph in bars. "+
      "Chart Bars with Textures: Slightly modified version with textures. "+
      "Tilt: Mouse following 3D tilt rendering. Effect can be modified for all sorts of slight or heavy tilt effects.",
      group: "browser based"
    },{
      title: "Amazon S3 bucket downloader",
      minilabel: "AWS S3 Downloader",
      proglang: "C#",
      tags: ["csharp"],
      url: "https://www.piecex.com/products/Amazon-S3-bucket-downloader-C-602",
      img: "amazons3-cover.png",
      bigimg: "amzs3.jpg",
      bigimg2: "s32.jpg",
      desc: "This project is a showcase project written in C# using the AWS SDK to show how to download your data from AWS S3 buckets.<br />"+
      "Specify the bucket name, the bucket key, your secret key and access key for AWS and you can download it directly and process it inside your C# code.<br />"+
      "It is a console program to show how to access data from your S3 and incorporate it.",
      group: "browser based"
    },{
      title: "Source Code Analysis Tool",
      minilabel: "Code Analysis Program",
      tags: ["csharp"],
      img: "codeana.jpg",
      bigimg: "cc1.jpg",
      bigimg2: "cc2.jpg",
      proglang: "C#",
      subline: "Backend web utility with REST interface",
      desc: "<p>This project scans code bases, compares them against other code bases and calculates a similarity score. "+
      "It also generates a list of files and a list of functions for every source code file, supporting many programming languages.</p>"+
      "<p>Runs on a webserver, responds to REST calls, uses AWS build. </p>"+
      "<p>Techs used: C#, ASP .NET, React, Kestrel, AWS</p>",
      group: "c# and unity"
    },{
      img: "thesisvr.gif",
      bigimg: "thesis.png",
      tags: ["unity", "csharp", "game", "game3d", "vr", "PHP", "sql"],
      proglang: "C#",
      video: "https://www.youtube.com/embed/59wvJi05PBg",
      subline: "First person puzzle based storytelling demo<br>PC and VR using Unity3D and SteamVR<br>2017",
      title: "Thesis: VR Storytelling",
      minilabel: "3D VR Game",
      desc: "<p>In my bachelor thesis I looked at the difference in storytelling between VR and traditional video games." +
        "<br />What kind of techniques can be used to convey exposition to the player, what tools, what methods, advantages and disadvantages." +
        "<br />This demo was used to measure the difference in time between PC players and VR players as they try to solve puzzles and finish this game.</p>",
        group: "c# and unity",
        hightlight: "true"
    },{
      title: "Demake Ninja",
      minilabel: "Lowpoly 3D Game Demo",
      tags: ["unity", "csharp", "game", "game3d"],
      img: "demaken.jpg",
      proglang: "C#",
      video: "https://www.youtube.com/embed/QYXrozqmjf0",
      bigimg: "demaken.jpg",
      subline: "Unity 3D Game",
      desc: "<p>Personal Project.</p><p>Low Poly video game made for a game jam.</p>"+
      "<p>Using Unity and C# this emulates the feel of Tenchu for PS1.</p>"+
      "<p>Including models and textures.</p>",
      group: "c# and unity"
    }, {
      img: "mpacman.gif",
      bigimg: "pacman.jpg",
      tags: ["unity", "csharp", "game", "game3d"],
      title: "Medical Pac-man",
      minilabel: "3D Game",
      proglang: "C#",
      bigimg2: "pac2.jpg",
      subline: "Tradeshow arcade style video game<br>PC using Unity3D<br>2017",
      desc: "<p>An arcade style video game that was made specifically for a medical tradeshow, featuring relevant devices.</p>" +
        "<p>It was produced on request and was used at a tradeshow in April 2017. It also featured a highscore system for a giveaway at the tradeshow." +
        "The concept was pacman with a medical theme plus including the topic of tumors being removed by a special medical device, which is the player controls.</p>" +
        "<p>It also has joystick support to emulate the feeling of using the actual medical device. At the tradeshow the game was used with an appropriate joystick.</p>",
        group: "c# and unity"
    }, {
      title: "Dungeon Puzzle Gems",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "Game2D", "android"],
      url: "https://www.piecex.com/products/Dragon-Gems-Unity-Game-Template-408",
      img: "dungeon-puzzle.jpg",
      bigimg: "dungeon-puzzle.jpg",
      desc: "Unity 2D Game. "+
      "Match gems, chain, cause damage to the enemy and defeat the enemy.<br />"+
      "This project features sprites, backgrounds, textures, sound effects, "+
      "particle effects.",
      video: "https://www.youtube.com/embed/22hKrGFfTio",
      group: "c# and unity"
    },
    
     {
      title: "Puzzle Block - Game Template",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "Game2D", "android"],
      url: "https://www.piecex.com/products/Puzzle-Block-Game-Template-405",
      img: "puzzleblock.jpg",
      bigimg: "puzzleblock.png",
      desc: "Grab blocks from the bottom, drag them and let go on the board. If the placement is valid, it will be placed.<br /><br />"+
      "This is a Unity template for creating puzzle games with blocks, filling up rows or columns. "+
      "This project features sprites, many background layers, sound effects, particle effects, music and all the code, "+
      "this template provides a fully working basic prototype.",
      video: "https://www.youtube.com/embed/J1vlouQeZkQ",
      group: "c# and unity"
    }, {
      title: "Flappy Parkour Game - Unity Template",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "Game2D", "android"],
      url: "https://www.piecex.com/products/Flappy-Parkour-Game-Unity-Template-401",
      img: "flappy.jpg",
      bigimg: "flappy.png",
      desc: "This unity template is a fully functional prototype of a flappy / parkour type game. "+
      "Similar to a runner game but in 2D.<br />Mouse down/finger down will make the player ascent, gravity pulls the player down. "+
      "Colliding with obstacles/blocks or the ground leads to failure. Collecting items/gems increases points.<br /><br />"+
      "Featuring parallax layered background scrolling. (7 layers all different parallax depth)<br /><br />"+
      "This project comes with:"+
      "<br />- All code"+
      "<br />- Sprites"+
      "<br />- Backgrounds"+
      "<br />- Particle Effects"+
      "<br />- Sound Effects"+
      "<br />- Music"+
      "<br />- Prefabs",
      video: "https://www.youtube.com/embed/UcLoesKUyiw",
      group: "c# and unity"
    },  {
      img: "vndungeoncrawler.gif",
      bigimg: "dungeoncrawl.jpg",
      tags: ["unity", "csharp", "game", "game3d"],
      proglang: "C#",
      video: "https://www.youtube.com/embed/JuAltf0VfSY",
      title: "Visual Novel Dungeon Crawler",
      minilabel: "3D Game",
      subline: "Visual novel dungeon crawler type video game prototype<br>PC using Unity3D<br>2017",
      desc: "<p>This was a prototype I made to play around with the idea of a Shin Megami Tensei: Strange Journey type game.</p>",
      group: "c# and unity"
    },{
      title: "Space Shooter - Unity Template",
      minilabel: "2D Game",
      proglang: "C#",
      bigimg: "spaceshooter.jpg",
      tags: ["unity", "csharp", "game", "Game2D", "android"],
      url: "https://www.piecex.com/products/Space-Shooter-Unity-Template-404",
      img: "spaceshooter-unity.jpg",
      desc: "Unity template in which the player controls a space ship, moving, dodging and shooting at incoming enemy space ships.<br />"+
      "Featuring various enemy space ship sprites, particle effects and a multi layered parallax scrolling background for added depth.<br /><br />"+
      "The project includes:"+
      "<br />- Sprites"+
      "<br />- Background layers"+
      "<br />- Sound Effects"+
      "<br />- Music"+
      "<br />- Code"+
      "<br />- Particle Effects &amp; Prefabs",
      video: "https://www.youtube.com/embed/4fPUuknyeOA",
      group: "c# and unity"
    }, {
      title: "Visual Novel template for Unity",
      minilabel: "2D Game",
      proglang: "C#",
      tags: ["unity", "csharp", "game", "Game2D"],
      url: "https://www.piecex.com/products/Visual-Novel-template-for-Unity-388",
      img: "visual-novel.jpg",
      bigimg: "visual-novel.png",
      desc: "Want to create your own Visual Novels?<br />"+
      "This project serves as a Unity template.<br />"+
      "Featuring:<br />"+
      "- Code, with easy to use functions for many common actions in visual novels.<br />"+
      "- Sample character sprites<br />"+
      "- Sample music<br />"+
      "- Sample backgrounds<br /><br />"+
      "This includes all you need to get you started. Easy to easy, easy to extend. Including assets.",
      video: "https://www.youtube.com/embed/q0jgg1wkRck",
      group: "c# and unity"
    },
    
    {
      title: "C# ASP.NET Core Kestrel Web Server",
      minilabel: "C# ASP Kestrel Server",
      proglang: "C#",
      tags: ["csharp", "backend"],
      url: "https://www.piecex.com/products/C-ASPNET-Core-Kestrel-Web-Server-586",
      img: "kestrel-cover.png",
      bigimg: "kestrel.jpg",
      bigimg2: "kestrel.jpg",
      desc: "This is a web server made in C#. "+
      "The exact technology stack here is C# ASP.NET Core and Kestrel. "+
      "This also uses React in order to facilitate a web browser interface, which can be used for in and outputs. "+
      "Handle all sorts of requests and establish for C# web server with this prototype.",
      group: "c# and unity"
    }, {
      title: "Quantum Nucleus",
      minilabel: "2D Game Framework",
      proglang: "Java OpenGL",
      tags: ["libgdx", "OpenGL", "Java", "game", "Game2D"],
      img: "qn-cover.jpg",
      video: "https://www.youtube.com/embed/2SszSgS-q4M",
      bigimg: "qn1.jpg",
      bigimg2: "qn2.jpg",
      subline: "fix",
      desc: "Quantum Nucleus is a 2D game/framework/codebase that was never finished. <br /><br />"+

      "This codebase spanned a wide variety disciplines, since it was an ambitious game made from scratch without a premade engine."+
      "Aspects such as: 2D Physics (no premade physics engine used), collision detection AABB etc, data management, resource management, image loading and buffering techniques"+
      "sound and music playing, audio engineering and effects, general code utilities, game states, mechanics, input handling, performance management, particle systems, video decoding, playing an syncing, "+
      "advanced graphics programming, animations, map/game editor, AI, scripting system, shaders, game saves (serializing work), tilemap engine, parallax effects, lighting, etc.<br />"+
      "Additionally lots of work on assets like: Music, sound effects, sprites, tiles and backgrounds, concept art, story and dialogue writing, game design, map design.<br />"+
      "Soft skills that were needed and improved included team mangement, project planning and such.<br />"+
      "The project was worked on for many years, at first I worked on it by myself, "+
      "the first 2 iterations were made completely in Java2D AWT and the second was basic OpenGL. The third was proper LWJGL (same as Java based Minecraft used). "+
      "At it's height about 5 people worked on it with me being the lead. Half and half programmers and artists. The codebase linked here was another "+
      "rewrite and with it contained no more code made by other people than me. I did this to update some graphic library aspects but also to remove all "+
      "code other people had written, since they no longer work on the project, in order to prevent potential legal issues.<br />"+

      "<p><a class='githublink' href='https://github.com/XOCODE-OP/Quantum-Nucleus' target='_blank' >Github Link</a><br />"+
      "<a href='https://www.youtube.com/watch?v=2SszSgS-q4M' target='_blank'>Video: Map Design</a><br />"+
      "<a href='https://www.youtube.com/watch?v=RdzxCtkTBuA' target='_blank'>Video: Artwork</a><br />"+
      "<a href='https://www.youtube.com/watch?v=Vyl-B7aULOo' target='_blank'>Video: Map Editor 1</a><br />"+
      "<a href='https://www.youtube.com/watch?v=uxtBKUDZLwI' target='_blank'>Video: Map Editor 2</a><br />"+
      "<a href='https://www.youtube.com/watch?v=PpLM6_SBlj8' target='_blank'>Video: Grenade Gameplay</a><br />"+
      "<a href='https://www.youtube.com/watch?v=-TFyOpejPi0' target='_blank'>Video: Black Hole Physics</a><br />"+
      "<a href='https://www.youtube.com/watch?v=j7DX4Eyrh-Y' target='_blank'>Video: No Particles, Electricity VFX 1</a><br />"+
      "<a href='https://www.youtube.com/watch?v=nyAkTwg9TkE' target='_blank'>Video: No Particles, Electricity VFX 2</a><br />",
      highlight: true,
      group: "java and android"
    }, {
      title: "Black Nebula",
      minilabel: "2D Game",
      proglang: "Java OpenGL",
      tags: ["libgdx", "OpenGL", "Java", "game", "Game2D", "android"],
      img: "blacknebula.gif",
      video: "https://www.youtube.com/embed/ZU7nIEHmQ_8",
      bigimg: "blacknebula.jpg",
      subline: "2D Arcade-Style Space Shooter Video Game,<br>PC using Java, Libgdx, OpenGL<br>2011-2013",
      desc: "<p>This game started as a in the veine of a popular game development competition. Later it got redone and polished. "+
      "The result is a fast paced 2D arcade-style space shooter game. "+
      "You control a spaceship trying to survive a barrage of enemies who pursuit and trying to kill you. Reminiscent of Asteroids or even Sinistar, "+
      "since this game incorporates a 'Nemesis'</p>" +
        "<p>Developed with Java and Libgdx(OpenGL). Released on PC & Android.</p>" +
        "<br><p><a class='githublink' href='https://github.com/XOCODE-OP/Black-Nebula' target='_blank' >Github Link</a></p>",
        group: "java and android"
        //"<br><p><a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDci14OUdOQW1kTms' target='_blank'>Link to Windows Installer</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDSFdvRnJTamQxQms' target='_blank'>Direct APK Link</a></p>" +
    },
    {
      title: "2D OpenGL Level Editor",
      minilabel: "Map & Game Editor",
      proglang: "Java OpenGL",
      tags: ["libgdx", "OpenGL", "Java", "game", "Game2D", "tools"],
      img: "alkahest.gif",
      bigimg: "alkahest.png",
      video: "https://www.youtube.com/embed/Vyl-B7aULOo",
      desc:  "The new Level Editor being developed alongside Quantum Nucleus, as such it is faily specialized for this game. "+
      "Creating Layers, changing types, tile-favorites, quick tileset-changing, items, enemies, portals, scripts and scenes, "+
      "playing and rendering lights in realtime, setting up AI behaviors - ALKAHEST is becoming a great and powerful tool to shape Quantum Nucleus. "+
      "Developed with Java, LWJGL, OpenGL." +
        "<br />side scroller, scripting, tiles, tilemaps, layers, save to file load, items, enemies, events, OpenGL gui, lights, new layer system",
        group: "java and android"
    }, {
      img: "2dgravityphysics.gif",
      bigimg: "2dgravityphysics.png",
      tags: ["libgdx", "OpenGL", "Java", "game", "Game2D", "tools"],
      title: "2D Gravity Physics",
      proglang: "Java OpenGL",
      minilabel: "2D Gravity Physics",
      video: "https://www.youtube.com/embed/LDW7qK-dK-I",
      desc: "<p>2D engine framework to simulate gravity<br>PC using Java, Libgdx, OpenGL</p>"+
      "<p>This includes slopes of technically any angle, open and closed platforms, moving horizontally and vertically.</p>" +
        "<p>Established necessary technology.</p>" +
        "<p>Developed with Java & Libgdx on PC.</p><br /><a class='githublink' href='https://github.com/XOCODE-OP/PhysicsMaster' target='_blank' >Github Link</a>",
        group: "java and android"
    },
    
    {
      img: "bloobuy.gif",
      proglang: "Android",
      bigimg: "missing.jpg",
      bigimg2: "missing.jpg",
      tags: ["Java", "android", "tools", "ios"],
      title: "Bloobuy - Bluetooth LE Beacon Advertisement Solution",
      minilabel: "Android Bluetooth LE tech",
      desc: "<p>This project was created at Net Mobile - NTT Docomo. At this point in time, Bluetooth low energy was introduced into Android 4.3 and was brand new. <br />"+
      "Our objective was to build a small bluetooth device from scratch, an advertisement beacon, which will simply send out its ID/key infinitely using low energy. <br />Then we created an SDK for iOS and Android "+
      "that could pick up these beacons and trigger events if a registered beacon ID was detected. <br />We also built a prototype app on mobile, as well as a REST server to showcase the "+
      "functionality. The idea was that other app creators could integrate this SDK and advertise or give coupons, whenever people walked by beacons placed in retail locations."+
      "For this we teams up with an advertising company and manually placed beacons aroudn the city. <br />"+
      "<br />There is no UI for this is an SDK. There were also some basic security aspects.</p>",
      group: "java and android"
    }, {
      title: "2D Puzzle Game for Android",
      minilabel: "2D Game",
      proglang: "Android OpenGL",
      tags: ["libgdx", "OpenGL", "Java", "Game2D", "android"],
      img: "stella.gif",
      bigimg: "stella.png",
      video: "https://www.youtube.com/embed/YtJ38KFNZRU",
      desc: "<p>Cute puzzle adventure game with a lemmings feel to it. " +
        "Uses Flock/Swarm dynamics, the player has to guide a swarm of stars to their goal.</p>" +
        "<p>This game features a polygon based map system with AABB collisions.</p>" +
        "<p>Developed with Java & Libgdx. Released on PC & Android.</p>" +
        "<p>Personally I developed the early prototypes for this game, after that my position shifted to that of a Producer.</p>" +
        "<br><br><p><a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a></p>",
        group: "java and android"
    },
    {
      title: "SKIRMISH",
      minilabel: "2D Game",
      proglang: "Android OpenGL",
      tags: ["libgdx", "OpenGL", "Java", "Game2D", "android"],
      img: "skirmish.gif",
      bigimg: "skirmish.jpg",
      video: "https://www.youtube.com/embed/d3ekBHEPjNo",
      desc: "<p>Turn-based strategy video game<br>PC, Android using Java, Libgdx, OpenGL</p>"+
      "<p>Each player starts off with a couple of different vehicles, units, like tanks and helicopters. There are also different terrains. "+
      "Each player has to strategically move and place units to eliminate the enemies units.</p>" +
        "<p>Developed with Java & Libgdx. Released on PC & Android.</p>" +
        "<br><p><a class='githublink' href='https://github.com/XOCODE-OP/SKIRMISH' target='_blank' >Github Link</a></p>",
        group: "java and android"
        //"<br><p><a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDQ0w3QXFWY3FIanc' target='_blank'>Link to Windows Installer</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://play.google.com/store/apps/developer?id=Alchemic%20Tempest' target='_blank'>Link to Google Play</a> &nbsp,  &nbsp, |  &nbsp,  &nbsp, " +
        //"<a href='https://drive.google.com/open?id=0B9Nkz0-YWCIDV3BiNGZUZE5wR3c' target='_blank'>Direct APK Link</a></p>" +
    },
    {
      title: "Discord chat and utility bot",
      minilabel: "Discord Chat Bot",
      proglang: "Java & Python",
      img: "discordbot.jpg",
      bigimg: "missing.jpg",
      tags: ["Java", "tools", "python"],
      subline: "Chat and utility Bot for the Discord chat platform<br>built with Java and Python using Discord API.<br>2016",
      itemID: "Discord Bot",
      desc: "<p>Chat bot for discord using Discord4J and python.</p>"+
      "<p>Various utility functions like searching for media files via query, loading and buffering it, playing it to audio channels, searching for images and loading them into the chat,"+
      " chat games and stats and chat administration.</p>",
      group: "python"
    },
    {
      title: "Stock Photo Finder - Python Cross Platform Desktop UI Program",
      minilabel: "Stock Photo UI App",
      proglang: "Python & QT",
      tags: ["python"],
      url: "https://www.piecex.com/products/Stock-Photo-Finder-Python-Cross-Platform-Desktop-UI-Program-531",
      img: "stockpic-cover.jpg",
      bigimg: "stockimages.jpg",
      desc: "<p>Written in Python, this is a cross platform desktop application using PyQt. "+
      "I wanted to use Qt in a project and also wanted to make a python app that actually has a UI and runs on a desktop client.</p>"+
      "<p>In this app search terms can be typed in and free stock photos will be found, using popular online sources.</p>",
      group: "python"
    },
    {
      title: "Autoprice",
      minilabel: "Autopricing Bot",
      proglang: "Python",
      tags: ["python"],
      img: "autoprice.jpg",
      bigimg: "autoprice.jpg",
      bigimg2: "autoprice.jpg",
      desc: "This is an algorithm to automatically set the price of items on an ecommerce platform depending on analytics, external and "+
      "internal. By looking at page views, favorite listings and such, an internal ranking is calculated. Externally news and stocks are evaluated to gauge general"+
      "interest in types of items. No UI, CLI only.",
      group: "python"
    }

  ];

