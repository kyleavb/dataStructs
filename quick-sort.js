const quickSort = ( data ) => {
    
    if( data.length < 2 ){
        return data;
    };

    let left = [];
    let right = [];
    let mid = [];
    let comp = data[0];


    for( let item of data ){

        if( item < comp ){
            left.push( item );
        }

        if( item > comp ){
            right.push( item );
        }

        if( item === comp ){
            mid.push( item );
        }
    }
    
    return quickSort( left ).concat(mid, quickSort( right ));
}

console.log( quickSort( [5, 7, 2, 1, 1]) );