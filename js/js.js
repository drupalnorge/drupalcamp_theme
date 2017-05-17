;(function($) {
  'use strict';
  Drupal.behaviors.drupalCampTheme = {
    attach: function(context) {
      $(context).find('.fancybox').fancybox();
    }
  };
})(jQuery);
