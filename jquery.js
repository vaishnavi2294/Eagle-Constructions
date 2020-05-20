$(document).ready(function(){


    $('#add-row').click(function(){
    var rate= "<input type='number' name='rate' class='rate'>";
    var name="<input type='text' name='name' class='name'>";
    var unit= "<input type='number' name='unit' class='unit'>";
    var btn="<a href='#' class='btn'>Get Amount</a>"
 var markup = "<tr><td class='item'>"+ name +"</td><td class='item'>"+ rate +"</td><td class='item'>"+ unit +"</td><td class='item'>"+ btn +"</td><td class='item'>"+ unit +"</td><td><i class='material-icons delete'>delete</i></td></tr>";

        $("#tableBody").append(markup)
});

$('.delete').click(function(){
$(this).parents('tr').remove();
})
})
