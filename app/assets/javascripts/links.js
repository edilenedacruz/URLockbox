$(document).ready(function(){
  fetchAllLinks();
});

function fetchAllLinks(){
  $.ajax({
    url: '/api/v1/links',
    method: 'GET'
}).then(printLinks)
  .fail(displayError);
}

function printLinks(data) {
  data.forEach(function (link) {
  let linkRow = `
  <div class="card card-default">
    <div class="col-md-3">
      <div class="link" id="${link.id}">
        <p class="title text-center">${link.title}</p><br>
        <p><a href="${link.url}" target="_blank" class="url-link">${link.url}</a></p><br>
        <p class="read-status">Read: ${link.read}</p></br>
      </div>
    </div>
  </div>`;
  $('#links-list .row').prepend(linkRow);
  if (link.read === true){
      let markUnread = `
        <div>
          <button class="mark-as-unread btn btn-default" data-id="${link.id}">Mark as Unread</button>
          <form action="/links/${link.id}/edit" method="GET">
            <input type="submit" value="Edit" class="btn btn-default" />
          </form>
        </div>
        `;
    $(`#${link.id}`).append(markUnread);
    $(`#${link.id}`).addClass("alert alert-danger");
  } else {
    var markRead = `
    <div>
      <button class="mark-as-read btn btn-default" data-id="${link.id}" >Mark as Read</button>
      <form action="/links/${link.id}/edit" method="GET">
        <input type="submit" value="Edit" class="btn btn-default"/>
      </form>
    </div>
    `;
  $(`#${link.id}`).append(markRead);
  $(`#${link.id}`).addClass("alert alert-info");
  }
});
}
function displayError(error){
  console.error(error);
}
