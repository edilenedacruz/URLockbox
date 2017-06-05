$( document ).ready(function(){
  $("body").on("click", ".mark-as-unread", markAsUnread);
});

function markAsUnread(e) {
  e.preventDefault();
  var linkId = $(this).data('id');

  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: false },
  }).then(location.reload())
    .then(updateLinkStatus)
    .fail(displayFailure);
}

function updateLinkStatus(link) {
  $(`#${link.id} .read-status`).text("Read: false");
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
