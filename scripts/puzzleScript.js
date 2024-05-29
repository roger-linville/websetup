var info = $('#puzzleinfo'), moves = 0;
var solvedOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var idsInOrder = [];
$('#puzzle').sortable();
$('#puzzle').disableSelection();
var idsInOrder = [];
$(function () {
    if ($('#puzzleBox').width() < $('#puzzle').width()) {
        $('#puzzleBox').hide();
    }
    else {
        $('#puzzleBox').show();
    }
    $('#puzzle').sortable({
        update: function (event, ui) {
            $("ul#puzzle li").each(function () { idsInOrder.push($(this).attr("id")) });
            if (idsInOrder.join('') !== "123456789") {
                idsInOrder = [];
                $('#puzzleinfo').html('You\'ve made ' + (++moves) + ' move' + (moves > 1 ? 's' : ''));
            }
            else {
                $('#puzzleinfo').html('You\'ve solved the puzzle in ' + moves + ' moves!').addClass('congrats');
            }
        }
    });
    $('#puzzle').disableSelection();
});