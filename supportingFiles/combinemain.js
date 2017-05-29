var w = window.innerWidth;
var h = window.innerHeight;
var game = new Phaser.Game(w, h, Phaser.AUTO, 'phaser-example', { preload: preload, create: create ,update: update });
var background1;
var player;
var cursors;
var thoughtcloud;
var bankthought;
var counterbank = 0;
var atmthought;
var counteratm = 0;
var phishingthought;
var counterphishing = 0;
var time;
var countertime = 0;
var goalthought1;
var countergoal1 = 0;
var goalthought2;
var countergoal2 = 0;
var salarythought;
var countersalary = 0;
var forexthought;
var counterforex = 0;


function preload() {
    //  You can fill the preloader with as many assets as your game requires
    
    game.load.image('sun', 'assets/sun.png');
    game.load.image('cloud', 'assets/cloud.png');
    game.load.image('bird', 'assets/bird.png');
    game.load.image('tree1', 'assets/tree1.png');
    game.load.image('tree2', 'assets/tree2.png');
    game.load.image('bank', 'assets/bank.png');
    game.load.image('cafe', 'assets/cafe.png');
    game.load.image('night', 'assets/night.png');
    game.load.image('office', 'assets/office.png');
    game.load.image('shops', 'assets/shops.png');
    game.load.image('walk', 'assets/avatar.png');
    game.load.image('bankthought', 'assets/bankthought.png');
    game.load.image('atmthought', 'assets/atmthought.png');
    game.load.image('phishingthought', 'assets/phishingthought.png');
    game.load.image('time', 'assets/time.png');
    game.load.image('goalthought1', 'assets/goalthought1.png');
    game.load.image('goalthought2', 'assets/goalthought2.png');
    game.load.image('endday', 'assets/endday.png');
    game.load.image('salarythought', 'assets/salarythought.png');
    game.load.image('forex', 'assets/forex.png');
    game.load.image('forexthought', 'assets/forexthought.png');
    game.load.image('shop', 'assets/shop.png');

}

function create() {
    game.stage.backgroundColor = '#07CAFE';
    // background1 = game.add.tileSprite(0, 0,800,600, 'bg');
    
    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
    game.world.setBounds(0, 0, 6800, 600);
    // game.add.sprite(0,0, 'bg'); 

    game.add.sprite(0,0, 'sun');

    for (var i = 400 ; i <= 6000; i = i+500) {
        game.add.sprite(i ,100, 'cloud');
    }

    for (var i = 300 ; i <= 6000; i = i+800) {
        game.add.sprite(i ,110, 'bird');
    }

    for (var i = 400 ; i <= 4000; i = i+1500) {
        game.add.sprite(i ,400, 'tree1');
    }

    for (var i = 800 ; i <= 6000; i = i+1500) {
        game.add.sprite(i ,400, 'tree2');
    }

    game.add.sprite(1200 ,350, 'bank');

    game.add.sprite(5600 ,0, 'night');

    game.add.sprite(4200 ,370, 'shops');

    game.add.sprite(5400 ,270, 'office');

    game.add.sprite(5900 ,100, 'endday');

    game.add.sprite(400 ,390, 'shop');

    player = game.add.sprite(0,510, 'walk');

    game.add.sprite(2700 ,370, 'cafe');

    game.add.sprite(3300 ,320, 'forex');
    
    game.physics.enable(player,Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();

    

}

function update() {
    // background1.tilePosition.x -= 2;
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -260;
        game.camera.x -= 4;
    }

    if (cursors.right.isDown)
    {
        player.body.velocity.x = 260;
        game.camera.x += 4;
    }

  


    if (player.position.x > 1200 && counterbank==0)
    {
        bankthought = game.add.sprite(1200,400, 'bankthought');
        counterbank++;
    }

    if (player.position.x > 1350 && counterbank==1)
    {
        bankthought.kill(true);
        counterbank++;
    }





    if (player.position.x > 1450 && counteratm==0)
    {
        atmthought = game.add.sprite(1450,400, 'atmthought');
        counteratm++;
    }

    if (player.position.x > 1650 && counteratm==1)
    {
        atmthought.kill(true);
        counteratm++;
    }




    if (player.position.x > 1850 && counterphishing==0)
    {
        phishingthought = game.add.sprite(1850,400, 'phishingthought');
        counterphishing++;
    }

    if (player.position.x > 2000 && counterphishing==1)
    {
        phishingthought.kill(true);
        counterphishing++;
    }




    if (player.position.x > 2900 && countertime==0)
    {
        time = game.add.sprite(2900,200, 'time');
        countertime++;
    }

    if (player.position.x > 3050 && countertime==1)
    {
        time.kill(true);
        countertime++;
    }




    if (player.position.x > 4400 && countergoal1==0)
    {
        goalthought1 = game.add.sprite(4400,400, 'goalthought1');
        countergoal1++;
    }

    if (player.position.x > 4550 && countergoal1==1)
    {
        goalthought1.kill(true);
        countergoal1++;
    }





    if (player.position.x > 600 && countergoal2==0)
    {
        goalthought2 = game.add.sprite(600,400, 'goalthought2');
        countergoal2++;
    }

    if (player.position.x > 750 && countergoal2==1)
    {
        goalthought2.kill(true);
        countergoal2++;
    }





    if (player.position.x > 5500 && countersalary==0)
    {
        salarythought = game.add.sprite(5500,400, 'salarythought');
        countersalary++;
    }

    if (player.position.x > 5650 && countersalary==1)
    {
        salarythought.kill(true);
        countersalary++;
    }




    if (player.position.x > 3700 && counterforex==0)
    {
        forexthought = game.add.sprite(3700,400, 'forexthought');
        counterforex++;
    }

    if (player.position.x > 3850 && counterforex==1)
    {
        forexthought.kill(true);
        counterforex++;
    }


}





























 