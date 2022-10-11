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
        const currentElement =  document.querySelector('.chill-story-value-block-section');
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

  let items = document.querySelectorAll('.menu-mega-nav li');
  items.forEach( item => item.addEventListener('mouseenter', function() {
    handleHover(this, items)
  }))

  function handleHover(el, objects) {
    items.forEach(item => {
      item.classList.remove('active')      
    })
    el.classList.add('active')
  }
  $('.custom_sub_button').click(function(){
    $(this).closest('.block-inner').find('.block-inner-card-info').addClass('add_info_sub');
  });
  $('.close_card_info').click(function(){
    $(this).closest('.block-inner').find('.block-inner-card-info').removeClass('add_info_sub');
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
        breakpoint: 1008,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        }
        // settings: "unslick"
      }
  
    ]
  });
  updateContainer();
  scrollAbout();
  $(window).resize(function() {
      updateContainer();
      scrollAbout();
  });
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

//   function addItemToCart(variant_id, qty) {
//     data = {
//       "id": variant_id,
//       "quantity": qty
//     }
//     jQuery.ajax({
//       type: 'POST',
//       url: '/cart/add.js',
//       data: data,
//       dataType: 'json',
//       success: function() { 
//         document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//         bubbles: true  
//        }));
//       }
//     });
//     document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//     	bubbles: true 
//  	 }));
//   }

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
        d.querySelector(tabId).classList.toggle('active');
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


document.addEventListener('DOMContentLoaded', () => {
    featureProductSubscriptionUtil.EventHandler();
})