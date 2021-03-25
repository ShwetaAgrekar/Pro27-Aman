class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 100,
            stiffness : 0.01
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
}