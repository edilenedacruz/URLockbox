$(document).ready(function(){
  filterUrl();
  onlyRead();
  onlyUnread();
});


function filterUrl() {
  $('#filter').keyup( function(event) {
    $('.link').each(function (index, link){
      var cardTitle = $(link).find('.title').text().toLowerCase();
      var cardUrl = $(link).find('.url-link').text().toLowerCase();
      var searchValue = $('#filter').val().toLowerCase();

      if (cardTitle.includes(searchValue) || cardUrl.includes(searchValue)) {
      debugger
      }
    });
  });
}

function onlyRead() {
  $('#only-read').on('click', function(event){
    $('.link').each(function (index, link){
      var cardValue = $(link).find('.read-status').text();
        if (cardValue.includes("Read: true")) {
          $(link).show();
        } else {
          $(link).hide();
        }
    });
  });
}

function onlyUnread() {
  $('#only-unread').on('click', function(event){
    $('.link').each(function (index, link){
      var cardValue = $(link).find('.read-status').text();
      if (cardValue == "Read: false") {
        $(link).show();
      } else {
        $(link).hide();
      }
    });
  });
}
