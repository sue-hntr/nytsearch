console.log('testing');


    $('.dropdown-item').on("show.bs.dropdown", function(){
        var num = $(this).data('number');
        console.log("drop " + num);
    })

    // $('.dropdown-toggle').on()

    $('#myDropdown').on('show.bs.dropdown', function () {
        // do something…
      })

    $('.btn-outline-primary').on("click", function(){
        var state = $(this).attr("type");
        console.log(state + "search");
    })

    $('.btn-outline-secondary').on("click", function(){
        var state = $(this).attr("type");
        console.log(state + "clear");
    })







