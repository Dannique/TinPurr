const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
  }));
  
  app.use(express.static("public"));


  app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send()
});

app.listen(3000, () => {
    console.log("Server port 3000 is on");
  })


// $(window).scroll(() => {

//     $('#pricing').each( function(){
//         const el               = $(this),
//               top_of_section   = el.offset().top,
//               bottom_of_window = $(window).scrollTop() + $(window).height() + 100;

//         if( bottom_of_window > top_of_section ) {
//             el.addClass('slideItUp').removeClass('slideItDown');
//         } else {
//             el.addClass('slideItDown').removeClass('slideItUp');
//         }
//     }); 

//     $('#makeitslide').each( function(){
//         const el               = $(this),
//               top_of_section   = el.offset().top,
//               bottom_of_window = $(window).scrollTop() + $(window).height() + 100;

//         if( bottom_of_window > top_of_section ) {
//             el.addClass('wrapperin').removeClass('wrapperout');
//         } else {
//             el.addClass('wrapperout').removeClass('wrapperin');
//         }
//     }); 

// });


