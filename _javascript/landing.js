$(document).ready(function(){
  $.ajax({
    url: `https://5f4656bae165a60016ba9950.mockapi.io/api/v1/products`,
    type: `get`,
    beforeSend: function() {
      $("#loader").show();
    },
    success: function(response) {
      generateDesktop( response )
      generateMobile( response )
    },
    complete: function(data) {
      $("#loader").hide();
    }
  })

  function generateDesktop ( response ) {
    console.log("------")
    console.log( response )
    console.log("------")
    response.forEach(item => {
      $("#itens").append(
        `
          <div class='col-md-4'> 
            <a href="products/${item.path}.html">
              <div class="card card-style">
                <img src="${item.avatar}" class="avatar-card"/>
                <div class="card-body bold-text">
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="redux-margin"> ${item.name} </p>
                    </div>
                  </div>
                  <div class="row border-description">
                    <div class="col-sm-9">
                      <p class="description-body"> ${item.short_description} </p>
                    </div>
                    <div class="col-sm-3 description-body">
                      ${item.quantity} ML
                    </div>
                  </div>
    
                  <div class="row redux-margin">
                    <div class="col-sm-8">
                      <span class="max-font"> 10x</span> 
                      <span class="vertical-font"> R$ </span>
                      <span class="max-font"> ${item.without_fees.split(',')[0]} </span>
                      <span class="vertical-font">, ${item.without_fees.split(',')[1]}</span>
                      <p class="redux-margin-top small-font ml-1"> sem Juros <span class="min-font"> 1 </span></p>
                    </div>
                    <div class="col-sm-4 mt-3 redux-margin">
                      <img src="../_images/visa_logo.png" class="brand-logo">
                      <img src="../_images/master_logo.png" class="brand-logo">
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-sm-7">
                      <span class="max-font"> 15x</span> 
                      <span class="vertical-font"> R$ </span>
                      <span class="max-font"> ${item.with_fees.split(',')[0]} </span>
                      <span class="vertical-font">,${item.with_fees.split(',')[1]} </span>
                      <p class="redux-margin-top small-font ml-1"> com Juros <span class="min-font"> 2 </span></p>
                    </div>
                    <div class="col-sm-5 mt-3 redux-margin">
                      <p class="small-font"> ou R$ ${item.total_value} à vista </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `
      )
    });
  }

  function generateMobile( response ) {
    for(let j = 0; j < response.length; j++) {
      $(
        `
          <div class="carousel-item">
            <a href="products/${response[j].path}.html">
              <div class="container padding-slider">
                <img src="${response[j].avatar}" class="img-style mx-center" />
                <div class="mt-5">
                  <p class="bold-text redux-margin"> ${response[j].name} </p>
                </div>

                <div class="border-description">
                  <div class="box">
                    <span class="rdescription-body"> ${response[j].short_description} </span>
                  </div>
                  <div class="box float-right">
                    <span class="description-body pb-5 quantity"> ${response[j].quantity} ML </span>
                  </div>
                </div>

                <div class="border-description">
                  <div class="box pt-2">
                    <span class="max-font"> 10x</span> 
                    <span class="vertical-font"> R$ </span>
                    <span class="max-font"> ${response[j].without_fees.split(',')[0]} </span>
                    <span class="vertical-font">, ${response[j].without_fees.split(',')[1]}</span>
                    <p class="redux-margin-top small-font ml-1"> sem Juros <span class="min-font"> 1 </span> </p>
                  </div>
                  <div class="box float-right">
                    <img src="../_images/visa_logo.png" class="brand-logo mt-4">
                    <img src="../_images/master_logo.png" class="brand-logo mt-4">
                  </div>
                  <div>
                    <div class="box">
                      <span class="max-font"> 15x</span> 
                      <span class="vertical-font"> R$ </span>
                      <span class="max-font"> ${response[j].with_fees.split(',')[0]} </span>
                      <span class="vertical-font redux-right">,${response[j].with_fees.split(',')[1]} </span>
                      <p class="redux-margin-top small-font ml-1"> com Juros <span class="min-font"> 2 </span></p>
                    </div>
                    <div class="box float-right">
                      <p class="small-font mobile-font mt-2"> ou R$ ${response[j].total_value} à vista </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `
      ).appendTo('#carousel-panel');
    }
    $('.carousel-item').first().addClass('active');
    $('#carouselExample').carousel();
  }

  $("#prev").click(function() {
    $('#carouselExample').carousel('prev')
  });

  $("#next").click(function() {
    $('#carouselExample').carousel('next')
  });
});