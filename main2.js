//var scanlines = $('.scanlines');
var tv = $('.tv');
let animation;
Before = "> "
const term = $('body').terminal({
    script: function() {
        script();
    },
    canihireyou: function() {
        canihireyou();
    },
    bass: function() {
        bass();
    }
}, {
    greetings: false,
    keydown: () => animation ? false : undefined
});

const script = async () => {
    animation = true;
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"Hey, i'm a sripter that makes cool looking game and stuff",{ typing: true })
    await term.echo(Before+"check it out if you can.",{ typing: true })
    await term.echo(Before+"https://www.roblox.com/games/10478677272/Kepler-6DFG-SHOWCASE and https://www.roblox.com/games/12744835357/CAR-CRASHING-SYSTEM")
    await term.echo(Before+"These are exemple of some stuff i made on roblox. I've also worked for studio like Creative storm",{ typing: true })
    await term.echo(Before+"Now you can use the command 'canihireyou' to know my price and information.",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    term.set_prompt(Before);
    animation = false
}

const canihireyou = async () => {
    animation = true;
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"Yes you can but it depends on the price.",{ typing: true })
    await term.echo(Before+"To give an idea i don't take any commision below 3k~2k robux ",{ typing: true })
    await term.echo(Before+"You can contact me via my discord (zipperxyz)")
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    term.set_prompt(Before);
    animation = false
}

const bass = async () => {
    animation = true;
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"I also make music.",{ typing: true })
    await term.echo(Before+"You can check it out on soundcloud and spotify",{ typing: true })
    await term.echo(Before+"https://soundcloud.com/zipperxyz https://open.spotify.com/artist/5y95izOE6OkcZcQizioekP?si=c9045a95fe5b477f")
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    term.set_prompt(Before);
    animation = false
}

const animate = async () => {
    //let sound = new Audio("creepy.wav") 
    //sound.play()
    animation = true;
    // prompt animation will ensure that cursor is in same line as entered text
    term.clear().set_prompt(Before);
    await delay(2000);
   // term.set_prompt('.Brain$ ');
    await term.echo(Before+"You wonder who ZipperXYZ is?",{ typing: true })
    await delay(2000);
    await term.echo(Before+"I might have some information that could help you.",{ typing: true })
    await delay(2000);
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"-------------------",{ typing: true })
    await term.echo(Before+"| name: ZipperXYZ |",{ typing: true })
    await term.echo(Before+"| age: ???        |",{ typing: true })
    await term.echo(Before+"| location: ???   |",{ typing: true })
    await term.echo(Before+"| programmer: yes |",{ typing: true })
    await term.echo(Before+"| artist: yes     |",{ typing: true })
    await term.echo(Before+"| alive: yes      |",{ typing: true })
    await term.echo(Before+"-------------------",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"          .       . .       . .       . .       . .       . .       .   .           ",{ typing: false })
    await term.echo(Before+"|~~|=|~~| |`+. .+'|=|`+. .+'|=|`+. .+'|=|`+. .+'|=|`+. .+'| |`+. .+'|.+'| |~~|=|~~| ",{ typing: false })
    await term.echo(Before+"|.+' |  | |  | |  | |  | |  | |  | |  | `+.| |  | |  | |  | |  | |  ||  | |.+' |  | ",{ typing: false })
    await term.echo(Before+"     |.+' |  | |  |=`++' |  |=`++' |  |=|`.  |  |'. '. .' .`. `. `+.`'.+'      |.+' ",{ typing: false })
    await term.echo(Before+"   .='    |  | |  |      |  |      |  | `.|  |  | |  | |  | |  |   |  |      .='    ",{ typing: false })
    await term.echo(Before+".+'|    . |  | |  |      |  |      |  |    . |  | |  | |  | |  |   |  |   .+'|    . ",{ typing: false })
    await term.echo(Before+"|  | .+'| |  | |  |      |  |      |  | .+'| |  | |  | |  | |  |   |  |   |  | .+'| ",{ typing: false })
    await term.echo(Before+"|..|=|..| |.+' `+.|      `+.|      `+.|=|.+' `+.| |.+' `+.| |.+'   |.+'   |..|=|..| ",{ typing: false })
    await term.echo(Before+"",{ typing: true })
    await term.echo(Before+"",{ typing: true })   
    await term.echo(Before+"Try the command 'script' or 'bass' to get more information.",{ typing: true })
    await term.echo(Before+"",{ typing: true })        
    term.set_prompt(Before);
    animation = false;
};

const delay = time => new Promise(r => setTimeout(r, time));

const unasync = function(fn) {
    return () => {
        fn();
    };
};





animate();
//const term = $('body').terminal(, {
  //  prompt: '',
    //greetings: false,
    //keydown: () => animation ? false : undefined
//});




// docs: https://github.com/jcubic/jquery.terminal/wiki/Typing-Animation