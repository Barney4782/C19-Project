var rocket, rocketImg;
var stars, starsImg;
var gameState;
var rock, rockImg

PLAY = 0

gameState = PLAY;

function preload() {
    starsImg = loadImage("stars.png");
    rocketImg = loadImage("rocket.png");
    rockImg = loadImage("rock.png");

}

function setup() {
    createCanvas(600, 200);

    stars = createSprite(0, 150, 20, 20);
    stars.scale = 4;
    stars.addImage("stars", starsImg);
    stars.x = stars.width / 2;

    rocket = createSprite(70, 100, 20, 20);
    rocket.scale = 0.2;
    rocket.addImage("rocket", rocketImg);

}

function spawnRock() {

    if (frameCount % 100 == 0) {

        rock = createSprite(650, 200, 20, 20);
        rock.scale = 0.2;
        rock.addImage("rock", rockImg)
        rock.velocityX = -3

        rock.y = Math.round(random(50, 400))
    }
}

function reset() {

    stars.velocityX = 0;
    rock.visible = false;
}

function draw() {
    background("black")

    if (gameState == PLAY) {

        stars.velocityX = -3;

        //rock.velocityX = -3;

        if (stars.x < 100) {
            stars.x = stars.width / 2;
        }

        rocket.y = World.mouseY;

        spawnRock();

        if (rocket.isTouching(rock)) {
            gameState = END;
        }

    }

    if (gameState == END) {
        reset();
    }

    drawSprites();

}