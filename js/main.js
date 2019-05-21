// -----------------------------------------------------------------------------------------------
// This file contains:
//                      JS file with all custom built functionality to make the site reactive
//                      to the user.
// -----------------------------------------------------------------------------------------------


// Time Title Changer - On Page Load
    let heroTitleElement = document.querySelector('#adaptiveTitle');
    let currentHour = new Date().getHours();
    let possibleTextDisplay = ["Good Morning!", "Good Afternoon!", "Good Evening!", "Check Console!"]

    if (currentHour != null) {
        if (currentHour >= 3 && currentHour < 12) {
            heroTitleElement.textContent = possibleTextDisplay[0];
        } else if (currentHour >= 12 && currentHour < 18) {
            heroTitleElement.textContent = possibleTextDisplay[1];
        } else {
            heroTitleElement.textContent = possibleTextDisplay[2];
        }
    } else {
        heroTitleElement.textContent = possibleTextDisplay[3];
    }

// Typing Sub Title
    var options = {
        strings: [
            "I <i class='fas fa-heart'></i> Being A Front End Developer.", 
            "I <i class='fas fa-heart'></i> Being A Web Designer.", 
            "I <i class='fas fa-heart'></i> Being A PC Builder.", 
            "I <i class='fas fa-heart'></i> Being A Web Warrior."], 
        typeSpeed: 80,
        backSpeed: 50,
        shuffle: true,
        backDelay: 2000,
        startDelay: 1600,
        loop: true,
        contentType: 'html',
        smartBackspace: true
    }

    $(document).ready(function(){
        var typed = new Typed("#typed", options);
    });

// Lettering Effect
    $("h1").html(
        $("h1").text().split("").map(a => `<span class="letter">${a}</span>`)
    )

// Animation delay
    $(".button").mouseenter(function() {
        $(this).removeClass("entranceAnimation");
        $(this).addClass("hoverAnimation");
    });

    $(".button").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
        $(this).removeClass("hoverAnimation");
    })

// Fullpage Scroll
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'PLACE_KEY_HERE',
        //Navigation
        menu: '.navbar-menu',
        anchors: ['homepage', 'projects', 'about'],
        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        scrollOverflow: true,
        //Accessibility
        keyboardScrolling: true,
        //Custom selectors
        lazyLoading: true,
        //events
        onLeave: function(origin, destination, direction){
            if (destination.index == 1){
                $('.projects-summary h2 ,.projects-summary h3 ,.project-panel ,.projects-button').addClass('entranceAnimation');
            }
            if (destination.index != 0) {
                $('#navbar').addClass('small');
                $('.scroll-indicator').addClass('hidden');
            } else {
                $('#navbar').removeClass('small');
                $('.scroll-indicator').removeClass('hidden');
            }
        },
    });

// Initial homepage animations
    $('.navbar .container ,.scroll-indicator').addClass('entranceAnimation');
    $('.hero-body h1 ,.line-break ,.hero-body h2 ,.action-button').addClass('entranceAnimation');

// Button coming soon click
    $('#projects-button').click(function(){
        var $this = $(this);
        $this.toggleClass('comingSoon');
        if($this.hasClass('comingSoon')){
            $this.text('Coming Soon');			
        } else {
            $this.text('View More...');
        }
    });

// Disable right click
//$(document).on("contextmenu", function (event) { event.preventDefault(); });

// tab selector
function selectTab(evt, tech) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tech).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();