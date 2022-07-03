(function ($, ssCore, ssEx) {

    window.themeSettings = {
        themeBreakpoint: 1024,
        isAccordionMenu: true
    }

    $(document).ready(function () {
        var responsiveAppSettings = {
            isEnabled: false,
            themeBreakpoint: window.themeSettings.themeBreakpoint
        };

        function setLinkAreaHeight() {

            // one column page

            $(".center-1 .item-box").on("mouseenter", function () {
                var availableHeight = $(this).find('.details').height() - $(this).find('.add-info').height();

                if ($(this).parent().hasClass('carousel-item')) {
                    if (ssCore.getViewPort().width > 1280) {
                        availableHeight = availableHeight - 23;
                    }
                    else {
                        availableHeight = availableHeight - 15;
                    }
                }
                else {
                    if (ssCore.getViewPort().width > 1280) {
                        availableHeight = availableHeight - 20;
                    }
                    else {
                        availableHeight = availableHeight - 15;
                    }
                }
                $(this).find('.description a').css('height', availableHeight);
            });

            // two columns page

            $(".center-2 .item-box").on("mouseenter", function () {
                var availableHeight = $(this).find('.details').height() - $(this).find('.add-info').height();

                if ($(this).parent().hasClass('carousel-item')) {
                    if (ssCore.getViewPort().width > 1280) {
                        availableHeight = availableHeight - 17;
                    }
                    else {
                        availableHeight = availableHeight - 23;
                    }
                }
                else {
                    if (ssCore.getViewPort().width > 1280) {
                        availableHeight = availableHeight - 17;
                    }
                    else {
                        availableHeight = availableHeight - 20;
                    }
                }
                $(this).find('.description a').css('height', availableHeight);
            });
        }
        setLinkAreaHeight();

        ssEx.initResponsiveTheme(responsiveAppSettings);
    });

})(jQuery, sevenSpikesCore, sevenSpikesEx);