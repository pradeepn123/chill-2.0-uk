function updateContainer() {
  if ($(window).width() >= 1200 ){
    $('.image-wrapper').hover(
      function() {
        $('.image-wrapper').not(this).toggleClass('squeeze');
        $(this).toggleClass('stretch');
      }, 
      function() {
        $('.image-wrapper').not(this).toggleClass('squeeze');
        $(this).toggleClass('stretch');
      }
    );
  }
}

function scrollAbout(){
  if ($(window).width() >= 1200 ){
    //our story value scoll
    const stickyContainer = document.querySelector('.faq-index__sticky-container');
    if(stickyContainer){
        const currentElement =  document.querySelector('.chill-story-value-block-section, .featured_block_list');
        const stickyContainerRect = stickyContainer.getBoundingClientRect();
        const currentElementRect = currentElement.getBoundingClientRect();
        stickyContainer.style.height = currentElementRect.bottom - stickyContainerRect.top + 'px';
    }
  }
}

//vimeo video player on hover
var videoBlog = $(".chill-videos-item");
[].forEach.call(videoBlog, function (item,index) {
  item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
  item.addEventListener('mouseout', hideVideo.bind(item,index), false);    
});

function hoverVideo(index, e) {  
  this.querySelector('.video_image_container').style.display = "none";
  this.querySelector('.play_overlay').style.display = "block";
  var num = index+1;
  var iframes = $('#player-'+num)[0];
  var player = $f(iframes); 
  player.api('play');  
}

function hideVideo(index, e) {    
  this.querySelector('.video_image_container').style.display = "block";
  this.querySelector('.play_overlay').style.display = "none";
  var num = index+1;
  var iframes = $('#player-'+num)[0];
  var player = $f(iframes);     
  player.api('pause');
}

$(document).ready(function () {
    AOS.init({
        duration: 1200,
    })
    document.addEventListener("TikShop:cart:updated", function(e) {
        document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false }))
    })
    
    // $('.vape_product_wrapper .product_images').slick({
    //     slidesToShow: 2.5,
    //     slidesToScroll: 1,
    //     draggable: true,
    //     arrows: false,
    //     infinite: false
    // })

    $('.flavours_container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        draggable:true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-flavour-prev" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M11.913,23.827l-1.564-1.6,9.2-9.2H0V10.8H19.545l-9.2-9.2L11.913,0,23.827,11.913Z" transform="translate(23.827 23.827) rotate(180)"/></svg></button>',
        nextArrow: '<button type="button" class="slick-flavour-next" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M19.913,31.827l-1.564-1.6,9.2-9.2H8V18.8H27.545l-9.2-9.2L19.913,8,31.827,19.913Z" transform="translate(-8 -8)"/></svg></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('#gallery, #collab_with_us_gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
        ]
    });

    $('.readmore').click(function (event) {
        event.preventDefault();
        var descriptionFull = document.querySelector('.product-description-full');
        descriptionFull.style.display = 'block';
        var descriptionShort = document.querySelector('.product-description-short');
        descriptionShort.style.display = 'none';
    });
    $('.readless').click(function (event) {
        event.preventDefault();
        var descriptionFull = document.querySelector('.product-description-full');
        descriptionFull.style.display = 'none';
        var descriptionShort = document.querySelector('.product-description-short');
        descriptionShort.style.display = 'block';
    });
    
    let items = document.querySelectorAll('.menu-mega-nav li');

    items.forEach( item => item.addEventListener('mouseenter', handleHover))

    document.addEventListener("TikShop:cart:updated", function(e) {
        document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false }))
    })

    function handleHover() {
        const items = this.parentElement.querySelectorAll(".menu-item")
        items.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
    }
    $('.custom_sub_button').click(function(){
        $(this).closest('.block-inner').find('.block-inner-card-info').addClass('add_info_sub');
    });
    $('.close_card_info').click(function(){
        $(this).closest('.block-inner').find('.block-inner-card-info').removeClass('add_info_sub');
    });
    $('#imageCarouselContainer .image_carousel_div').slick({
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3.8,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
    $('.featured_blocks_container').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        draggable:true,
        prevArrow: '<button type="button" class="slick-header-prev" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M11.913,23.827l-1.564-1.6,9.2-9.2H0V10.8H19.545l-9.2-9.2L11.913,0,23.827,11.913Z" transform="translate(23.827 23.827) rotate(180)"/></svg></button>',
        nextArrow: '<button type="button" class="slick-header-next" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M19.913,31.827l-1.564-1.6,9.2-9.2H8V18.8H27.545l-9.2-9.2L19.913,8,31.827,19.913Z" transform="translate(-8 -8)"/></svg></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: 'unslick'
            }
        ]
    })
    if(window.screen.width < 1200){
        var $carousel = $('.flavour_block_container');
        $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
            autoplay: false,
            autoplaySpeed: 4800,
            adaptiveHeight: false,
            focusOnSelect: true,
            customPaging: function customPaging(slider, i) {
                return "<div class=\"custom-dot-wrapper" + "\" type=\"button\" data-role=\"none\" role=\"button\" tabindex=\"0\">" + "</div>";
            }
    
        })
        let customImages = document.querySelectorAll('.custom-dot-common');
        let custom_dots = document.querySelectorAll('.flavour_block_container .custom-dot-wrapper');
    
        for(let i=0; i<customImages.length; i++) {
            for(let j=0; j<custom_dots.length; j++) {
                if(i==j) {
                    const customDotWapper = custom_dots[j]
                    customDotWapper.innerHTML = `<div class=\"custom-dot" + "\" type=\"button\" data-role=\"none\" role=\"button\" tabindex=\"0\"></div>`
    
                    const flavourTitle = document.createElement("div");
                    flavourTitle.classList.add('custom_dot_title')
                    console.log(customImages[i].dataset.color)
                    flavourTitle.innerHTML = customImages[i].dataset.flavourTitle
                    customDotWapper.appendChild(flavourTitle)
    
                    const customDot = customDotWapper.querySelector(".custom-dot")
                    customDot.classList.add(`custom-color-${customImages[i].dataset.color.replace("#", "")}`)
                    customDot.appendChild(customImages[i]);
                }
            }
        }
    }
    if(window.screen.width < 1200){
        $('.stress-effect-block-list .fixed-layout').slick({
            draggable:true,    
            arrows:false,    
            autoplay:true,
            autoplaySpeed:2500,     
            slidesToShow:1,     
            slidesToScroll:1,   
            dots:true
        });
        $('.slider_image_wrapper_mobile').slick({
            draggable:true,    
            arrows:false,  
            autoplay:false,
            autoplaySpeed:2500,     
            slidesToShow:1,     
            slidesToScroll:1,   
            dots:true,
            infinite: false
        })
        var tabContentParentProduct = $('.product_ingredients_sec .content-section .content.active')
        for(i = 0; i< tabContentParentProduct.length; i++){
            var tabContentList = tabContentParentProduct[i].querySelector('.tab-content-list ');
            $(tabContentList).slick({
                draggable:true,    
                arrows:false,    
                autoplay:true,
                autoplaySpeed:3500,     
                slidesToShow:1,     
                slidesToScroll:1,   
                dots:true
            })
        }

        var tabContentParent = $('.section-home-ingredients .content-section .content.active')
        for(i = 0; i< tabContentParent.length; i++){
            var tabContentList = tabContentParent[i].querySelector('.tab-content-list');
            $(tabContentList).slick({
                draggable:true,    
                arrows:false,    
                autoplay:true,
                autoplaySpeed:3500,     
                slidesToShow:1,     
                slidesToScroll:1,   
                dots:true
            })
        }
    }
    
    //sub collection image
    $('.subcollection_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                slidesToShow: 7,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
            }
        ]
    });
    $(".subcollection_slider").show();
    $('.navigation__item .country_selector').click(() => {
        $('.navigation__item .country_selector').toggleClass('active');
        $('.navigation__item .country_selector #dropdown_linebreak').toggleClass('show');
    })

    $('.testimonial_list__inner').slick({
        infinite: false,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-product-prev" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M11.913,23.827l-1.564-1.6,9.2-9.2H0V10.8H19.545l-9.2-9.2L11.913,0,23.827,11.913Z" transform="translate(23.827 23.827) rotate(180)"/></svg></button>',
        nextArrow: '<button type="button" class="slick-product-next" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" width="23.827" height="23.827" viewBox="0 0 23.827 23.827"><path id="arrow_forward_FILL0_wght400_GRAD0_opsz48" d="M19.913,31.827l-1.564-1.6,9.2-9.2H8V18.8H27.545l-9.2-9.2L19.913,8,31.827,19.913Z" transform="translate(-8 -8)"/></svg></button>',
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            arrows: false,
            }
        },
        {
            breakpoint: 1112,
            settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            arrows: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            arrows: false,
            }
        },
        {
            breakpoint: 625,
            settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            arrows: false,
            }        
        }
    
        ]
    });
    updateContainer();
    scrollAbout();
    $(window).resize(function() {
        updateContainer();
        scrollAbout();
    });
    // const animation_items = [...document.getElementsByClassName('list__item')];
    // const containerElem = document.getElementById('containerElem');
    // const leftSideOfContainer = containerElem.getBoundingClientRect().left;
    // const listElem = document.getElementById('list');
    // let currentLeftValue = 0;
            
    // window.setInterval(animationLoop, 10);    
    // function animationLoop() {
    //     const firstListItem = listElem.querySelector('.list__item:first-child');      
    //     let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;
    //     if(rightSideOfFirstItem == leftSideOfContainer){
    //     currentLeftValue = -1;
    //     listElem.appendChild(firstListItem);
    //     }      
    //     listElem.style.marginLeft = `${currentLeftValue}px`;
    //     currentLeftValue--;
    // }
    var figure2 = $(".chill-videos-item");
    var vid = figure2.find(".play-video");
    var videoNo = vid.length;

    for (let i = 1; i <= videoNo; i++){
        let iframees = document.querySelector('#player-'+i);
        let playeer1 = new Vimeo.Player(iframees);
        playeer1.getDuration().then(function(duration) {
            var ids =  document.querySelector('#player-'+i);
            ids.parentElement.parentElement.querySelector('.video-length').innerHTML  = duration.toFixed(0)+' sec';
        });
    }  
  
//   $('.add_to_cart_btn').click(function(){    
//     addItemToCart( $(this).attr("data-product-id") , 1)
//   });




});

(function(){
  var d = document,
      tabs = d.querySelector('.tabs, .product-tabs'),
      tab = d.querySelectorAll('li'),
      contents = d.querySelectorAll('.content');
      if (!tabs) {
        return false;
      }
      tabs.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName === 'LI') {
        // change tabs
        for (var i = 0; i < tab.length; i++) {
          tab[i].classList.remove('active');
        }
        e.target.classList.toggle('active');
        // change content
        for (i = 0; i < contents.length; i++) {
          contents[i].classList.remove('active');
        }
        
        var tabId = '#' + e.target.dataset.tabId;
        const contentTab = d.querySelector(tabId)
        contentTab.classList.toggle('active');

        if(window.screen.width < 1200){
            const tabContentList = contentTab.querySelector(".tab-content-list")
            if (tabContentList && tabContentList.classList.contains("slick-initialized")) {
                $(tabContentList).slick('unslick')
            }
            if (tabContentList) {
                $(tabContentList).slick({
                    draggable: true,    
                    arrows: false,    
                    autoplay: true,
                    autoplaySpeed: 3500,     
                    slidesToShow: 1,     
                    slidesToScroll: 1,   
                    dots: true
                })
            }
        }
    } 
  });
})();


function customFeatureProductSubcriptionEvents (){
    $('.custom_sub_button').click(function() {
        $(this).closest('.block-inner').find('.block-inner-card-info').addClass('add_info_sub');
      });
      featureProductSubscriptionUtil.EventHandler();

      $('.close_card_info').click(function(){
        $(this).closest('.block-inner').find('.block-inner-card-info').removeClass('add_info_sub');
      });
      const sortDropdownHeading = document.getElementById('sort-dropdown-heading')

    if (sortDropdownHeading) {
        sortDropdownHeading.addEventListener('click',  function() {
            if (document.querySelector('.utility-bar .link-dropdown__button').hasAttribute('disabled')) {
                document.querySelector('.utility-bar .link-dropdown__button').removeAttribute('disabled');
                document.addEventListener('click', handleDocumentClick);
            } else {
                document.querySelector('.utility-bar .link-dropdown__button').setAttribute('disabled', 'disabled');
                document.removeEventListener('click', handleDocumentClick);
            }

            document.querySelector('.utility-bar .link-dropdown__button-icon').toggleAttribute('active');
        })
    }

    var loadMoreFilters = document.querySelectorAll('.loadmore');
    if (loadMoreFilters.length) {
        loadMoreFilters.forEach(el => el.addEventListener('click', function() {
            var forloopIndex = this.dataset.forloop;
            document.querySelectorAll('.filter-group--' + forloopIndex + ' .filter_full').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.filter-group--' + forloopIndex + ' .filter_limited').forEach(el => el.style.display = 'none');
        }))
    }
}

function handleDocumentClick(evt) {
    const utilityBar = evt.target.closest(".utility-bar__right")
    if (evt.target.closest("#sort-dropdown-heading") || (utilityBar && utilityBar.querySelector(".link-dropdown__button-text"))) {
        return false
    }
    document.querySelector('.utility-bar .link-dropdown__button-icon').toggleAttribute('active');
    document.querySelector('.utility-bar .link-dropdown__button').setAttribute('disabled', true);
    document.removeEventListener('click', handleDocumentClick)
}


const featureProductSubscriptionUtil = (function () {
    // Reference all your elements here
    const elUtil = {
        variantDropDownSelector: '[feature-productvaraintselector]',
        productDataInfo: '[data-productInfo]',
        subscriptionDataInfo: '[data-productSubscriptionData]',
        form: 'form.feature-product-purchase-form',
        oneTimeRadioSelector: '[product-oneTime-selection]',
        subscriptionRadioSelector: '[product-subscription-selection]',
        originalProductIdInputEl: '[original-productId-input]',
        subscriptionProductInputEl: '[subscription-varaintId-input]',
        subscriptionFrequencyInputEl: '[subscription-frequency-input]',
        subscriptionUnitInputEl: '[subscription-unit-input]',
        subscriptionIntervalSelector: '[subscription-interval-selectors-wrap]',
        intervalFrequencySelector:
        '[interval-frequency-selector]',
        onetimepriceEl: '[onetime-price]',
        subscriptionPriceEl: '[subscription-price]',
        buttonAddtocart: '[feature-addto-cart]',
        buttonDirectAddToCart: '[direct-addToCart-btn]',
        productInfoWrapper: '[product-main-block]',
        featureProductPopup: '[featureProduct-subscription-popup]'
    };

    const classUtil = {
        activeSubRadio: 'sub-radio-active',
        activeButtonPreloader: 'show--preloader',
        activeSubPopup: 'add_info_sub'

    };

    // Common helper functions required

    const _helperFunc = {
        getVaraintData: (productData) => {
            let { getProductObj, getSelectedValue } = productData;
            let filteredObj = getProductObj.variants.filter(
                (item) => item.title == getSelectedValue
            );
            return {
                id: filteredObj[0].id,
                varaintData: filteredObj[0],
            };
        },

        getDuplicateVaraintId: function (actualProductId, currentEl) {
            let productSubData = JSON.parse(
                currentEl
                    .closest(elUtil.form)
                    .querySelector(elUtil.subscriptionDataInfo).innerText
            );

            return productSubData.original_to_hidden_variant_map[
                actualProductId
            ];
        },

        getProductObj: (currentEl) => {
            return JSON.parse(
                currentEl
                    .closest(elUtil.form)
                    .querySelector(elUtil.productDataInfo).innerText
            );
        },

        dispatchOpenDrawerEvent: () => {
            document.documentElement.dispatchEvent(
                new CustomEvent('theme:cartchanged', {
                    bubbles: true,
                    cancelable: false,
                })
            );
            console.log('Open cart drawer triggered');
        },
        dispatchCloseDrawerEvent: () => {
            document.dispatchEvent(new CustomEvent('theme:cartDrawer:close'));
        },
        removeInputActiveClassfromEl: (currentInstance) => {
            currentInstance.querySelectorAll('label').forEach((_el) => {
                _el.classList.remove(classUtil.activeSubRadio);
            });
        },
    };

    // Handle View for input elements

    const ViewHandler = function () {
        const updateInputId = function (currInstance, id) {
            const originalNameIdElement = currInstance
                .closest(elUtil.form)
                .querySelector(elUtil.originalProductIdInputEl);
            const subscriptionNameIdElement = currInstance
                .closest(elUtil.form)
                .querySelector(elUtil.subscriptionProductInputEl);
            let { discount_variant_id } = _helperFunc.getDuplicateVaraintId(
                id,
                currInstance
            );
            // Default varaint id should be updated
            originalNameIdElement.setAttribute('value', id);
            if (subscriptionNameIdElement) {
                // Subscription varaint id should be updated
                subscriptionNameIdElement.setAttribute(
                    'value',
                    discount_variant_id
                );
            }
            // Update input based on varaint selector
            // if (refNameIdElement.getAttribute('subscription-varaintId-input')) {
            //     // Subscription varaint id should be updated
            //     let { discount_variant_id } = _helperFunc.getDuplicateVaraintId(
            //         id,
            //         currInstance
            //     );
            //     // Update duplicate variant input id
            //     refNameIdElement.setAttribute('value', discount_variant_id);
            // } else {
            //     // Default varaint id should be updated
            //     refNameIdElement.setAttribute('value', id);
            // }
        };

        const updateVariantPrice = (currentInstance, variantObj) =>{
            let getSubscriptionVaraintData =  _helperFunc.getDuplicateVaraintId(variantObj.id, currentInstance);
            let getActualVaraintPrice = variantObj.varaintData.price;
            let formatPrice = theme.Shopify.formatMoney(getActualVaraintPrice, theme.money_format)
            let currFormEl = currentInstance.closest(elUtil.form);


            // Update subscription price
            currFormEl.querySelector(elUtil.subscriptionPriceEl).innerHTML = getSubscriptionVaraintData.discount_variant_price

            // Update actual product price
            currFormEl.querySelector(elUtil.onetimepriceEl).innerHTML = formatPrice
            console.log({
                currentInstance,
                variantObj,
                getSubscriptionVaraintData
            })
        }

        const updateVariantRelatedData = (currentEl, variantObj) => {
            const { id } = variantObj;
            updateInputId(currentEl, id);
            // *** Update varaint price.. will be done later
            updateVariantPrice(currentEl,variantObj);
        };

        const updateAddToCartButton = (currentInstance) => {
            let formAddToCartBtn = currentInstance.querySelector(elUtil.buttonAddtocart);
            let getOtherAddToCartBtn = currentInstance.closest(elUtil.productInfoWrapper).querySelector(elUtil.buttonDirectAddToCart);
            const showPreloaderState = () => {
                formAddToCartBtn.classList.add(classUtil.activeButtonPreloader);
                
                if(getOtherAddToCartBtn){
                    getOtherAddToCartBtn.classList.add(classUtil.activeButtonPreloader);
                }

            }

            const hidePreloaderState = () => {
                formAddToCartBtn.classList.remove(classUtil.activeButtonPreloader);
                if(getOtherAddToCartBtn){
                    getOtherAddToCartBtn.classList.remove(classUtil.activeButtonPreloader);
                }
            }


            return {
                showPreloaderState,
                hidePreloaderState
            }

        }

        const hideSubscriptionPopup = (currentInstance) => {
            const subPopup = currentInstance.closest(elUtil.productInfoWrapper).querySelector(elUtil.featureProductPopup);
            subPopup.classList.remove(classUtil.activeSubPopup);
        }
        return {
            updateVariantRelatedData,
            updateAddToCartButton,
            hideSubscriptionPopup
        };
    };

    const EventHandler = function () {
        const featureProductVariantSelectorEl = document.querySelectorAll(
            elUtil.variantDropDownSelector
        );

        const featureProductRadioOneTimeSubEl = document.querySelectorAll(
            elUtil.oneTimeRadioSelector
        );
        const featureProductRadioSubscriptionEl = document.querySelectorAll(
            elUtil.subscriptionRadioSelector
        );

        const featureProductFormEl = document.querySelectorAll(elUtil.form);

        const intervalFrequencySelectorEl = document.querySelectorAll(elUtil.intervalFrequencySelector);

        if (featureProductFormEl) {
            featureProductFormEl.forEach((_formEl) => {
                _formEl.addEventListener('submit', function (e) {
                    e.preventDefault();
                    let serializeFormData = new URLSearchParams(
                        new FormData(this)
                    );
                    try {
                        // Add preloader to button
                        ViewHandler().updateAddToCartButton(_formEl).showPreloaderState();

                        // Make fetch reques to add product to cart
                        fetch(window.Shopify.routes.root + 'cart/add.js', {
                            method: 'POST',
                            body: serializeFormData,
                        })
                            .then((response) => {
                                if (!response.ok) {

                                    ViewHandler().updateAddToCartButton(_formEl).hidePreloaderState();

                                    throw new Error(
                                        `HTTP error! Status: ${response.status}`
                                    );

                                }

                                return response.json();
                            })
                            .then((data) => {
                                console.log(data);
                                // On successfully adding product to cart
                                // Fire event to open drawer
                                _helperFunc.dispatchOpenDrawerEvent();
                                // Hide Preloader part
                                ViewHandler().updateAddToCartButton(_formEl).hidePreloaderState();
                                ViewHandler().hideSubscriptionPopup(_formEl);
                            })
                            .catch((error) => {
                                console.log(error);
                                console.log('Something went wrong');
                            });
                    } catch (err) {
                        console.log(err);
                    }
                });
            });
        }

        // Variant Dropdown selector change event handler
        if (featureProductVariantSelectorEl) {
            featureProductVariantSelectorEl.forEach((_el) => {
                _el.addEventListener('change', function (e) {
                    let getSelectedValue = this.value;
                    let getProductObj = _helperFunc.getProductObj(this);
                    let getVaraintData = _helperFunc.getVaraintData({
                        getProductObj,
                        getSelectedValue,
                    });

                    ViewHandler().updateVariantRelatedData(
                        this,
                        getVaraintData
                    );

                    // console.log(getVaraintData);
                });
            });
        }

        // Handle Subscription Selector
        // 1) One time selection
        if (featureProductRadioOneTimeSubEl) {
            featureProductRadioOneTimeSubEl.forEach((_el) => {
                _el.addEventListener('change', function (e) {
                    let formEl = this.closest(elUtil.form);
                    // formEl
                    //     .querySelector(elUtil.originalProductIdInputEl)
                    //     .setAttribute('name', 'id');
                    // formEl
                    //     .querySelector(elUtil.subscriptionProductInputEl)
                    //     .setAttribute('name', '');

                    // Remove properties to subscription input
                    formEl
                        .querySelector(elUtil.subscriptionFrequencyInputEl)
                        .setAttribute('name', '');
                    formEl
                        .querySelector(elUtil.subscriptionUnitInputEl)
                        .setAttribute('name', '');

                    formEl.querySelector(
                        elUtil.subscriptionIntervalSelector
                    ).style.display = 'none';

                    // Remove child active selector from form
                    _helperFunc.removeInputActiveClassfromEl(formEl);

                    _el.parentElement
                        .querySelector(elUtil.oneTimeRadioSelector)
                        .parentElement.classList.add(classUtil.activeSubRadio);
                });
            });
        }

        // Subscription selector
        if (featureProductRadioSubscriptionEl) {
            featureProductRadioSubscriptionEl.forEach((_el) => {
                _el.addEventListener('change', function (e) {
                    let formEl = this.closest(elUtil.form);
                    // formEl
                    //     .querySelector(elUtil.originalProductIdInputEl)
                    //     .setAttribute('name', '');
                    // formEl
                    //     .querySelector(elUtil.subscriptionProductInputEl)
                    //     .setAttribute('name', 'id');

                    // Add properties to subscription input
                    formEl
                        .querySelector(elUtil.subscriptionFrequencyInputEl)
                        .setAttribute(
                            'name',
                            'properties[shipping_interval_frequency]'
                        );
                    formEl

                        .querySelector(elUtil.subscriptionUnitInputEl)
                        .setAttribute(
                            'name',
                            'properties[shipping_interval_unit_type]'
                        );

                    formEl.querySelector(
                        elUtil.subscriptionIntervalSelector
                    ).style.display = 'block';

                    _helperFunc.removeInputActiveClassfromEl(formEl);

                    _el.parentElement
                        .querySelector(elUtil.subscriptionRadioSelector)
                        .parentElement.classList.add(classUtil.activeSubRadio);
                });
            });
        }

        // Subscription interval frequency Selector
        if(intervalFrequencySelectorEl){
            intervalFrequencySelectorEl.forEach(_el => {
                _el.addEventListener('change', function(){
                    let getValue = this.value;
                    let formEl = this.closest(elUtil.form);
                    formEl
                        .querySelector(elUtil.subscriptionFrequencyInputEl)
                        .setAttribute('value', getValue);
                })
            })
        }
    };

    return {
        EventHandler: EventHandler,
    };
})();

function handleResizeBannerText () {
    const claimBannerTextDesktop = document.querySelectorAll(".claim_banner_text_desktop")
    const claimBannerTextMobile = document.querySelectorAll(".claim_banner_text_mobile")

    if (claimBannerTextDesktop && claimBannerTextMobile) {
        if (window.innerWidth < 768) {
            claimBannerTextDesktop.forEach(elem => elem.style.display = "none")
            claimBannerTextMobile.forEach(elem => elem.style.display = "")
        } else {
            claimBannerTextDesktop.forEach(elem => elem.style.display = "")
            claimBannerTextMobile.forEach(elem => elem.style.display = "none")
        }
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    featureProductSubscriptionUtil.EventHandler();
    handleResizeBannerText ()
})
// Open add to cart popup on product page
var buyButtonContainer = document.querySelector('.buy-buttons-row_container');
var closeBuyContainer = document.querySelectorAll('.close_buy_container');
closeBuyContainer.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        buyButtonContainer.classList.remove('buy_buttons_show');
    })
})

if(location.pathname != '/pages/chillzero '){
    document.querySelectorAll('.mobile_popup_buy_button').forEach(popupButton => {
        popupButton.addEventListener('click', () => {
            buyButtonContainer.classList.add('buy_buttons_show');
        })
    })
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.product-recommendations').forEach(product_recommendation => {
        if(window.scrollY + window.innerHeight - 100 > product_recommendation.offsetTop){
            document.querySelector('.buy-buttons-row').parentElement.style.display = 'none';
        }
        else{
            document.querySelector('.buy-buttons-row').parentElement.style.display = 'block';
        }
    })
})

// interactive animation on window scroll
document.addEventListener("scroll", function() {
    getProgress();
});

function getProgress() {					
var topPos = document.documentElement.scrollTop;
// Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;

// Remaining left to scroll
var remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the element, including padding

var percentage = (topPos / remaining) * 100 * 2;
document.querySelectorAll('.marquee_container .marquee_content_wrapper').forEach((el, index) => {
        if(index >= 0 ){
            return el.style.transform = 'translateX(-' + percentage + '%)';
        }
        else{
            return el.style.transform = 'translateX(-' + percentage/2 + '%)';
        }  
    })
}


// Explore flavours drawer on new vape page
function openFlavourDrawer(){
    document.getElementById('flavourDrawerContainer').style.display='block'; 
    document.getElementById('flavourDrawerBackground').style.display='block';
    document.getElementById('flavourDrawerContainer').classList.add('claim-drawer-open');
      document.querySelector("body").classList.add("cart-drawer-open")
      if(document.getElementById('flavourDrawerContainer').classList.contains('claim-drawer-close')){
        document.getElementById('flavourDrawerContainer').classList.add('claim-drawer-close');
      }
}

function closeFlavourDrawer() {
    document.getElementById('flavourDrawerContainer').classList.remove('claim-drawer-open');
    document.getElementById('flavourDrawerBackground').style.display = 'none';
    document.querySelector('body').classList.remove('cart-drawer-open');
}

var flavourDrawerBackgroundClick = document.getElementById('flavourDrawerBackground');
flavourDrawerBackgroundClick.addEventListener('click', function() {
    document.querySelector('.flavour-drawer-summary__close').click();
    document.querySelectorAll('.product-drawer-summary__close').forEach(closeBtn => closeBtn.click());
    document.querySelector("body").classList.remove("cart-drawer-open")
})

document.querySelector('.view_all_button').addEventListener('click', () =>{
    openFlavourDrawer();
})

//Open vape product drawer
document.querySelectorAll('[data-zero-product-modal]').forEach(element => {
    element.addEventListener("click", function(e) {
        let flavourTitle = this.nodeName == "P" ? this.innerText : this.getAttribute("data-title")
        flavourTitle = flavourTitle.replace(" ", "").toLowerCase();

        const productDrawerContainer = document.querySelector(`#productDrawerContainer.${ flavourTitle }`)
        const closeBtn = productDrawerContainer.querySelector(".product-drawer-summary__close")
        document.getElementById('productDrawerBackground').style.display = 'none';
        document.querySelector("body").classList.add("cart-drawer-open")

        productDrawerContainer.style.display = 'block';
        productDrawerContainer.classList.add('claim-drawer-open');

        if(productDrawerContainer.classList.contains('claim-drawer-close')){
            productDrawerContainer.classList.add('claim-drawer-close');
        }

        if (this.nodeName == "BUTTON") {
            closeBtn.setAttribute("data-modal-type", "single")
            openFlavourDrawer()
        }
    })
})

document.querySelectorAll('.product-drawer-summary__close').forEach(closebtn => {
    closebtn.addEventListener('click', () => {
        closebtn.parentElement.classList.remove('claim-drawer-open'); 
        document.getElementById('productDrawerBackground').style.display = 'none';
        document.querySelector('body').classList.remove('cart-drawer-open');

        if (closebtn.getAttribute("data-modal-type") == 'single') {
            closeFlavourDrawer()
        }
    })
})

var productDrawerBackgroundClick = document.getElementById('productDrawerBackground');
productDrawerBackgroundClick.addEventListener('click', function() {
    document.querySelector('.product-drawer-summary__close').click();
    document.querySelector("body").classList.remove("cart-drawer-open");
})

//Waitlist drawer on old vape page
function openWaitlistDrawer(){
    document.getElementById('waitlistDrawerContainer').style.display='block'; 
    document.getElementById('waitlistDrawerBackground').style.display='block';
    document.getElementById('waitlistDrawerContainer').classList.add('claim-drawer-open');
      document.querySelector("body").classList.add("cart-drawer-open")
      if(document.getElementById('waitlistDrawerContainer').classList.contains('claim-drawer-close')){
        document.getElementById('waitlistDrawerContainer').classList.add('claim-drawer-close');
      }
}

var waitlistDrawerBackgroundClick = document.getElementById('waitlistDrawerBackground');
waitlistDrawerBackgroundClick.addEventListener('click', function() {
    document.querySelector('.waitlist-drawer-summary__close').click()
    document.querySelector("body").classList.remove("cart-drawer-open")
})
function validateForm(e){
    document.querySelector('.waitlist_success_message').style.display = 'block';
    document.querySelector('.form-body').style.display = 'none';
    let customer_email = document.forms['email-form']['email'].value;
    let customer_state = document.forms['email-form']['address[province]'].value;
    console.log('Email: ', customer_email);
    console.log("State:", customer_state);
    addItemToAPI(customer_email, customer_state);
    function addItemToAPI(customer_email, customer_state) {
            data = {
              "email": customer_email,
              "state": customer_state
            }
            jQuery.ajax({
              type: 'POST',
              url: 'https://chill-klaviyo.herokuapp.com/api/customer-update/',
              data: data,
              dataType: 'json'
            });
        }
}

// document.querySelector('.header_button').addEventListener('click', () => openWaitlistDrawer());
// document.querySelectorAll('.flavour_button').forEach(flavourButton => {
//     flavourButton.addEventListener('click', () => openWaitlistDrawer());
// })
// document.querySelector('.video-container .overlay-text__button').addEventListener('click', () => openWaitlistDrawer())