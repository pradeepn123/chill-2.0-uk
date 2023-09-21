function showMoreCards(){
    var $this =$(this),totalPages = parseInt($('[data-total-pages]').val()),currentPage = parseInt($('[data-current-page]').val());
    $this.attr('disabled', true);
    $('[loader]').css('display', 'none');
    currentPage = currentPage+1;
    var nextUrl = $('[data-next-url]').val().replace(/page=[0-9]+/,'page='+currentPage);
    $('[data-current-page]').val(currentPage);
    $.ajax({
      url: nextUrl,
      type: 'GET',
      dataType: 'html',
      beforeSend: function() {
        $('[load-more-text]').css('display', 'none');
        $('[loader]').css('display', 'inline-block');
      },
      success: function(responseHTML){
        $('.articles-on-page').append($(responseHTML).find('.articles-on-page').html());
      },
      complete: function() {
        if(currentPage <= totalPages) {
            $this.attr('disabled', false); 
            $('[load-more-text]').css('display', 'inline');
            $('[loader]').css('display', 'none');
         }
         if(currentPage == totalPages){
            $('[load-more-text]').css('display', 'none');
         }
      }
    })
  }