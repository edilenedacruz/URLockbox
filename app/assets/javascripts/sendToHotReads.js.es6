$(document).ready(function(){
  $("body").on("click", ".hot-read", sendToHotReads);
});

function sendToHotReads(e) {
  e.preventDefault();

  var hot = { link: { url: $(this).data('url') } };

  $.ajax({
    url: 'https://hot-reads-g.herokuapp.com/api/v1/links',
    // url: 'http://localhost:3001/api/v1/links',
    method: 'POST',
    data: hot
  }).then(addHotLinks)
    .fail((error) => {
    console.log(error);
  });
}
