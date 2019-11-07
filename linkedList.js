class Node {
    constructor( data ){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor( val ){
        this.head = new Node( val );
        this.tail = this.head;
        this.size = 1;
    }

    add( val ){
        let insert = new Node( val );

        if( this.size <= 1 ){
            this.head.next = insert;
            this.tail = insert;
        }else{
            let current = this.head;
            while( current.next ){
                current = current.next;
            }
            current.next = insert;
        }

        this.size ++;
    }

    print( ){
        let current = this.head;
        let str = '';

        while( current ){
            str += ` ${ current.data } `
            current = current.next;
        }

        console.log( str );
    }

    sum( ){
        let current = this.head;
        let total = 0;

        while( current ){
            total += current.data;
            current = current.next;
        }

        console.log( total );
    }

    remove( val ){
        let current = this.head;
        if( val ){
            let previous;

            while( current.data != val ){
                previous = current;
                current = current.next;
            }

            if( previous ){
                previous.next = current.next
            }else{
                this.head = current.next;
            }

        }else{
            let previous;

            while( current.next != null ){
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
    }

    insertAt( loc, data ){
        if( loc <= this.size ){
            let current = this.head;
            let newNode = new Node( data );
            let previous;

            for( let i = 1; i < loc; i++ ){
                previous = current;
                current = current.next;
            }
            previous.next = newNode
            newNode.next = current;
            // current.next = newNode;
        }
    }
}

let temp = new LinkedList( 1 );
temp.add( 2 );
temp.add( 3 );
temp.add( 4 );
temp.add( 5 );
temp.add( 6 );
// temp.remove();
temp.insertAt( 3, 33 );
temp.print()
temp.remove( 33 );
temp.print()
