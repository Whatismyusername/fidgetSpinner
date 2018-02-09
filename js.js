$('document').ready(function(){
    var degreeAdd = '';
var initialHeight = '';
var radius = '';

$('#DB').click(function(){
    degreeAdd = Number($('#DI').val());
    $('#DB').hide();
    $('#DI').hide();
    $('#DP').append(degreeAdd);
});

$('#IB').click(function(){
    initialHeight = Number($('#II').val());
    $('#IB').hide();
    $('#II').hide();
    $('#IP').append(initialHeight);
});
$('#RB').click(function(){
    radius = Number($('#RI').val());
    $('#RB').hide();
    $('#RI').hide();
    $('#RP').append(radius);
});
$('#run').click(function(){
    for(var degree = 0; degree < 360; degree += degreeAdd){
        var height = initialHeight + Math.sin(degree * Math.PI / 180) * radius;
        var coHeight = radius * Math.cos(degree * Math.PI / 180);
        $('#result').append('degree: ' + degree + '<br>');
        $('#result').append('height: ' + height + '<br>');
        $('#result').append('co-height: ' + coHeight);
        $('#result').append('<hr>');
    }
});
})