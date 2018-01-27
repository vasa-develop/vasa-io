$( '.home-social a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'SocialButton', 'click', this.getAttribute('href') );
});

$( '.social-mobile a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'SocialButton', 'tap', this.getAttribute('href') );
});

$( '.footer-social a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'SocialButton', 'click', this.getAttribute('href') );
});

$( '.home-ratings a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'RatingButton', 'click', this.getAttribute('href') );
});

$( '.ratings-mobile a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'RatingButton', 'tap', this.getAttribute('href') );
});

$( '.go-regabbp').on( 'click', function(e) {
   ga( 'send', 'event', 'BBP', 'transit', this.getAttribute('data-text') );
});

$( '#home-wp' ).on( 'click', function(e) {
   ga( 'send', 'event', 'Document', 'download', this.getAttribute('data-text'), 200 );
});

$( '#whitepaper-section a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'Document', 'download', this.getAttribute('data-text'), 200 );
});

$( '#bottom_whitepaper a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'Document', 'download', this.getAttribute('data-text'), 201 );
});

$( '#products-section a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'Products', 'click', this.getAttribute('href') );
});

$( '#menu_button_crowdsale' ).on( 'click', function(e) {
   ga( 'send', 'event', 'MenuButton', 'click', 'Crowdsale' );
});

$( '.pricing-footer a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'PriceButton', 'click', this.getAttribute('data-target') );
});

$( '.team-item-social a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'SocialButton', 'click', this.getAttribute('href'), 102 );
});

$( '#agree-button a' ).on( 'click', function(e) {
   ga( 'send', 'event', 'AgreeButton', 'click', this.getAttribute('data-target') );
});

$( '#btn-play' ).on( 'click', function(e) {
   ga( 'send', 'event', 'Video', 'play', this.getAttribute('href') );
});
