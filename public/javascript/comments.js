const commentBtnHandler = async (event) => {
    var commentBtnId = $(event.target)[0].id.split("-");
    var post_id = commentBtnId[commentBtnId.length-1];
    var commentUl = $("#comments_"+post_id);

    if ($(event.target)[0].innerHTML === "Show Comments") {
        $(event.target)[0].innerHTML = "Hide Comments";
        commentUl.css("display", "block");
    } else {
        $(event.target)[0].innerHTML = "Show Comments";
        commentUl.css("display", "none");
    }
};

$(".comment-btn").on("click", commentBtnHandler);

const commentSubmitHandler = async (event) => {
    event.preventDefault();
    var commentFormId = $(event.target)[0].id.split("-");
    var post_id = commentFormId[commentFormId.length-1];
    var content = $(event.target)[0][0].value;
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/api/posts/'+post_id);
      } else {
        alert('Failed to log in');
      }
    return;
};

$('.comment-form').submit(commentSubmitHandler);