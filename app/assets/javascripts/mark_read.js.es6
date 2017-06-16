$( document ).ready(function(){
  $("body").on("click", ".mark-as-read", markAsRead);
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

function updateLinkStatus(link) {
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
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
