jQuery(document).ready(function($) {
    setTimeout(function() {
        $('#preloader').fadeOut(5000, function() {
            $('.container').hide();
        });
    }, 5000);

    var config = {
        currLang : 'en',
        init : function() {
            var url = window.location.host;
            if (url != 'ifaist.com') {
                this.currLang = 'ru';
            }
            $('#help').html(config.lang[config.currLang].help);
        },
        lang : {
            en : {
                greetings : 'Hi!Want to know about me?Just type what are you looking for?',
                whoami : {
                    'Full name' : 'Faist Ilya',
                    Age : '23',
                    Location : 'Russia, Krasnodar',
                    Languages :  'English,German,Russian',
                    'About Me' : 'I am a passionate Backend Developer with 7 years experience.\n\t\t' +
                    'I am real fan of perfectionist code. Try to use all last useful features if I can.\n\t\t' +
                    'In my free time you can find me somewhere on laracasts.com',
                    Education : 'CRIMEAN FEDERAL UNIVERSITY, B.Sc. Mathematics and Informatics.',
                    Skills : '\n\t\t====================================================\n' +
                    '\t\tWEB:\t\t\n\t\t' +
                    'Html5,Css3,JavaScript,Jquery,Ajax,PHP7,Doctrine2,Mysql\n' +
                    '\t\tOS: Ubuntu, Fedora, MacOs\n' +
                    '\t\tFrameworks: Laravel,Silex,Yii\n' +
                    '\t\tInstruments: PhpStorm,SublimeText,Git' +
                    '\n\t\t====================================================\n' +
                    '\n\t\t====================================================\n' +
                    '\t\tApplication:\t\t\n\t\t' +
                    'Languages: C++,Java\n' +
                    '\t\tInstruments: VisualStudio,IntelliJ IDEA' +
                    '\n\t\t===================================================='
                },
                contact : {
                    Facebook : 'https://www.facebook.com/cl8vm1nd',
                    Twitter : 'https://twitter.com/cl8vm1nd',
                    Vk : 'https://vk.com/cl8vm1nd',
                    Email : 'clevmind@gmail.com'
                },
                projects : {
                    'My Website' : 'http://ifaist.com',
                    ApplicationAPI : 'https://bitbucket.org/Cl8vm1nd/phoneapp/src',
                    Captcha : 'https://bitbucket.org/Cl8vm1nd/captcha/src'
                },
                experience : {
                    'RP5.RU' : 'Position: Backend Developer.(10/2013 - 06/2016)\n\n' +
                    '\t* Here I had experience with Google Maps, MVC.\n' +
                    '\t* Open city on Map, this is one of the features which I had implemented.\n' +
                    '\t* Developed backend part for txt.rp5.ru\n' +
                    '\t====================================================\n',
                    'SCHOLARSHIPOWL.COM' : 'Position: Backend Developer.(07/2016 - now)\n\n' +
                    '\t* Worked at huge amount of features which includes, profile information, website structure, etc.\n' +
                    '\t* Made API for apply.me application(apply.me).\n' +
                    '\t====================================================\n'
                },
                help : ' <span class="commands_header">Available Commands: </span> </br>' +
                '- whoami</br>' +
                '- projects</br>' +
                '- experience</br>' +
                '- contact',
                error : 'Unknown command '
            },


            /*==========================================================================================================*/


            ru : {
                greetings : 'Привет!Что вы хотите обо мне узнать?',
                whoami : {
                    'ФИО' : 'Фаист Илья',
                    'Возраст' : '23',
                    'Местоположение' : 'Россия, Краснодар',
                    'Языки' :  'Английский, Немецкий, Русский',
                    'Обо мне' : 'Я увлеченный WEB разработчик с 7-им опытом.\n\t\t' +
                    'Я фанат перфекционисткого кода. Пытаюсь использовать все последние фичи по возможности.\n\t\t' +
                    'В мое свободное время, вы сможете найти меня, где нибудь на laracasts.com',
                    'Образование' : 'Крымский федеральный университет, ф. Математики и Информатики',
                    'Навыки' : '\n\t\t====================================================\n' +
                    '\t\tWEB:\t\t\n\t\t' +
                    'Html5,Css3,JavaScript,Jquery,Ajax,PHP7,Doctrine2,Mysql\n' +
                    '\t\tОперационные системы: Ubuntu, Fedora, MacOs\n' +
                    '\t\tФреймворки: Laravel,Silex,Yii\n' +
                    '\t\tИнструменты: PhpStorm,SublimeText,Git' +
                    '\n\t\t====================================================\n' +
                    '\n\t\t====================================================\n' +
                    '\t\tПрикладное:\t\t\n\t\t' +
                    'Языки: C++,Java\n' +
                    '\t\tИнструменты: VisualStudio,IntelliJ IDEA' +
                    '\n\t\t===================================================='
                },
                contact : {
                    Facebook : 'https://www.facebook.com/cl8vm1nd',
                    Twitter : 'https://twitter.com/cl8vm1nd',
                    Vk : 'https://vk.com/cl8vm1nd',
                    Email : 'clevmind@gmail.com'
                },
                projects : {
                    'Мой сайт' : 'http://ifaist.com',
                    'API для мобильного приложения' : 'https://bitbucket.org/Cl8vm1nd/phoneapp/src',
                    'Капча' : 'https://bitbucket.org/Cl8vm1nd/captcha/src'
                },
                experience : {
                    'RP5.RU' : 'Позиция: Web разработчик.(10/2013 - 06/2016)\n\n' +
                    '\t* Здесь у меня был опыт с Google Maps, MVC.\n' +
                    '\t* Открытие города на карте это одна из крупных вещей которую я сделал на сайте.\n' +
                    '\t* Разрабатывал backend для txt.rp5.ru\n' +
                    '\t====================================================\n',
                    'SCHOLARSHIPOWL.COM' : 'Позиция: Web разработчик.(07/2016 - сейчас)\n\n' +
                    '\t* Работал над большим кол-вом доработок, которые включают информацию в профиле, структура сайта и.т.д.\n' +
                    '\t* Сделал API для мобильно приложения Apply.Me(apply.me).\n' +
                    '\t====================================================\n'
                },
                help : ' <span class="commands_header">Доступные комманды: </span> </br>' +
                '- whoami</br>' +
                '- projects</br>' +
                '- experience</br>' +
                '- contact',
                error : 'Неизвестная комманда '
            }
        },
        keys : [],
        count : [],
        prepareObject : function(object) {
            config.keys  = [];
            config.count = [];
            config.count = Object.keys(config.lang[config.currLang][object]).length;
            for(var obj in config.lang[config.currLang][object]) config.keys.push(obj);
        }
    };

    config.init();

    $('body').terminal(function(command, term) {
        if (command == 'whoami'   ||
            command == 'contact'  ||
            command == 'projects' ||
            command == 'experience') {
            config.prepareObject(command);
            term.echo('{');
            for (var i = 0; i < config.count; i++) {
                i != config.count - 1 ?
                term.echo("\t'" + config.keys[i] + "' => " + "'" + config.lang[config.currLang][command][config.keys[i]] + "',") :
                term.echo("\t'" + config.keys[i] + "' => " + "'" + config.lang[config.currLang][command][config.keys[i]] + "'");
            }
            term.echo('}');
        } else {
            term.echo(config.lang[config.currLang].error + command + "'");
        }
    }, {
        greetings: config.lang[config.currLang].greetings,
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        onClear: function(term) {
          term.echo(config.lang[config.currLang].greetings);
        },
        prompt: 'guest~ifaist.com$> ',
        convertLinks : true
    });
});