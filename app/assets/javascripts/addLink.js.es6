$(document).ready(function() {
  saveLink();
});

function saveLink() {
  $('#create-link').on('click', (event) => {
    event.preventDefault();
    const url = $('#add-url').val()
    const title = $('#add-title').val()
    $.ajax({
      url: '/links',
      method: 'POST',
      data: {link: {url: url, title: title} }
    }).then((link) => {
    if (link.url){
      postLink(link);
    } else {
    printError(link);
    }
  });
});
}

function postLink(link) {
  $('#links-list .row').prepend(
    `<div class="card card-default">
      <div class="col-md-3">
        <div class="link alert alert-success" id="${link.id}">
          <p class="feeling-hot text-center"></p></br>
          <p class="title text-center">${link.title}</p><br>
          <p><a href="${link.url}" target="_blank" class="url-link">${link.url}</a></p><br>
          <p class="read-status">Read: ${link.read}</p></br>
          <div class="button">
            <button class="mark-as-read hot-read btn btn-default" data-id="${link.id}" data-url="${link.url}" >Mark as Read</button>
            <form action="/links/${link.id}/edit" method="GET">
            <input type="submit" value="Edit" class="btn btn-default"/>
            </form>
          </div>
        </div>
      </div>
    </div>`
  );
}

function printError(error){
  // debugger
    $('.errors').append(`<div class="alert alert-danger" role="alert">
        <h5>${error}</h5>
      </div>`).delay(3200).fadeOut(300);
  // error.forEach(function(error) {
  //   $('.errors').append(`<div class="alert alert-danger" role="alert">
  //       <h5>${error}</h5>
  //     </div>`)
  // })
}
