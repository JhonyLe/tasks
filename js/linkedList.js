class Node {
    constructor(data, link) {
        this.data = data;
        this.next = link;
    }

    setNext(link) {
        this.next = link;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    static iterate(node) {
        if (node) {
            let iterateNode = node;
            while (iterateNode) {
                console.log('Node value: ', iterateNode.getData())
                iterateNode = iterateNode.next;
            };
        }
    }

    static negativeIterate(firstNode) {
        let negativeFirstNode;
        let node;
        let firstLink = firstNode;

        if (firstNode) {
            while (firstLink) {
                const newNode = firstLink;
                firstLink = firstLink.next;
                newNode.next = node;
                node = newNode;
                if (!firstLink) {
                    negativeFirstNode = node;
                }
            };
        }

        LinkedList.iterate(negativeFirstNode);
    }

    static insertAfter(node, newNode) {
        newNode.setNext(node.next);
        node.setNext(newNode);
    }
}


(function() {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    LinkedList.insertAfter(node1, node2);
    LinkedList.insertAfter(node2, node3);
    LinkedList.insertAfter(node3, node4);

    console.log('\nОбход прямой');
    LinkedList.iterate(node1);

    console.log('\nОбход обратный')
    LinkedList.negativeIterate(node1);
}())