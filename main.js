const pathEvents = (e) => { }

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("drawer").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("drawer").style.width = "0";
}

function explaineron() {
    // document.getElementById('youtube').src = "https://www.youtube.com/embed/FhhrE3OOcAc";
    document.getElementById("explainer-embed-wrap").style.display = "block";
}

function explaineroff() {
    document.getElementById("explainer-embed-wrap").style.display = "none";
    // document.getElementById('youtube').src = "";
}



function unmask() {
    // let masks = Array.from(document.getElementsByClassName('mask'));
    // console.log(masks);
    // let videos = Array.from(document.getElementsByClassName('video'));

    // masks.forEach(element => {
    //     element.style.display = "none";
    // });

    // videos.forEach(element => {
    //     element.style.display = "block";
    // });

    let h = document.getElementById('explainer-mask-img').clientHeight;
    let w = document.getElementById('explainer-mask-img').clientWidth;

    document.getElementById('play-explainer').style.top = (h / 2 > 300) ? `-${(h / 2) - 50}px` : `-${h / 2}px`;
    document.getElementById('play-explainer').style.left = `-${w / 2}px`;

}

function switchlang (n) {
    if (n===1) {
        document.getElementById('kannad').classList.remove('selected');
        document.getElementById('kimg').classList.remove('front');
        document.getElementById('hindi').classList.add('selected');
        document.getElementById('himg').classList.add('front');
    } else {
        document.getElementById('hindi').classList.remove('selected');
        document.getElementById('himg').classList.remove('front');
        document.getElementById('kannad').classList.add('selected');
        document.getElementById('kimg').classList.add('front');
    }
}

document.body.onload = function () {
}


const appRendered = () => {
    if(!localStorage.once) {
        unmask();
    }


    setTimeout(() => {
        c1elems = document.getElementById('reviewslide');
        let c1 = M.Carousel.init(c1elems, {
            padding: 400,
            dist: 0
        });

        var c2elems = document.getElementById('award1');
        let c2 = M.Carousel.init(c2elems, {
            padding: 95,
            dist: 40,
            numVisible: 4
        });

        var c3elems = document.getElementById('award2');
        let c3 = M.Carousel.init(c3elems, {
            padding: 95,
            dist: 40
        });

        setInterval(()=>{
            c1.next();
            c3.next();
        }, 5200)

        setInterval(()=>{
            c2.next();
        }, 6200)

        unmask();
    }, 800);
    
}

// JS tilt Effect
function hoverTilt () {
  var tiltBlock = $('.js-tilt');
  if(tiltBlock.length) {
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .3
    })
  }
}



//Contact Form Validation
function contactFormValidation () {
  var activeForm = $('.form-validation');
  if(activeForm.length){
    activeForm.validate({ // initialize the plugin
      rules: {
        sub: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeForm.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeForm.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}


// Close suddess Alert
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


function myFunction() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}

function myFunction1() {
  var elmnt = document.getElementById("features");
  elmnt.scrollIntoView();
}

function myFunction2() {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView();
}


