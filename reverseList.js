const list = { value: 1, child: { value: 2, child: { value: 3, child: { value: 4, child: null }}}};

function reverse(list) {
    let current = list;
    let child = null;
    while (true) {
         const next = current.child;
         current.child = child;
         child = current;
         if (!next) return current;
         current = next;
    }
}

console.log(reverse(list));
