var Blog = function() {
};
Blog.prototype.addPost = function(options) {
  $.ajax({
    url: '/post',
    type: 'POST',
    dataType: 'json',
    data: {text: options.text},
    success: options.success
  });
};

var PostView = function(options) {
  this.blog = options.blog;

  var add = $.proxy(this.add, this);
  $('#new-post form').submit(add);
};

PostView.prototype.add = function(e) {
  e.preventDefault();

  this.blog.addPost({
    text: $('#new-post').find('input[type="text"]').val(),
    success: function(data) {
      $('#posts').append('<li>' + data.text + '</li>');
      $('#new-post').find('input[type="text"]').val('');
    }
  });
};

$(document).ready(function() {
  var blog = new Blog();

  new PostView({blog: blog});
});

