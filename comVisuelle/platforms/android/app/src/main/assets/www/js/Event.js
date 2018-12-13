/* =======================================================================================================================
                        Event.js handles all click events within the application
==========================================================================================================================*/ 



/* =============  NAVBAR  =========================  NAVBAR ==========================  NAVBAR  ========================*/

/***
 * Button Admin Navbar
 */

$('#admin').on('click', function(){
    $('#display').html("");
    $('#display').append('<iframe width="100%" height="600" sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals" seamless src="file:///android_asset/www/form_html.html">Le navigateur n\'est pas compatible></iframe>');
});

/***
 * Button Categories Navbar
 */

$('#navbarDropdown').on('click',start, function(){
    console.log(res);
        for(var i=0; i<res.length; i++){
            $('.dropdown-menu').append('<a class="dropdown-item" href="#">'+res[i].category_name+'</a>');
        }

});

/***
 * Link submenu categories
 */

$('.dropdown-item').on('click', function(){

    // var currentCategory = $this.html;
    // console.log(currentCategory);
})

/***
 * Input Search Navbar
 */

$('#inputSearch').on('click', function(){

});

/***
 * Button Search Navbar
 */

$('#buttonSearch').on('click', function(){

});


/* =========================  FORMULAIRE  =======================  FORMULAIRE ======================================= */

/***
 * Button Choose a file Form
 */

$('#inputFile').on('click', function(){

});

/***
 * Button Confirm Form
 */

$('#confirmButton').on('click', function(){

});

