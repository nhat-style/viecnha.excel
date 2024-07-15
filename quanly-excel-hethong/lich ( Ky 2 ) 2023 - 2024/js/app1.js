$(document).ready(function (){
    $('.Dropdown .icon-menu').click(function () {
        $(this).parent('li').children('.Dropdown-content').slideToggle();
     
    });
}); 