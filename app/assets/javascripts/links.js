$(document).ready(function(){
  fetchAllLinks();
});

function fetchAllLinks(){
  $.ajax({
    url: '/api/v1/links',
    method: 'GET'
}).then((data) => printLinks(data, findHotUrls()))
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
    $(`#${link.id}`).addClass("alert alert-warning");
  } else {
    var markRead = `
    <div>
      <button class="mark-as-read hot-read btn btn-default" data-id="${link.id}" data-url="${link.url}" >Mark as Read</button>
      <form action="/links/${link.id}/edit" method="GET">
        <input type="submit" value="Edit" class="btn btn-default"/>
      </form>
    </div>
    `;
  $(`#${link.id}`).append(markRead);
  $(`#${link.id}`).addClass("alert alert-success");
  }
});
}

function findHotUrls(){
  $.ajax({
    // url: 'https://frozen-mesa-43893.herokuapp.com/api/v1/links'
    url: 'http://localhost:3001/api/v1/links',
    method: 'GET'
  }).then((data) => addHotLinks(data))
    .fail(displayError);
}

function addHotLinks(data){
  var onlyUrls = getUrls(data);
  // debugger
  $('.link').each(function(index, link){

    var allRegUrls = $(link).find('a').text()
    if 
    console.log(regUrls)

  })
}

function getUrls(data) {
  var urls = []
  data.forEach(function (link){
    urls.push(link.url)
  });
  return urls
}



function displayError(error){
  console.error(error);
}
