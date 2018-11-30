$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": null
        },
    });
});

$(document).ready(function () {
    $('select').formSelect();
});
