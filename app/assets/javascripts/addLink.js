$(document).ready(function() {
  $('#new-link').on('click', "#create-link", (event) => saveLink());
});

function saveLink() {
  let linkData = {link: {url: $('#add-url').val(), title: $('#add-title').val() } }
  $.ajax({
    url: '/links',
    method: 'POST',
    data: linkData
  }).then((data) => postLink(data))
  .fail((error)=>{
    console.log(error);
  });
}

function postLink(data) {
  $('#links-list .row').prepend(data);
  $('#url').val('');
  $('#title').val('');
}
