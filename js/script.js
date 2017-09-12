//Hiding and unhiding menu button
resizeAndLoadHandler = function() {
    if($(window).width() < 768) {
        console.log("Showing Menu Button");
        $("#menu-button").removeClass("hidden");
    }
};
$(window).load(resizeAndLoadHandler);
$(window).resize(resizeAndLoadHandler);

menuAndXbuttonHandler = function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
};
$("#x-icon").click(menuAndXbuttonHandler);
$("#menu-button").click(menuAndXbuttonHandler);

//Marking tasks done
$(".check-zone button").click(function(e) {
    $(this).parent().parent().toggleClass("checked");
});

//Making tasks and tasks sections sortable
$(".task-sections").sortable();
$(".task-section-body").sortable();