$( document ).ready(function(){
  $("body").on("click", ".mark-as-read", markAsRead);
  $("body").on("click", ".mark-as-unread", markAsUnread);
});

function markAsRead(e) {
  e.preventDefault();
  var linkId = $(this).data('id');

  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(updateLinkStatus)
    .fail(displayFailure);
}

function markAsUnread(e) {
  e.preventDefault();
  var linkId = $(this).data('id');

  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: false },
  }).then(updateLinkStatus)
    .fail(displayFailure);
}

function updateLinkStatus(link) {
  if (link.read === true) {
  $(`#${link.id} .read-status`).text("Read: true")
  $(`#${link.id}`).removeClass("alert alert-success");
  $(`#${link.id}`).addClass("alert alert-warning");
  $(`#${link.id} .button`).remove();
  $(`#${link.id}`).append(
   `<div class="button">
      <button class="mark-as-unread btn btn-default" data-id="${link.id}">Mark as Unread</button>
      <form action="/links/${link.id}/edit" method="GET">
        <input type="submit" value="Edit" class="btn btn-default" />
      </form>
    </div>`
  );
} else {
  $(`#${link.id} .read-status`).text("Read: false");
  $(`#${link.id}`).removeClass("alert alert-warning");
  $(`#${link.id}`).addClass("alert alert-success");
  $(`#${link.id} .button`).remove();
  $(`#${link.id}`).append(
    `<div class="button">
      <button class="mark-as-read hot-read btn btn-default" data-id="${link.id}" data-url="${link.url}" >Mark as Read</button>
      <form action="/links/${link.id}/edit" method="GET">
        <input type="submit" value="Edit" class="btn btn-default"/>
      </form>
    </div>`
  );
}
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
