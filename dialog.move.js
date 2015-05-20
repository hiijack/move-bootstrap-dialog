$(document).on('mousedown', '.modal-header', function(e) {
  var $this = $(this);
  var $dialog = $this.parents('.modal-dialog');
  var offset = $dialog.offset();
  var modal = $this.parents('.modal');
  
  var orix = e.clientX;
  var oriy = e.clientY;
  
  modal.mousemove(function(e) {
    $dialog.css({
      'position': 'absolute',
      'top': offset.top + e.clientY - oriy,
      'left': offset.left + e.clientX - orix
    });
  });
  
  modal.mouseup(function() {
    $(this).off('mousemove');
  });
});
