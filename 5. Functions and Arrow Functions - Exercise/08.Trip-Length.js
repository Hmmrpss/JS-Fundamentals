function findShortestSegment(input){
    let x1 = Number(input[0]); y1 = Number(input[1]);
        x2 = Number(input[2]); y2 = Number(input[3]);
        x3 = Number(input[4]); y3 = Number(input[5]);
    let distanceab = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let distanceac = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    let distancebc = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    let totalDistance = 0;

    if ((distanceab <= distanceac) && (distancebc <= distanceac)) {
      totalDistance = distanceab + distancebc;
      console.log('1->2->3: ' + totalDistance);
    } else if ((distanceab <= distancebc) && (distanceac <= distancebc)) {
      totalDistance = distanceac + distanceab;
      console.log('2->1->3: '+ totalDistance);
    } else {
      totalDistance = distancebc + distanceac;
      console.log('1->3->2: ' + totalDistance);
    }
}
