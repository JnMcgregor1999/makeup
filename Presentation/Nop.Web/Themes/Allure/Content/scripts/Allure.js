﻿(function ($, ssEx) {

    window.themeSettings = {
        themeBreakpoint: 1024,
        isAccordionMenu: false
    }

    $(document).ready(function () {
        var responsiveAppSettings = {
            isEnabled: true,
            themeBreakpoint: window.themeSettings.themeBreakpoint,
            isSearchBoxDetachable: true,
            isHeaderLinksWrapperDetachable: true,
            doesDesktopHeaderMenuStick: true,
            doesScrollAfterFiltration: true,
            doesSublistHasIndent: true,
            displayGoToTop: true,
            hasStickyNav: true,
            selectors: {
                menuTitle: ".menu-title",
                headerMenu: ".header-menu",
                closeMenu: ".close-menu",
                //movedElements: ".admin-header-links, .header-links-wrapper, .header-logo, .search-box, .responsive-nav-wrapper, .slider-wrapper, .master-wrapper-content, .news-list-homepage, .topic-html-content, .footer",
                sublist: ".header-menu .sublist",
                overlayOffCanvas: ".overlayOffCanvas",
                withSubcategories: ".with-subcategories",
                filtersContainer: ".nopAjaxFilters7Spikes",
                filtersOpener: ".filters-button span",
                searchBoxOpener: ".search-wrap > span",
                searchBox: ".search-box.store-search-box",
                searchBoxBefore: ".desktop-cart",
                navWrapper: ".responsive-nav-wrapper",
                navWrapperParent: ".responsive-nav-wrapper-parent",
                headerLinksOpener: "#header-links-opener",
                headerLinksWrapper: ".header-links-wrapper",
                shoppingCartLink: ".shopping-cart-link",
                overlayEffectDelay: 300
            },
            shouldAddClassForMobile: true
        }

        ssEx.initResponsiveTheme(responsiveAppSettings);
    });
})(jQuery, sevenSpikesEx);