$(document).ready(function () {
    $('.has-animation').each(function (index) {
        $(this).delay($(this).data('delay')).queue(function () {
            $(this).addClass('animate-in');
        });
    });
});





/*pour les pohotos*/
var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
    if (click) {
        if (curpage == 1) curpage = 5;
        console.log("woek");
        sliding = true;
        curpage--;
        svg = true;
        click = false;
        for (k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += " tran";
        }
        setTimeout(() => {
            move();
        }, 200);
        setTimeout(() => {
            for (k = 1; k <= 4; k++) {
                var a1 = document.getElementById(pagePrefix + k);
                a1.classList.remove("tran");
            }
        }, 1400);
    }
}

function rightSlide() {
    if (click) {
        if (curpage == 4) curpage = 0;
        console.log("woek");
        sliding = true;
        curpage++;
        svg = false;
        click = false;
        for (k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += " tran";
        }
        setTimeout(() => {
            move();
        }, 200);
        setTimeout(() => {
            for (k = 1; k <= 4; k++) {
                var a1 = document.getElementById(pagePrefix + k);
                a1.classList.remove("tran");
            }
        }, 1400);
    }
}

function move() {
    if (sliding) {
        sliding = false;
        if (svg) {
            for (j = 1; j <= 9; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
                console.log("streak");
            }
        } else {
            for (j = 10; j <= 18; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
                console.log("streak");
            }
        }
        setTimeout(() => {
            for (i = 1; i <= 4; i++) {
                if (i == curpage) {
                    var a = document.getElementById(pagePrefix + i);
                    a.className += " up1";
                } else {
                    var b = document.getElementById(pagePrefix + i);
                    b.classList.remove("up1");
                }
            }
            sliding = true;
        }, 600);
        setTimeout(() => {
            click = true;
        }, 1700);

        setTimeout(() => {
            if (svg) {
                for (j = 1; j <= 9; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
            } else {
                for (j = 10; j <= 18; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
                sliding = true;
            }
        }, 850);
        setTimeout(() => {
            click = true;
        }, 1700);
    }
}

left.onmousedown = () => {
    leftSlide();
};

right.onmousedown = () => {
    rightSlide();
};

document.onkeydown = e => {
    if (e.keyCode == 37) {
        leftSlide();
    } else if (e.keyCode == 39) {
        rightSlide();
    }
};

//for codepen header
// setTimeout(() => {
//  rightSlide();
// }, 500);


//---------------------------------------( For Translation )-----------------------------------------------------------
 //
 // var dataReload = document.querySelectorAll("[data-reload]")
 //
 // var lan = {
 //   ar : {
 //     intro:".تتفرّع نسك الحج إلى ثلاثة أنواعٍ، وهي: القِران والتمتمع والإفراد، فالمقصود بحجّ القِران أن يجمع الحاجّ بين الحجّ والعمرة في الإحرام، فيُحرم مرةً واحدةً، ولا يتحلّل منه إلّا بعد الانتهاء من أعمال الحجّ كاملةً، أمّا التمتع فيقصد به الإحرام بالعمرة في أشهر الحجّ، ثمّ يتحلّل من إحرامه للعمرة، ويبقى في مكة ثمّ يحرم للحجّ ليؤديده في العام نفسه، وسمي بالتمتع لأنّه الحاجّ يتحلّل من العمرة ويفعل ما يفعله غير المُحرم بين العمرة والحجّ، أمّا الإفراد فيقصد به الإحرام بالحجّ فقط دون العمرة",
 //
 //     ifradTitre:" حج الافراد",
 //     ifrad:".وهو أن ينوي المسلم عند إحرامه أداء مناسك الحج فقط، ويقول: 'لبيك بحج'، ثمَّ يصل إلى مكة ويؤدي  مناسك الحج ثمَّ يحرم بنية العمرة ويؤدي مناسكها، وهو الحج الأفضل عند الشافعية والمالكية، وفيما يأتي من فقرات هذا المقال  سيتم الحيث عن الحج المفرد وشروطه بالتفصيل",
 //
 //     QiranTitre:"حج القران",
 //     Qiran:".حج القِران، هو أحد الأقسام الثلاثة للحج وهو فرض لمن كان أهله حاضر المسجد الحرام، أو قريب من مكة.  يُشترط في هذا الحج أن يصحب المكلف معه الهدي وقت الإحرام وهذا الهدي في هذا الحج واجب لا من حیث الهدي بل من جهة السَوق",
 //
 //     Tamato3Titre:"حج التمتع",
 //     Tamato3:".حج التمتع، وهو أحد الأقسام الثلاثة من الحج في الإسلام، وهذا النوع من الحج يجب على من كان البُعد بين أهله و المسجد الحرام أكثر من 16 فرسخ أو 48 ميل. يتكون حج التمتع من جزئين: عمرة التمتع وحج التمتع"
 //
 //   },
 //   fr : {
 //     intro:"Il y a trois types de hajj:  Hajj Al-Qiran,Al-Tamattu‘ et Hajj Al-Ifrad. Hajj Al-Qiran désigne le pèlerin qui entre en état de sacralisation avec la volonté de faire le Hajj et la Omra en même temps, il ne quitte alors l'Irham qu’après le jet de cailloux et le rasage ou le raccourcissement.Hajj Al-Tamattu‘ est composé d’une Omra et d’un hajj,après avoir accompli les rites de la Omra, le pèlerin pourra se dessacraliser et faire tout ce qui est interdit à un pèlerin qui est en état d’al–ihram, et cela jusqu’au moment où il commencera à faire les rites du hajj.Hajj Al-Ifrad consiste à effectuer le Hajj seulement sans la Omra.",
 //
 //     ifradTitre:"Hajj Al-Ifrad",
 //     ifrad :"C’est le fait de formuler, au moment de sacralisation pour le Hajj au cours des mois Mîqât, l’intention d’accomplir uniquement le Hajj, en disant : « labbayka bi hajj »,Le pèlerin donc  accomplit le tawaf e d’arrivée (al-qoudoum) et demeure en ihram jusqu’au moment du Hajj ; pour accomplir les rites du Hajj. Lorsqu’il termine les rites de Hajj , il ressort de la Mecque et se remet en état de l’Ihram avec l’intention de faire la Omra .",
 //
 //     qiranTitre:"Hajj Al-Qiran",
 //     qiran:"C’est le fait que Le pèlerin formule l’intention d’accomplir à la fois le hajj et la ’omra. ce type n’est permis que pour les gens  qui habitent aux alentours de la Mecque.Il est stipulé dans ce pèlerinage que le responsable du pèlerinage accompagne le pélerin à l'époque d'Ihram.",
 //
 //     tamato3Titre:"Al-Tamattu‘",
 //     tamato3:"Un des trois types du hajj dans l'Islam qui est obligatoire pour les gens qui habitent loin de la Mecque (dit les hanbalites) pendant les mois du Hadj. Al-Tamattu‘ est composé essentiellement de deux parties: Omra Al-Tamattu‘ et Hajj Al-Tamattu‘."
 //   }
 // };
 //  if(window.location.hash){
 //     if (window.location.hash === "#fr"){
 //        intro.textContent =lan.fr.intro;
 //        ifradTitre.textContent = lan.fr.ifradTitre;
 //        ifrad.textContent = lan.fr.ifrad;
 //        qiranTitre.textContent = lan.fr.qiranTitre;
 //        qiran.textContent = lan.fr.qiran;
 //        tamato3Titre.textContent = lan.fr.tamato3Titre;
 //        tamato3.textContent = lan.fr.tamato3;
 //     }
 //   }
 //
 //     // define language reload onclick illiteration
 //     for(i=0;i <= dataReload.length; i++){
 //     };
 $(function() {
     $('.translate').click(function() {
       var lang = $(this).attr('id');

       $('.lang').each(function(index, item) {
          /* if(lang==='ar')
     {
       $("html").children().css("direction","rtl");
     }else
     {
       $("html").children().css("direction","ltr");
     }*/
         $(this).text(arrLang[lang][$(this).attr('key')]);
       });
     });
   });
  var arrLang = {
    ar : {
      intro:".تتفرّع نسك الحج إلى ثلاثة أنواعٍ، وهي: القِران والتمتمع والإفراد، فالمقصود بحجّ القِران أن يجمع الحاجّ بين الحجّ والعمرة في الإحرام، فيُحرم مرةً واحدةً، ولا يتحلّل منه إلّا بعد الانتهاء من أعمال الحجّ كاملةً، أمّا التمتع فيقصد به الإحرام بالعمرة في أشهر الحجّ، ثمّ يتحلّل من إحرامه للعمرة، ويبقى في مكة ثمّ يحرم للحجّ ليؤديده في العام نفسه، وسمي بالتمتع لأنّه الحاجّ يتحلّل من العمرة ويفعل ما يفعله غير المُحرم بين العمرة والحجّ، أمّا الإفراد فيقصد به الإحرام بالحجّ فقط دون العمرة",

      ifradTitre:" حج الافراد",
      ifrad:".وهو أن ينوي المسلم عند إحرامه أداء مناسك الحج فقط، ويقول: 'لبيك بحج'، ثمَّ يصل إلى مكة ويؤدي  مناسك الحج ثمَّ يحرم بنية العمرة ويؤدي مناسكها، وهو الحج الأفضل عند الشافعية والمالكية، وفيما يأتي من فقرات هذا المقال  سيتم الحيث عن الحج المفرد وشروطه بالتفصيل",

      qiranTitre:"حج القران",

      qiran:".حج القِران، هو أحد الأقسام الثلاثة للحج وهو فرض لمن كان أهله حاضر المسجد الحرام، أو قريب من مكة.  يُشترط في هذا الحج أن يصحب المكلف معه الهدي وقت الإحرام وهذا الهدي في هذا الحج واجب لا من حیث الهدي بل من جهة السَوق",

      Tamato3Titre:"حج التمتع",
      Tamato3:".حج التمتع، وهو أحد الأقسام الثلاثة من الحج في الإسلام، وهذا النوع من الحج يجب على من كان البُعد بين أهله و المسجد الحرام أكثر من 16 فرسخ أو 48 ميل. يتكون حج التمتع من جزئين: عمرة التمتع وحج التمتع"

    },
    fr : {
      intro:"Il y a trois types de hajj:  Hajj Al-Qiran,Al-Tamattu‘ et Hajj Al-Ifrad. Hajj Al-Qiran désigne le pèlerin qui entre en état de sacralisation avec la volonté de faire le Hajj et la Omra en même temps, il ne quitte alors l'Irham qu’après le jet de cailloux et le rasage ou le raccourcissement.Hajj Al-Tamattu‘ est composé d’une Omra et d’un hajj,après avoir accompli les rites de la Omra, le pèlerin pourra se dessacraliser et faire tout ce qui est interdit à un pèlerin qui est en état d’al–ihram, et cela jusqu’au moment où il commencera à faire les rites du hajj.Hajj Al-Ifrad consiste à effectuer le Hajj seulement sans la Omra.",

      ifradTitre:"Hajj Al-Ifrad",
      ifrad :"C’est le fait de formuler, au moment de sacralisation pour le Hajj au cours des mois Mîqât, l’intention d’accomplir uniquement le Hajj, en disant : « labbayka bi hajj »,Le pèlerin donc  accomplit le tawaf e d’arrivée (al-qoudoum) et demeure en ihram jusqu’au moment du Hajj ; pour accomplir les rites du Hajj. Lorsqu’il termine les rites de Hajj , il ressort de la Mecque et se remet en état de l’Ihram avec l’intention de faire la Omra .",

      qiranTitre:"Hajj Al-Qiran",
      qiran:"C’est le fait que Le pèlerin formule l’intention d’accomplir à la fois le hajj et la ’omra. ce type n’est permis que pour les gens  qui habitent aux alentours de la Mecque.Il est stipulé dans ce pèlerinage que le responsable du pèlerinage accompagne le pélerin à l'époque d'Ihram.",

      Tamato3Titre:"Al-Tamattu‘",
      Tamato3:"Un des trois types du hajj dans l'Islam qui est obligatoire pour les gens qui habitent loin de la Mecque (dit les hanbalites) pendant les mois du Hadj. Al-Tamattu‘ est composé essentiellement de deux parties: Omra Al-Tamattu‘ et Hajj Al-Tamattu‘."
    }
  };
