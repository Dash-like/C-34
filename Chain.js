class Chain{
    constructor(body1, body2, pointB){
        this.pointB = pointB;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB: pointB
            
        }
        this.chain =Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position 
        var pointBx = this.chain.bodyB.position.x + this.pointB.x
        var pointBy = this.chain.bodyB.position.y + this.pointB.y
        strokeWeight(4);
    line(pointA.x , pointA.y, pointBx , pointBy)
    }
}