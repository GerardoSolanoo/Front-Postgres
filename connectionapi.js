var url="https://harryback-service-gerardosolanoo.cloud.okteto.net/api/harry";

function postharry(){
    console.log(url);

    var myName = $('#name').val();
    var myApellido = $('#apellido').val();
    var myCasa = $('#casa').val();
    var myMateria = $('#materia').val();
    var myPatronus = $('#patronus').val();
    var myEdad = $('#edad').val();
        var harry={
            name : myName,
            apellido : myApellido,
            casa : myCasa,
            materia : myMateria,
            patronus : myPatronus,
            edad : myEdad,
        };
        console.log(harry);

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                $('#resultado').html(JSON.stringify(data.harry));

            },
            data: JSON.stringify(harry)
        });


    };


reader

function getAllharry(){

    console.log(url);

    $.getJSON(url,
        function(json){
            console.log(json);

            var arrharry = json.harry;

            var htmlTableharry = '<table class="mi-tabla" border="1">';

            arrharry.forEach(function(item){
                console.log(item);
                htmlTableharry += '<tr>' +
                '<td>' + item.id + '<td>'+
                '<td>' + item.name + '<td>'+
                '<td>' + item.apellido + '<td>'+
                '<td>' + item.casa+ '<td>'+
                '<td>' + item.materia+ '<td>'+
                '<td>' + item.patronus + '<td>'+
                '<td>' + item.edad + '<td>'+
                '</tr>';                   
});
    htmlTableharry += '</table>';

    $('#resultado').html(htmlTableharry);
}
);
}

function cambiarTema() {
    let body = document.getElementsByTagName("body")[0];
    let h1 = document.getElementsByTagName("h1")[0];
    let labels = document.getElementsByTagName("label");
    let buttons = document.getElementsByTagName("button");
  
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      h1.classList.remove("dark");
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.remove("dark");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("dark");
      }
    } else {
      body.classList.add("dark");
      h1.classList.add("dark");
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.add("dark");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("dark");
      }
    }
  }
