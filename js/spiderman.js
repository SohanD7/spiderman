class Spiderman
{
    constructor(x,y,animation)
    {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 200;
        this.animation = animation;
        this.speed = 0.05;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.body);
    }

    animate()
    {
        this.speed = this.speed+0.05;
    }

    display()
    {
        var p = this.body.position;
        var index = 0;
        if (this.speed <= 12)
        {
            index = floor(this.speed%this.animation.length);
        }
        translate(p.x,p.y);
        image(this.animation[index],0,0,this.width,this.height)
    }

    jump()
    {
        this.speed = 0.05;
        this.animation = jumping_animations;
    }
}