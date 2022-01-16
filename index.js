function distanceFromHqInBlocks(blocksToHq) {
    if (blocksToHq > 42) return (blocksToHq - 42) ;
    else return (42 - blocksToHq);
   }

function distanceFromHqInFeet(blocksToHq) {
    return (distanceFromHqInBlocks(blocksToHq) * 264);
  }
  
function distanceTravelledInFeet(start, destination) {
    if (start > destination) return ((start - destination) * 264);
    else return ((destination - start) * 264);
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) > 2500) return 'cannot travel that far';
    else if (distanceTravelledInFeet(start, destination) >2000) return 25;
    else return Math.max(0,((distanceTravelledInFeet(start, destination) - 400) * 0.02));

}