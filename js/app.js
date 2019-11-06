$(document).ready(() => {

  // Home Pictures

    // .med-pic & .small-pic located in Media Queries section
  $('.right-side').css({cursor: 'crosshair'}).on('click', function() {
    $('.dropdown-content').toggle('');
  });

  // Home text

    // .mainConnect & .mainFooterConnect located in Media Queries section

  $('.eternal').delay(400).slideDown('slow');

  // Dropdown Menu

  $('.dropbtn').delay(400).slideDown('slow');

  $('.dropbtn').on('mouseover', function() {
    $('.dropdown-content').slideDown('');
  });

  $('.dropdown').on('mouseleave', function() {
    $('.dropdown-content').slideUp('fast');
  })

  // About page

    // .galleryContainer located in Media Query section
  $('.briefIntro').animate({marginLeft: '60px'});
  $('.aboutShalik').animate({marginLeft: '60px'});
  $('.shalikPic').animate({marginLeft: '60px'});
});

  // Media Queries

  if(window.matchMedia('(max-width: 786px)').matches){
    $('.med-pic').hide();
    $('.mainConnect').hide();
  } else {
    $('.med-pic').delay(200).slideDown('slow');
    $('.mainConnect').delay(300).slideDown('slow');

  };

  if(window.matchMedia('(max-width: 500px)').matches){
    $('.med-pic').fadeIn('');
    $('.small-pic').hide();
    $('.galleryContainer').addClass('galleryContainerMobile');
    $('.galleryContainer').removeClass('.galleryContainer');
    $('.mainFooterConnect').show().css({animation: 'none',});
    $('.mainHeader').show();
  } else {
    $('.small-pic').delay(200).slideDown('slow');
    $('.galleryContainer').animate({right: '0', width: '46vw'});
    $('.mainFooterConnect').delay(300).slideDown('slow');
    $('.mainHeader').delay(400).slideDown('slow');
  }
