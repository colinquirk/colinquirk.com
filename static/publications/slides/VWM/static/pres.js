observer = null;

function watchVisible() {
  if (observer) {
    observer.disconnect();
  }
  
  $(".remark-visible").each(function() {
    $(".remark-visible video").each(function() {
      if (this.paused) {
        this.play();
      }
    });
    
    observer = new MutationObserver(function(change) {
      watchVisible();
    });
    
    observer.observe(this, {attributes: true});
  });
  
  $(".remark-slide-container").each(function() {
    if(!$(this).hasClass("remark-visible")) {
      $(this).find("video").each(function() {
        this.pause();
        this.currentTime = 0;
      });
    }
  });
}

$(document).ready(watchVisible);

