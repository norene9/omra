/*-------------kabl rihla*/
var acc = document
    .getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList
            .toggle("show");
    }
}
//------------------titre------
anime.timeline({ loop: true })
    .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
//--------------------
//---------------(Translate)-------------------
// var dataReload = document.querySelectorAll("[data-reload]")
//
// var lan = {
//   ar : {
//     titre1:"الإستعداد للرحلة",
//     pres_1:".لنستعد لهذه الرحلة لابد من تجهيز النفس قبل تجهيز الحقيبة .. وهناك عبادات قلبية وعبادات بدني نفعلها قبل  الحج استعداداً له",
//     pres_2:":عبادات قلبية ",
//     pres_3:":هذه خمس عبادات قلبية لابد لك منها حتى تجني ثمار رحلتك وتحصد غراس تعبك",
//     pres_4:"..أولا : افهم -",
//     pres_5:"ويد إسماعيل عند بنائه, ثم يد محمد - صلى الله عليه وسلم - عند وضعه الحجر الأسود,ومن الفهم أن تفهم أن الله قد اختارك من وسط مئات الملايين لتنال شرف الزيارة وتشهد كرامة اللقاء، فكم من كافر على وجه الأرض حرم نعمة الإسلام؟ وكم من عظيم ورئيس أغلق دونه الباب؟ لقد اختارك الله دون الكثيرين واختصك بالفضل عن غيرك من المسلمين، بل ذلل لك كل العقبات، فلم يمنعك ضعف صحة أو قلة مال أو كثرة عيال، فما أعظم كرامتك على الله وما أغلى مكانتك عنده.",
//     pres_6:"- ثانيا : التوبة ..",
//     pres_7:"أخي الحاج إياك أن تبني صرح حجك على شفا جرف هار، فتحج وأنت تنوي أن تعود إلى المعصية، وإلا فكيف تف بيت      الله،        وتدعوه  أن يغفر لك ويرحمك وقد عقدت العزم على محاربته بعد عودتك؟!     من أراد أن يدق باب الحرم بيده غدا فليطرق باب التوبة بقلبه اليوم، فالذنوب عوائق عن الوصول، بل حتى وإن وصلت        البيت        فالمعاصي موانع تحول بينك وبين القبول.",
//     pres_8:"- ثالثا : الشوق ..",
//     pres_9:"",
//     pres_10:": رابعا : العزم",
//     pres_11:"ومن العزم مفارقة راحتك ورفاهية التي كنت تجدها في بيتك طلبا لثواب الله. ومن العزم أن تجعل عملك خالضا لوجه  الله،        فلا تحج طلبا للسمعة أو الشهرة، أو سعيا للمنفعة والتجارة. و يحل لك في الحج أن تتاجر على أن لا يكون ذلك    مقصدك    في    الأساس، وبهذا يكون سفر الحج خير الأسفار على الإطلاق.        ولذا حين رأي عمر بن الخطاب - رضي الله عنه - نفرا من الحجاج يوما وهو بطريق مكة فقال :        تشعثون وتغبرون وتتلون وتضحون، لا تريدون بذلك شيئا من عرض الدنيا، ما نعلم سفرا خيرا من هذا.",
//     pres_12:"خامسا : قطع العلائق-",
//     pres_13:">فمعناه أن لا يلتفت قلبك إلى غير الله، فلا تعود تذكر أهلك ومالك وعملك، بل لا يملأ قلبك طوال رحلتك سوى هم        جليل        يتزلزل بسببه كيانك وتضطرب أوصالك... أن يغفر لك الله لك فيقلب صحيفة ذنوبك بيضاء نقية .. أن يصطفيك من        عبادهِ        في        يمتعك بالنظر إلى وجهه الكريم . . أن يؤويك إلى جوار نبيه ويجعلك من جلسائه المقربين .. وغير ذلك من عظائم        الآمال        وجلائل الأمنيات، فحدد غايتك من حجتك، و وحدد هدفك من الآن حتی تصل إليه سريعا"
//   },
//   fr : {
//     titre1:"",
//     pres_1:"Avant de se préparer pour le voyage , il faut être prêt mentalement et physiquement..d'ailleurs voici quelques adorations à réaliser avant le Hadj.",
//     pres_2:"",
//     pres_3:"Voici 5 adorations  nécessaires pour avoir un pèlerinage réussi:",
//     pres_4:"1- Premièrement: Comprendre ...",
//     pres_5:"Faut bien savoir et comprendre la dimension spirituelle de ce voyage qui vous conduira sur les Terres ou se trouve Mekka la maison qu\'Allah a attribué à lui même en disant {}, de plus cette mosquée sacrée a été construit par Ibrahim et Ismail , et puis le prophète Mohammed (Salla Allahou Aleyhim wa Sallam) qui a complété sa construction en mettant   'Al Hadjar al assewad'.\n\n A propos de ce lieu sacré , Chikh Al Charaoui a parlé de sa valeur en disant : 'Si toutes les mosquées choisies et réalisées par l\'Homme nous permet de nous réunir pour renconter dieu ,alors que sera la valeur et la dimension d\'un lieu choisi par le bon dieu?.\n Et de sa bénédiction (Sobhanaho Wa Taala), chaque prière est équivalente a cent prières, une Hassana est équivalente a cent milles Hassana, alors que dans d\'autres mosquées dix Hassanat, et de sa bénédiction que nous nous éloingons des péchés et des transgressions , et de sa bénédiction que ce lieu sacré est tellement vaste qui porte les foules des gens portant le surpeuplement et la congestion.\n Et comme mentionné dans le Couran {...Fait donc que se penchent vers eux les coeurs d'une partie des gens...}Ibrahim-37- , le Hadj n'est pas un simple voyage physique, mais ce sont des esprits poussés  vers leur Dieu sans ressentir .\n\nPour cela  faut comprendre que dieu vous a choisi et honoré parmis des milliers de gens pour visiter ce lieu , combien de non-croyant n\'as pas eu la chance d\'être mosulman? dieu t\'as choisi parmis tous ces mosulmans et t\'as acceuilé dans sa maison en pleinne santé et sans avoir des problémes finnanciers , tu doit être reconnaisant! ",
//     pres_6:"2- Deuxièmement:Le Repentir",
//     pres_7:"Cher Hajj, méfiez-vous que vous avez l\'intention de retourner aux péchés après ce pèlerinage,sinon comment attendiez vous que Dieu vous pardonne  vous les pardonne! Celui qui veux frapper la porte de la maison d\'Allah, qu\'il frappe d\'abord la porte de la contrition avec son coeur aujourd\'hui, car les péchés empêche d\'avoir un pèlerinage réussi,Le Chikh Al Hantaoui donna un bon exemple en disant 'Un avion surchargé du fer et attaché avec des cordes d\'acier aux rochers des montagnes  ne peut jamais décoler sauf en rédisant la surcharge, c\'est pareils pour nos faits, si on veut que notre Hajj soit accepté par le bon Dieu , on doit nous éloigner des désirs et des péchés' \n\n Le meilleur but d'un mosulmant est de repentir , comme montionné dans le Coran {Allah a accueilli le repentir du prophète, celui des Emigrés et des Auxiliaires qui l\'ont suivit à un moment difficile, après que les coeurs d\'un groupe d\'entre  eux étaient sur le point de dévier.Puis il  accueillit leur repentir car il est Compatissant et Miséricordieux à leur égard} -Al Tawba 117-Ibn Al Kaiem a dit :'Pour savoir la valeur de la contrition chez Allah et son importance pour un mosulman,Dieu à donné cette honneur après la dernière Invasion après avoir fait tout ce qu'ils ont dans le but de repentir , pour cela le meilleur jour du prophète depuis sa naissance était le jour du repentir de Kaab Bnou Malik'",
//     pres_8:"3- troisièmement:Le désir",
//     pres_9:"Vous pouvez l\'atteindre quand vous réalisez que vous mettez vos pieds sur le Terre du prophète(Saala Allah alayhi wassalam) , Peut être vous allez pleurer en craignant Dieu , et vos larmes circulerons sur la même terre arrosée par les larmes du prophète et de es Compagnons, vos respirez le même air qu\'ils ont réspiré, ceci te fait penser absolument aux Honorables prophètes.\n\nIci à Mekka , ou le prophète a grandi, Saalem Bnou Abd Allah a laisser son bagage à 'Ouad Atik' ou le prophète a passé nuit lors de son pèlerinage , et il disait que al Attik est un fleuve sacré.\nLe désir est de savoir que cette visite est pour Dieu non sa maison à propre thérme, et aussi d\'être pardoné pour toutes nos erreurs, pour cela , on trouve dans le hadit que Allah dit :'Si un serviteur est en bonne santé , et je lui ai étendu la vie ,il y passe cinq ans et ne me profite de me rendre visite ce n'est qu\'il est démunis' -1909 Sahih Al Djamee- , on annalisant on voit que le Dieu n\'a pas nommécette place par ' Ma maison' ce qui prouve que le Hajj n\'est qu\'un voyage spirituel vers Allah.\n Mais si tu lui(Sobhanahou wa Taala) rend visite dans sa maison , tu le verras pas, mais dit toi que serra ta réaction le jour ou tu vas voir le Dieu qui t\'as donné une chance merveilleuse de visiter le plus sacré des lieux de l\'Islam.\n\n Le prophète Mohammed a dit:'Quand les Bienheureux du Paradis y entrent,Dieu, Béni soit-il et Exalté,leur dit :'Désirez -vous que Je vous donne quelque chose de plus?'Ils répondent :'Ne nous as-Tu pas illuminé les visages?Ne nous as-Tu pas fait entrer au Paradis et sauvé de l\'enfert?' Sur ce, Il ôte le voile et rien de ce dont ils sont gratifiés ne leur est désormais plus cher que le regard à leur Seigneur(à Lui la puissance et la majesté)' -523 Sahih Al Djamee-.\n\n Le désir est quand les gens aspirent à la maison de Dieu lors de sa séparation , et il ne sont jamais satisfait de y quitter , comme un Aimant qui attire le fer, car celui qui goûtait le plaisir de la proximité du Dieu le savait, Dieu Tout-Puissant a dit : 'Et quand Nous fîmes de la Maison(la Kaâba) un lieu de rassemblement pour les gens et un asile de paix...' -125 Al Baqarah- , ce que veux dire que les gens  refugent dans ce lieu sacré a tout fois qu\'il leur manque. Et parmis les personne connu par leurs désir à la maison d\'Allah , Sofiane Ibn Aîna qui a dit qu\'il était à 'Arafa, et tellement qu\'il avait hâte à ces moments il priait Dieu a tout moment que ça soit pas sa dérnière fois, le Bon Dieu lui ne lui est pas démunis ce qu'il voulait,quand c\'était l\'ans de mort sa il n\'a rien dit , on lui a demandait pourquoi il disait qu\'il avait honte de Allah.*********** Le Imam Ahmed Ibnou  Hanbel tellement à son fort désir de visiter la maison d'Allah et qu\'il n\'avait pas l\'argent suffisant pour y aller, il travallait comme transporteur de marchandises pour couvrire ses tarifs et ne pas être démunis.",
//     pres_10:"4- Quatrièmement:la volenté",
//     pres_11:"La volenté est de quitter la maison et la vie quotidienne pour chercher de la récompense de Dieu, et que votre travail soit pur pour Dieu et qu\'on attend pas  la réputation ni des avantages commerciaux,  ainsi que les petites achanges sont autorisé tant-que ça devient pas votre destination principale.",
//     pres_12:"5:ceinquièmement:Faire le Hajj pour Dieu",
//     pres_13:"Le musulman doit également détourner ses pensées du monde terrestre, et pour cela il ne doit plus avoir aucune affaire d\’importance en cours au moment d’effectuer le Hajj,car le point essentiel de cette préparation spirituelle au Hajj concerne l\’âme du croyant, qui se doit d\’être totalement tournée vers Dieu pour l\’accomplissement de ce pilier clé de l\’islam. Le musulman doit donc se purifier de toutes pensées revêtant un quelconque aspect d\’association, qu\’il soit majeur ou mineur. Il s\’agit ici d\’une condition primordiale à l\’acceptation du pèlerinage par Dieu "
//
//   }
// };
// var fra=0;
//  if(window.location.hash){
//     if (window.location.hash === "#fr"){
//       fra=1;
// pres_1.textContent = lan.fr.pres_1;
// pres_2.textContent = lan.fr.pres_2;
// pres_3.textContent = lan.fr.pres_3;
// pres_4.textContent = lan.fr.pres_4;
// pres_5.textContent = lan.fr.pres_5;
// pres_6.textContent = lan.fr.pres_6;
// pres_7.textContent = lan.fr.pres_7;
// pres_8.textContent = lan.fr.pres_8;
// pres_9.textContent = lan.fr.pres_9;
// pres_10.textContent = lan.fr.pres_10;
// pres_11.textContent = lan.fr.pres_11;
// pres_12.textContent = lan.fr.pres_12;
// pres_13.textContent = lan.fr.pres_13;
//    }
//   }

  $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            if(lang==='ar')
      {
        $("html").children().css("direction","rtl");
      }else
      {
        $("html").children().css("direction","ltr");
      }
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });
   var arrLang = {
     ar : {
       titre1:"الإستعداد للرحلة",
       pres_1:".لنستعد لهذه الرحلة لابد من تجهيز النفس قبل تجهيز الحقيبة .. وهناك عبادات قلبية وعبادات بدني نفعلها قبل  الحج استعداداً له",
       pres_2:":عبادات قلبية ",
       pres_3:":هذه خمس عبادات قلبية لابد لك منها حتى تجني ثمار رحلتك وتحصد غراس تعبك",
       pres_4:"..أولا : افهم -",
       pres_5:"ويد إسماعيل عند بنائه, ثم يد محمد - صلى الله عليه وسلم - عند وضعه الحجر الأسود,ومن الفهم أن تفهم أن الله قد اختارك من وسط مئات الملايين لتنال شرف الزيارة وتشهد كرامة اللقاء، فكم من كافر على وجه الأرض حرم نعمة الإسلام؟ وكم من عظيم ورئيس أغلق دونه الباب؟ لقد اختارك الله دون الكثيرين واختصك بالفضل عن غيرك من المسلمين، بل ذلل لك كل العقبات، فلم يمنعك ضعف صحة أو قلة مال أو كثرة عيال، فما أعظم كرامتك على الله وما أغلى مكانتك عنده.",
       pres_6:"- ثانيا : التوبة ..",
       pres_7:"أخي الحاج إياك أن تبني صرح حجك على شفا جرف هار، فتحج وأنت تنوي أن تعود إلى المعصية، وإلا فكيف تف بيت      الله،        وتدعوه  أن يغفر لك ويرحمك وقد عقدت العزم على محاربته بعد عودتك؟!     من أراد أن يدق باب الحرم بيده غدا فليطرق باب التوبة بقلبه اليوم، فالذنوب عوائق عن الوصول، بل حتى وإن وصلت        البيت        فالمعاصي موانع تحول بينك وبين القبول.",
       pres_8:"- ثالثا : الشوق ..",
       pres_9:"",
       pres_10:": رابعا : العزم",
       pres_11:"ومن العزم مفارقة راحتك ورفاهية التي كنت تجدها في بيتك طلبا لثواب الله. ومن العزم أن تجعل عملك خالضا لوجه  الله،        فلا تحج طلبا للسمعة أو الشهرة، أو سعيا للمنفعة والتجارة. و يحل لك في الحج أن تتاجر على أن لا يكون ذلك    مقصدك    في    الأساس، وبهذا يكون سفر الحج خير الأسفار على الإطلاق.        ولذا حين رأي عمر بن الخطاب - رضي الله عنه - نفرا من الحجاج يوما وهو بطريق مكة فقال :        تشعثون وتغبرون وتتلون وتضحون، لا تريدون بذلك شيئا من عرض الدنيا، ما نعلم سفرا خيرا من هذا.",
       pres_12:"خامسا : قطع العلائق-",
       pres_13:">فمعناه أن لا يلتفت قلبك إلى غير الله، فلا تعود تذكر أهلك ومالك وعملك، بل لا يملأ قلبك طوال رحلتك سوى هم        جليل        يتزلزل بسببه كيانك وتضطرب أوصالك... أن يغفر لك الله لك فيقلب صحيفة ذنوبك بيضاء نقية .. أن يصطفيك من        عبادهِ        في        يمتعك بالنظر إلى وجهه الكريم . . أن يؤويك إلى جوار نبيه ويجعلك من جلسائه المقربين .. وغير ذلك من عظائم        الآمال        وجلائل الأمنيات، فحدد غايتك من حجتك، و وحدد هدفك من الآن حتی تصل إليه سريعا",

       titre2:"الإستعداد البدني و الصحي",
       pref_1:"",
       pref_2:"",
       pref_3:"",
       pref_4:"",
       pref_5:"",
       pref_6:"",
       pref_7:"",
       pref_8:"",
       pref_9:"",
       pref_10:"",
       pref_11:"",
       pref_12:"",
       pref_13:"",
       pref_14:"",
       pref_15:"",
       pref_16:"",
       pref_17:"",
       pref_18:"",
       pref_19:"",
       pref_20:"",

       titre3:"تجهيز الحقائب و الملابس",
       tajhiz_1:"",
       tajhiz_2:"",
       tajhiz_3:"",
       tajhiz_4:"",
       tajhiz_5:"",
       tajhiz_6:"",
       tajhiz_7:"",
       tajhiz_8:"",
       tajhiz_9:"",
       tajhiz_10:"",
       tajhiz_11:"",
       tajhiz_12:"",
       tajhiz_13:"",
       tajhiz_14:"",
       tajhiz_15:"",
       tajhiz_16:"",
     },
     fr : {
       titre1:"Avant de se préparer pour le voyage",
       pres_1:"Avant de se préparer pour le voyage , il faut être prêt mentalement et physiquement..d'ailleurs voici quelques adorations à réaliser avant le Hadj.",
       pres_2:"",
       pres_3:"Voici 5 adorations  nécessaires pour avoir un pèlerinage réussi:",
       pres_4:"1- Premièrement: Comprendre ...",
       pres_5:"Faut bien savoir et comprendre la dimension spirituelle de ce voyage qui vous conduira sur les Terres ou se trouve Mekka la maison qu\'Allah a attribué à lui même en disant {}, de plus cette mosquée sacrée a été construit par Ibrahim et Ismail , et puis le prophète Mohammed (Salla Allahou Aleyhim wa Sallam) qui a complété sa construction en mettant   'Al Hadjar al assewad'.\n\n A propos de ce lieu sacré , Chikh Al Charaoui a parlé de sa valeur en disant : 'Si toutes les mosquées choisies et réalisées par l\'Homme nous permet de nous réunir pour renconter dieu ,alors que sera la valeur et la dimension d\'un lieu choisi par le bon dieu?.\n Et de sa bénédiction (Sobhanaho Wa Taala), chaque prière est équivalente a cent prières, une Hassana est équivalente a cent milles Hassana, alors que dans d\'autres mosquées dix Hassanat, et de sa bénédiction que nous nous éloingons des péchés et des transgressions , et de sa bénédiction que ce lieu sacré est tellement vaste qui porte les foules des gens portant le surpeuplement et la congestion.\n Et comme mentionné dans le Couran {...Fait donc que se penchent vers eux les coeurs d'une partie des gens...}Ibrahim-37- , le Hadj n'est pas un simple voyage physique, mais ce sont des esprits poussés  vers leur Dieu sans ressentir .\n\nPour cela  faut comprendre que dieu vous a choisi et honoré parmis des milliers de gens pour visiter ce lieu , combien de non-croyant n\'as pas eu la chance d\'être mosulman? dieu t\'as choisi parmis tous ces mosulmans et t\'as acceuilé dans sa maison en pleinne santé et sans avoir des problémes finnanciers , tu doit être reconnaisant! ",
       pres_6:"2- Deuxièmement:Le Repentir",
       pres_7:"Cher Hajj, méfiez-vous que vous avez l\'intention de retourner aux péchés après ce pèlerinage,sinon comment attendiez vous que Dieu vous pardonne  vous les pardonne! Celui qui veux frapper la porte de la maison d\'Allah, qu\'il frappe d\'abord la porte de la contrition avec son coeur aujourd\'hui, car les péchés empêche d\'avoir un pèlerinage réussi,Le Chikh Al Hantaoui donna un bon exemple en disant 'Un avion surchargé du fer et attaché avec des cordes d\'acier aux rochers des montagnes  ne peut jamais décoler sauf en rédisant la surcharge, c\'est pareils pour nos faits, si on veut que notre Hajj soit accepté par le bon Dieu , on doit nous éloigner des désirs et des péchés' \n\n Le meilleur but d'un mosulmant est de repentir , comme montionné dans le Coran {Allah a accueilli le repentir du prophète, celui des Emigrés et des Auxiliaires qui l\'ont suivit à un moment difficile, après que les coeurs d\'un groupe d\'entre  eux étaient sur le point de dévier.Puis il  accueillit leur repentir car il est Compatissant et Miséricordieux à leur égard} -Al Tawba 117-Ibn Al Kaiem a dit :'Pour savoir la valeur de la contrition chez Allah et son importance pour un mosulman,Dieu à donné cette honneur après la dernière Invasion après avoir fait tout ce qu'ils ont dans le but de repentir , pour cela le meilleur jour du prophète depuis sa naissance était le jour du repentir de Kaab Bnou Malik'",
       pres_8:"3- troisièmement:Le désir",
       pres_9:"Vous pouvez l\'atteindre quand vous réalisez que vous mettez vos pieds sur le Terre du prophète(Saala Allah alayhi wassalam) , Peut être vous allez pleurer en craignant Dieu , et vos larmes circulerons sur la même terre arrosée par les larmes du prophète et de es Compagnons, vos respirez le même air qu\'ils ont réspiré, ceci te fait penser absolument aux Honorables prophètes.\n\nIci à Mekka , ou le prophète a grandi, Saalem Bnou Abd Allah a laisser son bagage à 'Ouad Atik' ou le prophète a passé nuit lors de son pèlerinage , et il disait que al Attik est un fleuve sacré.\nLe désir est de savoir que cette visite est pour Dieu non sa maison à propre thérme, et aussi d\'être pardoné pour toutes nos erreurs, pour cela , on trouve dans le hadit que Allah dit :'Si un serviteur est en bonne santé , et je lui ai étendu la vie ,il y passe cinq ans et ne me profite de me rendre visite ce n'est qu\'il est démunis' -1909 Sahih Al Djamee- , on annalisant on voit que le Dieu n\'a pas nommécette place par ' Ma maison' ce qui prouve que le Hajj n\'est qu\'un voyage spirituel vers Allah.\n Mais si tu lui(Sobhanahou wa Taala) rend visite dans sa maison , tu le verras pas, mais dit toi que serra ta réaction le jour ou tu vas voir le Dieu qui t\'as donné une chance merveilleuse de visiter le plus sacré des lieux de l\'Islam.\n\n Le prophète Mohammed a dit:'Quand les Bienheureux du Paradis y entrent,Dieu, Béni soit-il et Exalté,leur dit :'Désirez -vous que Je vous donne quelque chose de plus?'Ils répondent :'Ne nous as-Tu pas illuminé les visages?Ne nous as-Tu pas fait entrer au Paradis et sauvé de l\'enfert?' Sur ce, Il ôte le voile et rien de ce dont ils sont gratifiés ne leur est désormais plus cher que le regard à leur Seigneur(à Lui la puissance et la majesté)' -523 Sahih Al Djamee-.\n\n Le désir est quand les gens aspirent à la maison de Dieu lors de sa séparation , et il ne sont jamais satisfait de y quitter , comme un Aimant qui attire le fer, car celui qui goûtait le plaisir de la proximité du Dieu le savait, Dieu Tout-Puissant a dit : 'Et quand Nous fîmes de la Maison(la Kaâba) un lieu de rassemblement pour les gens et un asile de paix...' -125 Al Baqarah- , ce que veux dire que les gens  refugent dans ce lieu sacré a tout fois qu\'il leur manque. Et parmis les personne connu par leurs désir à la maison d\'Allah , Sofiane Ibn Aîna qui a dit qu\'il était à 'Arafa, et tellement qu\'il avait hâte à ces moments il priait Dieu a tout moment que ça soit pas sa dérnière fois, le Bon Dieu lui ne lui est pas démunis ce qu'il voulait,quand c\'était l\'ans de mort sa il n\'a rien dit , on lui a demandait pourquoi il disait qu\'il avait honte de Allah.*********** Le Imam Ahmed Ibnou  Hanbel tellement à son fort désir de visiter la maison d'Allah et qu\'il n\'avait pas l\'argent suffisant pour y aller, il travallait comme transporteur de marchandises pour couvrire ses tarifs et ne pas être démunis.",
       pres_10:"4- Quatrièmement:la volenté",
       pres_11:"La volenté est de quitter la maison et la vie quotidienne pour chercher de la récompense de Dieu, et que votre travail soit pur pour Dieu et qu\'on attend pas  la réputation ni des avantages commerciaux,  ainsi que les petites achanges sont autorisé tant-que ça devient pas votre destination principale.",
       pres_12:"5:ceinquièmement:Faire le Hajj pour Dieu",
       pres_13:"Le musulman doit également détourner ses pensées du monde terrestre, et pour cela il ne doit plus avoir aucune affaire d\’importance en cours au moment d’effectuer le Hajj,car le point essentiel de cette préparation spirituelle au Hajj concerne l\’âme du croyant, qui se doit d\’être totalement tournée vers Dieu pour l\’accomplissement de ce pilier clé de l\’islam. Le musulman doit donc se purifier de toutes pensées revêtant un quelconque aspect d\’association, qu\’il soit majeur ou mineur. Il s\’agit ici d\’une condition primordiale à l\’acceptation du pèlerinage par Dieu ",

       titre2:"Préparations physique et sanitaire",
       pref_1:"En moyenne, des millions de personnes du monde entier effectuent Al Hajj chaque année. Le nombre réel de pèlerins qui sont confrontés à de très fortes chaleurs, des mouvements de foules, des déplacements fréquents et longs à pieds. Une préparation physique est trés importante comme la préparation de vos valises , ou un peu plus!",
       pref_2:"1- Préparation physique et sanitaire avant le voyage :",
       pref_3:"",
       pref_4:"Une préparation physique notamment via la pratique quotidienne de la marche permet aux pèlerins de rester concentrés sur la dimension spirituelle du voyage, d’en profiter pleinement et évite l'expositions a des problèmes musculaires.",
       pref_5:"Manger des fruits et des aliments cuits bénéfiques pour le corps -surtout ceux qui contiennes vitamins D et le calcium-, tout en évitant autant que possible les aliments en conserve, gardés pendant de longues périodes et sutout il faut boire beaucoup de liquides tels que l'eau, les jus, le lait, etc",
       pref_6:"2- préparation spirituelle:",
       pref_7:"Il est important pour le musulman de se mettre en condition mentale vis-à-vis des événements et épreuves qui surviendront tout au long du pèlerinage,comme ils doivent dépasser toute crainte de ce dérnier , ceci en : ",
       pref_8:"-Soyons patient car Allah est avec les patients",
       pref_9:"-Evitant les comportements immoraux ou obscènes est également indispensable, de même que le contrôle de sa personne.Sauvegardant de sa langue et des paroles inutiles sont également primordiales, de même que d’éviter de se plaindre et de contredire et tergiverser inutilement.",
       pref_10:"-Rapprochant de Dieu avec l'aide des autres. C'est un travail qui vous rendra heureux sans le savoir.",
       pref_11:"3- Préparations physique et sanitaire durant le voyage:",
       pref_12:"Cher pèlerin , quoi que se soit le moyen de votre voyage, rester assis pour une langue durée vous causera de la fatigue , pour cela voici quelque conceils a suivre: ",
       pref_13:"-Portez des vêtements légers, une bonne paire de baskets pour que vos déplacements à pied et les longues marches ne soient pas une source de gêne. Pensez aussi à prendre une paire de claquettes en plastique.",
       pref_14:"-Portez des lunettes sollaires afin d'éviter l'éxposition au rayons de soleil et la poussière .",
       pref_15:"-Réspirez bien et périodiquement.",
       pref_16:"-Evitez de réster assis pour une durée supérieure de deux heures.",
       pref_17:"-Faire des petits mouvements quand vous êtes assis.",
       pref_18:"-Faire bouger vos peds temps en temps .",
       pref_19:"-Décendre dans les zones de repos et y profiter de marcher et relacher vos muscles.",
       pref_20:"-Vous pouvez vous déplacer dans le couloir de l'avion dès que possible.",

       titre3:"Préparation des baguages",
       tajhiz_1:"Lors de votre voyage, il y a plusieurs trucs indispensables que vous devez ramener avec vous , et dans les paragraphes suivants on mentionne les choses les plus necessaires:",
       tajhiz_2:"1- les vêtements:",
       tajhiz_3:"Selon la durée du voyage , vous aurez besoin des jilbebs légers, UN HABIT D’IHRAM,Qamis,des sous vêtements, il reste à savoir que les pérlins ont beaucoup besoin de changer. Du fait du soleil et de la chaleur, préférez des vêtements blancs ou clairs, amples, afin de laisser l’air circuler librement au niveau de la peau, les tissus les plus adaptés étant le coton et le lin.Chapeau et lunettes de soleil sont conseillés.Soyez vigilants quant au choix des chaussures : préférez des chaussures de randonnée ouvertes, il y aura quelques kilomètres à parcourir",
       tajhiz_4:"Et sans oublier une petite sacauche pour poter vos besoins quotidiens partout avec vous.",
       tajhiz_5:"2- Des linges et une trousse de toilettes:",
       tajhiz_6:"-Des servietes selon le besoin, coupe-angles,brosse a dents,dentifrices, Siwak, anti-transpirant,un petit ciseau.",
       tajhiz_7:"3- Les choses importantes:",
       tajhiz_8:"-Le passeport , les billet d'avion, liste des adresses des hotêls et des résidences, le numéros de télephone du réspensable du voyage,un télephone débloqué, Le Couran, et le livre de Al Adkar.",
       tajhiz_9:"4- Les médicaments:",
       tajhiz_10:"Il est préférable de prendre des simples médicaments pour les urgences tels que:",
       tajhiz_11:"-un antipyrétique (paracétamol contre fièvre et anti-douleurs).",
       tajhiz_12:"-un antiémétique (contre vomissements)",
       tajhiz_13:"-un antidiarrhéique",
       tajhiz_14:"-un collutoire ou pastilles pour désinfecter la gorge",
       tajhiz_15:"-un antiseptique (chlorhexidine) en cas de petite plaie",
       tajhiz_16:"",

       titre4:"Obligations a réspecter:",
       obl_1:"Ce sont des devoirs que vous sentirai si vous pensez que ce voyage est le dernier de votre vie, et que vous ne retournerez pas chez vous, et que vous vous préparez  pour la dernière étape que vous prenez du tawaaf d'adieu, alors le manque de l'espoir vous pousse et coupe l'attachement du cœur à marcher et maîtrisez le pèlerinage.Ibn Aqeel, que Dieu lui fasse miséricorde, a dit:'Vous ne décrivez pas les actes et les conditions, sauf en raccourcissant vos espoirs. Pour tous ceux qui ont compté son heure pendant laquelle il est égal à son temps de tombé malade s\'est amélioré ses oeuvres,Alors il est devenu toute sa vie est pure. 'Faites donc votre argumentation sans laisser aucune responsabilité derrière votre dos, en vous assurant que:",
       obl_2:"1-Dépensez vos dette",
       obl_3:"Le paiement des dettes doit accomplir le Hajj, et le Messager - que Dieu le bénisse et lui accorde la paix - demandait avant de prier pour le défunt s'il a une dette, si quelqu'un l'a dépensé, sinon on ne prie pas sur lui, et que vous partez pour un voyage dont vous ne pouvez peut-être pas revenir, alors que vous avez des dettes que vous ne pouvez pas payer tu devrais la permission des propriétaires de sortir pour le Hajj, sinon ne sortez pas.",
       obl_4:"2-s'éxcuser et demander le pardon: ",
       obl_5:"Examinez-vous et voyez si vous avez fait du tort à quelqu'un, demandez pardon pour vous purifier vos péchés avant votre voyage,ne laiisez rien d'autre que le droit de Dieu à réaliser, qui vous pardonnera par son pardon et sa générosité.",
       obl_6:"3-Rendez les  choses à leur propriétaires:",
       obl_7:"et informez les que vous voyagez pour le Hajj et vous pourrez ne pas revenir",
       obl_8:"4-Rédigez un testament:",
       obl_9:"Le Messager de Dieu, que Dieu le bénisse et lui accorde la paix, a dit que si un musulman qui veut prêcher quelque chose et qu'il veille deux nuits et que sa volonté soit écrite chez lui.",
       obl_10:"5-Saluer vos proches:",
       obl_11:"Comme si vous ne les verriez pas après aujourd'hui, et c'est l'imitation du Prophète - que la prière et la paix de Dieu soient sur lui - quand il dit au revoir à quelqu'un il dit: 'Confies à Allah ta religion, le dépôt [qu’Il t’a confié] et tes dernières œuvres. ' As-Sahîha Al Jamee - n°4795 ",
           }
   };
