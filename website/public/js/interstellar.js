jQuery(document).ready(function($) {
    setTimeout(function() {
        $('#preloader').fadeOut(3000, function() {
            $('.container').hide();
        });
    }, 3000);

    var config = {
        currLang : 'en',
        init : function() {
            let d = new Date();
            config.lang.en.whoami.Age = d.getFullYear() - 1993;
            $('#help').html(config.lang[config.currLang].help);
        },
        lang : {
            en : {
                greetings : 'Hi! Want to know about me? Just type what are you looking for?',
                whoami : {
                    'Full name' : 'Faist Ilya',
                    Age : '',
                    Location : 'Russia, Krasnodar',
                    Languages :  'English,German,Russian',
                    'About Me' : 'I am a passionate Site Reliability Engineer with 7 years experience.\n\t\t' +
                    'Trying to follow S.O.L.I.D and KISS code. Use all the latest features if I can.\n\t\t' +
                    'Love DevOps. In my free time you can find me somewhere on laracasts.com',
                    Education : 'CRIMEAN FEDERAL UNIVERSITY, B.Sc. Mathematics and Informatics.',
                    Skills : '\n\t\t====================================================\n' +
                    '\t\tWEB:\t\t\n\t\t' +
                    'Html5, Css3, JavaScript, Jquery, Ajax, VueJs, NodeJs, PHP7, Doctrine2, Mysql, Laravel\n' +
                    '\t\tDevOps: Jenkins, Helm, Kubernetes, GC, Docker, Capistrano\n' +
                    '\t\tOS: Ubuntu, Fedora, MacOs\n' +
                    '\t\tFrameworks: Laravel, Silex, Symphony\n' +
                    '\t\tInstruments: PhpStorm, Atom, Git' +
                    '\n\t\t====================================================\n' +
                    '\n\t\t====================================================\n' +
                    '\t\tApplication:\t\t\n\t\t' +
                    'Languages: C++, Java\n' +
                    '\t\tInstruments: VisualStudio, IntelliJ IDEA' +
                    '\n\t\t===================================================='
                },
                contact : {
                    Facebook : 'https://www.facebook.com/cl8vm1nd',
                    Twitter : 'https://twitter.com/cl8vm1nd',
                    Vk : 'https://vk.com/cl8vm1nd',
                    Email : 'clevmind@gmail.com'
                },
                projects : {
                    Website : 'https://ifaist.com',
                    Blog: 'https://blog.ifaist.com',
                    ApplicationAPI : 'https://github.com/Cl8vM1nd/PhoneApi',
                    Captcha : 'https://github.com/Cl8vM1nd/captcha'
                },
                experience : {
                    'RP5.RU' : 'Position: Backend Developer.(10/2013 - 06/2016)\n\n' +
                    '\t* Here I had experience with Google Maps, MVC.\n' +
                    '\t* Open city on Map, this is one of the features which I had implemented.\n' +
                    '\t* Developed backend part for txt.rp5.ru\n' +
                    '\t====================================================\n',
                    'SCHOLARSHIPOWL.COM' : 'Position: Site Reliability Engineer.(07/2016 - now)\n\n' +
                    '\t* Work and optimise scholarshipowl.com backend.\n' +
                    '\t* Made REST API for apply.me application(apply.me).\n' +
                    '\t* Deal with infrastructure tasks.\n' +
                    '\t====================================================\n'
                },
                help : ' <span class="commands_header">Available Commands: </span> </br>' +
                '- whoami</br>' +
                '- experience</br>' +
                '- projects</br>' +
                '- contact',
                error : 'Unknown command: '
            },
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
            command == 'experience' ||
            command == 'projects') {
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
        onAfterCommand: function(command) {
          $("html, body").animate({ scrollTop: $(document).height()-$(window).height() + 1000 }, "slow");
        },
        prompt: 'guest~ifaist.com$> ',
        convertLinks : true
    });
});
