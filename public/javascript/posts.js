const getPostId = (event) => {
  var btnId = $(event.target)[0].id.split("-");
  return btnId[btnId.length-1];
};

const updatePostHandler = async (event) => {
  var post_id = getPostId(event);
  var title = $("#post-title-"+post_id)[0].value;
  var content = $("#post-content-"+post_id)[0].value;
  const response = await fetch('/api/posts/'+post_id, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed on server.');
    }
};

$(".update-post-btn").on("click", updatePostHandler);

const deletePostHandler = async (event) => {
    var post_id = getPostId(event);
    const response = await fetch('/api/posts/'+post_id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed on server.');
    }
};

$(".delete-post-btn").on("click", deletePostHandler);

const newPostHandler = async (event) => {
  var title = $("#post-title-")[0].value;
  var content = $("#post-content-")[0].value;
  const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed on server.');
    }
};

$(".new-post-btn").on("click", newPostHandler);